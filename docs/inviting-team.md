---
sidebar_position: 7
---

# 👫 Team & Membership

Tramline currently supports inviting new users as either developers or viewers. The primary owner of the organization has roughly the same permissions as a developer in addition to managing billing.

| | Owner | Developer | Viewer |
|-|-------|-----------|--------|
| View all releases | ✅ | ✅ | ✅ |
| View active release | ✅ | ✅ | ✅  |
| View historical releases | ✅ | ✅ | ✅  |
| View DevOps reports | ✅ | ✅ | ✅  |
| Add new apps | ✅ | ✅ | ❌ |
| Manage releases | ✅ | ✅ | ❌ |
| Start a release | ✅ | ✅ | ❌ |
| Trigger workflows | ✅ | ✅ | ❌ |
| Trigger submissions | ✅ | ✅ | ❌ |
| Assign approvals | ✅ | ✅ | ❌ |
| Update approval items | ✅ | ✅ | ✅ |
| Manage release notes | ✅ | ✅ | ❌ |
| Update store rollouts | ✅ | ✅ | ❌ |
| Publish to stores | ✅ | ✅ | ❌ |
| Invite new users | ✅ | ✅ | ❌ |
| Add owner users | ✅ | ❌  | ❌ |
| Manage billing | ✅ | ❌ | ❌ |


## Invite a new team member

To invite a new user, click on the dropdown in the top-right and select Team.

![](/img/organization-settings-dropdown.png)

Under the Team tab, the page lists all your active and invited users. You can add a team member from here.

![](/img/team-members.png)

Enter the email address, select the role, and you're done!

![](/img/add-member.png)

## Removing members

Owners and developers can remove other users from the team. Developers can only remove other developers and viewers. When users are removed, they are soft-deleted or archived and not actually deleted from the system. This is why we avoid the terminology of delete. Pending invites, however, are permanently deleted.

![](/img/team-members-actions.png)

For SSO users, removing a user does not revoke their SSO access from the IdP (identity provider), which means they can always log back in as a viewer. On the flip side, if they are removed from the IdP, they aren't automatically kicked out from Tramline, however, they naturally won't be able to login (and can be cleaned up from Tramline if necessary).

## Internal team management

Tramline can also group members of your org into configurable teams. The teams can ideally represent the actual team names in your organization. When a new users enters Tramline, they can assign themselves to a team and then Tramline auto-buckets them into various DevOps reports and dashboards against the team they belong to. To add a new one, you just need a name and color.

![](/img/team-management.png)

## SSO (Single Sign-On)

If your organization is single-sign-on enabled, under the organization settings, you can find the configured domains and other (view-only) SSO-related configurations:
<p><img src="/img/sso-team.png" width="300"/></p>

Anyone with the linked SSO domain can sign-in as a _viewer_ using [this link](https://tramline.dev/sso/sign_in). The role of the newly signed up user can be edited later by any _owner_ or _developer_ of the organization.

<p><img src="/img/sso-login.png" width="500"/></p>

If you would like to update your organization to have SSO support, [please contact us](/getting-support). SSO is available to all users as an add-on, and does not require the pricing plan to be upgraded.
