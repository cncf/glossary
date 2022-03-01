---
title: Chaos Engineering
status: Completed
category: concept
---

## What it is
Chaos Engineering or CE is the discipline of experimenting on a [distributed system](https://glossary.cncf.io/distributed_systems/) in production to build confidence in the system's capability to withstand turbulent and unexpected conditions.

## Problem it addresses
[SREs](https://glossary.cncf.io/site_reliability_engineering/) and [DevOps](https://glossary.cncf.io/devops/) continuously look for new techniques to increase product resiliency and [reliability](https://glossary.cncf.io/reliability/). A system's ability to tolerate failures while ensuring adequate service quality is typically a software development requirement. But deep testing on a production system is not always possible due to the complexity of the architecture. High deployment of new features to the production environment can result in a high probability of downtime and a critical incident — with considerable consequences to the business.

## How it helps
Chaos engineering is a technique to meet resilience requirements. It can be used to achieve resilience against infrastructure, network, and application failures. Redundant architectures are tested by proactively injecting random failures to verify that an application, infrastructure, or platforms failure cannot noticeably impact customers. This approach helps increase the resiliency and confidence in the complex systems we put into production.
