---
mdx:
 format: md
date: 2025-09-02
authors:
  - 'Animesh-Ghosh'
  - 'kitallis'
  - 'nileshgr'
---

# September 2, 2025

<p>
  <img src="/img/changelog/tramline-mobile-rollout.png" width="400"/>
</p>

### Limited Mobile experience

Tramline now includes dedicated mobile views, making it easier for teams to monitor and manage releases on mobile devices. The mobile experience includes:

**Release List View**: Browse all releases with a mobile-optimized layout

**Release Details**: View release summaries with essential information

**Production Rollout Controls**: Manage rollout percentages and status directly from mobile

This mobile support is particularly valuable for release managers who need to monitor or respond to release issues while away from their desktop. We will continue to add more desktop-like controls to this view in the future. Feel free to reach out if you have any suggestions!

### Cleaner changelogs in notifications

Changelogs sent in notifications are now much cleaner and more focused, with automatic filtering to remove noise from pull requests and irrelevant commits. This enhancement improves the readability of release notes by:

- Excluding PRs and commits that were merged using continuous back-merge functionality from previous releases
- Filtering out merge commits, co-authored-by lines and other distracting details
- Removing emoji characters and standardizing commit message formatting
- Compacting and deduplicating similar commit messages

The result is more scannable logs that focus on the meaningful changes shipped in each release, making it easier for teams and stakeholders to understand what's new.

<details open>
<summary>Improvements and Fixes</summary>

- Enhanced search functionality with improved filtering and results display
- Improved GitLab repository fetching to include all accessible repositories
- Fixed navigation issues when using the back button from Account Settings

</details>



<!-- truncate -->

