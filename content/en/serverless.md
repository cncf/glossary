---
Title: Serverless
Status: Completed
Category: Technology
tags: ["architecture", "", ""]
---

## What it is

Serverless Computing [abstracts](/abstraction/) servers away from the user.
Operational management falls to the service provider, including handling physical machines and VM provisioning.
Service providers can be public cloud entities or internal IT departments serving their development teams.
These providers offer user interfaces such as SDKs, CLIs, or OCI-compliant runtimes, focusing on code and deployment tasks.
Charges are based on a pay-per-use model.
[Scaling](/scalability/) and resource provisioning for computing, storage, or networking are automatically adjusted based on application demand without user intervention.
A serverless platform provider consolidates resources to serve multiple users on a single physical machine, ensuring isolation through virtualization, especially with [VMs](/virtual-machine/).

Serverless is a comprehensive term encompassing services with these attributes, extending from [Platform-as-a-Service (PaaS)](/platform-as-a-service/) to [Software-as-a-Service (SaaS)](/software-as-a-service/).

## Problem it addresses

Under a standard [Infrastructure-as-a-Service (IaaS)](/infrastructure-as-a-service/) [cloud computing](/cloud-computing/) model,
users pre-purchase units of capacity, meaning you pay a public cloud provider for always-on server components to run your services.
It’s the user’s responsibility to scale up server capacity during times of high demand and
to scale down when that capacity is no longer needed.
The cloud infrastructure necessary to run an app is active even when the app isn’t being used.

## How it helps

With serverless architecture, by contrast, services are launched only as needed.
A public cloud provider dynamically allocates resources for these services.
The user does not have to pay when the service does not run.
In addition to the cost and efficiency benefits,
serverless frees developers from routine and menial tasks associated with app scaling and server provisioning.
With serverless, routine tasks such as managing the operating system and file system, security patches,
load balancing, capacity management, scaling, logging, and monitoring are all outsourced to a cloud services provider.

See also the glossary for [Function-as-a-Service (FaaS)](/function-as-a-service/).
Serverless and FaaS are often used as synonyms, but there is a difference.
