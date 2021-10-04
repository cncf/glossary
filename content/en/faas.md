---
title: Function as a Service (FaaS)
status: Feedback Appreciated
category: Technology
---
## Function as a Service (FaaS)

### What it is
Function as a Service (FaaS) is a type of [serverless](https://github.com/cncf/glossary/blob/main/content/en/serverless.md) [cloud computing](https://github.com/cncf/glossary/blob/main/content/en/cloud_computing.md) [service](https://github.com/cncf/glossary/blob/main/content/en/service.md) that allows executing code in response to events without having to maintain the complex infrastructure typically associated with building and launching [microservices](https://github.com/cncf/glossary/blob/main/content/en/microservices.md) applications. With Function as a Service (FaaS), users manage only functions and data while the cloud provider manages the application. This allows developers to get the functions they need without paying for services when code isn’t running. Some popular examples of FaaS include: [Amazon's AWS Lambda](https://aws.amazon.com/lambda/), [Google Cloud Functions](https://cloud.google.com/functions/) and [Microsoft Azure Functions](https://azure.microsoft.com/en-us/services/functions/).   

### Problem it Addresses
In a traditional on-premises scenario, a business manages and maintains its own data center. The business must invest in servers, storage, software, and other technologies, and hire an IT staff or contractors to purchase, manage, and upgrade all the equipment and licenses. The data center has to be built to meet peak demand, even though sometimes workloads decline and those resources stand idle. Conversely, if the business grows quickly, the IT department might struggle to keep up. Under a standard [Infrastructure-as-a-Service (IaaS)](https://github.com/cncf/glossary/blob/main/content/en/infrastructure_as_a_service.md) cloud computing model, users pre-purchase units of capacity, meaning you pay a public cloud provider for always-on server components to run your apps. It’s the user’s responsibility to scale up server capacity during times of high demand and to scale down when that capacity is no longer needed. The cloud infrastructure necessary to run an app is active even when the app isn’t being used.

### How it Helps
FaaS gives developers an [abstraction](https://github.com/cncf/glossary/blob/main/content/en/abstraction.md) for running web applications in response to events, without managing servers. For example, uploading a file could trigger custom code that transcodes the file into a variety of formats. FaaS infrastructure will auto-scale the code for heavy use and the developer does not have to spend any time or resources building the code for [scalability](https://github.com/cncf/glossary/blob/main/content/en/scalability.md). Billing is based on computation time alone, which means businesses do not have to pay for the time the functions are not in use.
