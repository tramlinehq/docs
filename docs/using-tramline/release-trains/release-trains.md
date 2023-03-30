---
sidebar_position: 2
---

# Release Trains

Tramline's main building block is the release train. It is designed to emulate the release process followed by your team when shipping apps.

Once you have added an app and configured all the integrations, you can add a new release train by providing the following configuration.

![](/img/new-train.png)

The way to think about a release train is this encapsulation.

```
Release Train = Branching Strategy + Release Cadence
```

Most teams would typically have a maximum of two release trains (although tramline imposes no such limit) depending on the frequency of the release, the testing cycles and the audience for that release.

## Steps

Steps, as the name suggests, are tasks that a train does. Steps run a build workflow and move the build to distribution channels.

The build workflow will be your existing CI workflow that generates the build for you. If you don't have a working CI workflow, we can [help](/getting-support) you set one up. Or, you can use our [CI workflow generator](https://macige.tramline.app).

For more details on configuring your CI workflow, please refer to [this section](/integrations/ci-cd).

For **iOS**, make sure your CI workflow can push your builds to TestFlight.<br />For **Android**, make sure your CI workflow produces a valid `aab` build file.


```
Step = CI Build workflow + Distribution Channel(s)
```

There is no limit to the number of steps a train can have, but a typical process could look like:

![](/img/standard-steps.png)

### Review

A review step is typically something that is used to stabilize the build before releasing to production or a large number of people. You can have as many review steps as you want.

Any given review step could represent stages in your release process, for example, generating a debug build and deploying it on Slack and then generating a staging build for internal testers on TestFlight.

One step can distribute the same build to multiple distribution channels.

Here's an example of a couple of review steps:

![](/img/review-steps.png)

### Release

A release step can only be one, and would typically be used to release to the production track on Play Store or to App Store. This is not mandatory though, the release step can also distribute to a non-production channel.

Since a release step allows adding production channels, this is where you would configure phased releases.

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

## Distributions

There is no limit to the number of distributions you can add per step. But most steps will generally have fewer than 3-4. The distribution channels available to you for your release train will depend on the [Build Distribution Integrations](/integrations/distribution) you have added for your app.

![](/img/distributions.png)

You can only add a production distribution channel during the Release step, not during the Review step, as previously mentioned.

:::info
The steps within a train and the distributions within a step are order dependent. The train always follows the order you pick.
:::

## Mental model

In summary, Tramline aims to flexibly adapt to your release processes. For example, you could have two different trains operating on two different release cadences.

```
Debug Build Train (every night)
     → Step: Debug Build
             → Firebase App Distribution

Staging + Production Build Train (every 14 days)
     → Step: Staging Build
             → Slack: #builds
             → Google Play Store: Internal Testing
     → Step: Production Build
             → Google Play Store: Production Track
```

And so on.

Release trains currently do not have [automations](/automations) that schedule releases, but this is something that will come in the near future and will easily fit into existing trains you have.

Configuring this is a one-time setup. After this we can actually start making releases.
