---
id: app-store
title: App Store Connect
sidebar_label: App Store Connect
sidebar_position: 0
---

:::info
For both TestFlight and App Store, you only need to add the integration once.
:::

Navigate to the integrations page for your app and select __App Store Connect & TestFlight__ under the __Distributions__ section on the page.

![](/img/ios-build-integration.png)

To automate the release of your iOS app to the App Store using Tramline, you'll need to grant it access to your App Store Connect account by providing an API key, API issuer ID, and private key file.

<img height="500" src="/img/app-store-connect.png" width="500"/>

## Generate an API key

Follow the instructions on the [App Store Connect documentation](https://developer.apple.com/documentation/appstoreconnectapi/creating_api_keys_for_app_store_connect_api) to generate an API key.

Please ensure to add the role __Admin__ for the API key to allow Tramline to prepare app releases.

<img height="500" src="/img/app-store-connect-api-key.png" width="500"/>
