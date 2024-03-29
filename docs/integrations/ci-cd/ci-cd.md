---
sidebar_position: 1
---

# Build Servers (CI/CD)

:::tip
[Contact us](/getting-support) and we'll help you get setup, including your Continuous Integration (CI) workflow.
:::

Tramline automatically triggers your CI/CD workflows and tracks the latest build artifacts generated. It also simplifies [version name and build number management](docs/automations.mdx#managing-version-names-and-build-numbers) across all your app releases. To achieve this, it requires that your build server accepts the version name and build number provided by Tramline when generating the binary for your app. To learn how to configure your workflows for Android and iOS, please refer to the sections below.

:::info
After setting up all the required integrations, you can configure your app to use the correct CI/CD workflow from the list of available workflows.
:::

## Build Artifact Selection

Tramline currently works on the following setup:

```
A single step --> configures a single CI workflow --> expects a single output build
```

By default, we pick up the largest build generated from your CI workflow. But you can override this behavior by specifying a file pattern in the Step configuration.

![](/img/build-artifact-name.png)

For an example on GitHub actions, if you have a bunch of generated artifacts.

![](/img/github-artifacts.png)

This setting will do a substring match for `tramline-release` and ignore the rest.

## Android

Tramline requires that your configured workflow accepts the `versionCode` and `versionName` as environment variables and uses them to generate the build that will be uploaded to the distribution channels. You should create separate workflows to generate debug (unsigned) and production (signed) builds. Debug builds are not mandatory, but they can be helpful for testing purposes.

If you have configured Tramline to deploy to Play Store, your production workflow should generate a valid `.aab` file as an artifact. After the workflow is successful, Tramline will download this artifact and upload it to Play Store on your behalf. If your workflow generates multiple artifacts, Tramline will choose the larger one.

For non-production builds, Tramline looks for any artifact being generated by the workflow.

### Supported integrations

- [GitHub Actions](github)
- [Bitrise](bitrise)

A sample workflow for Android apps can be generated using our [Mobile App CI workflow GEnerator](https://macige.tramline.app/). Please check the checkbox to include support for `versionCode` and `versionName`.

![](/img/macige.png)


## iOS

Tramline requires that your configured workflow accepts the `versionCode` and `versionName` as environment variables and uses them to generate the build that will be uploaded to the distribution channels.

If you have configured Tramline to distribute to TestFlight or App Store, your production workflow should upload the generated build with correct `versionCode` and `versionName` to be uploaded to App Store.

Tramline will look for the build in App Store with the correct `versionCode` to be present in TestFlight to send to beta groups and prepare release to App Store.

:::info
For iOS apps, [contact us](/getting-support) and we will help you set up workflow(s) as per your needs.
:::

### Supported integrations

- [GitHub Actions](github)
- [Bitrise](bitrise)

Here is a sample Bitrise workflow which uses Fastlane plugin for Bitrise to upload a signed build to the App Store.

```yaml
format_version: "11"
project_type: flutter
workflows:
  deploy:
    steps:
    - activate-ssh-key@4: {}
    - git-clone@7: {}
    - certificate-and-profile-installer@1: {}
    - flutter-installer@0: {}
    - cache-pull@2: {}
    - manage-ios-code-signing@1:
        inputs:
        - distribution_method: app-store
    - flutter-build@0:
        inputs:
        - project_location: $BITRISE_FLUTTER_PROJECT_LOCATION
        - platform: ios
        - additional_build_params: --build-number=$versionCode --build-name=$versionName
        - ios_output_type: archive
    - xcode-archive@4:
        inputs:
        - distribution_method: app-store
    - deploy-to-itunesconnect-deliver@2:
        inputs:
        - bundle_id: com.tramline.new_app
        - skip_app_version_update: "yes"
        - connection: api_key
    envs:
    - opts:
        is_expand: false
      BITRISE_PROJECT_PATH: ios/Runner.xcworkspace
    - opts:
        is_expand: false
      BITRISE_SCHEME: Runner
meta:
  bitrise.io:
    stack: osx-xcode-14.2.x-ventura
    machine_type_id: g2.4core
app:
  envs:
  - opts:
      is_expand: false
    BITRISE_FLUTTER_PROJECT_LOCATION: .
```

You can see a working iOS workflow for a Flutter app [here](https://github.com/tramlinehq/ueno/blob/main-ios/bitrise.yml).

Here is a sample Github Actions workflow which uses Fastlane to upload a signed build to the App Store.

```yaml
name: iOS Fastlane Release

on:
  workflow_dispatch:
    inputs:
      versionName:
        description: 'User-facing release version name'
        required: true
        default: "1.0.0"
      versionCode:
        description: 'versionCode or build number'
        required: true
        default: '1'

jobs:
  deploy:
    runs-on: macos-latest

    steps:
      - uses: actions/checkout@v2

      - name: Set up ruby env
        uses: ruby/setup-ruby@v1.138.0
        with:
          ruby-version: 3.2.1
          bundler-cache: true

      - name: Decode signing certificate into a file
        env:
          CERTIFICATE_BASE64: ${{ secrets.BUILD_CERTIFICATE_BASE64 }}
        run: |
          echo $CERTIFICATE_BASE64 | base64 --decode > signing-cert.p12

      - name: Setup the flutter environment
        uses: subosito/flutter-action@v2
        with:
          channel: 'stable'
          cache: true

      - name: Get flutter dependencies
        run: flutter pub get

      - name: Build the app
        run: |
          flutter build ipa --release --build-number=${{ github.event.inputs.versionCode }} --build-name=${{ github.event.inputs.versionName }} --no-codesign

      - name: Sign and ship the build
        working-directory: ios
        run: bundle install && bundle exec fastlane ios ship_to_testflight
        env:
          ASC_KEY_ID: ${{ secrets.APPSTORE_API_KEY_ID }}
          ASC_ISSUER_ID: ${{ secrets.APPSTORE_ISSUER_ID }}
          ASC_KEY: ${{ secrets.APPSTORE_API_PRIVATE_KEY }}
          SIGNING_KEY_PASSWORD: ${{ secrets.P12_PASSWORD }}
          SIGNING_KEY_FILE_PATH: ../signing-cert.p12
```

The workflow requires setting up correct [distribution certificate](https://developer.apple.com/help/account/create-certificates/certificates-overview) and [API key](https://developer.apple.com/help/account/manage-keys/create-a-private-key) for App Store Connect and storing them in the Github Action secrets.

![](/img/gh-actions-secrets.png)

You can see a working iOS workflow for a Flutter app [here](https://github.com/tramlinehq/ueno/blob/main/.github/workflows/ios-fastlane-release.yml).
