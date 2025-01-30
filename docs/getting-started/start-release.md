---
sidebar_position: 3
---

# Prepare for release

Once your app and integrations are set up, you can set up your release process.

## Create a release train

1. Choose the correct branching strategy for your release train. We recommend [Almost Trunk](branching-strategies#almost-trunk).
2. Ensure you mention the correct working branch for your release train. This is the branch that all your work happens on, and depending on your branching strategy, your release will likely start from this branch.

Once the release train is created, review the submission settings that Tramline automatically creates for you.

1. RC Workflow: This is the workflow that will be used for all RC builds and one of the RCs generated will taken to production. This is a mandatory configuration.
2. Production Release: This is enabled by default if you have connected the store integrations. You can disable this if you don't want to release the app to public. Here you can also control the staged rollout configurations for your store release.
3. Beta Testing: If you share your RC with internal or external testers on the store before releasing to public, you can enable this. This is disabled by default.
4. Internal Testing: In addition to beta testing, if you generate an internal build (staging/debug/sandbox) that your internal testers use for testing, you can enable this. This is disabled by default. Furthermore, you can configure whwre the internal builds are send to (likely a place like Firebase App Distribution).

Once all the submission settings are configured, you can start the release process.

## Start the release
