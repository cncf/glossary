---
title: Function as a Service (FaaS)
status: Completed
category: Technology
tags: ["infrastructure", "", ""]
---

## What it is

Function as a Service (FaaS) is a cloud computing model that provides a platform for executing event-triggered functions, allowing for automatic scaling without manual intervention.
At its essence, FaaS enables the deployment of individual functions that are activated by specific events, operate on a short-term basis, and then shut down, ensuring resources are not wasted.
This model supports an [autoscaling](/auto-scaling/) feature, enabling a function instance to be initiated per request and terminated post-execution, emphasizing its stateless nature.
Consequently, FaaS platforms can implement a true pay-as-you-go billing approach, eliminating costs when functions are dormant, distinguishing it from other models like [Platform as a Service (PaaS)](/platform-as-a-service/), which require continuous resource availability.

## Problem it addresses

In a traditional on-premises scenario, a business manages and maintains its own data center.
The business must invest in servers, storage, software, and other technologies
and potentially hire IT staff or contractors to purchase, manage, and upgrade all the equipment and licenses.
The data center has to be built to meet peak demand, even when workloads decline and those resources stand idle.
Conversely, if the business grows quickly, the IT department might struggle to keep up.
Under a standard [Infrastructure-as-a-Service (IaaS)](/infrastructure-as-a-service/) cloud computing model,
users pre-purchase capacity units, meaning you pay a public cloud provider for always-on server components to run your apps.
It’s the user’s responsibility to scale up server capacity during times of high demand
and scale down when that capacity is no longer needed.
The cloud infrastructure necessary to run an app is active even when the app isn’t being used.

## How it helps

FaaS gives developers an [abstraction](/abstraction/) for running web applications in response to events without managing servers.
For example, uploading a file could trigger custom code that transcodes the file into various formats.
FaaS infrastructure will auto-scale the code for heavy use,
and the developer does not have to spend any time or resources building the code for [scalability](/scalability/).
Billing is based on computation time alone, which means businesses do not have to pay when the functions are not in use.

See also the glossary for [Serverless](/serverless/).
Serverless and FaaS are often used as synonyms, but there is a difference.