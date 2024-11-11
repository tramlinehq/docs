---
date: 2024-09-17T20:00
authors:
  - 'kitallis'
  - 'nid90'
  - 'prabhanshuguptagit'
---

# September 17, 2024

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

