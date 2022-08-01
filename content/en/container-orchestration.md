---
title: Container Orchestration
status: Completed
category: Concept
---

## What it is
[Container](/container/) orchestration provides the ability to manage and automate the lifecycle of containerized applications in dynamic environments. This includes different aspects that are also pursued by [Cloud Native Technologies](/cloud-native-tech/) and [Cloud Native Apps](/cloud-native-apps/), such as: deployment, (auto)scaling, auto healing and monitoring.
It functions like a data center operating system (OS), managing [containerized](/containerization/) applications at scale (just like the OS on your laptop that manages your apps).

## Problem it addresses 
The rise of [Cloud Native Apps](/cloud-native-apps/) and [technologies](/cloud-native-tech/) as well as the fast changing demands of modern businesses introduced a new set of problems. Managing microservices, security and network related things at scale as well as distributed system in general are hard if not impossible to manage manually.   
There were tools that made it simple to run containers within virtual machines, but communicating all of this into the outside world and sharing secrets remained difficult. 
A platform was required to run, manage, operate, and support the containers throughout their lifecycle.

## How it helps
Container orchestration _tools_ often work declaratively, meaning the operator provides instructions about _what_ the deployment should look like (e.g., how many clusters, nodes, resource allocation, etc.), and the orchestrator proactively takes care of the _how_. 
Orchestrators are also often [self-healing](https://glossary.cncf.io/self-healing/), ensuring the cluster's actual state always matches the operator's desired state.
