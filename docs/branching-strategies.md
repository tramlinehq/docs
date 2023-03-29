---
sidebar_position: 8
---

# ⽊ Branching Strategies

We support 3 types of branching strategies when setting up a [release train](using-tramline/release-trains).

:::note
Tramline creates [release branches](docs/automations.mdx#cutting-a-release-branch) and appropriate [pull requests](docs/automations.mdx#creating-and-merging-pull-requests) automatically across all branching strategies.
:::

## Almost Trunk
Almost Trunk is the simplest strategy and the one that we generally recommend.

For every release, we create a new release branch from the `HEAD` of the working branch. Release-specific fixes should not be committed to the release branch directly. Instead, you should land the fixes on your working branch, and then cherry-pick them on to the release branch.

![](/img/atrunk.png)

## Release with Backmerge

Release with Backmerge creates a new release branch from the `HEAD` of the working branch, for every release. Once the release is finalized, two things happen:

1. The release branch is merged into the backmerge (production) branch
2. The backmerge branch is "backmerged" into the working branch

![](/img/rbm.png)

## Parallel Working and Release Branch

Parallel Working and Release does not create a new release branch for every release. Instead, at the start of a release, the working branch is merged into the release branch. Release-specific fixes land on the release branch directly. At the end of the release, the release branch is merged back into the working branch.

![](/img/pwr.png)
