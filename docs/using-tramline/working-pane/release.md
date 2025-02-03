---
sidebar_position: 4
---

# Ongoing Release

The person who starts the release is assigned the “Release Captain” and has some special abilities throughout the release like recording anything of note for the release in Captain’s log and overriding approvals to unblock production release.

When you start a new release, this page is your work pane. Everything about the current release is controlled from right here. You will likely spend most of your time in Tramline here.

This is what a typical successful release in Tramline looks like:

![](/img/live-release.png)

The work pane is auto-structured into four main sections:

1. *Kickoff*: Overview, changeset tracking and the homepage for the Release Captain.
2. *Stability*: Internal builds, Release Candidates, testing (coming soon).
3. *Metadata*: Dedicated space for updating notes, store metadata.
4. *Store Release*: Managing reviews and rolling out to production.

The tabs are alive — they always track the current state of that section — whether it's in progress, completed or pending. They also automatically get switched over to the most important tab in the current release.

## Run the first step of the train automatically

There are a few things Tramline does as soon as the release starts:
- It creates a release branch off of your working branch.
- It starts the first step in your release train and triggers the CI workflow for that step whether that is creating an internal build or an RC build.
- Once the workflow completes and Tramline is able to find the build, Tramline will send the build to the configured submission channels automatically or otherwise (based on your settings).

![](/img/step-movement.png)

## New commits landing will re-trigger steps

It's common to add bug fixes and sometimes even small new features to a release after the release branch has been created.

When a new commit lands on the release branch of your app, Tramline will re-create the internal build for the latest commit on the release branch.

## Changeset tracking

The _All commits_ section of the page will show all the commits that land on the release branch. You can refer to the state of the release train at each of the commit.

You can also see the corresponding CI workflow and build details for each commit in this section of the page.

## Release metadata

You can update release-related metadata prior to initiating your production store release. These details can be modified anytime between the beginning of the release and the commencement of a production deployment, as the metadata will be uploaded to the store during the production deployment process.

- Release notes
- Promotional text (**iOS** only)

Tramline will add some sensible defaults for these for your benefit.

![](/img/release-metadata.png)

## Controlling the production release

The production release across both stores in handled by Tramline slightly differently due to the different processes of these stores.

### iOS

If your release step has a production channel, you are presented with:

![](/img/submit-for-review.png)

When you start the release step, Tramline automatically creates an inflight release on the App Store and assigns the correct build to the that release. Once the release is prepared, you have to submit the app for review.

![](/img/submitted-for-review.png)

Once you have submitted the app for review, you can track its progress on the right:

![](/img/submitted-for-review-2.png)

:::info
This widget above will always show the latest status of of the release on TestFlight or App Store.
:::

Once the review is approved by Apple, you can start the release of the build from Tramline.

![](/img/ios-start-release.png)

If there is no phased release enabled, your release is **complete**! 🎉

#### Phased release

If you have production release with a phased release, you will be presented with controls to start the phased release.

![](/img/ios-phased-release-started.png)

Once the rollout is started, you can **pause** (and **resume**) the rollout, **halt** it, or, release to **all the users** right away if you confident about your release.

### Android

If your release step has a production channel, you are presented with:

![](/img/android-start-release.png)

When you start, Tramline creates a release in Play Store. It also automatically promotes the release on the **production track**.

If there is no staged rollout enabled, your release is **complete**! 🎉

#### Staged rollout

If you have a production release with staged rollout, you will be presented with controls to navigate your staged rollout.

![](/img/android-staged-rollout-not-started.png)

Once the rollout is started, you can **increase** the rollout, **halt** it, or, release to **all the users** right away if you confident about your release.

![](/img/android-staged-rollout-started.png)

## Finishing up

Once the build has been successfully distributed to all channels in the release step, you can finalize your release.

![](/img/finish-release.png)

This would typically tag the correct release commit, and depending on the branching strategy, it will also automatically create and merge necessary pull requests.

Once a release is finalized, it becomes locked and is unable to accept any further patches or commits.

![](/img/finalize.png)
