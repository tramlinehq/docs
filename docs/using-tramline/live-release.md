---
sidebar_position: 3
---

# Live Release

When you start a new release, this page is your control panel. Everything about the current release is controlled from right here. You will likely spend most of your time here.

![](/img/ongoing.png)

## Landing commits

The all commits section of the page will show all new commits that land on the release branch. It does not care about any other commits anywhere else in your repository.

## Moving across steps

This section shows the current status of the _latest_ commit that has landed in the release branch. As a principle Tramline will,

#### Run the first step of the train automatically, subsequent steps are triggered manually

Basically, when you start a release, the first bit of work will happen by itself. It will,

* Cut a release branch
* Trigger the first step against the `HEAD` of that branch
* Start the deployments

#### Subsequent commits retrigger steps until the last run step of the train

If you're on step 2 of a 3 step train, landing a new commit to the release branch will retrigger step 1 & 2 automatically. This is so that the stakeholders of those steps are auto-informed of the updates made to the release.

#### Release steps must be triggered manually

Since release steps _may_ have production deployments, Tramline plays it safe and does not auto-trigger this step regardless of new commits landing.

### Controlling rollouts

## Finishing up
