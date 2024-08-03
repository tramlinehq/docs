---
date: 2024-08-03T20:00
authors:
  - 'kitallis'
  - 'nid90'
  - 'pratul'
---

# August 3, 2024

![](../../static/img/changelog/sso.png)

### Single Sign-On Support 🔑

SSO (via SAML) is now available as an authentication method in Tramline. Once enabled, all users in the organization will be required to sign in using the SSO provider.

To simplify the setup and management of SSO, we use a third-party auth service provider. However, we continue to maintain our existing email/password login natively, i.e, without relying on any third-party dependencies. This allows open-source users to self-host Tramline without the need for setting up additional accounts outside.

This is a big step for Tramline towards supporting enterprise organizations!

### New Reldex components 📊

We [rolled out Reldex](https://docs.tramline.app/changelog#introducing-reldex-release-process-index-) to all users in our last major release. We have since added a few more optional components to the Reldex score:

#### Days since the last release

The number of days since the last release to production was made. This is a good indicator of how frequently you are shipping to production and will eventually feed into a standalone MTTR-esque metric within Tramline.

#### Number of rollout changes

Tramline classifies changes in the following ways:

- **Stability changes**: changes on the release branch during the testing phase
- **Patch fixes**: changes after the rollout to production has started
- **Hotfixes**: special releases made after the rollout to production has completed

This component now takes the "Patch fixes" into account separately, along with Stability changes and Hotfixes.

### Patch-version bumps across releases 🤛

You can now configure your release train to only bump the patch version across new releases. This is especially helpful for daily/weekly scheduled releases, where you don't want too many minor version bumps constantly as each subsequent change is likely trivial.

![](../../static/img/changelog/patch-only.png)

<details open>
<summary>Improvements and Fixes</summary>

- Add Indian+Indonesian languages to list of locales for release notes
- Gracefully handle lack of apps in iOS or Android projects on Firebase
- Handle double-quotes inside build notes when distributing
- Disallow starting a production rollout of an upcoming release

</details>

