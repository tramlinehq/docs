---
sidebar_position: 0
---

# Adding Apps

To kick things off, add a new app from the header menu.

![](/img/add-new-app.png)

You will need the following details to create your app.

![](/img/create-new-app.png)

The bundle identifier is the [Application ID](https://developer.android.com/studio/build/configure-app-module#set-application-id) in Android, and the [Bundle ID](https://developer.apple.com/documentation/appstoreconnectapi/bundle_ids) on iOS.

You can add multiple apps to Tramline as long the bundle identifiers are unique. It is possible to add apps for the Android and iOS platform with the same bundle identifier.

The **build number** is just the initial version code you'd like to use to start off releases. After this, all increments are managed by Tramline.

On **iOS**, this is `cfBundleVersion`.<br />On **Android**, this is `versionCode`.

You can read more about Tramline's build number management [here](/docs/using-tramline/build-number).

Once the app is saved and validated, the next step is to add integrations and configure those integrations.
