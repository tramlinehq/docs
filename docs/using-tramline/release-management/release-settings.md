---
id: release-settings
title: Release Settings
sidebar_label: Release Settings
sidebar_position: 1
---

Tramline's main building block is the release train (or release cycle). It is designed to emulate the release process followed by your team when shipping apps.

Once you have added an app and configured all the integrations, you can add a new release train by providing the following configuration.

![](/img/create-new-train.png)

The way to think about a release train is this encapsulation.

```
Release Train = Branching Strategy + Release Cadence
```

Most teams would typically have a maximum of two release cycles (although Tramline imposes no such limit) depending on the frequency of the release, the testing cycles and the audience for that release.

## Basic settings

### Name
The name of the release train. This name will be used for creating the release branches (if needed) and for identifying the release cycle in Tramline dashboard.

### Description
A brief description of the release cycle. This is just for reference for you and your team.

### Versioning Strategy
The strategy used for your app's version name and version code / build number. Tramline supports [SemVer](https://semver.org/) and [CalVer](https://calver.org/), and you can read about how to configure them in [Versioning Strategies](/using-tramline/version-management/version-strategies).

In addition to choosing the relevant version strategy, you must provide the last version of the app that you have released. Tramline will use the version you provide as the seed to automatically calculate what the version should be for the next release.

By default, Tramline will send the version to your CI/CD pipeline while triggering builds so that they are created with the correct version information. The version changes are not committed to your code, but if you want to do that, read [Automatic Version Bumps](#automatic-version-bumps).

### Notifications
:::warning
This option is only available if you have connected a [notification integration](/integrations/notifications) (for e.g. Slack) in your app settings.
:::

If you enable notifications, Tramline will send notifications for a variety of things that happen during a release to your notification integration.

By default, notifications are only sent to the default channel and the core channels. If you enable release-specific channels, Tramline will create a new channel for every release, and archive it once the release is over. The name of the release-specific channel follows the format `release-{appName}-{platformName}-{versionName}`. Customizing the name pattern of the release-specific channel is not supported yet.

Learn more about how to control notifications in a granular manner for different steps of the release, in the [Notifications](/using-tramline/quality-and-monitoring/notifications) section.

### Branching Strategy
The branching strategy that is used by your team to manage work for the release. The most common branching strategy is [Almost Trunk](branching-strategies#almost-trunk). Tramline supports a few other branching strategies, you can read more about them [here](branching-strategies).


## Advanced settings

Click on the `+ Advanced Settings` button to expand the advanced settings list. These have a sane default value, but you can tweak them as per your team's needs.

![](/img/advanced-settings.png)

### Outgoing Webhooks

Enable outgoing webhooks to receive real-time notifications about release events and updates. When enabled, Tramline will send HTTP POST requests to configured webhook endpoints with release data. Learn more in the [Outgoing Webhooks](/using-tramline/quality-and-monitoring/outgoing-webhooks) section.

### Release Schedule
If you run your release cycles on a strict schedule, you can set it here. Tramline will ensure that a release starts on the scheduled date and time on a periodic basis. More details on this can be found in the [Scheduled Releases](/using-tramline/release-management/scheduled-release) section.

### Approvals before submissions
Some teams prefer to have a human in the loop before starting a release. Tramline allows you to enable approvals for your releases. This will notify the stakeholders who need to approve the release before it can be sent to production. More details on this can be found in the [Approvals](/using-tramline/working-pane/approvals) section.

### Build Queue
Tramline allows you to control when changes landing on the release branch are applied to trigger new builds in your release. By default, commits on the release branch are auto-applied. Read more about this in the [Change Queue](/using-tramline/build-processing/build-queue) section.

### Continuous Backmerge
By default, Tramline merges changes made in the release branch back into your working branch towards the end of a release. You can override that by enabling the continuous backmerge option for Tramline to merge each change back into the working branch as soon as it lands. Read more about how backmerges are managed across different branching strategies and integrations in the [Backmerges](/automations#merging-fixes-back) section.

### Auto-apply patch changes
By default, Tramline will apply new changes landing on the release branch by triggering the first step of the release (creation of internal or RC build). If you do not want to auto-apply the changes once a production rollout has begun, you can disable the patch change application flag. Once disabled, Tramline will wait for you to manually trigger the first step of the release for any patch changes.

### Compact Build Notes
Tramline generates tester notes for all internal builds that are sent to the internal testing channels like Firebase App Distribution or TestFlight as well to the notification channels configured. These notes are a summary of all the changes that were made on the release branch since the last build generated. You can choose to compact these notes or leave them as detailed as the changes are.

### Tags
Tramline generates tags at the end of each release cycle to identify the final commit that was used for the release. The tag name is the last version generated for the release. You can choose to add **prefix** and/or **suffix** for the tag name to customize it. Eg: The default tag name is `v1.0.0`, but it can be customized to `v1.0.0-rc` or `in-v1.0.0-nightly`.

### Freeze release version
:::danger
If you enable this, Tramline will not increment the app version across releases. You should only do this for release cycles where builds are not sent to production tracks of the app stores.
:::

Tramline manages the versioning of your releases to ensure that there is no conflict or confusion between the versions of the app being tested and sent to the stores. It also ensures that the versions are incremented semantically correctly. You can, however, change this behavior and choose to freeze the version of the releases.

### Patch Version Change Only
By default, the app's minor version is incremented after each successful release. You can override this behavior to increment only the patch version instead. This will ensure that the app’s major and minor versions remain unchanged across releases.

### Automatic Version Bumps
When enabled, Tramline will create and merge a Pull Request to update the version name directly in your build files, along with starting a new release or cutting a release branch.

![](/img/automatic-version-bump-in-code.png)

#### Strategies
In *Current Version Before Release Branch Cuts*, Tramline will increment the version information in your code before cutting the release branch for a new release. For e.g. if the current version in code is 1.4.0 and you start a new release, Tramline will first increment the version in code to 1.5.0, wait for the version bump pull request to be merged, and then create a new release branch from the merge commit.

In *Next Version After Release Branch Cuts*, Tramline will increment the version information in your code after a release branch has been cut and the release has started. For e.g. if the current version in code is 1.4.0 and you start a new release, Tramline will create a release branch and start the release with version 1.4.0. Once the release has started, Tramline will increment the version in code to 1.5.0 on the working branch, which will not affect the release that was just started.

#### Build File Paths
If you supply more than one file path, Tramline will update the version information in all of them.

#### Branch Prefix
By default, the branch created for the version bump code change has a `tramline` prefix. If you want, you can change the prefix to something else. This can be helpful for branch protection rules in your version control system.


## Submission settings

Once you create a new release train, Tramline creates a default set of submission settings for you. You should review these settings and make any necessary changes before you start any releases for the train.

The submission settings comprise of the following:

### Release Candidate (RC) Workflow

Choose a CI workflow that generates the build that will be sent to the production channel of the stores (if enabled) as well the beta testing channels configured by you.

The workflow will be your existing CI workflow that generates the build for you. If you don't have a working CI workflow, we can [help](/getting-support) you set one up. Or, you can use our [CI workflow generator](https://macige.tramline.app).

For more details on configuring your CI workflow, please refer to [this section](/integrations/ci-cd).

For **iOS**, make sure your CI workflow can push your builds to TestFlight.<br />For **Android**, make sure your CI workflow produces a valid `aab/apk` build file.

### Production Release Settings

You can choose to disable the production release for your releases if your app is still in beta. You can also choose to enable/disable staged rollout for your production release.

:::info
It is necessary to have at least one submission channel configured in beta testing if you have turned production release off.
:::

#### iOS

![](/img/ios-staged-rollout.png)

Phased releases on iOS are fixed and managed entirely by App Store.

| day | percentage of users |
|-----|---------------------|
| 1   | 1                   |
| 2   | 2                   |
| 3   | 5                   |
| 4   | 10                  |
| 5   | 20                  |
| 6   | 50                  |
| 7   | 100                 |

Tramline gives you a way to **pause**, **resume**, or **halt** the rollout at any given point during the phased release.

##### Auto-start rollout after submission

By default, the production rollout requires a manual trigger after Apple approves the review. If you enable this setting, Tramline sets the release type to "After Approval" in App Store Connect. Once Apple approves the review, the release is initiated automatically by the App Store without any manual action in Tramline.

![](/img/auto-start-rollout-ios.png)

##### Automatic rollout

Automatic rollouts are the default behavior for all phased releases on iOS. The App Store manages the daily progression according to the fixed schedule above. You can still pause and resume through Tramline.

#### Android

![](/img/android-staged-rollout.png)

Staged rollouts on Android are more flexible and can be configured in whatever increments you want. You can specify the stages of the rollout by comma separating the incremental values, like `1, 5, 10, 50, 100` - these will give you 5 stages of 1%, 5%, 10%, 50% and 100%.

##### Auto-start rollout after submission

By default, the production rollout requires a manual trigger after the submission is prepared. If you enable this setting, the rollout starts automatically as soon as the submission preparation completes and the draft release is created on the Play Store.

![](/img/auto-start-rollout-android.png)

:::info
Pre-production releases (internal and beta testing) always auto-start regardless of this setting. This configuration only applies to production releases.
:::

##### Automatic rollout

When this is enabled, Tramline automatically increases the store rollout percentage once daily according to the configured rollout sequence, as long as the release remains healthy.

![](/img/automatic-rollout-android.png)

Once enabled:

- Tramline progresses the rollout to the next stage in your configured sequence once every 24 hours.
- You can manually pause or resume automatic progression at any time during the rollout.
- If [Release Health Rules](/using-tramline/quality-and-monitoring/release-health-monitoring) detect problems, the rollout is automatically paused until the release returns to a healthy state. If a health rule pauses the rollout, resuming again requires manual intervention.

:::info
When you pause and resume the automatic rollout, the daily clock restarts from the time of resumption, not from the original time-of-day or the time when it was paused. This behaviour mimics what App Store does for its phased releases.
:::

:::tip
Automatic rollouts work best when combined with [Release Health Rules](/using-tramline/quality-and-monitoring/release-health-monitoring). Configure health thresholds to ensure Tramline only progresses the rollout when your release metrics are within acceptable ranges.
:::

### Beta Testing Configuration

If you send your RC to other tracks or testing groups before sending it to production, you can configure the beta testing channels.

Each channel can be configured in the order you want. You can also choose whether you want to send the RC to the channel as soon as it is ready or wait for a manual trigger.

The channels available to you for your release train will depend on the [Build Distribution Integrations](/integrations/distribution) you have added for your app.

### Internal Testing Configuration

This step can be enabled if you have an internal testing process that generates non-production builds and sends them to internal testing channels like Firebase App Distribution or even Slack.

You must choose a separate workflow to build the internal builds. If you have notification integration configured, Tramline will send all builds to the configured channel when it is ready.

In addtion to that, you can add another set of submission channels for internal builds. Along with the build, Tramline will send the changes in the build as tester notes to the configured channels.

## Mental model

In summary, Tramline aims to flexibly adapt to your release processes. For example, you could have two different trains operating on two different release cadences.

```
Debug Build Train (every night)
     → RC Workflow: Production Build
             → Production release: disabled
             → Google Play Store: Internal Testing

Staging + Production Build Train (every 14 days)
     → Internal Build: Staging Build
             → Firebase App Distribution: QA
     → Beta Testing: Production Build
             → Google Play Store: Closed Testing
             → Google Play Store: Open Testing
    → Production Release: Google Play Store: Production Track
```

And so on.

Releases can also be run on a schedule as mentioned in the example above. You can read more on that [here](scheduled-release).

Configuring this is a one-time setup. After this we can actually start making releases.
