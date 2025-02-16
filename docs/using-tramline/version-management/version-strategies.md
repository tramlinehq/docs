---
id: version-strategies
title: Version Strategies
sidebar_label: Strategies
sidebar_position: 1
---

Since Tramline [automatically manages versions](automations#bumping-versions-and-build-numbers) for you, we categorize them into specific strategies so that the increments are predictable. There are 3 versioning strategies to choose from.

:::info
On iOS, the [property](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleshortversionstring) `cfbundleshortversionstring` is what Tramline assumes when we're talking about version names. The same property is used to set the PreReleaseVersion or the AppStoreVersion when we'resubmitting to the App Store or TestFlight.
:::

:::info
On Android, this is the `versionName` [property](https://developer.android.com/studio/publish/versioning#versioningsettings). We use the same value when the release is promoted to a track on the Play Store and the release name is set to the `versionName`.
:::

### SemVer

Tramline supports a [SemVer](https://semver.org)-like versioning scheme that's designed to play well with both App Store and Google Play Store. It works like this:

```
MAJOR.MINOR.PATCH

MAJOR = Non-zero-padded sequence number
MINOR = Non-zero-padded sequence number
PATCH = Non-Zero-padded sequence number
```

✅ Valid
```
1.2.0
4.2.1
16.9.2
```

❌ Invalid
```
1
1.2.3.4
1.02.01
```

:::note
To be more precise, the SemVer support is a subset of what the specification allows. This is to ensure that these versions work well with all major platforms.
:::

### CalVer

Like SemVer, Tramline supports an opinionated [Calendar-based versioning scheme](https://calver.org) that's designed to play well with both App Store and Google Play Store. It works like this:

```
YYYY.0M.0D0N

YYYY = Full-year
0D = Zero-padded day
0M = Zero-padded month
0N = Zero-padded sequence number
```

✅ Valid
```
2025.01.20
2022.02.01
```

❌ Invalid
```
25.1.20
25.1.32
2025.1.1
```

### Partial SemVer

This is like SemVer, but it allows you to omit the patch number, and only have one numerical identifier after the major number. It works like this:

```
MAJOR.<MINOR|PATCH>

MAJOR = Non-zero-padded sequence number
<MINOR|PATCH> = Non-zero-padded sequence number
```

✅ Valid
```
1.2
4.2
16.2
```

❌ Invalid
```
1
1.2.3.4
1.02
1.2.3
```

Partial SemVer always updates `<MINOR|PATCH>` part of the version for both a minor bump and patch bump (in case of a [patchfix](/using-tramline/special-cases/patchfix) or a [hotfix](/using-tramline/special-cases/hotfix)). This isn't a full-fledged strategy per se, but rather an omission of the patch number. When you're [setting up your release](/using-tramline/release-management/release-settings), and you omit the patch value, we assume that you want versioning based on partial SemVer. This can technically be overridden if you make a [custom release](/using-tramline/release-management/new-release) with a proper SemVer version. The next release from there on out, will be **not** assume a partial SemVer strategy.

#### Correcting Versions

:::tip
Due to the complicated nature of handling versions when Partial SemVer is used, we do not recommend this strategy for most people.
:::

Partial SemVer introduces some complexities when multiple releases are running in parallel and there are [patchfixes](/using-tramline/special-cases/patchfix) involved. But Tramline takes care of this versioning for you. Take the following example:


1. Currently active release: Release 1 (1.2)
2. Patchfix lands on Release 1 → 1.3
3. New upcoming release starts: Release 2 (1.4)
4. Another patchfix lands on Release 1 → 1.5

...and so on and so forth. In other words, Tramline always tries to do the _right thing_ in terms of increments. Even if that means jumping across one version (or multiple) because there's another upcoming release that's actively being worked on.

:::info
Stores (both Apple and Google) don't particularly support one scheme or another, and neither are they very particular about the adherence to a spec. App Store, for example, suggests a roughly SemVer-like format for build versions and Google Play Store is pretty free-form.
:::
