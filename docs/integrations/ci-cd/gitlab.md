---
id: gitlab
title: GitLab CI/CD
sidebar_label: GitLab CI/CD
sidebar_position: 1
---

:::caution
In order to connect this integration, you'll need to be logged in to GitLab as an owner or maintainer of the project where your repository is located.
:::

Navigate to the integrations page for your app and select __GitLab__ under the __Build Servers__ section. When you click the __Connect__ button, you'll be taken through a standard OAuth flow for a [GitLab App](https://docs.gitlab.com/api/oauth2).

![](/img/gitlab-ci-integration.png)

Tramline integrates with GitLab CI/CD to provide the following features:

1. **Manual Triggers**: Uses GitLab's [pipeline API](https://docs.gitlab.com/ee/ci/triggers) and [job API](https://docs.gitlab.com/ee/ci/jobs) to trigger builds
2. **Job Selection**: Trigger specific jobs within a pipeline by name
3. **Variable Passing**: Automatically passes version and build metadata
4. **Artifact Collection**: Downloads generated artifacts for distribution
5. **Status Monitoring**: Tracks pipeline progress and reports build status

## Pipeline/Job examples

Here is a sample GitLab CI/CD pipeline configuration (`.gitlab-ci.yml`) which have two jobs:

1. `android-debug-apk`

Builds a debug APK, renames the file and uploads it to GitLab artifacts. Does not upload it to any distribution channel like Firebase or Play Store. This can be configured on Tramline itself.

2. `android-release-aab-playstore`

Builds a signed release AAB and uploads it to Play Store using Fastlane. Once Play Store is configured on Tramline, Tramline will automatically find this uploaded build directly on Play Store (and omit uploading the build itself).


:::info
You can also take a look at the [Ueno Flutter App](https://gitlab.com/tramline/ueno-mirror/-/blob/main/.gitlab-ci.yml) for a complete example. This repository has a variety of different jobs that can be triggered from Tramline. They perform different variations of distributions and app build types.
:::

```yaml
# .gitlab-ci.yml
android-debug-apk:
  stage: build
  image: ghcr.io/cirruslabs/flutter:3.22.0

  cache:
    key: gradle-cache
    paths:
      - .gradle/
      - android/.gradle/

  when: manual

  script:
    - echo 'Fetching Dependencies'
    - flutter pub get

    - echo 'Building apk'
    - flutter build apk --debug --build-number=$VERSION_CODE --build-name=$VERSION_NAME --dart-define=BUGSNAG_API_KEY=$BUGSNAG_API_KEY --flavor prod

    - echo 'Prepare build for GitLab upload'
    - cp build/app/outputs/flutter-apk/app-prod-debug.apk ./build-${CI_PIPELINE_ID}.apk

  artifacts:
    name: "android-debug-build-${CI_PIPELINE_ID}"
    paths:
      - build-${CI_PIPELINE_ID}.apk
    expire_in: 1 week

android-release-aab-playstore:
  stage: build
  image: ghcr.io/cirruslabs/flutter:3.22.0

  cache:
    key: gradle-cache
    paths:
      - .gradle/
      - android/.gradle/

  when: manual

  script:
    - echo 'Fetching Dependencies'
    - flutter pub get

    - echo 'Retrieving secrets'
    - echo $KEYSTORE_B64 | base64 --decode > android/app/ueno-upload-keystore.jks
    - echo $KEY_PROPERTIES_B64 | base64 --decode > android/key.properties

    - echo 'Building App Bundle'
    - flutter build appbundle --release --build-number=$VERSION_CODE --build-name=$VERSION_NAME --dart-define=BUGSNAG_API_KEY=$BUGSNAG_API_KEY --flavor prod

    - echo 'Uploading to Play Store'
    - gem install fastlane
    - cd android
    - bundle install && bundle exec fastlane android distribute_to_play_store
    - cd $OLDPWD

    - echo 'Prepare build for GitLab upload'
    - cp build/app/outputs/bundle/prodRelease/app-prod-release.aab ./build-${CI_PIPELINE_ID}.aab

  artifacts:
    name: "android-release-playstore-${CI_PIPELINE_ID}"
    paths:
      - build-${CI_PIPELINE_ID}.aab
    expire_in: 1 week

```

:::tip
It is recommended to have the jobs that are used with Tramline (the ones that generate builds); marked as `when: manual` so that Tramline can trigger them against its own lifecycle.
:::

:::tip
If your GitLab pipeline gets triggered automatically on every commit to the release branch, Tramline will find the existing pipeline and trigger the specific jobs for Internal or RC builds.
:::

:::note
If a job fails, a retrigger from Tramline will only retry the job that failed, not the entire pipeline.
:::


## Version Management

Tramline provides version information to your GitLab CI/CD pipelines through these variables:

- `versionCode`: The build number managed by Tramline (integer coerced as string)
- `versionName`: The version name managed by Tramline (e.g., "1.2.3")

These variables are automatically injected when Tramline triggers your pipeline/job.
