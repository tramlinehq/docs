# Tramline Changelog

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
