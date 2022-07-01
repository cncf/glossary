---
title: Container Orchestration
status: Completed
category: Concept
---

## What it is
[Container](https://glossary.cncf.io/container/) orchestration automates container lifecycle management tasks such as provisioning, deployment, scaling, and networking in dynamic environments. It functions like a data center operating system (OS), managing [containerized](https://glossary.cncf.io/containerization/) applications that run across a [distributed system](https://glossary.cncf.io/distributed-systems/) (just like the OS on your laptop that manages your apps).

## Problem it addresses 
On behalf of the user, container orchestration organizes the compute, networking, and storage infrastructure. To ensure that applications are highly available and computing resources are used to their full potential, it does away with the requirement for direct manual orchestration in a cluster and automates the orchestration process.  

## How it helps
Container orchestration _tools_ often work declaratively, meaning the operator provides instructions about _what_ the deployment should look like (e.g., how many clusters, nodes, resource allocation, etc.), and the orchestrator proactively takes care of the _how_. Orchestrators are also often [self-healing](https://glossary.cncf.io/self-healing/), ensuring the cluster's actual state always matches the operator's desired state.
