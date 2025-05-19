---
id: overview
title: Overview
sidebar_label: Overview
sidebar_position: 1
---

This tab of the work pane is the default starting tab when the release starts or once it is finished. It summarizes all the information about the release. This summary is dynamic while the release is in progress, but remains frozen once the release is completed.

## Release Captain

The person who starts the release is assigned the “Release Captain” and has some special abilities throughout the release like recording anything of note for the release in Captain’s log and overriding approvals to unblock production release.

Release Captain can also log any special notes around the release in the Captain’s log. This can be used to record any special events or notes for the release for posterity. These notes are completely internal and never shared or posted to any other integration outside of Tramline.

## Branch cut

As soon the release is started, a new branch is created from the main branch. This branch is named after the release and is used for all the work related to the release.

Depending on your [branching strategy](/using-tramline/release-management/branching-strategies) used, the release branch might be a long-running branch or a special branch created just for that particular release.
