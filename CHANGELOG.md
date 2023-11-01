# Tramline Changelog

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
