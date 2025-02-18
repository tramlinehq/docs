---
id: firebase
title: Firebase App Distribution
sidebar_label: Firebase App Distribution
sidebar_position: 3
---

Navigate to the integrations page for your app and select __Firebase App Distribution__ under the __Distributions__ section on the page.

![](/img/build-integration.png)

Tramline uses the official [Firebase App Distribution API](https://firebase.google.com/docs/reference/app-distribution/rest) to connect to your Firebase account. For the integration to work, you'll need to create and upload a JSON key file to Tramline.

:::caution
These steps can only be done by the owner of the Play Console account. If you're not the owner, you will not be able to proceed.
:::

The full setup involves the following steps:

1. Open the [Google Cloud Console](https://console.cloud.google.com/projectselector2/iam-admin/serviceaccounts) and select your project.
2. Click Create Service Account and enter service account details.
3. Click Create and Continue.
4. Add the Firebase App Distribution Admin role and click Done.
5. Create a private JSON key. Be sure to keep this file somewhere safe.
6. Upload service account JSON key to Tramline

Once you've properly setup a service account with Firebase App Distribution Admin role, all that is left to be done is upload the service account JSON key file into Tramline.

<img height="500" src="/img/firebase-connect.png" width="500"/>

Along with the service account JSON key, you will also need to add Project Number and App ID for your app in Firebase. You can find them in your Firebase Console.

Project Number:
<img height="500" src="/img/firebase-project-number.png" width="500"/>

App ID:
<img height="500" src="/img/firebase-app-id.png" width="500"/>

When you click *Create* after uploading the JSON key file, Tramline will verify that the integration is working correctly by connecting to your project and app on Firebase.
