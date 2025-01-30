---
sidebar_position: 3
---

# Prepare for release

Once your app and integrations are set up, you can set up your release process.

![](/img/setup-first-release.png)

## Create a release train

1. Choose the correct branching strategy for your release train. We recommend [Almost Trunk](using-tramline/branching-strategies#almost-trunk).
2. Select the versioning strategy that you use for you app. We support [SemVer](using-tramline/versioning-strategies#semver) and [CalVer](using-tramline/versioning-strategies) version schemes.
3. Depending on your [Branching Strategy](using-tramline/branching-strategy), configure the correct set of branches that Tramline will read and write to.

![](/img/create-new-train.png)

### Submission settings

Once the release train is created, review the submission settings that Tramline automatically creates for you.

1. **Release Candidate (RC) Workflow**: This is a mandatory configuration. This workflow selected should generate an RC build (aab/apk/ipa) that will be sent to your production as well as beta testing submissions.
2. **Production Release**: This is enabled by default if you have connected the store integrations. You can disable this if you don't want to release the app to public. If enabled, you can also control the staged rollout configurations for your store release.
3. **Beta Testing**: If you share your RC with internal or external testers on the store before releasing to public, you can enable this. This is disabled by default.
4. **Internal Testing**: In addition to beta testing, if you generate an internal build (staging/debug/sandbox) that your internal testers use for testing, you can enable this. This is disabled by default. Configure how you generate this build as well as where the internal builds are send to (likely a place like Firebase App Distribution).

Once all the submission settings are configured, you can start the release process.

## Start the release

Once you have reviewed the submission settings, you can start a new release by using the Prepare New Release button in the top right corner of your home page.

This will open a new modal that will guide you through the release process.

![](/img/prepare-new-release.png)

The first release will use the seed version that you configured in the release settings and use that as a base to create the next version. The next version can be a minor or major version bmp as per your selection. You can also choose to provide a custom version, if you need to. Tramline will auto-correct the next version for the next release based on this custom version.
