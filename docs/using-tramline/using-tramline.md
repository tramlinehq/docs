---
---

# Using Tramline

:::tip
[Contact us](/getting-support) and we'll help you get setup with your release process.
:::

Once you are signed up, here's how you make your first release.

## Add your app(s)

You can add one or more apps for Android or iOS.

In this example, we add a Flutter app called Ueno for Android:

![](/img/create-new-app.png)

[More on this here](app).

## Setup integrations

[Setup](/integrations) and [configure](app-configuration) the four categories of integrations.

![](/img/add-integrations-new-app.png)

## Configure releases

Create a release train with the appropriate branching strategy. The most basic branching strategy is [Almost Trunk](/branching-strategies). An example train:

![](/img/sample-train.png)

To this train, add steps that represent your release process, like configuring the CI workflows, beta channels and phased rollouts for production releases.

In this example, we add two steps. One creates a staging build and deploys it to a Slack channel and adds it to an internal group on Play Store. The second step runs a CI workflow that generates a production build and pushes it to the production track on Play Store through a staged rollout pattern.

**The review step**

![](/img/review-step-short.png)
![](/img/staging-distributions.png)

**The release step**

![](/img/release-step-short.png)
![](/img/prod-distributions.png)

[Read more about release trains in detail](release-trains).

## Start a release

For your created release train, start a release. This will cut a release branch from your working branch.

![](/img/start-release.png)

Here, you will stabilize and monitor the release, manage phased rollouts, submit the app for review, distribute builds to beta users and land any additional bug fixes or changes before finally releasing to the production track on Play Store or to the App Store.

![](/img/live-release.png)

[Read more on how to navigate a live release](live-release).

## Finish up

Once you've reached the last step of the train, you'd be able to finalize the release. This would typically tag the reponsible commit and depending on the branching strategy, it will also automatically create and merge necessary pull requests.

You'd be able to see all your releases in a single place on the release train page:

![](/img/previous-release.png)
