---
title: Function as a Service (FaaS)
status: Completed
category: Technology
tags: ["infrastructure", "", ""]
---

## What it is

"Function as a Service (FaaS) is a compute service model in line with other as a Service offerings. 
The core of this concept are event-triggered, single-scoped functions, i.e. cloud functions, which scale up and 
down on demand without user interaction. 
This [autoscaling](/auto-scaling/) property is one of the unique characteristics of FaaS. 
Such platforms conceptually start a single function instance for each request and tear this instance down again 
after the function is executed. Therefore,
cloud functions are inherently stateless. 
Which means that platform providers are able to offer a genuine pay as-you-go billing model where users are only 
charged when the cloud function is running as instances scaled
to zero results in no idling costs. 
Other comparable computing models like [Platform as a Service (PaaS)](/platform-as-a-service/) based offerings always 
have at least a single instance running to serve requests." [(Manner 2023, p.521)](https://doi.org/10.1109/CLOUD60044.2023.00068)


## Problem it addresses

In a traditional on-premise scenario, a business manages and maintains its own data center. 
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