---
title: Function as a Service (FaaS)
status: Completed
category: Technology
---

## What it is
Function as a Service (FaaS) is a type of [serverless](https://glossary.cncf.io/serverless/) [cloud computing](https://glossary.cncf.io/cloud_computing/) [service](https://glossary.cncf.io/service/) that allows executing code in response to events without maintaining the complex infrastructure typically associated with building and launching [microservices](https://glossary.cncf.io/microservices/) applications. With FaaS, users manage only functions and data while the cloud provider manages the application. This allows developers to get the functions they need without paying for services when code isn’t running. Some popular FaaS examples include: [Amazon's AWS Lambda](https://aws.amazon.com/lambda/), [Google Cloud Functions](https://cloud.google.com/functions/) and [Microsoft Azure Functions](https://azure.microsoft.com/en-us/services/functions/).   

## Problem it addresses
In a traditional on-premises scenario, a business manages and maintains its own data center. The business must invest in servers, storage, software, and other technologies and potentially hire an IT staff or contractors to purchase, manage, and upgrade all the equipment and licenses. The data center has to be built to meet peak demand, even when workloads decline and those resources stand idle. Conversely, if the business grows quickly, the IT department might struggle to keep up. Under a standard [Infrastructure-as-a-Service (IaaS)](https://glossary.cncf.io/infrastructure_as_a_service/) cloud computing model, users pre-purchase capacity units, meaning you pay a public cloud provider for always-on server components to run your apps. It’s the user’s responsibility to scale up server capacity during times of high demand and scale down when that capacity is no longer needed. The cloud infrastructure necessary to run an app is active even when the app isn’t being used.

## How it helps
FaaS gives developers an [abstraction](https://glossary.cncf.io/abstraction/) for running web applications in response to events without managing servers. For example, uploading a file could trigger custom code that transcodes the file into various formats. FaaS infrastructure will auto-scale the code for heavy use, and the developer does not have to spend any time or resources building the code for [scalability](https://glossary.cncf.io//scalability/). Billing is based on computation time alone, which means businesses do not have to pay when the functions are not in use.
