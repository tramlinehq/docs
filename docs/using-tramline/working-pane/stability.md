---
id: stability
title: Stability
sidebar_label: Stability
sidebar_position: 3
---

## Internal builds

## Release candidates

## Run the first step of the train automatically

There are a few things Tramline does as soon as the release starts:
- It creates a release branch off of your working branch.
- It starts the first step in your release train and triggers the CI workflow for that step whether that is creating an internal build or an RC build.
- Once the workflow completes and Tramline is able to find the build, Tramline will send the build to the configured submission channels automatically or otherwise (based on your settings).

![](/img/step-movement.png)

## New commits landing will re-trigger steps

It's common to add bug fixes and sometimes even small new features to a release after the release branch has been created.

When a new commit lands on the release branch of your app, Tramline will re-create the internal build for the latest commit on the release branch.
