---
title: Immutable Infrastructure
status: Completed
category: property
---
## Immutable Infrastructure

### What it is
Immutable Infrastructure is computer infrastructure (virtual machines, containers, network appliances) that cannot be changed once deployed. This can be enforced by an automated process that overwrites unauthorized changes or through a system that won't allow changes in the first place. Containers are a good example of immutable infrastructure because persistent changes to containers can only be made by creating a new version of the container or recreating the existing container from its image.

### Problem it Addresses
[Infrastructure as Code](https://github.com/cncf/glossary/blob/main/definitions/infrastructure_as_code.md) (IaC) systems became very popular with the rise of [cloud computing](https://github.com/cncf/glossary/blob/main/definitions/cloud_computing.md). They provide value by helping users configure virtual or physical machines. Unfortunately, most IaC systems only provide limited controls on the managed infrastructure, and changes that occur to systems outside IaC tools persist in the environment. That may lead to unexpected behaviors, security vulnerabilities, and potentially break the automation.

### How it Helps
By preventing or identifying unauthorized changes, immutable infrastructures make it easier to identify and mitigate security risks. Operating such a system becomes a lot more straightforward because administrators can make assumptions about it. After all, they know no one made mistakes or changes they forgot to communicate. 
Immutable infrastructure goes hand-in-hand with IaC where all automation needed to create infrastructure is stored in version control (e.g. Git). This combination of immutability and version control means that there is a durable audit log of every authorized change to a system.

