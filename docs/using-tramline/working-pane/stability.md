---
id: stability
title: Stability
sidebar_label: Stability
sidebar_position: 3
---

There are a few things Tramline does as soon as the release starts:
- It creates a release branch off of your working branch (or starts tracking the long running release branch based on the branching strategy).
- It starts the first step in your release process and triggers the CI workflow for that step whether that is creating an internal build or an RC build.

## Internal builds

Internal Builds are always automatically created and distributed to relevant internal testing channels.

![](/img/internal-builds.png)

It's common to add bug fixes and sometimes even small new features to a release after the release branch has been created. When a new commit lands on the release branch of your app, Tramline will re-create the internal build for the latest commit on the release branch.

A single release may generate multiple internal builds during the process of stabilizing the release.

![](/img/previous-internal-builds.png)

Each build shows the commit it was generated from, as well as, the **changes since the last build**.

![](/img/changes-since-last-build.png)


Once the internal build is approved, you can create a Release Candidate for the last commit that internal build was created for. Tramline will show a banner to **Create release candidate** in the Release Candidate tab.

## Release candidates

Release Candidates are the penultimate step of the release process before production release can begin. Creation of an RC is mandatory for the store release to start.

The RC creation works differently based on whether an internal build step is defined or not.

If there an internal build step, an option to create the RC becomes available once a valid internal build is created and sent to the internal testing channels.

![](/img/manual-rc-creation.png)

If there is no internal build step, the RC creation will be triggered automatically when the release starts.

Once an RC is created, that RC is then sent to any beta submission channels that are configured. This submission can happen automatically or manually based on the [submission settings](/using-tramline/release-management/release-settings#beta-testing-configuration).

![](/img/submission-auto-promote.png)

Once the RC is sent to all the beta submission channels, the release is considered to be in beta and the store release process can start.

If new changes are made to the release branch after the release is in beta, you will see a banner showing the new change and the option to **create a new RC**.

![](/img/new-change-rc.png)

You can choose to ignore the change and continue the production release with the existing RC, if needed.

Once the beta testing is progress, you can start preparing the store release.
