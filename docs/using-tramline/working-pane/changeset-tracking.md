---
id: changeset-tracking
title: Changeset Tracking
sidebar_label: Changeset Tracking
sidebar_position: 2
---

There is one dedicated page to track all the commits, PRs and changes going into the release.
There are five sections to this page:

1. **Changes since last release** - all the commits since the last completed release (ongoing in case of upcoming release).
2. **Ongoing work** - The all PRs open against your release branch.
3. **Change queue** - All the changes that have not yet been applied to the release.
4. **Latest applied commits** - The changes that have been applied to the release and a build has been generated that includes all of them.
5. **Pending backmerges** - Continuous backmerge PRs for each of the release branch changes that are not yet merged to the working branch.

There is a flow of change from Ongoing work ➡ Change queue ➡ Latest applied commits.

## Ongoing work

We now track all the PRs that you create against the release branch during a release. This serves as a solid foundation for us to start tracking behavioural and process-related aspects around shipping code during a release.

Currently, we display all PRs (along with their labels), emphasizing those that haven't been merged yet. With this system in place, we can soon start gathering information, such as PRs that caused delays in a release or the size of commit diffs that were shipped after a release had already commenced.

## Change queue

## Applied commits

## Pending backmerges
