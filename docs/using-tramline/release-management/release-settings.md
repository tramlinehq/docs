---
sidebar_position: 1
---

# Release Settings

Tramline's main building block is the release train. It is designed to emulate the release process followed by your team when shipping apps.

Once you have added an app and configured all the integrations, you can add a new release train by providing the following configuration.

![](/img/create-new-train.png)

The way to think about a release train is this encapsulation.

```
Release Train = Branching Strategy + Release Cadence
```

Most teams would typically have a maximum of two release trains (although Tramline imposes no such limit) depending on the frequency of the release, the testing cycles and the audience for that release.

## Basic settings

1. Name
2. Description
3. Version Strategy
4. Branching Strategy
5. Enable Notifications

## Advanced settings

Tramline provides a lot of advanced settings to customize your release process. You can find them in the **Advanced Settings** section of the **Release Settings**.

These settings have a sane default value, but you can always tweak them as per your team's needs.

1. **Release Schedule** – If you run your release cycles on a strict schedule, you can set it here. Tramline will ensure that a release starts on the scheduled date and time on a periodic basis. More details on this can be found in the [Scheduled Releases](/using-tramline/scheduled-release) section.
2. **Enable Approvals** – Some teams prefer to have a human in the loop before starting a release. Tramline allows you to enable approvals for your releases. This will notify the stakeholders who need to approve the release before it can be sent to production. More details on this can be found in the [Approvals](/using-tramline/approvals) section.
3. **Change queue** – Tramline allows you to control when changes landing on the release branch are applied to trigger new builds in your release. By default, commits on the release branch are auto-applied. Read more about this in the [Change Queue](/using-tramline/build-queue) section.
4. **Continuous Backmerge** – By default, Tramline merges changes made in the release branch back into your working branch towards the end of a release. You can override that by enabling the continuous backmerge option for Tramline to merge each change back into the working branch as soon as it lands. Read more about how backmerges are managed across different branching strategies and integrations in the [Backmerges](/using-tramline/backmerges) section.
5. Patch Change Application – If you want to enable patch change application for your release, you can do so here. Tramline will notify the release managers of the release and wait for their approval before starting the release.
6. Build Notes – If you want to add build notes for your release, you can do so here. Tramline will notify the release managers of the release and wait for their approval before starting the release.
7. Tags – If you want to add tags for your release
8. Version Change
  - Freeze Version
  - Patch Version Change


## Submission settings

When you create a new release train, Tramline creates a default set of submission settings for you. You should review these settings and make any necessary changes before you start any releases for the train.

The submission settings comprise of the following:

#### Release Candidate (RC) Workflow

Choose a CI workflow that generates the build that will be sent to the production channel of the stores (if enabled) as well the beta testing channels configured by you.

The workflow will be your existing CI workflow that generates the build for you. If you don't have a working CI workflow, we can [help](/getting-support) you set one up. Or, you can use our [CI workflow generator](https://macige.tramline.app).

For more details on configuring your CI workflow, please refer to [this section](/integrations/ci-cd).

For **iOS**, make sure your CI workflow can push your builds to TestFlight.<br />For **Android**, make sure your CI workflow produces a valid `aab/apk` build file.

#### Production Release Settings

You can choose to disable the production release for your releases if your app is still in beta.

You can also choose to enable/disable staged rollout for your production release.

![](/img/ios-staged-rollout.png)

On **iOS**, phased releases are fixed and managed entirely by App Store.

| day | percentage of users |
|-----|---------------------|
| 1   | 1                   |
| 2   | 2                   |
| 3   | 5                   |
| 4   | 10                  |
| 5   | 20                  |
| 6   | 50                  |
| 7   | 100                 |

Tramline gives you a way to pause, resume, and halt the rollout at any given point during the phased release.

![](/img/staged-rollout.png)

On **Android**, staged rollouts are more flexible and can be configured in whatever increments you want. You can specify the stages of the rollout by comma separating the incremental values, like `1, 5, 10, 50, 100` - these will give you 5 stages of 1%, 5%, 10%, 50% and 100%

:::info
It is necessary to have at least one submission channel configured in beta testing if you have turned production releases off.
:::

#### Beta Testing Configuration

If you send your RC to other tracks or testing groups before sending it to production, you can configure the beta testing channels.

Each channel can be configured in the order you want. You can also choose whether you want to send the RC to the channel as soon as it is ready or wait for a manual trigger.

The channels available to you for your release train will depend on the [Build Distribution Integrations](/integrations/distribution) you have added for your app.

#### Internal Testing Configuration

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

Releases can also be run on a schedule as mentioned in the example above. You can read more on that [here](/automations#start-releases-on-a-schedule).

TODO: add scheduled release page

Configuring this is a one-time setup. After this we can actually start making releases.
