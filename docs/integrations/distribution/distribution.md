---
sidebar_position: 2
---

# Build Distribution

Tramline distributes your app to the distribution channels you have configured. These channels can vary from a Slack channel to beta groups in app stores and production tracks.

## Android

For Android apps, Tramline keeps a copy your release build in its system. It uploads and promotes that build to the relevant distribution channels during the release cycle as per the release train configuration.

### Supported integrations

- [Google Play Console](play_store)
- [Slack](slack)

## iOS

For iOS apps, Tramline currently expects the build to be present in App Store Connect. It then releases that build to TestFlight beta groups and App Store as per the release train configuration.

### Supported integrations

- [TestFlight](testflight)
- [App Store](app_store)
