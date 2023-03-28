---
sidebar_position: 0
---

# Release Trains

Tramline's primary building block is a release train. They are designed such that it's easier to mimic the release process that you follow to ship apps.

Once you have added an app and configured all the integrations, you can add a new release train with the following configuration,

![](/img/new-train.png)

### Steps

Steps, as the name suggests, are tasks that a train does. Steps run a build workflow and move the build to deployment channels.

```
Step = CI Build workflow + Deployment Channel(s)
```

There is no limit to the number of steps a train can have, but a typical process might look something like this,

![](/img/standard-steps.png)

#### Review

A review step is typically something that is used to stabilize the build before releasing to production or a large number of people. You can have as many review steps as you want.

Any given review step could represent stages in your release process, for example, generating a debug build and deploying it on Slack and then generating a staging build for internal testers on TestFlight.

One step can distribute builds to multiple deployment channels. Here's an example of a couple of review steps,

![](/img/review-steps.png)

#### Release

A release step can only be one, and would typically be used to release to, say, the production track on Play Store or a proper release on App Store. However, this is not a hard constraint. The release step could also be simply a release to a non-production channel like TestFlight.

```
Release Step = Review Step + Some additional features
```

Since a release step allows adding production channels, this step is what controls phased releases (or staged rollouts).

![](/img/staged-rollout.png)
![](/img/ios-staged-rollout.png)

### Deployments

### Artifacts

### Mental model
