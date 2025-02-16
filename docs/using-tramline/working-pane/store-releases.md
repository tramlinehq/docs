---
id: store-releases
title: Store Releases
sidebar_label: Store Releases
sidebar_position: 7
---

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
