---
Title: সার্ভারহীন (Serverless)
Status: Completed
Category: প্রযুক্তি
tags: ["architecture", "", ""]
---

## এটা কি

Serverless is a cloud native development model that allows developers to 
build and run applications without having to manage servers. 
There are still servers in serverless, but they are [abstracted](/abstraction/) away from app development. 
A cloud provider handles the routine work of provisioning, maintaining, and [scaling](/scalability/) the server infrastructure. 
Developers can simply package their code in [containers](/container/) for deployment. 
Once deployed, serverless apps respond to demand and automatically scale up and down as needed. 
Serverless offerings from public cloud providers are usually metered on-demand through an event-driven execution model. 
As a result, when a serverless function is sitting idle, it doesn’t cost anything.

## এটা যেসব সমস্যাতে দৃষ্টিপাত করে

Under a standard [Infrastructure-as-a-Service (IaaS)](/infrastructure-as-a-service/) [cloud computing](/cloud-computing/) model, 
users pre-purchase units of capacity, meaning you pay a public cloud provider for always-on server components to run your apps. 
It’s the user’s responsibility to scale up server capacity during times of high demand and 
to scale down when that capacity is no longer needed. 
The cloud infrastructure necessary to run an app is active even when the app isn’t being used.

## এটা কিভাবে সাহায্য করে

With serverless architecture, by contrast, apps are launched only as needed. 
When an event triggers app code to run, the public cloud provider dynamically allocates resources for that code. 
The user stops paying when the code finishes executing. 
In addition to the cost and efficiency benefits, 
serverless frees developers from routine and menial tasks associated with app scaling and server provisioning. 
With serverless, routine tasks such as managing the operating system and file system, security patches, 
load balancing, capacity management, scaling, logging, and monitoring are all offloaded to a cloud services provider.
