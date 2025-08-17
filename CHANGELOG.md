# Tramline Changelog

## 0.0.30-5cc56b82 (2025-09-02)

<p>
  <img src="/img/changelog/tramline-mobile-rollout.png" width="400"/>
</p>

### Limited Mobile experience

Tramline now includes dedicated mobile views, making it easier for teams to monitor and manage releases on mobile devices. The mobile experience includes:

**Release List View**: Browse all releases with a mobile-optimized layout

**Release Details**: View release summaries with essential information

**Production Rollout Controls**: Manage rollout percentages and status directly from mobile

This mobile support is particularly valuable for release managers who need to monitor or respond to release issues while away from their desktop. We will continue to add more desktop-like controls to this view in the future. Feel free to reach out if you have any suggestions!

### Cleaner changelogs in notifications

Changelogs sent in notifications are now much cleaner and more focused, with automatic filtering to remove noise from pull requests and irrelevant commits. This enhancement improves the readability of release notes by:

- Excluding PRs and commits that were merged using continuous back-merge functionality from previous releases
- Filtering out merge commits, co-authored-by lines and other distracting details
- Removing emoji characters and standardizing commit message formatting
- Compacting and deduplicating similar commit messages

The result is more scannable logs that focus on the meaningful changes shipped in each release, making it easier for teams and stakeholders to understand what's new.

<details open>
<summary>Improvements and Fixes</summary>

- Enhanced search functionality with improved filtering and results display
- Improved GitLab repository fetching to include all accessible repositories
- Fixed navigation issues when using the back button from Account Settings

</details>

#### Committers: 4

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nilesh GR ([@nileshgr](https://github.com/nileshgr))
- Animesh Ghosh ([@Animesh-Ghosh](https://github.com/Animesh-Ghosh))

<endcommiters/>

## 0.0.29-43080b0c (2025-08-28)

![](../../static/img/changelog/bitrise-pipelines.png)

### Bitrise Pipeline support

Bitrise users can now also use [pipelines](https://docs.bitrise.io/en/bitrise-ci/workflows-and-pipelines/build-pipelines.html) with Tramline. This enhancement provides more flexible workflow management beyond the standard Bitrise workflow configurations.

Pipelines allow teams to:

- Use complex multi-step pipeline configurations
- Have better control on overall status tracking

### Flexible Build Number management

Teams now have full control over how build numbers are managed in their release process. Tramline supports two distinct strategies:

**Internal Management (existing)**: Tramline automatically increments build numbers for each release, maintaining consistency across your release train.

**External Management (newly added)**: Build numbers are expected to be the CI workflow numbers (typically monotonically increasing)

![](../../static/img/changelog/build-number-managed-by-ci.png)

This flexibility is particularly useful for teams with complex versioning requirements or those who prefer to manage build numbers within their existing CI/CD infrastructure.

### Resilient Build discovery

Tramline now Automatically finds builds that were uploaded directly to app stores by CI workflows. This improvement makes the release process more robust when dealing with:

- Build artifacts that weren't properly attached during CI runs
- Direct uploads to Google Play Store or Firebase App Distribution
- Network-related artifact retrieval issues

The system will automatically retry and attempt to locate builds in the target stores, ensuring your release process continues smoothly even when build attachment fails initially.

<details open>
<summary>Improvements and Fixes</summary>

- Improved Firebase build discovery logic during preprocessing phase
- Reduced retry attempts for attaching build artifacts
- Fixed Bitrise integration connection checks to only validate connected integrations
- Better error handling for GitHub parameters that aren't accepted by target workflows

</details>

#### Committers: 2

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nilesh GR ([@nileshgr](https://github.com/nileshgr))

<endcommiters/>

## 0.0.28-74e78486 (2025-08-26)

![](../../static/img/changelog/changes-in-release-slack-linked.png)

### Linked Tickets and PRs in changelog notifications

Changelogs now automatically detect and create clickable links for project management tickets/issues and pull requests mentioned in commit messages sent over Slack. This enhancement makes it much easier to navigate from release notes to the underlying work items and code changes. Supported integrations include:

**Version Control**: GitHub, GitLab, Bitbucket pull requests

**Project Management**: Jira tickets, Linear issues

The feature automatically detects patterns like `PROJ-123` for tickets or `#456` for pull requests and converts them into clickable links that open directly in the respective tools. This can be enabled or disabled per release train based on team preferences.

### New Release notifications

![](../../static/img/changelog/changes-in-release-threads-linked.png)

Both these new notifications have dual-set changelogs that are threaded (after 20 items) into multiple messages.

**Production Rollout Started Notifications**: When a production rollout starts, the changelogs for this release and another set for the current rollout changes (if there are multiple rollouts) are threaded into the notification.

**RC Finished Notifications**: When any RC build is generated and sent to appropriate submissions. Changes since the last RC build and all the changes since the release started are threaded in as well.

Both notifications have linked tickets (Project Management integration should be enabled) and PRs in their changelogs.

### Version Bumping strategies

Teams now have more granular control over version bumping with new strategic options for different release scenarios:

In **Current Version Before Release Branch Cuts**, Tramline will increment the version information in your code before cutting the release branch for a new release.

In **Next Version After Release Branch Cuts**, Tramline will increment the version information in your code after a release branch has been cut and the release has started.

Learn more about version bumping strategies → [here](/using-tramline/release-management/release-settings#automatic-version-bumps).

![](../../static/img/automatic-version-bump-in-code.png)

<details open>
<summary>Improvements and Fixes</summary>

- Added Play Store deep links to RC finished notifications for easier access
- Improved right-side pane behavior to close when clicking outside
- Updated documentation links throughout the application
- Ensured version bump jobs only run for appropriate release strategies

</details>

#### Committers: 2

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nilesh GR ([@nileshgr](https://github.com/nileshgr))
- Animesh Ghosh ([@Animesh-Ghosh](https://github.com/Animesh-Ghosh))

<endcommiters/>

## 0.0.27-fe612327 (2025-08-21)

![](../../static/img/changelog/project-management-integrations.png)

### Linear and Jira integrations for Project Management

Tramline now supports [Linear](https://linear.app/) as a project management integration in addition to [Jira](https://www.atlassian.com/software/jira), expanding the platform's ability to connect with project management tools. This integration provides the foundation for tracking project tickets and linking them to releases.

The project management integrations currently allow for configuration of workspace, issue statuses and release labels (or fix versions).

![](../../static/img/changelog/project-management-config.png)

While this initial implementation focuses on connection and configuration, future updates will expand Linear and Jira support to include automatic issue tracking and linking within releases.

### Enhanced GitLab support

GitLab integration has been significantly improved with added support for GitLab CI/CD and making the VCS integration up to date with the updated features. Key improvements include:

**GitLab Pipelines Support**: Full integration with GitLab's CI/CD pipeline system

**Artifact Processing**: Improved artifact downloading and filtering with optional pattern matching

**Better Error Handling**: More granular error reporting for workflow triggers and pipeline failures

**Cherry-pick PRs**: Ability to cherry-pick commits from the release branch to the working branch

This brings GitLab integration to feature parity with other supported CI/CD platforms like GitHub Actions and Bitrise.

Learn more about setting up GitLab integrations → [here](/integrations/ci-cd/gitlab).

<details open>
<summary>Improvements and Fixes</summary>

- Improved workflow trigger failure handling across all CI/CD integrations
- Added build number display to "Previous Releases" section for better version tracking
- Fixed YAML formatting issue in invitation email templates
- Improved Slack message formatting for publishing review notifications

</details>

#### Committers: 2

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Ben Anderson ([@bagedevimo](https://github.com/bagedevimo))
- Animesh Ghosh ([@Animesh-Ghosh](https://github.com/Animesh-Ghosh))

<endcommiters/>

## 0.0.26-814969eb (2025-08-19)

![](../../static/img/changelog/release-specific-channels.png)

### Release-Specific notification channels

Teams can now create dedicated Slack channels for individual releases, providing focused communication spaces for each release cycle. Key features include:

**Creation**: Channel is created with sanitized names including app, platform, and version

**Context**: Each channel is specific to a single release, reducing noise and improving focus

**Configuration**: Can be enabled per release train based on team preferences

This feature is particularly valuable for teams managing multiple concurrent releases or those who prefer dedicated communication channels for major releases.

### Advanced Tagging scenarios

Tramline now supports much more flexible tagging strategies to accommodate different team workflows and release processes. Teams can configure exactly when and how tags are created throughout their release lifecycle:

**End-of-Release Tagging**: Cut tags only when releases complete (with optional GitHub release)

**Rollout-Based Tagging**: Cut tags when rollouts start (with optional GitHub release)

**Platform-Specific Tags**: Include platform suffixes for cross-platform apps (like `-ios` or `-android`)

![](../../static/img/changelog/advanced-tagging-scenarios.png)

These options give teams fine-grained control over their tagging strategy, supporting everything from simple end-of-release tags to complex multi-platform, multi-rollout scenarios.

<details open>
<summary>Improvements and Fixes</summary>

- Enhanced Bitbucket workflow stage halting capabilities
- Added support for APK uploads to Play Store with feature flag control
- Improved artifact attachment reliability across all platforms
- Fixed integration connection checks to properly ignore disconnected integrations
- Added confirmation dialog before refreshing Slack channels
- Implemented asynchronous CI/CD workflow list refresh functionality

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nilesh GR ([@nileshgr](https://github.com/nileshgr))
- Samrat Man Singh ([@samrat](https://github.com/samrat))

<endcommiters/>

## 0.0.25-8da9be (2025-06-11)

![](../../static/img/changelog/version-bumps.png)

### Automatic version bumps

Up until now, to manage build coordinates (version name, build number) Tramline would send over the right values to the triggered workflows so that the correct build could be generated; this ensures that Tramline is always the source of truth for version management.

However, this system has a limitation. It makes tracking the versions in the source a bit hard. One either has to write the version names manually to the build files like `build.gradle`, `pubspec.yaml` etc or maintain a script that reads the values sent by Tramline and then run some script to do it.

Tramline now introduces two version bumping strategies that automatically create a PR to write the versioning info against some supported build files.

1. Current version (to working branch) before release branch is cut
2. Next version (to working branch) after the release branch is cut

The following build files are currently supported:

- `build.gradle` (gradle)
- `build.gradle.kts` (gradle with Kotlin)
- `plist` (for iOS)
- `pbxproj` (for iOS)
- `pubspec.yaml` (for flutter)

We will continue to extend this feature to add support for more file types, custom versioning files and more granular strategies in the future.

### Branch prefixes

Quick quality-of-life improvement, you can now add prefixes to some of the automatic branches we create from Tramline. `<prefix>-version-bump` or `<prefix>-patch-main`. Note that prefix or any branch name modification is not supported for the release branches themselves currently.

### Fixing Releases on GitHub

![](../../static/img/changelog/fixed-github-releases.png)

For GitHub VCS integrations, when we cut tags related to the releases, we also allow creating GitHub Releases against them. Previously, this experience was sort of broken because the GitHub API to create tags with releases is unreliable. It often internally blows up if the changelog for the release is too big (to workaround this, we would send Tramline's own copy of the changelog). Secondly, it also isn't very predictable in terms of the two tags it picks for the changes. Sometimes the previous tag picked is arbitrarily quite far back in time.

We've fixed these longstanding issues and now always generate the correct changelog between the correct tags and retain the formatting style of the changelogs from GitHub.

<details open>
<summary>Improvements and Fixes</summary>

- Hide previous releases paginator if there are too few releases to show
- Add confirmation message before refreshing Slack channels
- Allow resubmitting the same iOS build again
- Show search results in reverse chronological order

</details>

#### Committers: 2

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nilesh GR ([@nileshgr](https://github.com/nileshgr))

<endcommiters/>

## 0.0.24-2f5466 (2025-05-10)

![](../../static/img/changelog/search-releases-banner.png)

### Search through releases

Being able to find a needle in the stack of all your releases from the past has been a highly requested feature, and we're excited to ship the very first cut of this. You can simply press `/` anywhere on the Tramline dashboard and it will take you to the search page. This search page now also engulfs the previous (and limited) search functionality around finding builds against the versionCode and/or versionName.

It's a powerful way for developers to find the release that shipped a particular feature or bug. We search through commits, authors, pull requests, labels, ticket numbers and map that onto the release they went out in. This is otherwise tricky to do manually via Git or Git interfaces without diligent and extensive annotation and tagging of changes. Since Tramline is a system of record for everything about releases, this is a big (free) unlock.

For example, you remember a tidbit of a feature or bug, say the word, <mark>"highlight"</mark>. You've forgotten the context and the details of the feature, so you just search for the term and you'll see all the pull requests and commits that match, narrowed down to the release in which they were first introduced.

![](../../static/img/changelog/search-releases.png)

This is a powerful debugging and auditing tool that doesn't require any extra state management in source control or sifting through changelogs on Slack.

### Skip the next scheduled release

<p>
  <img src="/img/changelog/scheduled-release-skip.png" width="400"/>
</p>

A quick quality-of-life enhancement for scheduled release users, allowing you to skip just the next upcoming release (not the future ones). This is actually helps cover up a lot of existing limitations with automatic scheduled releases:

1. You can skip, cram more work in the last moment and then release it later manually
2. You can skip, and release a major version, since scheduled releases only bump up minor
3. You can skip, and forego that week's release, for when there are short holidays and such

This is different from the current "deactivate" functionality, that disables all the scheduled releases and the entire release train indefinitely.

### VCS integrations can be disconnected

<p>
  <img src="/img/changelog/disconnect-vcs.png" width="400"/>
</p>

VCS providers don't really change that often, but this feature is particularly useful when you're changing accounts within the same VCS provider, for example, you're moving from a regular GitHub account to an enterprise account, or if you're using Bitbucket, and you're switching the owner of the integration to be a different user, you can simply disconnect the current integration and reconnect it in the new way. This does not affect the state or data of any of the previous releases against the previous integration.

### Workflow triggers gracefully fail

Tramline so far, has always synchronized the state of the workflows that generate different types of builds. But sometimes, especially when initially setting up the release, workflow failures can be a bit of a pain to debug. Errors such as missing `workflow_dispatch` configs, invalid input parameters, etc., are now clearly surfaced on the dashboard.

<details open>
<summary>Improvements and Fixes</summary>

- Increase the max number of pages for fetching repositories in Bitbucket
- If a PR closes during a Tramline-attempted merge, accept and move on
- Allow resubmitting the same iOS build again
- All input selections now have an upper limit of 100 items

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Samrat Man Singh ([@samrat](https://github.com/samrat))
- Nilesh GR ([@nileshgr](https://github.com/nileshgr))

<endcommiters/>

## 0.0.23-2f5466 (2025-02-18)

![](../../static/img/changelog/reuse-integrations.png)

### Reuse Integrations across apps

Tramline now allows reusing integrations from other apps in your organization, and also from within the same app. For teams with multiple apps, access to third-party integrations like Slack and GitHub are often not accessible to the user setting up the app on Tramline. If multiple apps use the same underlying integration, you should now no longer be blocked on your Ops/Support teams for access.

<p>
  <img src="/img/changelog/reuse-integrations-github-example.png" width="400"/>
</p>

:::info
If you only have one app, you can still reuse integrations across some categories. For example, you can reuse GitHub for both Version Control and CI/CD.
:::

### Better editing experience for Release Notes

![](../../static/img/changelog/release-notes-enhancements.png)

The validations on iOS are much more strict and the error messages are clearer. Emojis and various other character rules are now disallowed, including the `<` character in particular.

Each input field: _Release Notes_, _Promo Text_ and _What's new_ now have character count hints at the bottom. The input does not disallow adding more, but only hints at trimming down so you can rewrite as necessary. Additionally, the input areas now also auto-resize as you type.

### Custom parameters for workflows

For both Internal and RC workflows, you can now add custom parameters that get passed to the workflows or jobs triggered by Tramline. These can be set in the submission settings. This is helpful when you have the same workflow doing different things based on external parameters, e.g. making a staging build and production build from the same workflow file.

![](../../static/img/changelog/workflow-params.png)

:::info
These do not affect the default workflow parameters that Tramline already sends for `versionCode`, `versionName`, `commitRef` etc.
:::


:::info
Ensure that you gracefully accept the custom workflow parameters in your workflow job, otherwise the workflow trigger could fail.
:::

<details open>
<summary>Improvements and Fixes</summary>

- Paginate the historical releases
- Reduce fetch frequency of release metrics from Crashlytics
- Fetch release metrics from Crashlytics only after rollout start
- Avoid fetching release metrics for stale production releases
- Better notification messaging for when the release ends
- Allow retries for failed rollouts for Google Play Store
- Avoid "Edit has been deleted" errors from Google Play Store
- Open up view-only access to configuration screens for viewers

</details>

#### Committers: 4

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Samrat Man Singh ([@samrat](https://github.com/samrat))
- Nilesh GR ([@nileshgr](https://github.com/nileshgr))

<endcommiters/>

## 0.0.22-b9fd35 (2025-01-20)

<p>
  <img src="/img/changelog/calver-banner.png" width="600"/>
</p>

### CalVer 📅

In addition to a SemVer-like versioning scheme, we now also support a calendar-based versioning scheme. Stores (both Apple and Google) don't particularly support one scheme or another, and neither are they very particular about the adherence to a [spec](https://semver.org). App Store, for example, suggests a roughly SemVer-like format for build versions and Google Play Store is pretty free-form.

Since Tramline automatically manages versions for you, we categorize them into specific versioning schemes so that the increments are predictable.

For example, In SemVer, we allow the following versions:

✅ Allowed
```
1.2.0
4.2.1
16.9
```

❌ Invalid
```
1
1.2.3.4
1.02
```

With **CalVer**, we use the following scheme:

```
YYYY.0M.0D0N

YYYY = Full-year
0D = Zero-padded day
0M = Zero-padded month
0N = Zero-padded sequence number
```

✅ Allowed

```
2025.01.20
2022.02.01
```

❌ Invalid

```
25.1.20
25.1.32
2025.1.1
```

![](../../static/img/changelog/calver-setup.png)

The sequence numbers are used to track patch updates. For example, if you start rollout on `2025.01.20` to the store, but you add a patch update before it completes, the next version will be `2025.01.2001`.

### Manual retries for submissions 🔁

![](../../static/img/changelog/manual-retry.png)

We now **finally** support retrying failed submission for any submission channel. This is a highly requested feature, but due to the complexity of tracking resumability of different submission states, we delayed it until we got it right. For most known issues or one-off errors, we already internally retry. But now it should be possible to manually retry issues that escape our internal error handling or automatic retries.

### Build suffixes for Android builds 🪜

<p>
  <img src="/img/changelog/build-suffix.png" width="500"/>
</p>

When configuring submissions, you can now add a suffix to the version name that is assigned to the build. This is useful for segregating build versions (and release names) clearly in different submissions channels like Firebase / Play Store.

For example, if you setup a suffix `staging`, the version name will become `1.0.0-staging`.

### Archiving team members and invites 🗑️

![](../../static/img/changelog/delete-members.png)

Previously, owners could only edit roles of team members, now they can also remove them. When users are removed, they are soft-deleted or archived and not actually deleted from the system. This is why we avoid the terminology of _delete_. Pending invites, however, are permanently deleted.

For SSO users, removing a user does not revoke their SSO access from the IdP (identity provider), which means they can always log back in as a viewer. On the flip side, if they are removed from the IdP, they aren't automatically kicked out from Tramline, however, they naturally won't be able to login (and can be cleaned up from Tramline if necessary).

<details open>
<summary>Improvements and Fixes</summary>

- Fix bug that disallowed role change for SSO users
- Allow automatic scheduled releases to start upcoming releases
- Show a snapshot of recent events in pre-prod releases
- Finalizing a release should only check for PRs created by Tramline

</details>

#### Committers: 4

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Samart Man Singh ([@samrat](https://github.com/samrat))
- Shivam Singhal ([@shhivam](https://github.com/shhivam))

<endcommiters/>

## 0.0.21 (2024-12-30)

<p>
  <img src="/img/changelog/firebase-crashlytics.png" width="600"/>
</p>

### Release Health Monitoring – Firebase Crashlytics

Tramline [continously monitors](/using-tramline/quality-and-monitoring/release-health-monitoring) the release health of an app by listening to signals and metrics from dedicated monitoring tools and condensing them down through a release lens. Along with Bugsnag, we now also support Firebase Crashlytics.

This integration works by internally [integrating](/integrations/monitoring/crashlytics) with two tools: Google Analytics and Crashlytics itself.

Crashlytics by itself isn't feasbile for calculating aggregate stats like crash-free rate or adoption rate, because it only contains info on unhealthy sessions; without info on healthy session stats, there is no denominator for crash-free rates or adoption. This denominator is pulled from Google Analytics.

This feature is in beta as we're still collecting feedback and data from our users and will be publically available early next year.

### Copy approvals from previous release

![](../../static/img/changelog/copy-approvals.png)

We have extended our [stakeholder approvals](/changelog/november-12-2024#approvals) feature to now automatically copy over approval items from the previous release to the next one. This cuts down work for teams who want a similar set of approval items in each release assigned to a bunch of different people.

Even if you don't have the automatic setting on, you can still copy them over from a single click after the release starts.

### Combine commits in a single push in patch PRs

<p>
  <img src="/img/changelog/pending-backmerges.png" width="600"/>
</p>


When creating [patch PRs](/changelog/september-8-2023#continuously-backmerge) (for continuous backmerges), Tramline now combines all the commits from a single git push (to the release branch) in a single pull request. This reduces the number of changes that need to be reviewed and merged, and cuts down on general PR noise.

### Auto-retry merge failures for pull requests

<p>
  <img src="/img/changelog/unable-to-merge.png" width="400"/>
</p>

For all kinds of pull requests in Tramline, namely:

- Pre-release pull requests (before release starts)
- Continuous backmerge pull requests or "patch PRs" (release ongoing PRs)
- Post-release pull requests (after release is completed)

Whenever Tramline creates these, we always try to merge them right after. Apart from merge-conflict related reasons, we are often unable to merge because of various pre-merge checks. For some VCS integrations (like GitHub), we handle this gracefully by enabling post-check auto-merges. But in cases where that's not possible, Tramline now continously tries to merge until checks pass. So if there's a human or bot dependency that's blocking the merge from immediately happening, the merge from our side is still largely hands-free.

For conflict related errors, Tramline clearly marks those PRs on the dashboard as such so that they can be manually resolved.

### Allow fixed build version for releases

![](../../static/img/changelog/fixed-version.png)

This is useful for non-production / nightly releases where you don't care about the actual version name (like 1.2.3), you just need to generate and distribute new builds. Turning this on will fix the version name across all releases for a train. Note that this does not affect the version codes, they get bumped normally as expected.


<details open>
<summary>Improvements and Fixes</summary>

- Add rollout percentage to store version APIs
- Remove all previous code from before a major Tramline rehaul
- Run specs on docker
- Improve page titles
- Allow upcoming releases to start when rollouts are paused in the current
- Handle CRLF/LF in release notes consistently
- Paginate Bitbucket APIs when listing repos
- Handle lack of millisecond-precision for multi-commit git pushes

</details>

#### Committers: 4

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Majji Kishore ([@majjikishore007](https://github.com/majjikishore007))
- Guru Pratap ([@gurupratap](https://github.com/gurupratap))

<endcommiters/>

## 0.0.20 (2024-11-27)

![](../../static/img/changelog/cascading-rollouts.png)

### Cascading rollouts

With Google Play Console, when you update your rollout to a 100%, it is not possible to halt it, even if in reality the actual rollout hasn't farmed out to all of the 100% of users yet.

For example, if you have 100 users, and your rollout sequence is 10%, 50% and 100%, and once you actually move the rollout to 100%, it is possible that number of users/sessions that actually receive the update is still much less than 100. Since a halt isn't possible on the Play Console at 100%, teams usually have a workaround to release to 99.9%. This allows them to halt the rollout until as late as possible.

Tramline now natively supports this process; you can set your rollouts to be **cascading**, which will only rollout to 99.9% (or your final rollout value of choice) and _prevent_ you from starting the rollout of the next release until the previous one is moved from 99.9% to a 100%.

This entire flow is managed and prompted through appropriate callouts and actions during the release process.

### Continuous backmerges without cherry-picks

every commit. However, this method is unfortunately integration-specific, as not all VCS providers support cherry-picking through APIs.

![](../../static/img/changelog/cont-backmerge-bitbucket.png)

Specifically, Bitbucket doesn't support cherry-picks or even mimicking a cherry-pick, so we do the following:

- Create new patch branches, like `patch-main-afddfcd` from the release branch for every new commit
- Try and merge the patch branches to the `main` (working branch) via a pull request

In this mode, subsequent patch branches could have more than one commit, if the previous ones are unmerged. So we recommend merging everything as soon as possible and in the correct order to avoid confusion.

### Re-fetch workflow status

<p>
  <img src="/img/changelog/refetch-build-status.png" width="600"/>
</p>

Until now, Tramline allowed you to re-trigger workflows if there was a failure in the runs. Now, additionally, you can simply re-fetch the status of the workflow run instead of retriggering. This is especially helpful when you don't want to retrigger the entire workflow but can just re-run the specific failed jobs and have them sync on Tramline.

<details open>
<summary>Improvements and Fixes</summary>

- Stricter validation for release notes for each platform
- Submission configuration is now optional for internal testing
- Do not auto-stop a scheduled release on post-release failure
- Do not allow -ve values in reldex computation
- Allow a different set of supported languages for Android and iOS
- Truncate commit messages in notifications to adhere to Slack limits
- Notifications around internal submissions finishing
- Generally nicer cues for showing progress in live release
- Optimize load times for the Release Activity page

</details>

#### Committers: 2

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))

<endcommiters/>

## 0.0.19 (2024-11-12)

![](../../static/img/changelog/approvals-blocked.png)

### Approvals

Tramline now has an approvals system that allows you to add high-level approvals from various stakeholders for the release.

During a release, the release captain can add tasks to be approved by any set of members in the team. When a task is assigned to a team member, they receive an email notification.

![](../../static/img/changelog/approvals-live-release.png)

The assignees of the task can mark the task as approved, blocked, or in-progress. The release cannot be sent to the production track on the stores until all the approvals are complete.

The release captain can choose to override the approvals for a release. This is useful for rare scenarios where there is an urgency in getting the release to production and the team members are unavailable for the required approvals.

If the override is used, it will be reflected on the release activity page for auditing purposes.

The configuration to enable approvals for the release can be found in the **Advanced Settings** of the release.

### Edit roles of team members

You can now edit the roles of your team members in the team section of the **Organization Settings** page.

<img src="/img/changelog/edit-roles.png" width="300"/>

The owners and developers in the team can edit the roles of the developers and viewers, respectively.

This is especially useful for teams with SSO enabled. With SSO, any member of your organization can log in to Tramline as a viewer. You can choose to change the role of the user to the most appropriate one once they have joined your team in Tramline.

### Re-use the same integration for multiple categories

You can now re-use the same integration for multiple categories. This reduces the number of connections required for onboarding a new app.

![](../../static/img/changelog/integration-reuse.png)

<details open>
<summary>Improvements and Fixes</summary>

- Enhance FAD build upload check to search by build number and version name
- Auto-detect file extension for build archive files when not provided
- Send branch context to Bitbucket when triggering pipeline for commit
- Ensure submissions get picked up in the correct order
- Set the app time zone correctly on the live release pages
- Fix default production submission config for Android
- Fix resume action for app store rollout
- Handle a phased rollout on the App Store when it's already complete
- Pick active locales only from the production track for Play Store
- Fix "changes since previous" to handle unapplied commits
- Add missing locale string for rollout getting updated
- Add a warning to show until which release step the notes can be edited
- Fix health metric jobs to stop fetching after the monitoring period

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))

<endcommiters/>

## 0.0.18 (2024-10-13)

![](../../static/img/changelog/live-release.png)

### The work pane (live release page)

Tramline is conceptually a relatively rare paradigm of DevTools. Other "release management" DevTools on the server-side like Heroku can operate more or less solely through a CLI. For most teams, Tramline is a high-touch tool where a lot of people end up collaborating. It is as much a GitHub as it is a Heroku.

This is why a more-than-default thoughtful design is necessary for Tramline. It is important so that people can get used to the "right flow" for releasing apps.

From this lens, we've made two broad changes.

1. Porting our [design](/changelog/march-25-2024) over to the "work pane"
2. Simplifying the building blocks for configuring a release

#### Layout & design

The work pane is auto-structured into four main sections:

<p>
<ins>Overview:</ins> Issue tracking, changeset tracking and the homepage for the Release Captain.
</p>

<p>
<ins>Stability:</ins> Internal builds, Release Candidates, testing.
</p>

<p>
<ins>Metadata:</ins> Dedicated space for updating notes, store metadata and screenshots.
</p>

<p>
<ins>Store Release:</ins> Managing reviews and rolling out to production.
</p>

Previously, the work pane was one giant page, and even though there's some value in everything in one single page; it is a nightmare of information architecture and page load times. More specifically, categorizing them allows us to clearly differentiate historical state, present state and future state across different events.

#### Improved UX around app submission

Because the design allows for more breathing room, we can focus on individual aspects of the release a bit better.

For example, there's a lot more control around app submission. You can cancel a running review in progress and you can also replace the build for an existing review with a new one or a previous valid one.

<p>
  <img src="/img/changelog/change-build.png" width="500"/>
</p>

Similarly when rolling out, the entire page doesn't get filled with a lot of rollout data, there's a dedicated place for it:

<p>
  <img src="/img/changelog/new-rollout.png" width="500"/>
</p>

#### Not just tabs

<p>
  <img src="/img/changelog/live-release-tabs.png" width="200"/>
</p>

The tabs are alive — they always track the current state of that section — whether it's in progress, completed or pending. They also automatically get switched over to the most important tab in the current release and they disappear if they aren't necessary to the current release.

#### Configuring the release

We have now thrown away all the bloated abstractionware of *Steps* and *Deployments* and instead we just deal with **Submissions**. The interface to configure them is a single pane to setup everything about your release and will continue to grow down this path.

![](../../static/img/changelog/live-release-configure.png)

Trying to be clever with our release abstractions and modeling them after CI/CD pipelines was a mistake. We now model things around actual user patterns.

### Support for multi-locale release metadata

We now also support updating multiple languages for the release notes. When you start your release we pick up your last updated release notes, which you can edit before release.

On top of this, we also support updating multiple languages for both iOS and Android (for cross-platform apps) from the same place!

![](../../static/img/changelog/multi-locale-release-notes.png)

### Remove Slack as a submission integration

Slack was previously available as a submission integration so that you could send builds to a channel. This is [still supported](/changelog/april-22-2024#attach-builds-with-slack-notifications), but as a part of the notification configuration itself.

We've been [wanting to make this change](https://github.com/tramlinehq/tramline/issues/448) for a bit because it makes the purpose of each category very clear. Integrations that distribute should be integrations where the primary purpose is to distribute, it's not enough that they can optionally help distribute. Slack is foremost a team chat tool, and file server later.

This is only applicable to new apps, existing apps with Slack as a submission integration will be gracefully ported over.

### App Variants with their own integrations

![](../../static/img/changelog/app-variants-2.png)

Late last year, we added support for adding multiple bundle identifiers within a single primary app [under App Variants](/changelog/december-21-2023#app-variants). This helps support flavors of the same app being distributed to different submission channels. We've gone a step further, and allow configuring a different account/integration altogether rather than just using the existing primary app integrations.

![](../../static/img/changelog/app-variants-account-firebase.png)

:::note

App Variants still only support Firebase App Distribution at the moment. We will be adding more integrations in the future.

:::

<details open>
<summary>Improvements and Fixes</summary>

- Ensure all API-call based user actions are async
- Fix UI issue around showing 100% rollout correctly for non-staged rollouts
- Ensure there are valid build workflows available before allowing train creation
- Fix the password reveal toggle in the signup form
- Show a generic flash message instead of a full 500 page
- GitHub release notes are now well formatted and respect automatic notes
- Dockerize the entire dev setup

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))

<endcommiters/>

## 0.0.17 (2024-09-17)

<img src="/img/changelog/bitbucket.png" width="500"/>

### Bitbucket support

We now support Bitbucket both as a VCS and a build server integration. As with other integration categories, Bitbucket falls neatly in our abstractions but with two primary exceptions.

First, Bitbucket doesn't allow us to pull builds from pipelines directly. You can upload them to the Downloads section for your repo via the [upload-file](https://bitbucket.org/atlassian/bitbucket-upload-file) pipe. We will soon release a custom pipe that wraps this and makes setting everything up even simpler.

<p>
  <img src="/img/changelog/bitbucket-downloads.png" width="400"/>
</p>

Second, Bitbucket doesn't provide us a way to cherry-pick commits (either manually or automatically) from the API, so [continous backmerges](/changelog/september-8-2023#continuously-backmerge) are currently turned off for this integration. We'll push an update as soon as we have a way around this.

That's it! The rest works precisely as Tramline is meant to work.

### SSO improvements

1. If you're an SSO-enabled org, you now don't need to invite viewer users, all SSO users can self-join automatically as viewers. For write-enabled (developer) users, you would still need to go through the invite flow as usual.

2. Until now, you could have both email-based authN and SAML-based authN working together. Now, if you're an SSO-enabled org, no other auth mechanism is allowed.

<details open>
<summary>Improvements and Fixes</summary>

- Improve integration/config onboarding wizard
- Add a banner to prompt users to complete their profile
- Handle new Play Store errors – foreground services and account issues
- Handle unauthorized errors from App Store properly
- Allow internal testing releases when app is in draft mode
- Allow hotfix for a cross-platform app when one platform has started rollout

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Prabhanshu Gupta ([@prabhanshuguptagit](https://github.com/prabhanshuguptagit))

<endcommiters/>

## 0.0.16 (2024-08-03)

![](../../static/img/changelog/sso.png)

### Single Sign-On Support 🔑

SSO (via SAML) is now available as an authentication method in Tramline. Once enabled, all users in the organization will be required to sign in using the SSO provider.

To simplify the setup and management of SSO, we use a third-party auth service provider. However, we continue to maintain our existing email/password login natively, i.e, without relying on any third-party dependencies. This allows open-source users to self-host Tramline without the need for setting up additional accounts outside.

With this, the user access management to Tramline can be centrally managed by companies and their IT teams. This is a big step for Tramline towards supporting enterprise organizations!

### New Reldex components 📊

We [rolled out Reldex](/changelog#introducing-reldex-release-process-index-) to all users in our last major release. We have since added a few more optional components to the Reldex score:

#### Days since the last release

The number of days since the last release to production was made. This is a good indicator of how much you are sticking to your regular release cadence. This is an indirect measure of drops in your deployment frequency.

#### Number of rollout changes / patch fixes

Tramline classifies changes in the following ways:

- **Stability changes**: changes on the release branch during the testing phase
- **Patch fixes**: changes after the rollout to production has started
- **Hotfixes**: special releases made after the rollout to production has completed

This component now takes the "Patch fixes" into account separately, along with Stability changes and Hotfixes.

### Patch-version bumps across releases 🤛

You can now configure your release train to only bump the patch version across new releases. This is especially helpful for daily/weekly scheduled releases, where you don't want too many minor version bumps constantly as each subsequent change is likely trivial.

![](../../static/img/changelog/patch-only.png)

### Upcoming release without internal builds 🚂

The [upcoming release feature](/changelog/september-8-2023#prepare-an-upcoming-release) is now available for release trains that directly ship to beta/production (without any internal builds). This allows you to prepare the next release while the current one is still in progress. This is especially useful for teams that have a long beta period and want to get a head start on the next release.

<details open>
<summary>Improvements and Fixes</summary>

- Add Indian+Indonesian languages to list of locales for release notes
- Gracefully handle lack of apps in iOS or Android projects on Firebase
- Handle double-quotes inside build notes when distributing

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>


## 0.0.15 (2024-05-12)

<img src="/img/changelog/reldex-breakdown.png" width="500"/>

### Introducing Reldex (release process index) 📊

We are excited to introduce Reldex, a new metric and scoring mechanism that helps you understand the efficacy of your release process.

It combines various signals like release duration, hotfixes, time taken to rollout, and fixes during stabilization to give you a single score (between 0 and 1) that represents an overall quality of the delivery process.

This is different from the post-release [monitoring of the health](/changelog/april-22-2024#release-health-rules-and-alerts) of a release based on signals from APM and monitoring tools. Reldex measures everything before or during delivery, rather than the stuff after the release has been rolled out.

<p>
  <img src="/img/changelog/reldex-trend.png" width="600"/>
</p>

Reldex is enabled by default and available to all users, both free and paid. You should already be seeing this score show up on your dashboard. It comes pre-configured with some sensible defaults, but you can fine-tune it based on how you want to weigh and prioritize the importance of each of the signals. Read more about Reldex → [here](https://docs.tramline.app/reldex).

### Allow continuous scheduling despite previous failures 🚲

<p>
  <img src="/img/changelog/auto-stop-scheduled-release.png" width="400"/>
</p>

Tramline currently halts the scheduling of an automatic train if the last release failed, but was not explicitly stopped. This is a safety mechanism to prevent a series of failures.

With the new option of **Automatic stop on failure** under scheduled releases, Tramline will automatically stop a failed release so that a new one can be scheduled and kicked off. This is useful when you're confident that the failure was a one-off and/or you don't want to handhold scheduled releases.

### Less noise when generating automatic tester notes 🎧

When generating automatic commit-based tester notes, we now only consider the first parent when encountering a merge commit. Since Tramline doesn't actually checkout code, we manually [simulate](https://git-scm.com/docs/git-log#Documentation/git-log.txt---first-parent) `git log [range] --first-parent` to get the correct set of commits needed to generate the appropriate notes.

<details open>
<summary>Improvements and Fixes</summary>

- Auto-populate release notes from previous release for a new release
- Add a note about Slack file upload requiring Tramline to be invited to channel
- Ensure that GitHub integration exists with a mandatory `installation_id`
- Show the last 15 releases on the team page instead of 10
- Add checks for duplicate-actions for all phased rollout related triggers

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.14 (2024-04-22)

![](../../static/img/changelog/unhealthy-release-slack.png)

### Release health rules and alerts

We have introduced release health definitions to the Tramline release workflow. You can now configure multiple rules to monitor the health of your release as it gets rolled out to users.

Choose from a set of available health metrics and set thresholds for their healthiness per your own release quality benchmarks and historical data.

<img src="/img/changelog/release-health-rules.png" width="400"/>

Once you define what makes your release healthy, Tramline will continuously monitor the health status of your release and notify you as it changes so you can take immediate action.

You can make an informed decision to halt the current rollout or resume it as your release health changes. In the future, we will automate the halt and acceleration of the rollout based on these rules.

![](../../static/img/changelog/release-health-overview.png)

Read more on how to configure these rules in the [docs](https://docs.tramline.app/using-tramline/release-health-monitoring).

### Attach builds with Slack notifications

When a new build is available to download from Tramline, we now attach the build to the Slack notification where it can be directly downloaded for testing or other purposes.

### User settings page

<img src="/img/changelog/user-settings.png" width="600"/>

In the user settings page, users can set the team they belong to in an organization, add/update their GitHub login so their work is correctly attributed for a release, and change their name as well as their preferred name.

### Handle resubmission from the App Store dashboard

When your Apple review gets rejected, Tramline now continues to poll and sync the status of the store version to ensure that the release dashboard shows the changes in review status happening outside of Tramline due to resubmission of the same build or messages back and forth with the review team.

<details open>
<summary>Improvements and Fixes</summary>

- Add missing help texts to all charts
- Reduce the load time of the notification settings page
- More frequent scheduling of scheduled releases
- Add better CTA on stats cards on the release overview page
- Remove hotfixes from DevOps charts where they show up as anomalies
- Allow some more valid special characters in release notes
- Wider layout and design elements consistency and improvements

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.13 (2024-03-25)

![](../../static/img/changelog/new-ui-release-overview.png)

### Introducing a design system

Over the past few months, we've been steadily improving our user experience and we've now rolled out a new version of our interface to all users 🚀

Tramline is an interaction-heavy, information-dense, multi-stakeholder system with entirely novel abstractions. Keeping that in mind, our decisions, in summary, were guided by the following principles:

1. A design system with as _few_ foundational components as possible
2. Minimal navigational overhead containing users into only two "work" related pages
3. Well-defined color palette, but with judicious use of colors
4. Consistent typography, iconography, borders and spaces
5. Configuration forms serving both as inputs and information guides
6. Tabs with lazy loaded content wherever multi-page navigation is required
7. Liberal use of modals for smaller forms, and infrequent interactions
8. Smaller font sizes and denser layouts, with liberal use of tooltips for explanations

For the last year or so, our UI has been accretive, organic, repetitive and as a result: all over the place. This is an attempt to take a step back, collect all the feedback and visually reorganize Tramline from the ground up.

<figure width="100%" height="100%" style={{padding: '0.5em', border: '1px solid #ccc'}}>
  <video width="100%" height="90%" style={{padding: '0.2em 0.2em'}} autoPlay loop controls>
    <source src="/img/changelog/new-ui.webm" type="video/webm"></source>
    Unsupported Browser
  </video>
  <figcaption style={{fontSize: '12px', fontStyle: 'italic'}}>Tramline previously, to now.</figcaption>
</figure>

Tramline's engineering is just a couple of folks (just one for the first half!), so we were able to go a long way without a proper system in place. But since a lot of our engineering principles have reached solid state, we felt the design needed to do the same so that we can continue to ship really fast.

The new system hasn't taken over the entire application yet, but we are planning to ship all of it in the next couple of months.

Stay tuned for an in-depth post on our [blog](https://www.tramline.app/blog) where we'll dive into the details!

### Changes between store versions

![](../../static/img/changelog/changes-since-last-submission-1.png)

All builds or versions making their way to the store are prominently featured on the new releases page (formerly known as the Train page). These store versions are now accompanied by a "diff" button, allowing one to easily compare the changes between the current build and the previous build sent to the store within the same release.

![](../../static/img/changelog/changes-since-last-submission-2.png)

Sometimes bug fixes during a rollout are unavoidable, and when it does happen, it's helpful to know precisely what changed between them. This changeset of course also naturally ties your changes (commits) with the specific teams, if teams are configured.

### Scheduled release view

![](../../static/img/changelog/scheduled-train.png)

We've added a small dynamic widget that displays both the recent history and upcoming runtime of a scheduled release train. This view adapts according to the schedule set. Think of it as a compact, calendar-style glance into the scheduling status and an indication of when the next release is scheduled to occur.

### Disconnect integrations

![](../../static/img/changelog/disconnect-integration.png)

This has been a long while coming, but now you can disconnect integrations! It's historically been a low priority for two reasons:

1. Once connected, you seldom need to change your core integrations
2. Changing an integration should not destroy historical release information and state connected to the previous integration

We built a simple internal versioning system for our release related data which now enables us to disconnect and reconnect integration without disturbing any prior state.

In the future, we can port over a similar idea to allow changing distribution channels and step re-ordering as well.

<details open>
<summary>Improvements and Fixes</summary>

- Allow selecting a color when creating a new team
- On the team page, show the inviter for a user
- Identify the `tramline[bot]` in the Team Analysis charts and remove other bots
- Allow configuring the release stages for the Bugsnag integration
- Fix the order of versions in the charts (on the x-axis) when there is missing data

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.12 (2024-02-29)

![](../../static/img/changelog/team.png)

### Team-level analysis

Tramline, now supports adding your organization's team structure to the platform. This opens up a lot of possiblity around correlating team performance metrics with release dynamics.

We're kicking things off with release stability & contribution analysis across teams.

What, or rather, who is holding up your releases? We break down which team has contributed the most to the stability of releases.

The flip side of this analysis is equally interesting. Instead of who is holding things up, you get rough indicators on who is contributing the most to a release.

![](../../static/img/changelog/team-contribution.png)

Since this data is also available in real-time for ongoing releases, it complements the insights provided in the [Ongoing Work](https://docs.tramline.app/changelog#mid-release-pull-requests) section. Release managers now get a pretty good sense of what (and who) is holding up the release from moving ahead.

![](../../static/img/changelog/ongoing-work.png)

This is one of our first organizational performance-related features, and we're very excited to see what more we can do in this direction :rocket:

### Resume a halted rollout

![](../../static/img/changelog/resume-halted.png)

Previously, halting a staged rollout on Play Store through Tramline meant that your release was essentially **stopped**. But now halting a rollout can be **undone** and you can resume the next stages of your rollout. This behaviour is now in parity with what the Play Store Console allows you to do.

### More customizations for tester notes

Backed by popular demand, we now support [even more](https://docs.tramline.app/changelog#optionally-select-auto-generated-build-notes) loaded configuration options around distributing build notes. For every distribution channel you select, you can now pick out of any of the three choices:

1. Send auto-generated notes from Tramline
2. Custom release notes
3. No notes

![](../../static/img/changelog/configurable-notes.png)

<details open>
<summary>Improvements and Fixes</summary>

- Add additional commit info to the step failure notification
- Add automatic retries when fetching artifacts from GitHub workflows
- API to fetch releases for a branch now accounts for multiple releases
- Bump version only when new changes have come since the last submission

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.11 (2024-01-30)

![](../../static/img/changelog/mid-release-prs.png)

### Mid-release pull requests

We now track all the PRs that you create against the release branch during a release. This serves as a solid foundation for us to start tracking **behavioural** and **process-related** aspects around shipping code during a release.

Currently, we display all PRs (along with their labels), emphasizing those that haven't been merged yet. With this system in place, we can soon start gathering information, such as PRs that caused delays in a release or the size of commit diffs that were shipped after a release had already commenced.

### Release notes across both platforms

In a cross-platform release, previously, the release metadata was common across both platforms. Although simpler, it can be quite limiting. We now support adding release metadata to individual platforms for a cross-platform release. The metadata is tuned to the details the particular store expects.

![](../../static/img/changelog/xplat-notes.png)

We will soon launch a full-fledged marketing and release metadata management system; including support for screenshots and locales.

### Optionally select auto-generated build notes

Earlier last year, we added support for [auto-generated build notes](http://docs.tramline.app/changelog/july-27-2023#build-notes). Our users find this feature useful, but sometimes it can become spammy to send these notes to everyone; as they are generated and sent for all distribution channels that are non-prod.

![](../../static/img/changelog/build-notes.png)

Now, when setting up steps for train, you can select whether you want to generate and notify with the auto-gen build notes, so you have full control over what gets sent out to whom.

<details open>
<summary>Improvements and Fixes</summary>

- Backmerge PRs now get automatically merged
- Do not compute build health metadata if there's less than one data point
- Show chart for build health metadata only when present
- If app size is sent as custom metadata, override the one computed by Tramline
- If a review is intentionally skipped by users, do not retry on deployment failure
- For the Parallel-Working-Branch branching strategy, fix a bug that was creating multiple PRs
- For the Parallel-Working-Branch branching strategy, check for diff between branches before creating PRs
- Release Schedule can now be added for all branching strategies
- Fix around inaccurate release changelogs for hotfix releases
- TestFlight releases auto-complete if they pass after a previous review failure

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.10 (2023-12-21)

![](../../static/img/changelog/build-health.png)

### Custom build metadata

There are some metadata around an app build that are, as of now, out of the purview of Tramline. These could be things like Unit Test Coverage, App Launch Time or something else completely custom to your team.
Tramline now allows you to associate these metadata with the builds in Tramline and see the trends during the release.

You can use the API documented [here](https://docs.tramline.app/api#send-custom-metadata-for-a-build) to send these custom build metadata.

In addition to the custom build metadata, Tramline automatically tracks your app size across the RC builds generated in the release.

These trends are not just useful to monitor your build health over time, but they can also help you make go/no-go decisions about your release right here from your release dashboard.

### App review failures

App review failures are the bane of app releases. Tramline now handles app review failures from the stores and allows your to continue with the release process after resolving the issues.

#### iOS

For iOS releases, a review failure can be tackled in a couple of ways – via communication with the review team or by submitting a new build for review.

Tramline now monitors the state of review after a rejection. If the review is resolved by communication, Tramline will sync the status, once the review is approved, and you can continue with the rollout of the build from your Tramline release dashboard.

![](../../static/img/changelog/app-store-review-sync.png)

If, however, you need to submit a new build, simply make a change in your release branch and Tramline will trigger a new build for submission.

Tramline will prepare the new release version, set phased release if configured, upload all the necessary release metadata, and allow you to submit the build from your release dashboard.

#### Android

When an app review fails on the Google Play Store, a new build cannot be sent for review via Tramline due to the [limitations of Google Play Publishing API](https://issuetracker.google.com/issues/179708468#comment13). Tramline will, however, instruct you on what to do right there on the release dashboard.

![](../../static/img/changelog/play-store-review-failure-msg.png)

Once you resolve the issue by submitting the new build for review manually from Console UI, you can sync the status back on Tramline.

Tramline will verify the correct status, sync the changes made on the Console UI, and continue with the release as configured.

![](../../static/img/changelog/play-store-review-failure-activity.png)

### App variants

Tramline now supports App Variants which are akin to product flavors or build variants, but with an explicit requirement of having a different bundle identifier.

For example, you can have a staging variant `com.tramline.ueno.staging` which is different from your primary `com.tramline.ueno` app.

App variants allow you to configure different build distribution endpoints for each of these variants. Eg. different Firebase App Distribution apps for different variants.

When defining a release step, you can now choose the app variant (default being the primary app) and its configuration to be used for the build generation and distribution.

### Custom release version

Tramline automatically manages your release version across your app releases, ensuring that the next release or hotfix always starts with the correct version.

But, there might be times when you need to start the next release with a custom release version. Tramline now allows you to override the default behavior and start a release with a custom release version.

The custom release version goes through the usual validations like correct the SemVer structure and allowed version as per the stores before starting the release.

<details open>
<summary>Improvements and Fixes</summary>

- Fix release notes to allow backticks and other special characters allowed by the stores
- Add the missing release activity on stopping a release
- Support aab upload to Firebase App Distribution
- Fix fetching changes since the last release for releases with tagging disabled
- Add the missing deployment failure notification
- Handle attachment upload in progress error from App Store Connect when submitting the build for review
- Change the external link in release health cards to the release-specific dashboard for Bugsnag integration

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.9 (2023-11-23)

![](../../static/img/changelog/hotfix-release.png)

### Hotfix Releases 🤕

Most people want to avoid hotfixes entirely, but when push comes to shove, you don't want your regular release processes to become shackles.

This is where hotfix releases come in. By starting a hotfix release, Tramline will:

- Predict the correct version to be hotfixed
- Initiate a hotfix from a previously completed release branch
- Optionally, initiate a hotfix from a tag, creating a new hotfix branch on top

Importantly, you can quickly deploy a hotfix release because these releases are special. They allow you to bypass the defined step order, skipping the review steps and going straight to production.

![](../../static/img/changelog/hotfix-modal.png)

For [synchronized releases](/changelog/july-27-2023#synchronized-releases-for-cross-platform-apps), as is often the case, hotfixes also support releasing only to a single platform to avoid spending time on manually skipping the other platform.

![](../../static/img/changelog/hotfix-platform.png)

#### Caveat

Stores can only have a **single** live build, which means penultimate releases can be hotfixed as long as the latest release hasn't started rolling out.

In essence, hotfixes are a _conceptual_ abstraction. You are creating a new release instead of directly fixing the previous one, which might still be live.

It's an abstraction of a process that is manually carried out, and Tramline offers this as an atomic package where the details aren't important to know.

### Rollouts + Adoption 📈

![](../../static/img/changelog/adoption-graph.png)

Because Tramline simultaneously controls **phased rollouts** and tracks **adoption**, we can now uniquely correlate the two things in a single graph. This is something that would've previously been very tricky to automatically do.

This feature is available once you connect a **Monitoring and Analytics** integration like Bugsnag and start a production release.

### Partially Finished Releases 🥑

![](../../static/img/changelog/mark-finished.png)

For [synchronized releases](/changelog/july-27-2023#synchronized-releases-for-cross-platform-apps), if you decide against releasing to both platforms, you can now belatedly mark one platform as finished. This allows the release to proceed without the need to restart the entire release or pause the other platform.

<details open>
<summary>Improvements and Fixes</summary>

- Handle the rare "startup failure" error from GitHub Actions
- Handle Firebase (App Distribution) degradation gracefully
- Changelogs can now optionally pick up only the merge commits for summary, instead of all commits between releases
- Show the commit application time for the release (along with the commit authoring time)

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.8 (2023-11-01)

![](../../static/img/changelog/mobile-devops-charts.png)

### Release Overview

We now generate a high-level view of aggregated statistics across your releases. You can use these metrics to draw insights on the overall health of your release process.

This includes important [DORA](https://dora.dev/research/) metrics like Release Frequency and Fixes During Release (number of store versions generated).

![](../../static/img/changelog/hotfixes-chart.png)

Other key metrics tracked are:

- Release duration
- Time spent by your team in various steps of the release process
- Contributors to the release
- Contributors towards the stability of the release

In addition to the above, you can see how your iOS build review time from the store trends over time.

![](../../static/img/changelog/time-in-review-chart.png)

### Release Health Monitoring

We have added a new category of integration in Tramline: Monitoring and Analytics.

By connecting your error and metric tracking system, you can now monitor release metrics and stability right from your ongoing release page to make correct decisions about your release rollout.

![](../../static/img/changelog/release-health.png)

We currently support [Bugsnag](https://bugsnag.com/) only, but more integrations are coming soon.

### More Train Configurations

We have added two more configurations to your release train:

- If your CI workflow generates multiple artifacts, you can now provide a name to choose the correct build artifact (aab/apk/ipa) among the files generated. When left blank, Tramline will choose the largest file generated as the build artifact.
- You can now optionally add a suffix to the tags generated at the end of the release. This feature can be used for distinguishing, say, nightly release tags from standard release tags.

These can be set in the train **Settings** page.

<details open>
<summary>Improvements and Fixes</summary>

- Handle degraded AppStore Connect APIs gracefully
- Fix all builds page to be accessible by viewers
- Fix scheduled release notification to show the correct release version
- Override manual trigger config for a single step train
- Do not finish deployment run when staged rollout is halted
- Restrict uninvited signups from configured domains (enabled on request from customer)

</details>

#### Committers: 3

- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.7 (2023-10-05)

![](../../static/img/changelog/overall.png)

### Enriched Release Summary

For most teams, a release lasts more than a week and a lot happens in that time. Numerous builds are generated, those builds are approved or rejected, pull requests are created for backmerges and so on. The releases are your system of record.

We now generate a summary capturing all the essentials of your release after it is completed.

![](../../static/img/changelog/step-summary.png)

This shows the total time spent on each step of the release, number of builds generated during that step and subsequently submitted to your QA team for testing and approval.

Additionally, you can see the number of versions submitted to the store for review, when they got approved, and which of those versions reached a percentage of your users during the course of the release.

![](../../static/img/changelog/store-versions.png)

The summary also includes release duration, commits that landed on the release branch, staged rollout timeline, pull requests and auto-backmerge summary.

### Better Build Notes

We've made some improvements in build (tester) notes that are sent to all non-production distribution channels (TestFlight, Firebase App Distribution), as well as the notifications themselves:

- The first build generated for the release now has all changes since the last release as build notes.
- Previously, Tramline automatically picked up the entire commit message when generating build notes. Now, you can elect to generate more compact build notes by picking just the title of the commit and ignore the multi-line description. This is especially useful for PR merge commits. This configuration can be found in the train **Settings** page.
- The build notes in the notifications are now sent as threaded messages to keep the primary post focussed and compact.

### Advanced Notification Settings

Not everyone in your team is the correct audience for all release-related notifications. So now we allow you to configure which notifications you want, and what all channels do they need to go in the **Notification Settings** page for each of your release trains.

![](../../static/img/changelog/notifs.png)

If you feel that your team doesn't require any notifications, as everyone is already informed through Tramline, you can deactivate all notifications through the train **Settings** page.

<details open>
<summary>Improvements and Fixes</summary>

- Handle some new errors from Google Play Store and add retries around the ones that can be retried without user input
- Reduce the visual footprint of a Slack notification, compact the header and footer to improve visibility of the notification content
- Some minor security updates including rate limits on forgot password requests
- The download artifact URL for the build sent in notifications is now an authenticated URL
- Fix the upcoming release flow to manage version bump correctly across the platforms when the ongoing release creates a new store version

</details>

#### Committers: 3

- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.6 (2023-09-21)

![](../../static/img/changelog/release-activity.png)

### Enriched Release Activity

The **Event Timeline** has been renamed to **Release Activity**. While the essence of the page remains the same, it is now much more valuable. For cross-platform apps, the release activity for all platforms is displayed collectively in a single pane. You can optionally filter for a single platform if you want to isolate the activity. Additionally, it also logs the users that initiated particular manual actions, thereby functioning as a comprehensive audit log of all the activities carried out during a release.

### Deploy Action

We now recommend using the [deploy-action](https://github.com/tramlinehq/deploy-action) for those using GitHub actions as their CI/CD solution. This method bundles the various inputs (like version-code and version-name) that Tramline provides, into a single input. It also enables us to introduce new inputs without necessitating downstream modifications in the future.

GitHub currently does not support triggering CI workflows for a particular commit SHA and can only activate the HEAD of a branch. This restriction can lead to race-conditions within Tramline, potentially triggering workflows for an incorrect commit if it has been superseded by a new commit.

This action also fixes that problem by checking out your repo to the correct commit ref.

### New Train configurations

![](../../static/img/changelog/new-configuration-sept-22.png)

You can now setup a couple of new configurations on your release train:

1. Tramline has been automatically triggering the release step if it has reached it before in a prior commit. Now, you have the ability to customize this – you can elect to manually approve before the release step is triggered.

2. For cross-platform apps, Tramline has been adding platform-specific tags to the last commit SHA that was deployed successfully to production. We've expanded this to now optionally add platform-specific tags to all commit SHAs that were even partially deployed to production, like in a phased release → hotfix commit → phased release scenario.

### Tramline API

Tramline maintains extensive data regarding your releases, both during the run-time and for posterity. We've now implemented two API endpoints for you to access some of this information. This can assist in organizing aspects of your release process that Tramline does not currently handle natively.

See API docs [here](https://docs.tramline.app/api).

<details open>
<summary>Improvements and Fixes</summary>

- When in hotfix mode, allow running deployments out-of-order
- Send auto-generated build notes to non-production groups on Play Store (previously only TestFlight and Firebase App Distribution were supported)
- Scheduled release trains now have a log of all scheduling attempts made (successful or otherwise), including the reasons for skipping them
- Allow collapsing the entire pane that lists all commits in a release to reclaim space and focus on the current build

</details>

#### Committers: 3

- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.5 (2023-09-08)

![](../../static/img/changelog/release-backmerge-prs.png)

### Continuously Backmerge

Up until now, Tramline only merged changes made in the release branch back into your working branch towards the **end** of a release. For teams who end up with a lot of changes in their release branch, it is essential to get new changes back as quickly as possible. Doing this avoids both merge hells at the end and hands control over to individuals to ensure they are merging their changes back.

Tramline now allows configuring a train to cherry-pick commits from the release branch and make individual Patch PRs and assign them to the original authors for them to drive their isolated changes back to the working branch (typically `main`).

![](../../static/img/changelog/release-backmerge.png)

This significantly reduces the burden on the release pilot wrangling backmerges by hand as new changes are landed, but more importantly, also adds visibility and individual accountability into the process.

![](../../static/img/changelog/backmerge-failure.png)

Tramline generally still recommends an "almost trunk" strategy – wherein one cherry-picks commits from the working branch **to** the release branch. But this of course, has many adoption constraints and isn't always organizationally feasible.

### Prepare an upcoming release

You can now start ramping up a new release before your current release finishes. This allows you to cut back on the additional time spent waiting for a full phased rollout to complete in the current release and start stabalizing new features on the working branch.

![](../../static/img/changelog/upcoming-release.png)

This feature is available when you have a multi-step train (RC and production both) and you have a production channel in your release step.

<details open>
<summary>Improvements and Fixes</summary>

- The build queue commits are reverse chronologically ordered
- We now have formatted and mobile-friendly emails
- Build notes sent on TestFlight are size-truncated to the App Store limit
- You can edit release schedules as long as there isn't an active ongoing release
- Stronger password validations
- Addtional notifications around staged rollouts / phased releases
- Faster CI workflow triggers from Tramline

</details>

#### Committers: 3

- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.4 (2023-08-28)

![](../../static/img/changelog/build-queue-banner.png)

### Build Queue

For large teams, the process of release stabilization often extends over several days. Throughout this period, testers and stakeholders may find themselves inundated with a continuous stream of new builds as bug fixes are incrementally added to the release branch.

For better control over build generation, you can now configure triggers that will batch commits based on time and volume before triggering new builds from Tramline.

You can do this under the **Settings** page of your release train.

### Support draft apps in Play Store

Users shipping brand new apps to Play Store for the very first time often face issues releasing to public channels. This is because the Play Store requires one to make an initial deploy manually before using the APIs.

To avoid having the releases fail late after everything is set up, we now detect apps that are in **Draft** mode on the Play Store and disallow making new releases until a manual public release is made from the Play Console.

![](../../static/img/changelog/draft-mode.png)

### Bitrise support for cross-platform apps

When we introduced cross-platform apps in Tramline a couple of months back, the only CI/CD provider we supported was GitHub Actions.

Bitrise is now also supported as another CI/CD provider. For an example on how to configure a multi-platform (and stack) Bitrise pipeline, check out this workflow on our test bunny flutter app – [Ueno](https://github.com/tramlinehq/ueno/blob/main/bitrise.yml).

<details open>
<summary>Improvements and Fixes</summary>

- Check for presence of the working branch on the git repo when creating a new release train
- Show all commits in a single push on the live release page, not just the `HEAD`
- Simplify the first train creation wizard for better onboarding
- Add platform identifiers in cross-platform release notifications
- Add missing notification for review approval from App Store
- App versions are only incremented against the previous successful release. Does not account for stopped or failed ones.
- It is now possible to configure if distributions in a release step will be automatic or manual
- More guardrails around commit recency when triggering new builds
- Release schedules can now be edited until the release train is activated

</details>

#### Committers: 3

- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.3 (2023-08-09)

![](../../static/img/changelog/release-schedule.png)

### Scheduled releases

Releases can now be configured to run on a pre-defined schedule. You can configure this on the **Settings** page of a release train.

A great use-case for this is to set-up nightly trains that automatically trigger latest dev builds and send them to internal teams on a consistent cadence.

### Deep links in notifications

Notifications now have deep links to both Firebase App Distribution and TestFlight builds, so you don't have to go hunting when a new RC build is available for testing.

<details open>
<summary>Improvements and Fixes</summary>

- Support for selecting Internal Groups as a distribution channel in TestFlight
- Release tags are now guaranteed to be unique. If a tag clashes with a previous one, we append the commit SHA to the tag!

</details>

#### Committers: 3

- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.2 (2023-07-27)

![](../../static/img/changelog/cross-platform.png)

### Synchronized releases for cross-platform apps

For teams with apps built in cross-platform stacks like [React Native](https://reactnative.dev/) and [Flutter](https://flutter.dev/), we now support synchronized release trains across both platforms.

- This allows teams to run their releases from a single branch.
- You get centralized control over both the stores.
- This also ensures all changes get applied to both platforms, but also gives you the nuance to apply selective changes to either platform when needed.

Since there can be cases where there is a drift between what is shipped to one store over another, we also cut platform-specific tags to disambiguate the commits.

### Changes since last release

The changes in your app since the last release are now visible on the live release page to provide context on what all is getting shipped in the current release.

![](../../static/img/changelog/changes-since-last.png)

### Build notes

Well-formed, sanitized commit messages since the last good build are now available as test notes in Slack, Firebase App Distribution and TestFlight.

![](../../static/img/changelog/build-notes-deep-link.png)

<details open>
<summary>Improvements and Fixes</summary>

- Release suffixes are now optional for steps
- We now fetch latest build numbers from stores to reduce probability of version clashes
- Previous running steps are cancelled (both in Tramline and in CI) when a new commit lands
- All non-production deployments are now triggered automatically to allow fully automated releases (this paves way for automatic scheduled releases!)

</details>

#### Committers: 3

- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>

## 0.0.1 (2023-06-03)

![](../../static/img/changelog/train-wizard.png)

### Train setup wizard

We know how setting up the integrations and release trains can be a bit tricky to navigate. So we now have a quick wizard that helps you get started on your very first release train.

### Automatic finalization

We have couple of enhacements towards the end of a release.

1. Tramline automatically starts wrapping up the release and starts the finalization process (cutting tags, creating PRs, locking the release etc.) as soon as the release step finishes.
2. For the Almost Trunk branching strategy, we create and merge a PR at the end to get all your release branch fixes back to the working branch.

![](../../static/img/changelog/post-release-merge.png)

### Versioning changes

We now support a partial SemVer scheme like `MAJOR.MINOR` along with `MAJOR.MINOR.PATCH`. Additionally, Tramline used to bump up versions for every commit that would land on the release branch. This has now changed to bump up versions (either minor or patch, depending on your strategy) **only** during hotfixes, i.e. commits that are landed during a production rollout.

![](../../static/img/changelog/versioning-tactics-1.png)

<details open>
<summary>Improvements and Fixes</summary>

- Show details about your integration in the integrations page (bundle id, connection info, project info etc.)
- Add an option to manually refresh Slack channels, in case the list is stale

</details>

#### Committers: 3

- Nivedita Priyadarshini ([@nid90](https://github.com/nid90))
- Akshay Gupta ([@kitallis](https://github.com/kitallis))
- Pratul Kalia ([@pratul](https://github.com/pratul))

<endcommiters/>
