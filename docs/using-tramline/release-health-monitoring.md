---
sidebar_position: 5
---

# Release Health Monitoring

During the deployment of a release, it's crucial to ensure its health is continuously monitored. This monitoring process involves observing various metrics tracked by a dedicated monitoring tool.

With Tramline, you can configure health rules to check if these tracked metrics cross certain thresholds.

Tramline polls the latest metrics from your [monitoring integration](/integrations/monitoring) every 5 minutes. If any of the metrics fall outside their configured thresholds, Tramline marks the release as unhealthy and sends alert notifications.

These configured health rules help you give an immediate, at-a-glance understanding of how your release is fairing with the users as it is being rolled out.

![](/img/release-health-overview.png)

You can use this information to make a decision about the rollout increase, decrease, or halt.

## Configuration

The release health rules can be configured in the **Configure** section of your train under **Release Health**.

![](/img/release-health-configuration.png)

Rules can be defined for your train at a platform level if you have a cross-platform app (separate rules for iOS and Android).

Each rule has two components:

1. **Trigger events** – The events that trigger the health of the release to switch from healthy to unhealthy. A release is considered unhealthy of any of the configured metrics cross their threshold values.
2. **Filter conditions** - The conditions that determine when a rule is actionable during the process of the release rollout.

![](/img/release-health-rule.png)

In this example, the `Overall Stability` rule will be evaluated when the `staged rollout` of the release has crossed `5%` and the `adoption rate` of the release is above `20%`. The release will be considered unhealthy if the `session stability` is below `99.5%` or if the `user stability` is below `99%`.

On every fetch of the metrics, the rules are scanned and if the rules are actionable (filter conditions pass), they are evaluated to determine the health of the release.

If a rule fails, Tramline creates a release health event for that release and notifies the users that the release has become unhealthy.

A subsequent notification is sent to the users when the health status of the release changes from unhealthy to healthy and so on.

If the filter conditions are not matched, the rule is not evaluated and does not impact the health of the release.

### Supported Health Metrics

1. **Session stability**: Percentage of sessions in this release that have seen at least one unhandled event computed as: `(1 - (sessions_with_errors / total_sessions_count)) * 100`

2. **User stability**: Percentage of user sessions with at least one unhandled event computed with: `(1 - (daily_users_with_errors / total_daily_users)) * 100`

3. **Error count**: Number of errors that happened in this release

4. **New error count**: Number of errors introduced in this release

### Supported Filter Metrics

1. **Staged rollout**: Percentage of users your release has been rollout out to

2. **Adoption rate**: Percentage (proportion) of sessions that a given release has seen over the last 24-hour period

