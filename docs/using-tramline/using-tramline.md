# 👩‍💻 Using Tramline

:::tip
[Contact us](/getting-support) and we'll help you get setup with your release process.
:::

Once you are signed up, here's how you make your first release.

## Add your app(s)

You can add one or more apps for Android or iOS.

In this example, we add a Flutter app called [Ueno](https://github.com/tramlinehq/ueno) for Android:

![](/img/create-new-app.png)

[More on this here](app).

## Setup integrations

[Setup](/integrations) and [configure](app-configuration) all the required integrations.

![](/img/add-integrations-new-app.png)

## Configure releases

Create a release train with the appropriate branching strategy. The most basic branching strategy is [Almost Trunk](/branching-strategies). Example train:

![](/img/sample-train.png)

To this train, add steps that represent your release process — configuring the CI workflows, beta group distributions, and phased rollouts for production releases.

In this example, we add two steps.

**Add a review step**

One creates a staging build, deploys it to a Slack channel, and adds it to an internal group on Play Store.

![](/img/review-step-short.png)
![](/img/staging-distributions.png)

**Add the release step**

The second step runs a CI workflow that generates a production build and pushes it to the production track on Play Store through a staged rollout pattern.

![](/img/release-step-short.png)
![](/img/prod-distributions.png)

[Read more about release trains in detail](release-trains).

## Start a release

For your created release train, start a release.

![](/img/start-release.png)

:::note
You need at least one release step to be able to start a new release.
:::

The live release page displays the release branch created from the working branch.

On this page, you can stabilize and oversee the release, manage phased rollouts, submit the app for review, distribute builds to beta users, and implement any extra bug fixes or modifications before eventually launching the production track in the store.

![](/img/live-release.png)

[Read more on how to navigate a live release](live-release).

## Finish up

Once you've reached the last step of the train, you'd be able to finalize the release. This would typically tag the responsible commit and depending on the branching strategy, it will also automatically create and merge necessary pull requests.

You'd be able to see all your releases in a single place on the release train page:

![](/img/previous-release.png)

:::info
Feel free to continue over to the next few sections to understand the release process in detail. [Contact us](/getting-support) if you need any help.
:::
