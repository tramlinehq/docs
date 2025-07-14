---
id: gitlab
title: GitLab CI/CD
sidebar_label: GitLab CI/CD
sidebar_position: 1
---

:::caution
In order to connect this integration, you'll need to be logged in to GitLab as an owner or maintainer of the project where your repository is located.
:::

Navigate to the integrations page for your app and select __GitLab__ under the __Build Servers__ section on the page.

![](/img/ci-cd-integration.png)

When you click the __Connect__ button, you'll be taken through a standard OAuth flow for [GitLab Applications](https://docs.gitlab.com/ee/integration/oauth_provider.html). During this process, you can select one or multiple repositories to grant access to.

## Android Workflow

Here is a sample GitLab CI/CD pipeline configuration (`.gitlab-ci.yml`) which builds a signed AAB for Play Store. It produces a signed AAB file as artifact which is then downloaded by Tramline and sent to the relevant tracks on Play Store.

```yaml
# .gitlab-ci.yml
stages:
  - build

variables:
  FLUTTER_VERSION: "3.22.0"

android_release_build:
  stage: build
  image: cirrusci/flutter:$FLUTTER_VERSION
  rules:
    - if: $CI_PIPELINE_SOURCE == "web"
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
  before_script:
    - apt-get update -qq && apt-get install -y -qq git curl unzip openjdk-11-jdk
    - export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
    - flutter doctor -v
    - flutter pub get
  script:
    # Retrieve signing secrets from GitLab CI/CD variables
    - echo $KEYSTORE_B64 | base64 --decode > android/app/upload-keystore.jks
    - echo $KEY_PROPERTIES_B64 | base64 --decode > android/key.properties
    # Build the app with version from Tramline
    - flutter build appbundle --release 
        --build-number=${versionCode:-1} 
        --build-name=${versionName:-"1.0.0"} 
        --flavor prod
  artifacts:
    paths:
      - build/app/outputs/bundle/prodRelease/app-prod-release.aab
    expire_in: 1 week
  only:
    variables:
      - $CI_PIPELINE_SOURCE == "web"
```

### Required CI/CD Variables

Set these variables in your GitLab project's CI/CD settings (__Settings > CI/CD > Variables__):

- `KEYSTORE_B64`: Your upload keystore file encoded in base64
- `KEY_PROPERTIES_B64`: Your key.properties file encoded in base64 containing:
  ```properties
  storePassword=your_store_password
  keyPassword=your_key_password
  keyAlias=your_key_alias
  storeFile=upload-keystore.jks
  ```

## iOS Workflow

Here is a sample GitLab CI/CD pipeline configuration for iOS builds using Fastlane to upload signed builds to TestFlight.

```yaml
# .gitlab-ci.yml
stages:
  - build

variables:
  FLUTTER_VERSION: "3.22.0"
  LC_ALL: "en_US.UTF-8"
  LANG: "en_US.UTF-8"

ios_release_build:
  stage: build
  tags:
    - ios
    - macos
  rules:
    - if: $CI_PIPELINE_SOURCE == "web"
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
  before_script:
    # Setup Ruby and Bundler
    - gem install bundler
    - bundle install --path vendor/bundle
    # Setup Flutter
    - git clone https://github.com/flutter/flutter.git -b stable --depth 1
    - export PATH="$PATH:`pwd`/flutter/bin"
    - flutter doctor -v
    - flutter pub get
  script:
    # Decode signing certificate
    - echo $BUILD_CERTIFICATE_BASE64 | base64 --decode > signing-cert.p12
    # Build the iOS app
    - flutter build ipa --release 
        --build-number=${versionCode:-1} 
        --build-name=${versionName:-"1.0.0"} 
        --no-codesign
    # Sign and upload with Fastlane
    - cd ios
    - bundle exec fastlane ios ship_to_testflight
  artifacts:
    paths:
      - build/ios/*.ipa
    expire_in: 1 week
  environment:
    name: testflight
```

### Fastlane Configuration

Create a `Fastfile` in your `ios/fastlane/` directory:

```ruby
# ios/fastlane/Fastfile
default_platform(:ios)

platform :ios do
  desc "Ship to TestFlight"
  lane :ship_to_testflight do
    # Setup certificates and provisioning profiles
    setup_ci if ENV['CI']
    
    # Code sign the app
    gym(
      scheme: "Runner",
      export_method: "app-store",
      export_xcargs: "-allowProvisioningUpdates"
    )
    
    # Upload to TestFlight
    upload_to_testflight(
      api_key_path: "fastlane/AuthKey.p8",
      skip_waiting_for_build_processing: true
    )
  end
end
```

### Required CI/CD Variables

Set these variables in your GitLab project's CI/CD settings:

- `BUILD_CERTIFICATE_BASE64`: Your distribution certificate (.p12) encoded in base64
- `P12_PASSWORD`: Password for your .p12 certificate file
- `APPSTORE_API_KEY_ID`: App Store Connect API Key ID
- `APPSTORE_ISSUER_ID`: App Store Connect Issuer ID
- `APPSTORE_API_PRIVATE_KEY`: App Store Connect API private key content

## Version Management

Tramline automatically provides version information to your GitLab CI/CD pipelines through these variables:

- `versionCode`: The build number (integer)
- `versionName`: The version name (e.g., "1.2.3")
- `buildNotes`: Release notes for this build

These variables are automatically injected when Tramline triggers your pipeline.

## Pipeline Triggering

Tramline integrates with GitLab CI/CD by:

1. **Manual Triggers**: Uses GitLab's [pipeline trigger API](https://docs.gitlab.com/ee/ci/triggers/) to start builds
2. **Job Selection**: Can trigger specific jobs within a pipeline by name
3. **Variable Passing**: Automatically passes version and build metadata
4. **Artifact Collection**: Downloads generated artifacts for distribution
5. **Status Monitoring**: Tracks pipeline progress and reports build status

## Job Configuration

### Playable Jobs

Tramline can trigger specific jobs in your pipeline. Jobs must be configured as:
- **Manual jobs**: Use `when: manual` in your job configuration
- **Parameterized jobs**: Accept variables from pipeline triggers
- **Artifact producers**: Generate downloadable build artifacts

Example job configuration:
```yaml
android_build:
  stage: build
  when: manual
  script:
    - flutter build appbundle --build-number=$versionCode --build-name=$versionName
  artifacts:
    paths:
      - build/app/outputs/bundle/release/*.aab
```

### Multiple Jobs

You can define separate jobs for different build types:

```yaml
android_debug:
  stage: build
  when: manual
  script:
    - flutter build appbundle --debug
  artifacts:
    paths:
      - build/app/outputs/bundle/debug/*.aab

android_release:
  stage: build  
  when: manual
  script:
    - flutter build appbundle --release --build-number=$versionCode
  artifacts:
    paths:
      - build/app/outputs/bundle/release/*.aab
```

## Advanced Features

### Cherry-pick Builds

Tramline supports triggering builds for cherry-pick commits:
- Automatically creates cherry-pick branches
- Triggers builds on the cherry-pick branch
- Assigns merge requests to original commit authors

### Pipeline Reuse

For existing commits, Tramline can:
- Find existing pipelines for the same commit
- Trigger specific jobs in existing pipelines
- Avoid duplicate pipeline creation

### Error Handling

Tramline provides robust error handling for:
- **Job Not Found**: Clear error messages when specified jobs don't exist
- **Unplayable Jobs**: Validation before attempting to trigger manual jobs  
- **Pipeline Failures**: Detailed feedback on build failures
- **Artifact Issues**: Guidance when artifacts are missing or invalid

## Troubleshooting

**Pipeline Trigger Issues:**
- Ensure your project has CI/CD enabled
- Check that pipeline triggers are not disabled in project settings
- Verify job names match exactly (case-sensitive)

**Job Execution Problems:**
- Confirm jobs are marked as `when: manual` for Tramline triggering
- Check runner availability and tags
- Verify artifact paths are correct

**Version Variable Issues:**
- Ensure your build scripts properly handle the `versionCode` and `versionName` variables
- Check for typos in variable names
- Verify default values are set for local builds

**Permission Errors:**
- Confirm API access permissions for your GitLab project
- Check runner permissions for accessing project resources
- Verify CI/CD variable access levels

For additional support, please [contact us](/getting-support) and we'll help you configure your GitLab CI/CD integration.