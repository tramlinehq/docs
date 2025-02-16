---
id: start-release
title: Start the release
sidebar_label: Start the release
sidebar_position: 4
---

Once you have reviewed the submission settings, you can start a new release by using the **Prepare New Release** button in the top right corner of your home page.

This will open a new modal that will guide you to choose the correct version for your new release.

![](/img/prepare-new-release.png)

The first release will use the seed version that you configured in the release settings and use that as a base to create the next version. The next version can be a minor or major version bmp as per your selection. You can also choose to provide a custom version, if you want. Tramline will auto-correct the next version for the next release based on this custom version.

You can read more about version management in [Version Management](/using-tramline/version-management).

## Live Release

Once the release is started, you will move the release forward the following stages:

1. [**Kickoff**](/using-tramline/working-pane/overview) – Overview, changeset tracking and the homepage for the Release Captain
2. [**Stability**](/using-tramline/working-pane/stability) – Internal builds, RCs, internal(QA) as well as beta testing
3. [**Preparing for production release**](/using-tramline/working-pane/metadata) – Approvals, release notes, and preparing the release for store review
4. [**Production rollout**](/using-tramline/working-pane/store-releases) – Rolling out the release to public and monitoring the health of the release
5. [**Post-release automations**](/using-tramline/working-pane/finalization) – Automatic tasks that Tramline runs like cutting tags, ensuring all release changes are merged, etc.

![](/img/live-release.png)

The details of these are explain in the [Release](/using-tramline/working-pane) section.
