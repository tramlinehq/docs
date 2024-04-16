---
sidebar_position: 5
---

# Release Health Monitoring

You can configure one or many rules to monitor the health of your release as it is rolled out to your users. Tramline supports several different metric types computed using data from your [monitoring integration](/integrations/monitoring).

The configured rules help you give an immediate, at-a-glance understanding of how your release is doing on the release overview page as it is being rolled out.

![](/img/release-health-overview.png)

You can use this information to make a decision about the rollout increase, decrease, or halt.

Tramline will also notify you any time your defined health metrics fall outside of their thresholds during a release rollout making sure you are always aware of any change in your release health the minute it happens.

## Configuration

The release health rules can be configured in the Configure section of your train unser Release Health.

![](/img/release-health-configuration.png)

Rules can be defined for your train at a platform level if you have a cross-platform app (separate rules for iOS and Android).

Each rule has two components:

1. Trigger conditions – The conditions that trigger the health of the release to switch from healthy to unhealthy. A release is considered unhealthy of any of the configured metrics cross their threshold values.
2. Filter conditions - The conditions that determine when a rule is actionable during the process of the release rollout.

![](/img/release-health-rule.png)

In this example, the Overall Stability rule will be evaluated when the staged rollout of the release has crossed 5% and the adoption rate of the release is above 20%. The release will be considered unhealthy if the session stability is below 99.5% or if the user stability is below 99%.

Tramline fetches the latest metrics from your Monitoring Integration every 5 minutes. On every fetch of the metrics, the rules are scanned and if the rules are actionable (filter conditions pass), they are evaluated to determine the health of the release.

If a rule fails, Tramline creates a release health event for that release and notifies the users that the release has become unhealthy.

A subsequent notification is sent to the users when the health status of the release changes from unhealthy to healthy and so on.

### Supported Health Metrics

1. **Session stability**: Percentage of sessions in this release that have seen at least one unhandled event, it computed with: (1 - (unhandled_sessions_count / total_sessions_count)) * 100

2. **User stability**: Percentage of user sessions with at least one unhandled event, it is computed with: (1 - (accumulative_daily_users_with_unhandled / accumulative_daily_users_seen)) * 100

3. **Error count**: Number of errors that happened in this release

4. **New error count**: Number of errors introduced in this release

### Supported Filter Metrics

1. **Staged rollout**: Percentage of users your release has been rollout out to

2. **Adoption rate**: Percentage (proportion) of sessions that a given release has seen over the last 24 hour period

