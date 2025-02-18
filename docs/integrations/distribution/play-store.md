---
id: play-store
title: Google Play Console
sidebar_label: Google Play Console
sidebar_position: 2
---

Navigate to the integrations page for your app and select __Google Play Store__ under the __Distributions__ section on the page.

![](/img/build-integration.png)

Tramline uses the official [Play Developer API](https://developers.google.com/android-publisher) to connect to your Play Store account. For the integration to work, you'll need to create and upload a JSON key file to Tramline.

:::info
This integration can get a little cumbersome, so [talk to us](/getting-support) if you get confused at any step.
:::

The full setup involves the following steps:

1. Enable Google Play Developer APIs in Google Cloud Console
2. Create a service account for Tramline in the linked Google Cloud project
3. Invite the service account user to your Google Play Console
4. Add appropriate permissions to the service account user in Google Play Console
5. Upload service account JSON key to Tramline

### Enable Google Play Developer APIs

:::caution
These steps can only be done by a user who has write permissions to the Google Cloud Project associated with your Google Play Store app. If you only have read permissions, you will not be able to proceed.
:::

- Login to [Google Cloud Console](https://console.cloud.google.com).
- Ensure you have selected the correct project in the top left corner.
- Open the [Google Play Android Developer API page](https://console.cloud.google.com/marketplace/product/google/androidpublisher.googleapis.com).
- Click **Enable** to enable the API.

<img src="/img/enable-play-api.png" width="500" />

### Create Service Account

- Within Google Cloud Console, open the [Service Accounts page](https://console.cloud.google.com/iam-admin/serviceaccounts).
- Select the project you want to use for Tramline.
- Click on the *Create Service Account* button on the top of the page.
- Give the service account an appropriate name, for e.g. "API access for Tramline".
- In the *Grant this service account access to the project* section, you **must** grant the "Service Account User" role to this service account. The list of roles is quite long so use the filter to find the right role, if you must.

<img src="/img/play-store-service-account-roles.png" width="500" />

- Ignore the *Grant users access to this service account* section and click *Done* to save the service account, which will bring you back to the list of service accounts.
- In the list, find the service account you've just created and open it.
- Take a note of the service account email address, which will be used later.
- Click on *Keys* at the top of the screen and then click *Add Key* to create a new key.
- In the key type selection dialog, pick JSON which will create and download a JSON key file.

<img src="/img/play-store-api-json-key.png" width="300" />

### Link the service account to Google Play

:::caution
These steps can only be done by the owner of the Play Console account. If you're not the owner, you will not be able to proceed.
:::

- Login as the owner of the developer account in [Google Play Console](https://play.google.com/console/).
- In the left sidebar of the homepage, go to *Users and permissions*.

<img src="/img/google-play-users-and-permissions.png" width="300" />

- Click *Invite new users* under the kabab menu on the far right.

<img src="/img/invite-new-users-google-play-kabab.png" width="300" />

- In this *Invite User* form, use the email address of the service account you created earlier.
- In the app permissions section down below, click *Add app*, pick the correct app and then select a minimum of the following permissions:

<img src="/img/google-play-app-permissions.png" width="800" />

### Upload JSON key in Tramline

Once you've properly setup things in both, Google Play Console and Google Cloud Console, all that is left to be done is upload the service account JSON key file into Tramline.

<img height="500" src="/img/play-store-connect.png" width="500"/>

When you click *Create* after uploading the JSON key file, Tramline will verify that the integration is working correctly by checking for any releases or bundles with the [bundle identifier that you would have specified](/getting-started/app) while adding the app.
