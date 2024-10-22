---
Title: Serverless
Status: Completed
Category: Technology
tags: ["architecture", "", ""]
---


Serverless Computing [abstracts](/abstraction/) servers away from the user.
Operational management falls to the service provider, including handling physical machines and VM provisioning.
Service providers can be public cloud entities or internal IT departments serving their development teams.
These providers offer user interfaces such as SDKs, CLIs, or OCI-compliant [runtimes](/runtime/), focusing on code and deployment tasks.
Charges are based on a pay-per-use model.
[Scaling](/scalability/) and resource provisioning for computing, storage, or networking are automatically adjusted based on application demand without user intervention.
A serverless platform provider consolidates resources to serve multiple users on a single physical machine, ensuring isolation through virtualization, especially with [VMs](/virtual-machine/).

Serverless is a comprehensive term encompassing services with these attributes, extending from Platform-as-a-Service (PaaS) to Software-as-a-Service (SaaS).

## Problem it addresses

In traditional [Infrastructure-as-a-Service (IaaS)](/infrastructure-as-a-service/) [cloud computing](/cloud-computing/) models, users commit to a predefined capacity, resulting in charges for continuous server availability regardless of actual use.
Responsibility for adjusting server capacity to meet fluctuating demands falls on the user, maintaining active infrastructure even during idle periods.

## How it helps

Serverless architecture introduces a more efficient approach, activating services solely upon demand.
This model ensures dynamic resource allocation by a cloud provider, eliminating costs for unused services.
Beyond financial and operational efficiencies, serverless technology relieves developers of the burdens of scaling applications and managing server infrastructure.
Tasks such as operating system maintenance, security updates, load balancing, capacity planning, and monitoring are delegated to the cloud provider, streamlining the development process.

Refer to the [Function-as-a-Service (FaaS)](/function-as-a-service/) glossary entry for more information.
Although "serverless" and "FaaS" are often used as interchangeable terms, they embody distinct concepts.
