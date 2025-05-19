---
id: bitrise
title: Bitrise
sidebar_label: Bitrise
sidebar_position: 1
---

Navigate to the integrations page for your app and select __Bitrise__ under the __Build Servers__ section on the page.

![](/img/ci-cd-integration.png)

When you click the __Connect__ button, you'll be asked for a [Personal Access Token](https://devcenter.bitrise.io/en/accounts/personal-access-tokens.html) for your Bitrise account.

![](/img/connect-bitrise.png)

## Workflow

Here is a sample Bitrise workflow which uses Fastlane plugin for Bitrise to upload a signed build to TestFlight.

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
