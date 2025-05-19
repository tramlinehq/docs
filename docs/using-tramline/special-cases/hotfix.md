---
id: hotfix
title: Hotfixes
sidebar_label: Hotfix
sidebar_position: 1
---

Most people want to avoid hotfixes entirely, but when push comes to shove, you don't want your regular release processes to become shackles.

This is where hotfix releases come in. By starting a hotfix release, Tramline will:

- Predict the correct version to be hotfixed
- Initiate a hotfix from a previously completed release branch
- Optionally, initiate a hotfix from a tag, creating a new hotfix branch on top

Importantly, you can quickly deploy a hotfix release because these releases are special. They allow you to bypass the defined step order, skipping the review steps and going straight to production.

For [synchronized releases](/using-tramline/release-management/synchronized-release), as is often the case, hotfixes also support releasing only to a single platform to avoid spending time on manually skipping the other platform.

### Caveat

Stores can only have a single live build, which means penultimate releases can be hotfixed as long as the latest release hasn't started rolling out.

In essence, hotfixes are a conceptual abstraction. You are creating a new release instead of directly fixing the previous one, which might still be live.

It's an abstraction of a process that is manually carried out, and Tramline offers this as an atomic package where the details aren't important to know.
