---
id: new-release
title: Prepare new release
sidebar_label: Prepare new release
sidebar_position: 3
---

<p>
  <img src="/img/prepare-new-release-button.png" width="400"/>
</p>

When you prepare a new release from the top-right button in your releases page. You will get this selection modal where you can pick the release type.

![](/img/prepare-new-release.png)

The very first release you create, uses the seed version that you configured in the [release settings](/using-tramline/release-management/release-settings) and use that as a base to create the next version. Subsequent versions, depending on the option you select will correctly increment the version based on the [versioning strategy](/using-tramline/version-management) used – minor, major or custom.

:::note

If you're using the [Almost Trunk](/using-tramline/release-management/branching-strategies#almost-trunk) branching strategy, you will also see a note at the top that informs you of the release branch that will automatically be created when you start a new release.
:::

:::note
If you pick the custom version option, Tramline will auto-correct the next minor or major version for the next release based on this custom version.
:::

#### Minor
The minor version bump is the most commonly used type for most incremental new releases. These upgrades enhance the app's functionality with no disruption to the user experience.


#### Major
The major version bump is typically reserved for significant updates (often not backwards compatible, eg. users need to re-login) that necessitate users to upgrade.

#### Patch

Patch versions are managed automatically by Tramline. They get bumped either when you make a [patchfix](/using-tramline/special-cases/patchfix) or a new [hotfix](/using-tramline/special-cases/hotfix) release. You can't manually change this unless you specify an explicit custom version with a modified patch version.

:::tip
For [CalVer](/using-tramline/version-management/version-strategies), you only get two options

1. cut a standard calendar-based release
2. a new custom version
:::
