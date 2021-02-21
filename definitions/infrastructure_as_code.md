---
title: Infrastructure as Code (IaC)
status: Feedback Appreciated
category: concept
---
## Infrastructure as Code (IaC)

Infrastructure as code is a procedure where data centers resources are defined by machine readable code. This replaces the traditional model where one would configure hardware manually, usually through shell scripts or other configuration tools. 

When provisioning several resources to maintain enterprise apps, it is generally not scalable to have someone manually provision the resources. It also makes it more difficult to iterate on the resources when new versions of software or patches need to be pushed to the infrastructure. 

By representing the data center resources such as servers, load balancers, and subnets as code, it allows infrastructure teams to have a single source of truth for all configurations and also allows that to manage their data center in a CI/CD pipeline, implementing version control and deployment strategies. 

