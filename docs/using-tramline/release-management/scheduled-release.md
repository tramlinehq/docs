---
sidebar_position: 15
---

# Scheduled Release

Releases can be configured to run on a pre-defined schedule. You can configure this on the **Advanced Settings** tab of the **Release Settings**.

![Scheduled Release](/img/scheduled-release-config.png)

One use-case for this is to set-up nightly trains that automatically trigger latest dev builds and send them to internal teams on a consistent cadence.

Another common use-case is when teams have a scheduled release window, and want to ensure that the release goes out on time every cycle.

### Automatic Stop on Failure

Tramline, by default, halts the scheduling of an automatic train if the last release failed, but was not explicitly stopped. This is a safety mechanism to prevent a series of failures.

With the option of **Automatic stop on failure** under scheduled releases, Tramline will automatically stop a failed release so that a new one can be scheduled and kicked off. This is useful when you're confident that the failures are one-off and/or you don't want to handhold scheduled releases.

![](/img/scheduled-release-auto-stop.png)

Please note that only releases that in failure state will be stopped. If you have a running successful release, Tramline will start an [upcoming release](/using-tramline/upcoming-release) instead of stopping the ongoing one.
