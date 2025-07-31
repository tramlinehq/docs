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

| Notification                        | Description                                                |
|-------------------------------------|------------------------------------------------------------|
| **Release Scheduled**               | When a release is scheduled.                               |
| **Release Started**                 | When a new release is started.                             |
| **Release Stopped**                 | When the release is stopped before finishing.              |
| **Release Finalize Failed**         | When the release finalization fails.                       |
| **Release Ended**                   | When the release finishes.                                 |
| **Release Health Events**           | When a release health event happens.                       |
| **Backmerge Failed**                | When the auto backmerge PR creation fails.                 |
| **Build Available**                 | When a new build is generated.                             |
| **Internal Release Finished**       | When an internal build step finishes.                      |
| **Internal Release Failed**         | When an internal build step fails.                         |
| **Beta Release Failed**             | When a release candidate step fails.                       |
| **Beta Submission Finished**        | When a beta submission finishes.                           |
| **RC Finished**                     | When a release candidate finishes.                         |
| **Internal Submission Finished**    | When an internal submission finishes.                      |
| **Submission Failed**               | When a submission fails.                                   |
| **Production Submission Started**   | When a production submission starts.                       |
| **Production Submission In Review** | When a production submission is in review.                 |
| **Production Submission Approved**  | When a production submission is approved.                  |
| **Production Submission Rejected**  | When a production submission is rejected.                  |
| **Production Submission Cancelled** | When a production submission is cancelled.                 |
| **Production Rollout Started**      | When a production rollout starts.                          |
| **Production Rollout Paused**       | When a production rollout is paused.                       |
| **Production Rollout Resumed**      | When a production rollout is resumed.                      |
| **Production Rollout Halted**       | When a production rollout is halted.                       |
| **Production Rollout Updated**      | When a production rollout is updated.                      |
| **Production Release Finished**     | When a production release finishes.                        |
| **Workflow Run Failed**             | When a workflow run fails.                                 |
| **Workflow Run Halted**             | When a workflow run is halted.                             |
| **Workflow Run Unavailable**        | When a workflow run is unavailable.                        |
| **Workflow Trigger Failed**         | When a workflow trigger fails.                             |
:::tip
If you feel that your team doesn't require any notifications, as everyone is already informed through Tramline, you can deactivate all notifications in the **Release Settings** tab.
:::

## Custom content

:::note
This section is currently only relevant for [Slack](/integrations/notifications/slack) notifications.
:::

Tramline offers adding custom input to each notification, so you can extend it to add additional links, tags users, tag groups, notify the channel and generally tune it to be more personalized. The custom content is appended to the main notification message.

<img src="/img/slack-formatting-example-input.png" alt="Slack formatting input" width="400"/>
<img src="/img/slack-formatting-example-output.png" alt="Slack formatting output" width="600"/>

### Tagging users

To tag a user, you currently cannot just type their name as you would normally do in Slack, like `@user`. Instead, you need to type the user's Slack ID. You can find the Slack ID by clicking on the user's name in Slack and select copy ID from the context menu.

<img src="/img/slack-user-profile.png" alt="Slack User Profile" width="400"/>
<img src="/img/slack-user-copy-member-id.png" alt="Slack User Copy Member ID" width="400"/>

To tag a user, simply type out the user as follows: `<@user-id>`. For example, if you want to tag the user named `kitallis` with the Slack ID `U0123456789` you would type `<@U0123456789>` and it would appear in the Slack message as `@kitallis`.

### Tagging groups

Groups don't have the above limitation, you can simply type out the group name normally, like `@group-name`.

:::info
`@here` and `@everyone` will normally work as well, they don't need any special treatment.
:::

### Linking channels

Linking channels don't have any limitations, you can type out the channel name like `#channel-name`.

### Adding hyperlinks

Adding hyperlinks to notifications can also be normally inserted by just pasting the link in the custom content input. It will get hyperlinked in the notification message.

### Text formatting

The following basic [text formatting](https://slack.com/intl/en-in/help/articles/202288908-Format-your-messages) options are also directly supported:

| Formatting | Description |
|------------|-------------|
| \*bold\*   | Bold text    |
| \_italics\_  | Italics      |
| \~strikethrough\~ | Strikethrough |
| \`code\`     | Code block   |
| \`\`\`text\`\`\` | Multi-line code block   |

Formatting bulleted lists and numbered lists is not supported.
