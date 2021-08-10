---
title: Serverless
status: Feedback Appreciated
category: Concept
---
## Serverless

### What it is
Serverless is a cloud native development model that allows developers to build and run applications without having to manage servers. There are still servers in serverless, but they are [abstracted](https://github.com/cncf/glossary/blob/main/definitions/abstraction.md) away from app development. A cloud provider handles the routine work of provisioning, maintaining, and [scaling](https://github.com/cncf/glossary/blob/main/definitions/scalability.md) the server infrastructure. Developers can simply package their code in [containers](https://github.com/cncf/glossary/blob/main/definitions/container.md) for deployment. Once deployed, serverless apps respond to demand and automatically scale up and down as needed. Serverless offerings from public cloud providers are usually metered on-demand through an event-driven execution model. As a result, when a serverless function is sitting idle, it doesn’t cost anything.

### Problem it Addresses
Under a standard Infrastructure-as-a-Service (IaaS) [cloud computing](https://github.com/cncf/glossary/blob/main/definitions/cloud_computing.md) model, users pre-purchase units of capacity, meaning you pay a public cloud provider for always-on server components to run your apps. It’s the user’s responsibility to scale up server capacity during times of high demand and to scale down when that capacity is no longer needed. The cloud infrastructure necessary to run an app is active even when the app isn’t being used.

### How it Helps
With serverless architecture, by contrast, apps are launched only as needed. When an event triggers app code to run, the public cloud provider dynamically allocates resources for that code. The user stops paying when the code finishes executing. In addition to the cost and efficiency benefits, serverless frees developers from routine and menial tasks associated with app scaling and server provisioning. With serverless, routine tasks such as managing the operating system and file system, security patches, load balancing, capacity management, scaling, logging, and monitoring are all offloaded to a cloud services provider.
