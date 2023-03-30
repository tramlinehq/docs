---
sidebar_position: 2
---

# Release Trains

Tramline's primary building block is a release train. They are designed such that it's easier to mimic the release process that you follow to ship apps.

Once you have added an app and configured all the integrations, you can add a new release train by providing the following configuration.

![](/img/new-train.png)

The way to think about a release train is this encapsulation.

```
Release Train = Branching Strategy + Release Cadence
```

Most teams would probably have a maximum of two release trains (although tramline imposes no such limit) depending on the frequency of the release, the testing cycles and the audience for the release.

## Steps

Steps, as the name suggests, are tasks that a train does. Steps run a build workflow and move the build to distribution channels.

```
Step = CI Build workflow + Distribution Channel(s)
```

There is no limit to the number of steps a train can have, but a typical process might look something like this.

![](/img/standard-steps.png)

### Review

A review step is typically something that is used to stabilize the build before releasing to production or a large number of people. You can have as many review steps as you want.

Any given review step could represent stages in your release process, for example, generating a debug build and deploying it on Slack and then generating a staging build for internal testers on TestFlight.

One step can distribute builds to multiple distribution channels. Here's an example of a couple of review steps,

![](/img/review-steps.png)

### Release

A release step can only be one, and would typically be used to release to, say, the production track on Play Store or a proper release on App Store. However, this is not a hard constraint. The release step could also be simply a release to a non-production channel like TestFlight.

```
Release Step = Review Step + Some additional features
```

Since a release step allows adding production channels, this step is what controls phased releases (or staged rollouts).

![](/img/ios-staged-rollout.png)
![](/img/staged-rollout.png)

## Distributions

There is no limit to the number of distributions you can add per step. But most steps will generally have fewer than 3-4.

They are made up of two parts:

1. The service / provider name
2. The channel name within the service

![](/img/distributions.png)

:::note
The steps within a train and the distributions within a step are order dependent. The train always follows the order you pick.
:::

For **iOS**, make sure your CI workflow can push your builds to TestFlight.<br />For **Android**, make sure your CI workflow creates a valid `aab` file.

Read more about configuring this in the [Build Servers](/integrations/ci-cd/) section.

## Mental model

In summary, Tramline attempts to structure the parts of a release flow into adaptable processes. For example, you could have two different trains operating on two different release cadences.

```
Debug Builds Train (every night)
     → Step: Debug Build
             → Firebase App Distribution

Staging + Production Builds Train (every 14 days)
     → Step: Staging Build
             → Slack: #builds
             → Google Play Store: Internal Testing
     → Step: Production Build
             → Google Play Store: Production Track
```

And so on.

Release trains currently do not have [automations](/automations) that schedule releases, but this is something that will come in the near future and will easily fit into existing trains you have.

Configuring this is a one-time setup. After this we can actually start making releases.
