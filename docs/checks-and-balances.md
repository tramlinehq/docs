---
id: checks-and-balances
title: 💰 Checks & Balances
sidebar_label: 💰 Checks & Balances
sidebar_position: 5
---

Tramline has a variety of important checks that help ensure that minimum-to-no human errors are made during a release. This isn't just a list of [automations](/automations) that you get or you can enable, but a set of fundamental constraints enforced by the system.

### Blocking release to stores

#### Approvals

:::info
The Approvals feature is currently only available to the Enterprise users.
:::

If you use the [Approvals feature](/using-tramline/working-pane/approvals), until all the approvals are signed-off on or overridden, no one, including the release captain is allowed to submit a release to stores.

#### Upcoming release

If you have an upcoming release running alongside your current release, the upcoming release cannot be submitted to stores until either the current release is fully rolled-out, manually completed or stopped.

#### Hotfix in progress

If a hotfix release is in progress, all production submission to stores in any other release — current or upcoming — get blocked until the hotfix is fully completed. This ensures no accidental sideway releases get pushed out.

#### Release Candidate required

A store (production) submission can only be made with a good "Release Candidate" build.

### Before starting a new release

Tramline checks if you actually have new code changes to release. If the configured working branch (eg. `main`) does not have any new changes, no new releases can be made.

### Before finishing a release

:::tip
This is applicable for all [branching strategies](/using-tramline/release-management/branching-strategies).
:::

Tramline checks if all your code in the release branch is merged back into the working branch. If not, Tramline disallows completing the current release. Additionally, if there are conflicts in merging, we ask you to sign-off on the fact that you're finishing the release with _potential_ conflicts.

### Locking the release branch

:::tip
This does not apply to the [Parallel Working and Release Branch Strategy](/using-tramline/release-management/branching-strategies#parallel-working-and-release-branch-strategy).
:::

Once the release is completed, and if the release branch is not removed, we stop accepting any new commits to the branch. This ensures that the branch cannot be accidentally used to create a new release.

### Workflow completion before build submission

:::info
  CI/CD workflows are run during the [stability phase](/using-tramline/working-pane/stability) of a release.
:::

Even if the build is available from the CI workflow to download, Tramline ensures that your entire Internal or Release Candidate workflow is successful before we allow distributing it to Beta channels or stores.

### Build locality

Our dashboard always shows the correct build associated with the correct version and mapping tracks all the way to the notifications and

### Internal releases to Release Candidate promotions

If your have [Internal Releases](/using-tramline/working-pane/stability) configured, Tramline always enforce that you must create them first, distribute the builds and only then do we allow promoting the appropriate commit/SHA to a Release Candidate build. This ensures that the process of Internal → RC is always followed and cannot be skipped.

:::info
The only exception to this rule is when you're creating a [hotfix release](/using-tramline/special-cases/fix-releases#hotfix).
:::
