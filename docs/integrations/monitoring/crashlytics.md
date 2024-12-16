---
sidebar_position: 2
---

# Firebase Crashlytics

There are two tools in Firebase that collect data from your app: Crashlytics and Google Analytics.

Crashlytics data available cannot be used for calculating aggregate stats like crash-free rate or adoption rate, because it only contains info on unhealthy sessions; without info on healthy session stats, there is no denominator for crash-free rates or adoption.

As a result, Tramline's monitoring integration for Firebase relies on both Google Analytics and Crashlytics data, and that data must be exported from Firebase to BigQuery since Firebase doesn't expose a direct API for this data.

:::info
Setting up BigQuery is required because Google doesn't expose the data required directly via Firebase APIs.

Data processed, and therefore costs, can be variable depending on each team's data volume and other factors. Tramline optimizes the queries for both cost and efficiency. But, we recommend adding user-level and/or project-level quotas to cap query data processed per day. More information is available here: [Controlling your BigQuery costs - Google Cloud](https://cloud.google.com/blog/topics/developers-practitioners/controlling-your-bigquery-costs)
:::


### Enable BigQuery + Google Analytics in Firebase

Please ensure that BigQuery and Google Analytics are enabled in your Firebase project. You can find these under the Integration tab in the Project Settings on the Firebase console.

<img src="/img/crashlytics-link-bq-ga.png" width="500" />

In the BigQuery settings, enable both Google Analytics and Crashlytics exports.
- Ensure all the required apps are selected for export in the Apps exporting section.
- Make sure *at least* the “Daily” option is selected for export. We suggest selecting the "Streaming" option to get a real-time view of the data in Tramline.

:::note
You must be on a Firebase paid plan to select “Streaming” exports in Export settings.
:::

<img src="/img/crashlytics-ga-settings.png" width="500" />

<img src="/img/crashlytics-settings.png" width="500" />

:::info
For BigQuery exports that have been turned on for the first time, it may take a day before the data starts populating in BigQuery.
:::

### Service Account for BigQuery access

- Within Google Cloud Console, open the [Service Accounts page](https://console.cloud.google.com/iam-admin/serviceaccounts).
- Select the project you want to use for Tramline.
- Click on the *Create Service Account* button on the top of the page.
- Give the service account an appropriate name, for e.g. "BQ access for Tramline".
- In the *Grant this service account access to the project* section, you **must** grant the "BigQuery Job User" and "BigQuery Data Viewer" roles to this service account. The list of roles is quite long so use the filter to find the right role, if you must.

<img src="/img/play-store-service-account-roles.png" width="500" />

- Ignore the *Grant users access to this service account* section and click *Done* to save the service account, which will bring you back to the list of service accounts.
- In the list, find the service account you've just created and open it.
- Click on *Keys* at the top of the screen and then click *Add Key* to create a new key.
- In the key type selection dialog, pick JSON which will create and download a JSON key file.

<img src="/img/play-store-api-json-key.png" width="300" />

:::info
If you want to share a service account between this integration and your Google Play Store integrations, add additional roles (mentioned above) to the existing service account as needed (Play Console and BigQuery will need to live under the same project for this to work).
:::

### Upload JSON key in Tramline

Once you've properly set up a service account with the required roles, all that is left to be done is upload the service account JSON key file into Tramline.

Navigate to the Integrations tab in your App Settings from the gear icon on the right side of the app name in the header and select __Firebase Crashlytics__ under the __Monitoring and Analytics__ section on the page.

<img height="500" src="/img/crashlytics-connect.png" width="800"/>

Along with the service account JSON key, you will also need to add Project Number for your app in Firebase. You can find the project number in the Firebase console under the project settings.

<img height="500" src="/img/crashlytics-configure.png" width="500"/>

When you click *Create* after uploading the JSON key file, Tramline will verify that the integration is working correctly by connecting to your project and app on Firebase.
