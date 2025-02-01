---
sidebar_position: 23
---

# Cascading Rollout

With Google Play Console, when you update your rollout to a 100%, it is not possible to halt it, even if in reality the actual rollout hasn't farmed out to all of the 100% of users yet.

For example, if you have 100 users, and your rollout sequence is 10%, 50% and 100%, and once you actually move the rollout to 100%, it is possible that number of users/sessions that actually receive the update is still much less than 100. Since a halt isn't possible on the Play Console at 100%, teams usually have a workaround to release to 99.9%. This allows them to halt the rollout until as late as possible.

Tramline natively supports this process; you can set your rollouts to be cascading, which will only rollout to 99.9% (or your final rollout value of choice) and prevent you from starting the rollout of the next release until the previous one is moved from 99.9% to a 100%.

![Cascading Rollout](/img/cascading-rollout-config.png)

You can configure this in the **Submission Settings** tab of the **Release Settings** under the **Production Release** section.

This entire flow is managed and prompted through appropriate callouts and actions during the release process.

![](/img/cascading-rollout-99.png)

Before you start the rollout of your new release, Tramline will prompt you complete the rollout of the previous release before starting the current one.

![Cascading Rollout Prompt](/img/cascading-rollout-prompt.png)

Only when the previous release is complete, can you start the staged rollout of the ongoing release.
