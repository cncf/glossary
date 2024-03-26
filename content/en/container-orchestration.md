---
title: Container Orchestration
status: Completed
category: Concept
---

[Container](/container/) orchestration refers to managing and automating the lifecycle of [containerized](/containerization/) applications in dynamic environments. 
It's executed through a container orchestrator (in most cases, [Kubernetes](/kubernetes)), which enables deployments, (auto)scaling, auto-healing, and monitoring. 
Orchestration is a metaphor:
The orchestration tool conducts containers like a music conductor, ensuring every container (or musician) does what it should. 

## Problem it addresses 

Managing [microservices](/microservices), security, and network communication at scale — and [distributed systems](/distributed-systems) in general — is hard, if not impossible, to manage manually.
Container orchestration allows users to automate all these management tasks. 

## How it helps

Container orchestration tools allow users to determine a system's state. 
First, they declare how it should look like (e.g., x containers, y pods, etc.).
The orchestration tool will then automatically monitor the infrastructure and correct it if its state deviates from the declared one (e.g., spin up a new container if one crashes). 
This automation simplifies many of the engineering teams' otherwise highly manual and complex operational tasks, including provisioning, deployment, scaling (up and down), networking, load balancing, and other activities.
