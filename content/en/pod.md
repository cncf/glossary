---
title: Pod
status: Completed
category: concept
tags: ["infrastructure", "fundamental", ""]
---

Within a [Kubernetes](/kubernetes/) environment, a pod acts as the most basic deployable unit.
It represents an essential building block for deploying and managing containerized applications.
Each pod contains a single application instance and can hold one or more [containers](/container/).
Kubernetes manages pods as part of a larger deployment and can scale pods [vertically](/vertical-scaling/) or [horizontally](/horizontal-scaling/) as needed.

## Problem it addresses

While containers generally act as independent units that run and control a particular workload, 
there are cases when containers need to interact and be controlled in a tightly coupled manner. 

If each of these closely related containers were managed individually, it would lead to redundant management tasks.
For example, the operator would have to repeatedly determine the placement of related containers to ensure they remain together.
And although the lifecycles of these related containers need to be synchronized, they can only be managed individually.  


## How it helps

Pods bundle closely tied containers into a single unit, significantly simplifying container operations.
For instance, auxiliary containers are often used alongside the main container to add additional functionalities or to set up global configurations. 
Examples include containers that inject and apply basic settings to the main container, 
_sidecar_ (containers) that handle network traffic routing for the main container (see [service mesh](/service-mesh/)), 
or containers collecting logs in conjunction with each container.

Memory and CPU allocation can be defined either on a pod level, allowing the containers inside to share resources in a flexible way, or per container.
