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

While containers generally act as independent units that run and control a certain workload, 
there are cases when containers need to interact and be controlled in a tightly coupled manner. 

Managing these closely related containers individually would lead to management task redundancies.
For example, the operator would have to repeatedly determine the placement of related containers to ensure they remain together.
And although the lifecycles of these related containers need to be synchronized, they can only be managed individually.  


## How it helps

Pods bundle closely tied containers into a single unit, significantly simplifying container operations.
For instance, auxiliary containers are often used alongside the main container to add additional functionalities or to set up global configurations. 
Examples include containers that inject and apply basic settings to the main container, _sidecar_ (containers) that handle network traffic routing for the main container (see [service mesh](/service-mesh/)), or containers collecting logs in conjunction with each container.

Operators can also set per-pod resource limits, allowing services within a pod to share resources but to limit (without taking away resources from other pods). 



Overall, pods are a key concept in Kubernetes, and provide a powerful tool for deploying and managing containerized applications in a scalable and efficient way.

