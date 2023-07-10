---
Title: Serverless
Status: Completed
Category: Technology
tags: ["architecture", "", ""]
---

## What it is

"Serverless Computing is a generic computing approach where servers are [abstracted](/abstraction/) from the user. 
All operational aspects like managing physical machines and providing VMs are tasks of the service provider. 
A service provider is typically a public cloud provider but also in-house IT departments can act as service providers for their own development teams. 
They offer interfaces for service users like SDKs, CLIs or OCI compliant runtimes where the focus is on code, configuration options or deploying/uploading artifacts.
All offerings are pay-per-use. 
[Scaling](/scalability/) and provisioning of additional computing, storage or network resources happens without user interference based on the demand of the deployed applications and ecosystem services like data storage. 
A provider of a serverless platform pools resources and serves multiple users on the same physical machine. 
Tenants are isolated via virtualization approaches in particular [VMs](/virtual-machine/)." [(Manner 2023, p.520)](https://doi.org/10.1109/CLOUD60044.2023.00068)

Serverless is therefore an umbrella term for all services with these characteristics. 
Serverless offerings range from [Platform-as-a-Service (PaaS)](/platform-as-a-service/) until [Software-as-a-Service (SaaS)](/software-as-a-service/).

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
