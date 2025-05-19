---
id: approvals
title: Approvals
sidebar_label: Approvals
sidebar_position: 6
---

Tramline supports an approvals system that allows you to add high-level approvals from various stakeholders for the release.

During a release, the release captain can add tasks to be approved by any set of members in the team. When a task is assigned to a team member, they receive an email notification.

The assignees of the task can mark the task as approved, blocked, or in-progress. The release cannot be sent to the production track on the stores until all the approvals are complete.

![](/img/approvals-release.png)

The release captain can choose to override the approvals for a release. This is useful for rare scenarios where there is an urgency in getting the release to production and the team members are unavailable for the required approvals.

If the override is used, it will be reflected on the release activity page for auditing purposes.

The configuration to enable approvals for the release can be found in the Advanced Settings of the release.

![](/img/approvals.png)

Furthermore, you can add a flag to automatically copy over approval items from the previous release to the next one. This cuts down work for teams who want a similar set of approval items in each release assigned to a bunch of different people.

Even if you don't have the automatic setting on, you can still copy them over from a single click after the release starts.

<p><img src="/img/approvals-actions.png" width="500" /></p>
