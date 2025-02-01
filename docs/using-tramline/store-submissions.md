---
sidebar_position: 24
---

# Different Store Behavior

Play Store and App Store are whacky.


## Review Failures

App review failures are the bane of app releases. Tramline now handles app review failures from the stores and allows your to continue with the release process after resolving the issues.

### iOS

For iOS releases, a review failure can be tackled in a couple of ways – via communication with the review team or by submitting a new build for review.

Tramline now monitors the state of review after a rejection. If the review is resolved by communication, Tramline will sync the status, once the review is approved, and you can continue with the rollout of the build from your Tramline release dashboard.

If, however, you need to submit a new build, simply make a change in your release branch and Tramline will trigger a new build for submission.

Tramline will prepare the new release version, set phased release if configured, upload all the necessary release metadata, and allow you to submit the build from your release dashboard.

### Android

When an app review fails on the Google Play Store, a new build cannot be sent for review via Tramline due to the limitations of Google Play Publishing API. Tramline will, however, instruct you on what to do right there on the release dashboard.

Once you resolve the issue by submitting the new build for review manually from Console UI, you can sync the status back on Tramline.

Tramline will verify the correct status, sync the changes made on the Console UI, and continue with the release as configured.
