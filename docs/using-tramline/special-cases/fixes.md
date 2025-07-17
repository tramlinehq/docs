---
id: fix-releases
title: Fix Releases
sidebar_label: Fix releases
sidebar_position: 1
---

There are two ways to fix releases in Tramline. Patchfixes are ones made while a release is still ongoing. These are triggered typically by applying additional fixes to a release branch, __while__ a production release has either begun review or is in an existing rollout. Hotfixes on the other hand, are ones that are made after a release has been completed (i.e, the rollouts have reached 100%).

## Patchfix

It's called a patchfix because for a SemVer-like versioning scheme (x.y.z) it updates the patch version (z) of the release. When a new build is generated while a rollout is still in progress, Tramline supersedes the existing rollout (stops it, and marks it stale) and allows you to start the rollout of the new build.

The patch version is incremented because stores (App Store in particular) don't allow the same version to be published twice. Incrementing the patch version also helps clearly differentiate between multiple releases that were made to the store from the same branch. Since every partial rollout, presumably, is adopted by some users and hence is an independent version worth tracking. On your Tramline dashboard, you'd see something like this when a patchfix takes effect:

![](/img/store-versions.png)

In the live release dashboard, to perform a patchfix, you'd simply apply a new change to the release branch:

![](/img/patchfix-current-version.png)

Once that change is applied, you will see the patch version automatically incrementing. This can now eventually be deployed to the store all the way and the previous build will get superseded.

![](/img/patchfix-applied.png)

## Hotfix

Hotfixes are a special case of a patchfix. They are independently triggered via the "Start hotfix" button on the dashboard. The button is available when there's at least one completed release and one ongoing release.

![](/img/start-hotfix.png)

Tramline automatically picks the correct version that can be hotfixed (the last completed release). In the modal above, you get two choices. You can either choose the existing release branch from the last release, or, the last good release tag to cut a new hotfix branch from (in the shape of `hotfix/v1.2.3`).

For all intents and purposes, the hotfix release is otherwise the same as any other release with one major difference: they allow you to bypass the defined release phase order. You can skip internal builds, approvals, and even all RC submissions. As soon as an RC build is available from the pipeline it can be promoted straight to production and rolled out to users.

:::note
For [synchronized releases](/using-tramline/release-management/synchronized-release), as is often the case, hotfixes also support releasing only to a single platform to avoid spending time on manually skipping the other platform.
:::

## Background

Both App Store and Play Store can only have a single live build (in the production track). This means that penultimate releases can be "hotfixed" as long as the latest release hasn't started rolling out. In essence, hotfixes are a conceptual abstraction. You are creating a new release instead of directly fixing the previous one, which might still be live. It's an abstraction of a process that is manually carried out, and Tramline offers this as an atomic package, where the details aren't important to know.
