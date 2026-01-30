---
mdx:
 format: md
date: 2025-12-17
authors:
  - 'Animesh-Ghosh'
  - 'deobald'
  - 'kitallis'
---

# December 17, 2025

![](../../static/img/changelog/soak-remaining.png)

### Time-limited soak period

Soak is a designated way to block releases from moving to production until a configured time period has passed. Soak starts as soon as the first RC is available and allows time to monitor the RC before proceeding to send the app to production tracks. Soak can be configured under your Release Settings, in increments of 1 hour. It is available for all apps: android, iOS and cross-platform.

The Release Candidate step will show a _pending_ status as long as the soak is running. You can optionally end early or extend the configured soak period. All soak related actions come with with individual notifications that can be turned on/off.

### Improvements to preparing new releases

**Release from commit SHA**: if you're not not sure if the working branch is stable to deploy, you can choose a specific commit from an older point in history and cut the release branch from there.

<p>
  <img src="/img/changelog/release-from-sha.png" width="400"/>
</p>

**Start release from mobile view**: a quick quality-of-life improvement to the mobile-browser view that allows you to start releases as you normally would (with all standard options).

<p>
  <img src="/img/changelog/start-release-mobile-view.png" width="400"/>
</p>

### GitLab re-authorization

GitLab as an integration is notoriously flaky in terms of liveliness. The access tokens tend to expire too quickly and the TTLs aren't particularly well-documented. If one doesn't touch Tramline for a while, this integration can get disconnected in the background. Tramline now handles this gracefully and prompts you to re-authorize GitLab (CI/CD or VCS both).

<p>
  <img src="/img/changelog/gitlab-reauth.png" width="400"/>
</p>


<details open>
<summary>Improvements and Fixes</summary>

- Fix release schedules to strictly adhere to time-of-day and not be DST-sensitive
- Fixed concurrency bug with multiple invites being sent out to users
- Better auth checks around role escalation (previously only on client-side)
- Fix the _refresh_ button when Tramline is finalizing a release

</details>



<!-- truncate -->

