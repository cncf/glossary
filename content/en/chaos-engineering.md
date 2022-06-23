---
title: Chaos Engineering
status: Completed
category: concept
tags: ["security", "", ""]
---

## What it is

Chaos Engineering or CE is the discipline of experimenting on a [distributed system](/distributed-systems/) in production 
to build confidence in the system's capability to withstand turbulent and unexpected conditions.

## Problem it addresses

[SRE](/site-reliability-engineering/) and [DevOps](/devops/) practices focus on 
techniques to increase product resiliency and [reliability](/reliability/). 
A system's ability to tolerate failures while ensuring adequate service quality is 
typically a software development requirement. 
There are several aspects involved that could lead to outages of an application, 
like infrastructure, platform or other moving parts of a ([microservice](/microservices/)-based) application. 
High-frequency deployment of new features to the production environment can 
result in a high probability of downtime and a critical incident 
— with considerable consequences to the business.

## How it helps

Chaos engineering is a technique to meet resilience requirements. 
It is used to achieve resilience against infrastructure, platform, and application failures. 
Chaos engineers use chaos experiments to proactively inject random failures 
to verify that an application, infrastructure, or platform can self-heal and the failure cannot noticeably impact customers. 
Chaos experiments aim to discover blind spots 
(e.g. monitoring or autoscaling techniques) and to improve the communications between teams during critical incidents. 
This approach helps increase resiliency and the team's confidence in complex systems, particularly production.
