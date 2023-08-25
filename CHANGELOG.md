# Tramline Changelog

## 2.3.3 (2023-01-26)

⏳ Automatic scheduled release trains that kickoff like clockwork on specified times

🔗 Slack notifications with deep links to both Firebase App Distribution and TestFlight builds, so you don't have to go hunting

🍏 Support for selecting Internal Groups as a distribution channel in TestFlight

🦄 Release tags which are guaranteed to be unique. If a tag clashes with a previous one, we append the commit SHA to the tag!

## 2.3.2 (2023-07-27)

### 🗒️ Live release now has a changelog since the last release

![](../../static/img/changelog/changes-since-last.png)


- Release suffixes are now optional for steps
- We now fetch latest build numbers from stores to reduce probability of version clashes
- All non-production deployments are now triggered automatically to allow fully automated releases (this paves way for automatic scheduled releases!)
- Previous runs are cancelled (both in Tramline and in CI) when new commits land
- Commits since the last build in a release are now available as test notes in Slack, FAD and TestFlight
- Improved Slack notifications


## 2.3.1 (2023-06-06)

- Automatically finish the release when the release step is successful.
- Do not bump up patch version for every commit. Only do so for hotfixes, i.e. commits that are landed during a production rollout.
- A quick wizard to guide you through your first train + step creation process.
- Show details about your integration in the integrations page (bundle id, connection info, project info etc.).
- Create PRs at the end of almost trunk branching strategy to merge from release branch into working branch.
- Add an option to manually refresh Slack channels, incase the list is stale.
- Allow partial semver versioning scheme like MAJOR.MINOR along with MAJOR.MINOR.PATCH.
