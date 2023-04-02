---
sidebar_position: 2
---

# Google Play Console

Navigate to the integrations page for your app and select __Google Play Store__ under the __Distributions__ section on the page.

![](/img/build-integration.png)

Tramline uses the official [Play Developer API](https://developers.google.com/android-publisher) to connect to your Play Store account. For the integration to work, you'll need to create and upload a JSON key file to Tramline.

:::info
We understand that this integration can get cumbersome so [talk to us](/getting-support) if you get confused at any step.
:::

The full setup involves the following steps:

1. Linking your Play Console developer account to a new (or existing) Google Cloud project
2. Enabling the Play Developer API in the linked Google Cloud project
3. Create a service account for Tramline in the linked Google Cloud project
4. Complete the service account setup in the Play Console
5. Upload service account JSON key to Tramline

## Initial setup in Google Play Console

:::caution
These steps can only be done by the owner of the Play Console account. If you're not the owner, you will not be able to proceed.
:::

### Create a linked Google Cloud project

- Login as the owner of the developer account in [Play Console](https://play.google.com/console/).
- In the left sidebar, click on *Setup* and then click *API access*.
- On the API access page, you'll see multiple sections like Google Cloud project, APIs, Credentials, etc.
- If your account does not have a linked Google Cloud project, click *Create new project*, which will automatically create a new project and link it to your Play Developer account.

### Enable Google Play Developer APIs

Scroll to the APIs section and turn on the Google Play Android Developer API and the Google Play Developer Reporting API. Once you've enabled the APIs, it will look something like this:

<img width="500" src="/img/play-store-google-play-apis.png" />

Next, scroll to the Credentials section and click the *Learn how to create service accounts* link which will open a dialog box. Click on the *Google Cloud Platform* link, which will conveniently open the service accounts page in the linked Google Cloud project.

<img src="/img/play-store-service-account-dialog.png" width="500" />

## Continue setup in Google Cloud Console

- Click on the *Create Service Account* button on the top of the page.
- Give the service account an appropriate name, for e.g. "API access for Tramline".
- In the *Grant this service account access to the project* section, you **must** grant the "Service Account User" role to this service account. The list of roles is quite long so use the filter to find the right role, if you must.

<img src="/img/play-store-service-account-roles.png" width="500" />

- Ignore the *Grant users access to this service account* section and click *Done* to save the service account, which will bring you back to the list of service accounts.
- In the list, find the service account you've just created and open it.
- Click on *Keys* in the top of the screen and then click *Add Key* to create a new key.
- In the key type selection dialog, pick JSON which will create and download a JSON key file.

<img src="/img/play-store-api-json-key.png" width="300" />

## Finish setup in Google Play Console

- Once you've downloaded the JSON key, close the Google Cloud Console window and go back to the Play Console API Access page.
- Click *Done* to dismiss the service accounts dialog.
- Your newly created service account should now show up in the list in the Play Console.
- Click on *Manage Play Console permissions* for this service account in the list, which will open the Invite user page for this service account user.
- Without changing any permissions, simply scroll to bottom of the page and click *Invite user*.
- Doing this will bring up a confirmation dialog to send an invitation. This will "invite" and add the service account user to your Play Console account. You will receive no email.

## Upload JSON key in Tramline

Once you've properly setup things in both, Google Play Console and Google Cloud Console, all that is left to be done is upload the service account JSON key file into Tramline.

<img height="500" src="/img/play-store-connect.png" width="500"/>

When you click *Create* after uploading the JSON key file, Tramline will verify that the integration is working correctly by checking for any releases or bundles with the [bundle identifier that you would have specified](/using-tramline/app) while adding the app.
