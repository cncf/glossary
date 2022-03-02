---
title: Chaos Engineering
status: Completed
category: concept
---

## What it is
Chaos Engineering or CE is the discipline of experimenting on a [distributed system](https://glossary.cncf.io/distributed_systems/) in production to build confidence in the system's capability to withstand turbulent and unexpected conditions.

## Problem it addresses
People working in the field of [SRE](https://glossary.cncf.io/site_reliability_engineering/) and [DevOps](https://glossary.cncf.io/devops/) continuously look for new techniques to increase product resiliency and [reliability](https://glossary.cncf.io/reliability/). A system's ability to tolerate failures while ensuring adequate service quality is typically a software development requirement. But deep testing on a production system is not always possible due to the complexity of the architecture. High-frequency deployment of new features to the production environment can result in a high probability of downtime and a critical incident — with considerable consequences to the business.

## How it helps
Chaos engineering is a technique to meet resilience requirements. It is used to achieve resilience against infrastructure, platform, and application failures. Chaos Engineers use Chaos Experiments to proactively inject random failures to verify that an application, infrastructure, or platform can self-heal and the failure cannot noticeably impact customers. Chaos Experiments aim to discover blind spots (example in monitoring or autoscaling technics) and to improve the communications between teams during critical incidents. This approach helps increase resiliency and the team's confidence in complex systems, particularly production.
