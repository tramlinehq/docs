---
id: gitlab
title: GitLab
sidebar_label: GitLab
sidebar_position: 1
---

:::caution
In order to connect this integration, you'll need to be logged in to GitLab as an owner or maintainer of the project where your repository is located.
:::

Navigate to the integrations page for your app and select __GitLab__ under the __Version Control__ section on the page.

![](/img/vcs-integration.png)

When you click the __Connect__ button, you'll be taken through a standard OAuth flow for [GitLab Applications](https://docs.gitlab.com/ee/integration/oauth_provider.html). During this process, you can select one or multiple repositories to grant access to.

## Features

GitLab integration provides the following version control capabilities:

### Automated Release Management
- **Release Branch Creation**: Automatically creates release branches from your main/master branch
- **Tag Management**: Creates annotated tags for releases with proper versioning
- **Release Creation**: Generates GitLab releases with changelog and release notes
- **Branch Protection**: Manages merge request workflows for controlled releases

### Merge Request Automation
- **Auto-merge**: Enables auto-merge for release pull requests when CI passes
- **Assignment**: Automatically assigns merge requests to relevant team members
- **Cherry-pick Support**: Creates cherry-pick merge requests for hotfixes and patches
- **Conflict Resolution**: Handles merge conflicts and provides clear feedback

### File Management
- **Configuration Updates**: Updates version files, changelogs, and build configurations
- **Content Synchronization**: Keeps release metadata in sync across branches
- **Template Support**: Supports custom commit message and merge request templates

### CI/CD Integration
When used with GitLab CI/CD, the integration provides seamless pipeline triggering and artifact management.

## Configuration Requirements

Your GitLab repository should have:

1. **Proper permissions**: The connecting user must be an owner or maintainer
2. **CI/CD enabled**: If using GitLab CI/CD for builds (optional but recommended)
3. **Default branch**: A properly configured default branch (main/master)
4. **Branch protection**: Recommended to protect your main branch with merge request requirements

## Supported Repository Features

- **Public and Private repositories**: Both are fully supported
- **GitLab.com and self-hosted**: Works with both GitLab.com and self-hosted GitLab instances
- **Multiple projects**: Can connect multiple GitLab projects to different Tramline apps
- **Subgroups**: Supports repositories in GitLab subgroups and nested structures

## OAuth Scopes

The GitLab integration requests the following OAuth scopes:
- `api`: Full API access for repository management
- `read_user`: Read user profile information
- `read_repository`: Read repository content and metadata
- `write_repository`: Create branches, tags, and manage repository content

:::info
The integration only accesses repositories you explicitly grant during the OAuth flow. You can modify repository access at any time through your GitLab application settings.
:::

## Troubleshooting

**Connection Issues:**
- Ensure you have owner or maintainer permissions on the repository
- Check that your GitLab instance is accessible from Tramline
- Verify OAuth application settings if using self-hosted GitLab

**Permission Errors:**
- Confirm repository access permissions in GitLab
- Check branch protection settings that might block automated operations
- Ensure API access is enabled for your GitLab instance

**Webhook Failures:**
- Verify webhook URLs are properly configured
- Check firewall settings for incoming webhook requests
- Ensure webhook tokens match between GitLab and Tramline

For additional support, please [contact us](/getting-support) and we'll help you troubleshoot your GitLab integration.