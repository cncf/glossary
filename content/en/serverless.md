---
Title: Serverless
Status: Completed
Category: Technology
tags: ["architecture", "", ""]
---

Serverless is a cloud native development model that allows developers to 
build and run applications without having to manage servers. 
While servers do still exist within the serverless paradigm, they are [abstracted](/abstraction/) away from the application development process.
A cloud provider handles the routine work of provisioning, maintaining, and [scaling](/scalability/) the server infrastructure. 
Developers can conveniently package their code into [containers](/container/) for deployment.
Once deployed, serverless apps respond to demand and automatically scale up and down as needed. 
Serverless offerings from public cloud providers are usually metered on-demand through an event-driven execution model. 
Consequently, when a serverless function is in an idle state, there are no associated costs.

## Problem it addresses

Under a standard [Infrastructure-as-a-Service (IaaS)](/infrastructure-as-a-service/) [cloud computing](/cloud-computing/) model, 
users pre-purchase units of capacity, meaning you pay a public cloud provider for always-on server components to run your apps. 
It’s the user’s responsibility to scale up server capacity during times of high demand and 
to scale down when that capacity is no longer needed. 
The cloud infrastructure required to operate an application remains active even when the application is not in use.

## How it helps

Contrasting with traditional approaches, the serverless architecture launches applications only when they are needed. 
When an event triggers app code to run, the public cloud provider dynamically allocates resources for that code. 
The user stops paying when the code finishes executing. 
In addition to the cost and efficiency benefits, 
serverless frees developers from routine and menial tasks associated with app scaling and server provisioning. 
With serverless, routine tasks such as managing the operating system and file system, security patches, 
load balancing, capacity management, scaling, logging, and monitoring are all offloaded to a cloud services provider.
