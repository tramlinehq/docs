---
id: outgoing-webhooks
title: Outgoing Webhooks
sidebar_label: Outgoing Webhooks
sidebar_position: 3
---

Tramline's outgoing webhooks notify you in real-time when certain events happen in your account. Webhooks are HTTPS POST requests made to an endpoint of your choice that you can then implement custom business logic for. For example, you can receive a webhook when the release first kicks-off. Your endpoint that receives this webhook can then process the payload of the webhook to automate some internal process you have based on this event, such as triggering a different pipeline, creating a ticket, or sending a custom notification or email to your team.

:::note
Tramline uses the excellent product Svix to provide the webhook functionality in Tramline. The portal and endpoints are directly configured on Svix's platform.
:::

## Webhook event catalog

These are some of the events that you can receive from Tramline.

| Event Name | Description | Fields |
|------------|-------------|---------|
| `release.started` | This webhook event is triggered when the release first kick-offs from Tramline. This around the same time a release branch is cut and a version bump PR is created by Tramline. | `platform`, `release_branch`, `release_version` |
| `rc.finished` | This webhook event is triggered when an RC (Release Candidate) step is completed. This means, that a build is ready, and it has been delivered to all the configured submissions. | `build_number`, `diff_changelog`, `full_changelog`, `platform`, `release_branch`, `release_version` |
| `release.completed` | This webhook event is triggered when a release successfully completes. This is after all the finalization work is done (pending PRs are resolved, tags are cut etc.) | `platform`, `release_branch`, `release_version` |

The complete webhook event catalog is maintained at [webhook.events.tramline.dev](https://webhook.events.tramline.dev/).

## How to enable

Enable the webhooks in your Release Train configuration.

![](/img/outgoing-webhooks-configure.png)

Once it's enabled and the form is saved, you will be able to grab the portal link from the same page in a few minutes.

![](/img/outgoing-webhooks-portal.png)

Once the portal link is ready, you can start configuring endpoints for a single event or a set of events. To start, add an endpoint from the Svix portal.

![](/img/outgoing-webhooks-svix-create-endpoint.png)

Once the endpoint is configured, you have a few optional settings. If your endpoint is secure, you can provide authorization headers (or other metadata headers) to the endpoint on this page. You can also transform the payload that we send to tweak the data you receive at your endpoint.

![](/img/outgoing-webhooks-svix-configure-endpoint.png)

And that's it!

:::tip
The custom Svix portal can only be access by you. The portal link that you get from Tramline expires after 6 hours. To get a new link, just refresh the train configuration page and you will get a new portal link from the same place.
:::


## Audit log in Tramline

Tramline will maintain a log of all the webhook events we triggered from our end. Once the release starts, you can find the logs on the top right sidebar of the release page.

![](/img/outgoing-webhooks-logs.png)
![](/img/outgoing-webhooks-logs-2.png)

This event list is a verification of the events sent from our end. To check the logs of the actual delivery of the webhook to your endpoint, just head back to the Svix portal and it will show the delivery details per endpoint.
