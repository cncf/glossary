---
title: Kubernetes
status: Completed
category: technology
tags: ["infrastructure", "", ""]
---

## What it is

Kubernetes, often abbreviated as K8s, is an open source container orchestrator. 
It automates the lifecycle of containerized applications on modern infrastructures, functioning as a "datacenter operating system" that manages applications across a [distributed system](/distributed-systems/).

Kubernetes schedules [containers](container/) across [nodes](/nodes/) in a [cluster](/cluster/), bundling several infrastructure resources such as load balancer, persistent storage, etc. to run containerized applications.

Kubernetes enables automation and extensibility, allowing users to deploy applications declaratively (see below) in a reproducible way. 
Kubernetes is extensible via its [API](/application-programming-interface/), allowing experienced Kubernetes practitioners to leverage its automation capabilities according to their needs.

## Problem it addresses

Infrastructure automation and declarative configuration management have been important concepts for a long time, but they have become more pressing as [cloud computing](cloud-computing/) has gained popularity. 
As demand for compute resources increases and organizations need to provide more operational capabilities with fewer engineers, new technologies and working methods are required to meet that demand. 

## How it helps

Similar to traditional [infrastructure as code](/infrastructure-as-code/) tools, Kubernetes helps with automation but has the advantage of working with containers. 
Containers are more resistant to configuration drift than [virtual](/virtual-machine/) or physical machines. 

Additionally, Kubernetes works declaratively, which means that instead of operators instructing the machine how to do something, they describe — usually as manifest files (e.g., YAML) — what the infrastructure should look like. 
Kubernetes then takes care of the "how". 
This results in Kubernetes being extremely compatible with infrastructure as code.

Kubernetes also [self-heals](/self-healing/). 
The cluster's actual state will always match the operator's desired state.
If Kubernetes detects a deviation from what is described in the manifest files, a Kubernetes controller kicks in and fixes it. 
While the infrastructure Kubernetes uses may be continually changing, Kubernetes constantly and automatically adapts to changes and ensures that it matches with the desired state.
