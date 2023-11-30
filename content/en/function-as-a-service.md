---
title: Function as a Service (FaaS)
status: Completed
category: Technology
tags: ["infrastructure", "", ""]
---

Function as a Service (FaaS) is a type of [serverless](/serverless/) [cloud computing](/cloud-computing/) [service](/service/) 
that allows executing code in response to events 
without maintaining the complex infrastructure 
typically associated with building and launching [microservices](/microservices/) applications. 
With FaaS, users manage only functions and data while the cloud provider manages the application. 
This allows developers to get the functions they need without paying for services when code isn’t running.  

## Problem it addresses

In a traditional on-premises scenario, a business manages and maintains its own data center. 
The business must invest in servers, storage, software, and other technologies 
and potentially hire an IT staff or contractors to purchase, manage, and upgrade all the equipment and licenses. 
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
