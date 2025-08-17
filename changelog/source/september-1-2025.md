---
mdx:
 format: md
date: 2025-09-01T20:00
authors:
  - 'Animesh-Ghosh'
  - 'kitallis'
  - 'sberrevoets'
---

# September 1, 2025

_[Add screenshots here for custom content]_

### Custom content in Slack notifications

Teams can now add custom user-defined content to their Slack notifications, providing additional context and personalized information alongside standard release updates. This enhancement allows release managers to include:

- Additional instructions for testing
- Important notes about the release
- Links to relevant documentation or dashboards
- Team-specific context or reminders
- Tagging specific users or groups about certain release events

_[Add screenshots here for adding user group and channels etc]_

The custom content appears as a separate section in Slack notifications and can be configured per notification type.

Read more about configuring custom notification content → [here](/using-tramline/quality-and-monitoring/notifications#custom-content).

### Flexible release branch names

Release branch naming is now fully customizable with dynamic token substitution. Teams can create branch naming patterns that automatically include contextual information like train names, release dates, and version numbers.

Available tokens include:
- `~trainName~`: The name of the release train
- `~releaseStartDate~`: Date when the release was started/will start
- `~releaseVersion~`: Version name of the release

For example, a pattern like `release/~trainName~/~releaseVersion~/~releaseStartDate~` would generate branch names like `release/production/1.2.0/2025-08-29`.

<details open>
<summary>Improvements and Fixes</summary>

- Enhanced error reporting when App Store rollouts fail to start
- Added automatic retries for release branch creation to improve reliability
- Retries for workflow triggers to handle transient failures for GitLab Pipelines
- Link to Release Activity page on Rollout timeline panel

</details>



<!-- truncate -->

