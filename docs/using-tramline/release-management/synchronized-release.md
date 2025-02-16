---
id: synchronized-release
title: Synchronized Release
sidebar_label: Synchronized Release
sidebar_position: 7
---

![](/img/cross-platform-release-example.png)

For teams with apps built in cross-platform stacks like React Native and Flutter, we now support synchronized release trains across both platforms.

- This allows teams to run their releases from a single branch.
- You get centralized control over both the stores.
- This also ensures all changes get applied to both platforms, but also gives you the nuance to apply selective changes to either platform when needed.

Since there can be cases where there is a drift between what is shipped to one store over another, we also cut platform-specific tags to disambiguate the commits.

If you decide against releasing to both platforms, you can now belatedly mark one platform as finished. This allows the release to proceed without the need to restart the entire release or pause the other platform.
