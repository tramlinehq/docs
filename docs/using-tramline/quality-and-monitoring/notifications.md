---
id: notifications
title: Notifications
sidebar_label: Notifications
sidebar_position: 2
---

Tramline sends notifications for every significant event in your release process to keep you and your team informed about an ongoing release. You can enable notifications in the **Release Settings** tab.

<img src="/img/enable-notifications.png" alt="Enable notifications" width="600"/>

## Advanced configuration

Not everyone in your team is the correct audience for all release-related notifications. Tramline allows you to configure which notifications you want, and what all channels do they need to go in the **Notification Settings** tab for each of your **Release Settings**.

![](/img/notifications-list.png)

This is the the exhaustive list of notifications you can configure:

- **Release Scheduled**: When a release is scheduled.
- **Release Started**: When a new release is started.
- **Workflow Run Failed**: When a workflow run fails.
- **Workflow Run Halted**: When a workflow run is halted.
- **Workflow Run Unavailable**: When a workflow run is unavailable.
- **Build Available**: When a new build is generated.
- **Backmerge Failed**: When the auto backmerge PR creation fails.
- **Internal Submission Finished**: When an internal submission finishes.
- **Internal Release Finished**: When an internal build step finishes.
- **Internal Release Failed**: When an internal build step fails.
- **Beta Submission Finished**: When a beta submission finishes.
- **Beta Release Failed**: When a release candidate step fails.
- **Production Submission Started**: When a production submission starts.
- **Production Submission In Review**: When a production submission is in review.
- **Production Submission Approved**: When a production submission is approved.
- **Production Submission Rejected**: When a production submission is rejected.
- **Production Submission Cancelled**: When a production submission is cancelled.
- **Production Rollout Started**: When a production rollout starts.
- **Production Rollout Paused**: When a production rollout is paused.
- **Production Rollout Resumed**: When a production rollout is resumed.
- **Production Rollout Halted**: When a production rollout is halted.
- **Production Rollout Updated**: When a production rollout is updated.
- **Production Release Finished**: When a production release finishes.
- **Release Health Events**: When a release health event happens.
- **Release Ended**: When the release finishes.
- **Release Finalize Failed**: When the release finalization fails.
- **Release Stopped**: When the release is stopped before finishing.

If you feel that your team doesn't require any notifications, as everyone is already informed through Tramline, you can deactivate all notifications in the **Release Settings** tab.
