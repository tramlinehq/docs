---
sidebar_position: 3
---

# Live Release

When you start a new release, this page is your control panel. Everything about the current release is controlled from right here. You will likely spend most of your time here.

![](/img/ongoing.png)

## Moving across steps

This section shows the current status of the _latest_ commit that has landed in the release branch. As a principle Tramline will,

### Run the first step of the train automatically

Basically, when you start a release, the first bit of work will happen by itself. It will,

* Cut a release branch
* Trigger the first step against the `HEAD` of that branch
* Start the deployments
* Subsequent steps are triggered manually

### New commits landing will retrigger steps

If you're on step number 2 of a 3-step train, landing a new commit to the release branch will retrigger step 1 & 2 automatically. This is so that the stakeholders of those steps are informed of the updates made to the release.

### Release steps must be triggered manually

Since release steps _may_ have production deployments, Tramline plays it safe and does not auto-trigger this step regardless of new commits landing.

### Landing commits

The all commits section of the page will show all new commits that land on the release branch. It does not care about any other commits anywhere else in your repository.

### Release metadata

To the right in the Landing

### Controlling the production release

#### iOS

If your release step has a production channel with phased release, you are presented with:

![](/img/submit-for-review.png)

Tramline automatically creates an inflight release on the App Store and assigns the correct build to the that release. To start the release process, you have to submit the app for review.

![](/img/submitted-for-review.png)

Once you have submitted for review, you can track the current progress of your app review on the right:

![](/img/submitted-for-review-2.png)

:::note
This widget above will always show the latest status of of the release on TestFlight or App Store.
:::

Since release steps _may_ have production deployments, Tramline plays it safe and does not auto-trigger this step regardless of new commits landing.

## Finishing up
