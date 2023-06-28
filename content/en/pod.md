---
title: Pod
status: Feedback Appreciated
category: concept
tags: ["infrastructure", "fundamental", ""]
---

## What it is

A pod is the smallest executable unit in [Kubernetes](/kubernetes/), representing an essential building block for deploying and managing containerized applications. 
Each pod contains a single application instance and can hold one or more [containers](/container/).
Kubernetes manages pods as part of a larger deployment and can scale pods [vertically](/vertical-scaling/) or [horizontally](/horizontal-scaling/) up and down.

## Problem it addresses

While containers generally act as independent units that run and control a certain workload, there are cases when containers need to interact and be controlled in a tightly coupled manner. 
Examples include containers that inject and apply basic settings to the main container, _sidecar_ (containers) that handle network traffic routing for the main container (see [service mesh](/service-mesh/)), or containers collecting logs in conjunction with each container.

Managing these closely related containers individually would lead to management task redundancies.
For example, the operator would have to repeatedly determine the placement of related containers to ensure they remain together, even though they already specified it during the initial setup.  
And although the lifecycles of these related containers need to be synchronized, they can only be managed individually.  

Pods bundle closely tied containers into a single unit, significantly simplifying container operations. 

## How it helps

Isolation: Each pod has its own isolated environment, including its own network stack and file system. This ensures that containers in the same pod can't interfere with each other, and helps maintain security and stability.

Resource sharing: Containers in the same pod can share resources, such as CPU and memory, which allows for efficient use of resources.

Simplified management: Pods make it easier to manage groups of containers as a single unit, rather than managing each container individually. 
This can simplify deployment, scaling, and monitoring of applications.


Overall, pods are a key concept in Kubernetes, and provide a powerful tool for deploying and managing containerized applications in a scalable and efficient way.

