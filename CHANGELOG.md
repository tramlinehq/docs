# Tramline Changelog

## 0.0.13 (2024-03-25)

![](../../static/img/changelog/new-ui-release-overview.png)

### Introducing a design system

Over the past few months, we've been steadily improving our user experience. We're excited to announce that we've now rolled out a new version of our interface to all users 🚀

Tramline is an interaction-heavy, information-dense, multi-stakeholder system with entirely novel abstractions. Keeping that in mind, our decisions, in summary, were guided by the following principles:

1. A design system with as *few* foundational components as possible
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


For teams with apps built in cross-platform stacks like ReactNative and Flutter, we now support synchronized release trains across both platforms.

- This allows teams to run their releases from a single branch.
- You get centralized control over both the stores.
- This also ensures all changes get applied to both platforms, but also have the nuance to make selective changes to each when needed.

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
