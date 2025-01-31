---
sidebar_position: 13
---

# Backmerges


## Continuous Backmerge
 By default, Tramline only merges changes made in the release branch back into your working branch towards the end of a release. For teams who end up with a lot of changes in their release branch, it is essential to get new changes back as quickly as possible. Doing this avoids both merge hells at the end and hands control over to individuals to ensure they are merging their changes back.

Tramline allows configuring a train to cherry-pick commits from the release branch and make individual Patch PRs and assign them to the original authors for them to drive their isolated changes back to the working branch (typically main).

This significantly reduces the burden on the release pilot wrangling backmerges by hand as new changes are landed, but more importantly, also adds visibility and individual accountability into the process.

Tramline generally still recommends an "almost trunk" strategy – wherein one cherry-picks commits from the working branch to the release branch. But this of course, has many adoption constraints and isn't always organizationally feasible.
