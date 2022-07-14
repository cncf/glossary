---
title: Container Orchestration
status: Completed
category: Concept
---

## What it is
[Container](https://glossary.cncf.io/container/) orchestration automates container lifecycle management tasks such as provisioning, deployment, scaling, and networking in dynamic environments. 
It functions like a data center operating system (OS), managing [containerized](https://glossary.cncf.io/containerization/) applications that run across a [distributed system](https://glossary.cncf.io/distributed-systems/) (just like the OS on your laptop that manages your apps).

## Problem it addresses 
Container usage began to grow significantly, bringing varying degrees of orchestration and cluster management capabilities. 
There were tools that made it simple to run containers within virtual machines, but communicating all of this into the outside world and sharing secrets remained difficult. 
A platform was required to run, manage, operate, and support the containers throughout their lifecycle.

## How it helps
Container orchestration _tools_ often work declaratively, meaning the operator provides instructions about _what_ the deployment should look like (e.g., how many clusters, nodes, resource allocation, etc.), and the orchestrator proactively takes care of the _how_. 
Orchestrators are also often [self-healing](https://glossary.cncf.io/self-healing/), ensuring the cluster's actual state always matches the operator's desired state.
