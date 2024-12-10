---
title: Infrastructure as Code (IaC)
status: Completed
category: concept
tags: ["infrastructure", "methodology", ""]
---

Infrastructure as code is the practice of storing the definition of infrastructure as one or more files. 
This replaces the traditional model where infrastructure as a service is provisioned manually, 
usually through shell scripts or other configuration tools.

## Problem it addresses

Building applications in a cloud native way requires infrastructure to be disposable and reproducible. 
It also needs to [scale](/scalability/) on-demand in an automated and repeatable way, potentially without human intervention. 
Manual provisioning cannot meet the responsiveness and scale requirements of [cloud native applications](/cloud-native-apps/). 
Manual infrastructure changes are not reproducible, quickly run into scale limits, and introduces misconfiguration errors.

## How it helps

By representing the data center resources such as servers, load balancers, and subnets as code, 
it allows infrastructure teams to have a single source of truth for all configurations and 
also allows them to manage their data center in a [CI](/continuous-integration/)/[CD](/continuous-delivery/) pipeline, 
implementing version control and deployment strategies.
