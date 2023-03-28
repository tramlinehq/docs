# Integrations Overview

Tramline is designed to seamlessly integrate with the services you already use to manage your app's release. These integrations provide Tramline with valuable data, events, and actions that allow it to create a comprehensive picture of your release train.

The current set of integrations supported by Tramline can be broken down into four categories:

| Type                  | Description                                                          | Required for core functionality |
|-----------------------|----------------------------------------------------------------------|---------------------------------|
| Version Control       | where your app code lives                                            | ✅                               |
| Build Servers (CI/CD) | where your app build is generated                                    | ✅                               |
| Notification          | where do you want to be notified about events in your release trains | ❌                               |
| Build Distribution    | where do you to want to distribute your app                          | ✅                               |


When you add your app for the first time, Tramline will guide you in setting up the necessary integrations.

![](/img/add-integrations-new-app.png)

While Notification integrations are optional, we highly recommend setting them up to stay informed of significant events in your release cycle, even when you're not actively using Tramline. By doing so, you can stay on top of important developments in the release process.

To view or change the integrations for your app after the initial setup, you can click on the __Integrations__ button in the top-right of your app page.

![](/img/add-integrations.png)

To learn more about the specific integrations we support for each integration type, please refer to the next sections.
