---
id: ci-cd
title: Build Servers (CI/CD)
sidebar_label: Build Servers (CI/CD)
sidebar_position: 1
---

:::tip
[Contact us](/getting-support) and we'll help you get setup, including your Continuous Integration (CI) workflow.
:::

Tramline automatically triggers your CI/CD workflows and tracks the latest build artifacts generated. It also simplifies [version name and build number management](docs/automations.mdx#managing-version-names-and-build-numbers) across all your app releases. To achieve this, it requires that your build server accepts the version name and build number provided by Tramline when generating the binary for your app. To learn how to configure your workflows for Android and iOS, please refer to the sections below.

:::info
After setting up all the required integrations, you can configure your app to use the correct CI/CD workflow from the list of available workflows.
:::

## Android

Tramline requires that your configured workflow accepts the `versionCode` and `versionName` as environment variables and uses them to generate the build that will be uploaded to the distribution channels. You should create separate workflows to generate debug (unsigned) and production (signed) builds. Debug builds are not mandatory, but they can be helpful for testing purposes.

If you have configured Tramline to deploy to Play Store, your production workflow should generate a valid `.aab` file as an artifact. After the workflow is successful, Tramline will download this artifact and upload it to Play Store on your behalf. If your workflow generates multiple artifacts, Tramline will choose the larger one.

For non-production builds, Tramline looks for any artifact being generated by the workflow.

### Supported integrations

- [GitHub Actions](github)
- [GitLab CI/CD](gitlab)
- [Bitrise](bitrise)

### Workflow changes

Take a look at the specific integrations to see a sample workflow for Android apps.

### Version file changes

In `build.gradle`:

```groovy
android {
    defaultConfig {
      // other default config
      versionCode =
        if (project.properties["VERSION_CODE"] != null) {
          (project.properties["VERSION_CODE"] as String).toInt()
        } else {
          1
        }

      versionName =
        if (project.properties["VERSION_NAME"] != null) {
          project.properties["VERSION_NAME"] as String
        } else {
          "1.0.0"
        }
    }
}
```

In `build.gradle.kts`:

```kotlin
android {
    defaultConfig {
      // other default config
      versionCode =
        if (project.properties["VERSION_CODE"] != null) {
          (project.properties["VERSION_CODE"] as String).toInt()
        } else {
          1
        }

      versionName =
        if (project.properties["VERSION_NAME"] != null) {
          project.properties["VERSION_NAME"] as String
        } else {
          "1.0.0"
        }
    }
}
```

For flutter apps, you can simply pass the versionCode and versionName as environment variables to the flutter build command.

```bash
flutter build appbundle --release --build-number=${{ github.event.inputs.versionCode }} --build-name=${{ github.event.inputs.versionName }}
```

## iOS

Tramline requires that your configured workflow accepts the `versionCode` and `versionName` as environment variables and uses them to generate the build that will be uploaded to the distribution channels.

If you have configured Tramline to distribute to TestFlight or App Store, your production workflow should upload the generated build with correct `versionCode` and `versionName` to be uploaded to App Store.

Tramline will look for the build in App Store with the correct `versionCode` to be present in TestFlight to send to beta groups and prepare release to App Store.

:::info
For iOS apps, [contact us](/getting-support) and we will help you set up workflow(s) as per your needs.
:::

### Supported integrations

- [GitHub Actions](github)
- [GitLab CI/CD](gitlab)
- [Bitrise](bitrise)

### Workflow changes

Take a look at the specific integrations to see a sample workflow for iOS apps.

### Version file changes

In addition to accepting `versionCode` and `versionName` as environment variables, you'll need to update the `Info.plist` file with the correct `CFBundleVersion` and `CFBundleShortVersionString` to be uploaded to App Store.

This can be done using the PlistBuddy tool (built-in on macOS) as part of your CI pipeline itself.

Example from a GitHub Actions workflow for a native iOS app:

```yaml
- name: Update Archive Version
  run: |
    /usr/libexec/Plistbuddy -c "Set CFBundleVersion ${{ steps.tramline.outputs.version_code }}" "app/Info.plist"
    /usr/libexec/Plistbuddy -c "Set CFBundleShortVersionString ${{ steps.tramline.outputs.version_name }}" "app/Info.plist"
```

Do this in your CI pipeline before building the app.

For a Flutter app, you can simply pass the versionCode and versionName as environment variables to the flutter build command.

```bash
flutter build ipa --release --build-number=${{ steps.tramline.outputs.version_code }} --build-name=${{ steps.tramline.outputs.version_name }}
```

If you are using [Fastlane](https://docs.fastlane.tools/) to build your iOS app, ensure you pass the correct `versionCode` and `versionName` to the Fastlane command building your app.
