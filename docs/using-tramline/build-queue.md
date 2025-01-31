---
sidebar_position: 21
---

# Change Queue

For large teams, the process of release stabilization often extends over several days. Throughout this period, testers and stakeholders may find themselves inundated with a continuous stream of new builds as bug fixes are incrementally added to the release branch.

For better control over build generation, you can now configure triggers that will batch commits based on time and volume before triggering new builds from Tramline.

You can do this under the **Release Settings** page in the **Advanced Settings** section.

![](/img/build-queue.png)

You can control the generation of new builds based on two factors:

1. **Time** – You can configure Tramline to batch commits based on time. For example, you can set it to batch commits every hour or every day.
2. **Volume** – You can configure Tramline to batch commits based on the number of commits. For example, you can set it to batch commits every 5 commits or every 10 commits.

With Change Queue configured, Tramline will show the changes waiting to be applied tp the release in the [Changeset Tracking](/using-tramline/release/changeset-tracking) tab of the live release page.

![](/img/apply-build-queue.png)

The changes will be applied to the release as per the configured time and volume settings. Additionally, the Release Pilot can choose to manually apply the head of the change queue as and when required.
