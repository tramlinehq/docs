---
sidebar_position: 9
---

# 🌡️ Reldex (Release Score)

Release Score or Reldex – Release Process Index – is a quantitative metric that measures the efficacy of your mobile release process.
Like [Apdex](https://en.wikipedia.org/wiki/Apdex), it breaks down various measurements and insights from your release into a uniform score between 0 and 1.

The final reldex score in and of itself is not particularly meaningful. Its value is in measuring it over time and looking at trends.

:::info
Reldex is not a proxy for “release health” or “product health” – those are best measured via APMs and other observability tooling.
:::

## Breakdown

The release workflow process is broken down into several action components where the process can bottleneck. Examples of such action components are listed in the table:

| Type               | Description                                                                                   | Default Acceptable Range |
| ------------------ | --------------------------------------------------------------------------------------------- | ------------------------ |
| Overall Duration   | number of days from release start (typically code freeze) to 100% rollout of the release      | 14-17 days               |
| Stability Duration | number of days it takes to stabilize the build before submitting it to the stores for review  | 7-10 days                |
| Stability Changes  | number of changes (commits) it took to stabilize the build for release                        | 10-20                    |
| Rollout Duration   | number of days between rollout start and 100% rollout of the release                          | 7-10 days                |
| Rollout Fixes      | the fixes that are done to the release while the staged rollout of the release is in progress | 1-2                      |
| Hotfixes           | the bugfixes that are done to the release after the release has reached all the users         | 0-1                      |

Each component is assigned a weight to determine how much each component adds to the overall score of the release. Each component can also be assigned a tolerable range beyond which they add no value to the release score.

Each component of the release is scored with the following score as per the tolerable range defined for the component:

| Component Value         | Component outcome | Component score |
| ----------------------- | ----------------- | --------------- |
| >= Acceptable Range     | Excellent         | 1               |
| Within Acceptable Range | Acceptable        | 0.5             |
| <= Acceptable Range     | Mediocre          | 0               |

Weightage for a component can be set to 0 to denote no contribution to the overall release score.

We will make more components available to add to the formula as we gather more data and feedback from our users.

## Calculation

The final reldex is calculated as the weighted sum of all component scores.

```
reldex = SUM(component_score × component_weight)
```

The reldex can then be defined as `Excellent`, `Acceptable`, or `Mediocre` as per the thresholds defined by you. In this example, the acceptable range for the reldex is `0.5 - 0.8`.

| Range              | Grade      |
| ------------------ | ---------- |
| reldex >= 0.8      | Excellent  |
| 0.5 < reldex < 0.8 | Acceptable |
| reldex <= 0.5      | Mediocre   |

This is the final grading of the release.

## Configuration

Tramline sets a default configuration for the reldex calculation for each release train.

You can override the default acceptable ranges and weights of the components in the **Configure** section of your train under **Reldex Settings**.

![](/img/reldex-config-tab.png)

:::info
Weightage for a component can be set to 0 to denote no contribution to the overall release score.
:::

You can update the reldex settings at any time and the changes will be reflected in the reldex calculation for all releases (historical and future).

## Use Cases

### Trend Analysis

Track the reldex scores of your releases over time to understand how your release process is evolving.

![](/img/reldex-trend.png)

### Identify Bottlenecks

Identify the components of your release process that are consistently underperforming and need improvement.

![](/img/reldex-score-breakdown.png)

### Process Health

Use the reldex score as a quick indicator of the health of your release process.

![](/img/reldex-indicator.png)
