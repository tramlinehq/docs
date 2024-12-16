---
sidebar_position: 8
---

# 🧪 Tramline API

Tramline currently exposes three API endpoints to fetch release information and to send custom build metadata to Tramline.

You need your `Account ID` and `API Key` before you can make any requests. To get these click on **Settings** in the dropdown on the top-right:

![](/img/org-settings.png)

Here you will find the relevant API settings:

![](/img/api-settings.png)

:::info
Only a user with owner or developer privileges can access these API settings.
:::

### Get the latest release made to the store for an app

```bash
curl -H "Authorization: Bearer your-api-key" \
     -H "X-TRAMLINE-ACCOUNT-ID: your-account-id" \
     -H "Accept: application/json" \
     https://tramline.dev/api/v1/apps/<app-id>
```

This API would respond with a format like this:

```json
{
  "latest": {
    "ios": {
      "build_version": "8.0.0",
      "build_number": "471279587",
      "updated_at": "2023-07-04T06:50:46.180Z",
      "platform": "ios",
      "rollout_percentage": 48.15
    },
    "android": {
      "build_version": "10.18.1",
      "build_number": "471280026",
      "updated_at": "2023-09-14T09:55:02.743Z",
      "platform": "android",
      "rollout_percentage": 16.23
    }
  }
}
```

You can use [jq](https://github.com/jqlang/jq) to parse parts for this response on your CI (or CLI) as follows:

```bash
jq '.latest.android.build_version'
```

...to get the latest build version for Android.

### Get all release versions sent to the store for a given release

You can either specify a particular branch

```bash
curl -H "Authorization: Bearer your-api-key" \
     -H "X-TRAMLINE-ACCOUNT-ID: your-account-id" \
     -H "Accept: application/json" \
     https://tramline.dev/api/v1/releases/<release-branch-name>
```

...or you can just use the release ID directly.

```bash
curl -H "Authorization: Bearer your-api-key" \
     -H "X-TRAMLINE-ACCOUNT-ID: your-account-id" \
     -H "Accept: application/json" \
     https://tramline.dev/api/v1/releases/<release-id>
```

This API would respond with a format like this:

```json
{
  "releases": {
    "android": [
      {
        "build_version": "8.0.0",
        "build_number": "471279578",
        "updated_at": "2023-07-03T17:19:49.428Z",
        "platform": "android",
        "rollout_percentage": 48.15
      },
      {
        "build_version": "8.0.2",
        "build_number": "471279585",
        "updated_at": "2023-07-03T18:40:58.189Z",
        "platform": "android",
        "rollout_percentage": 16.23
      }
    ],
    "ios": [
      {
        "build_version": "8.0.0",
        "build_number": "471279587",
        "updated_at": "2023-07-04T06:50:46.180Z",
        "platform": "ios",
        "rollout_percentage": 42.48
      }
    ]
  }
}
```

You can use [jq](https://github.com/jqlang/jq) to parse parts for this response on your CI (or CLI) as follows:

```bash
jq '.releases.android | map(.build_version)'
```

...to get all the builds generated for Android during the release.


### Send custom metadata for a build

You can send custom metadata to be displayed on Tramline dashboard about your build. Each metadata should have a unique identifier, and its value can be numerical or textual. The trend of all numeric metadata will be shown on Tramline dashboard.

Examples of metadata: app launch time, unit test coverage etc.

For a valid build, identified by `version-name` and `version-code`, Tramline will create or update the custom build metadata.

```bash
curl -X PATCH \
     -H "Authorization: Bearer your-api-key" \
     -H "X-TRAMLINE-ACCOUNT-ID: your-account-id" \
     -H "Content-Type: application/json" \
     -d '{
        "external_metadata": [
            {
                "identifier": "app_launch_time",
                "name": "App Launch Time",
                "description": "This is the time in seconds for the app to start",
                "value": 0.6,
                "type": "number",
                "unit": "seconds"
            }
        ]
    }' \
     https://tramline.dev/api/v1/apps/<app-id>/builds/<version-name>/<version-code>/external_metadata
```

The `external_metadata` in the request body should adhere to the following schema:

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "identifier": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "value": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "string"
          }
        ]
      },
      "type": {
        "type": "string",
        "enum": [
          "number",
          "string"
        ]
      },
      "unit": {
        "type": "string"
      }
    },
    "required": [
      "identifier",
      "value",
      "type"
    ]
  }
}
```

Sample request body:
```json
{
    "external_metadata": [
        {
            "identifier": "app_launch_time",
            "name": "App Launch Time",
            "description": "This is the time in seconds for the app to start",
            "value": 0.7,
            "type": "number",
            "unit": "seconds"
        },
        {
            "identifier": "unit_test_coverage",
            "name": "Unit Test Coverage",
            "description": "Percentage of code covered by unit tests",
            "value": 65,
            "type": "number",
            "unit": "percentage"
        },
        {
            "identifier": "end_to_end_test_report",
            "name": "End to end test report",
            "description": "End to end test report",
            "value": "The end to end tests ran for 15 minutes and passed",
            "type": "string",
            "unit": "none"
        }
    ]
}
```
