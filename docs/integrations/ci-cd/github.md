---
id: github
title: GitHub Actions
sidebar_label: GitHub Actions
sidebar_position: 0
---

:::caution
In order to connect this integration, you'll need to be logged in to GitHub as an admin/owner of the organization where your repository is located.
:::

Navigate to the integrations page for your app and select __GitHub__ under the __Build Servers__ section on the page.

![](/img/ci-cd-integration.png)

When you click the __Connect__ button, you'll be taken through a standard OAuth flow for [GitHub App](https://docs.github.com/en/apps). During this process, you can select one or multiple repositories to grant access to.

<img height="500" src="/img/connect-github-flow.png" width="500"/>

## Android Workflow

Here is a sample Github Actions workflow which uses Tramline's [deploy-action](https://github.com/tramlinehq/deploy-action) to accept input parameters and generates a signed AAB for Play Store. It produces a signed AAB file as artifact which is then downloaded by Tramline and sent to the relevant tracks on Play Store.

```yaml
name: Android Release Build

on:
  workflow_dispatch:
    inputs:
      tramline-input:
        required: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Configure Tramline
        id: tramline
        uses: tramlinehq/deploy-action@main
        with:
          input: ${{ github.event.inputs.tramline-input }}

      - uses: actions/setup-java@v3
        with:
          distribution: 'zulu'
          java-version: 11
          cache: 'gradle'

      - uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.22.0'
          channel: 'stable'
          cache: true

      - run: flutter pub get

      - name: Retrieve secrets
        env:
          KEYSTORE_B64: ${{ secrets.KEYSTORE_B64 }}
          KEY_PROPERTIES_B64: ${{ secrets.KEY_PROPERTIES_B64 }}
        run: |
          echo $KEYSTORE_B64 | base64 --decode > android/app/ueno-upload-keystore.jks
          echo $KEY_PROPERTIES_B64 | base64 --decode > android/key.properties

      - run: flutter build appbundle --release --build-number=${{ steps.tramline.outputs.version_code }}  --build-name=${{ steps.tramline.outputs.version_name }} --flavor prod

      - uses: actions/upload-artifact@v4
        with:
          name: release-aab
          path: build/app/outputs/bundle/prodRelease/app-prod-release.aab
```

## iOS Workflow

Here is a sample Github Actions workflow which uses Fastlane to upload a signed build to TestFlight.

```yaml
name: iOS Fastlane Release

on:
  workflow_dispatch:
    inputs:
      tramline-input:
        required: false

jobs:
  build:
    runs-on: macos-latest

    steps:
      - name: Configure Tramline
        id: tramline
        uses: tramlinehq/deploy-action@main
        with:
          input: ${{ github.event.inputs.tramline-input }}

      - name: Set up ruby env
        uses: ruby/setup-ruby@v1.138.0
        with:
          ruby-version: 3.2.1
          bundler-cache: true

      - name: Decode signing certificate into a file
        env:
          CERTIFICATE_BASE64: ${{ secrets.BUILD_CERTIFICATE_BASE64 }}
        run: |
          echo $CERTIFICATE_BASE64 | base64 --decode > signing-cert.p12

      - name: Setup the flutter environment
        uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.22.0'
          channel: 'stable'
          cache: true

      - name: Get flutter dependencies
        run: flutter pub get

      - name: Build the app
        run: |
          flutter build ipa --release --build-number=${{ steps.tramline.outputs.version_code }} --build-name=${{ steps.tramline.outputs.version_name }} --no-codesign

      - name: Sign and ship the ipa
        working-directory: ios
        run: bundle install && bundle exec fastlane ios ship_to_testflight
        env:
          ASC_KEY_ID: ${{ secrets.APPSTORE_API_KEY_ID }}
          ASC_ISSUER_ID: ${{ secrets.APPSTORE_ISSUER_ID }}
          ASC_KEY: ${{ secrets.APPSTORE_API_PRIVATE_KEY }}
          SIGNING_KEY_PASSWORD: ${{ secrets.P12_PASSWORD }}
          SIGNING_KEY_FILE_PATH: ../signing-cert.p12

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: iOS IPA
          path: build/ios/*.ipa
```

The workflow requires setting up correct [distribution certificate](https://developer.apple.com/help/account/create-certificates/certificates-overview) and [API key](https://developer.apple.com/help/account/manage-keys/create-a-private-key) for App Store Connect and storing them in the Github Action secrets.

![](/img/gh-actions-secrets.png)

You can see a working iOS workflow for a Flutter app [here](https://github.com/tramlinehq/ueno/blob/main/.github/workflows/ios-fastlane-release.yml).
