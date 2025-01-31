---
sidebar_position: 0
---

# Add your app

To kick things off, add your first app.

<p><img height="500" src="/img/add-first-app.png" width="500"/></p>

You will need the following details to create your app.

![](/img/create-new-app.png)

The **Bundle Identifier** is the [Application ID](https://developer.android.com/studio/build/configure-app-module#set-application-id) in Android, and the [Bundle ID](https://developer.apple.com/documentation/appstoreconnectapi/bundle_ids) in iOS.

The **Timezone** is the timezone that you want to use for the app. This is used to show all the time-related data in Tramline and schedule releases for your app.

The **Build Number** is just the initial version code you'd like to use to start off releases. After this, all increments are managed by Tramline.
It is equivalent to the `versionCode` in Android, and the `cfBundleVersion` in iOS. You can read more about Tramline's build number management [here](/docs/using-tramline/build-number-management).

Once the app is saved and validated, the next step is to add integrations and configure those integrations.
