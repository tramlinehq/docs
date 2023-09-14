---
sidebar_position: 8
---

# 🧪 Tramline API

Tramline currently exposes two API endpoints to fetch release information.

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
    "ios": [
      {
        "build_version": "8.0.0",
        "build_number": "471279587",
        "updated_at": "2023-07-04T06:50:46.180Z",
        "platform": "ios"
      }
    ],
    "android": [
      {
        "build_version": "10.18.1",
        "build_number": "471280026",
        "updated_at": "2023-09-14T09:55:02.743Z",
        "platform": "android"
      }
    ]
  }
}
```

You can use [jq](https://github.com/jqlang/jq) to parse parts for this response on your CI (or CLI) as follows:

```bash
jq '.latest.android[0].build_version'
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
        "platform": "android"
      },
      {
        "build_version": "8.0.2",
        "build_number": "471279585",
        "updated_at": "2023-07-03T18:40:58.189Z",
        "platform": "android"
      }
    ],
    "ios": [
      {
        "build_version": "8.0.0",
        "build_number": "471279587",
        "updated_at": "2023-07-04T06:50:46.180Z",
        "platform": "ios"
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
