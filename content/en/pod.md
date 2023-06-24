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

While containers themselves are individual entities that can act as units for running and controlling applications, there are many situations where multiple containers need to interact and be controlled in a tightly coupled manner. 
For instance, auxiliary containers are often used alongside the main container to add additional functionalities or to set up global configurations. 
Examples of these include init containers that inject and apply basic settings to the application container, sidecar containers that handle network traffic routing for each application container, and containers that collect logs in conjunction with each container.

Managing these closely related containers individually can lead to redundancy in management tasks.
For example, the operator would have to repeatedly determine the placement of related containers to ensure they remain together, even though they already specified it during the initial setup.  
Similarly, even though the lifecycles of these related containers need to be synchronized, they will be managed individually.

Therefore, to alleviate these management burdens and simplify usage, it is necessary to treat closely tied containers as a single integrated control entity.

## How it helps

Isolation: Each pod has its own isolated environment, including its own network stack and file system. This ensures that containers in the same pod can't interfere with each other, and helps maintain security and stability.

Resource sharing: Containers in the same pod can share resources, such as CPU and memory, which allows for efficient use of resources.

Simplified management: Pods make it easier to manage groups of containers as a single unit, rather than managing each container individually. 
This can simplify deployment, scaling, and monitoring of applications.

Portability: Pods can be easily moved between different hosts or cloud providers, which allows for greater flexibility and portability of applications.

Overall, pods are a key concept in Kubernetes, and provide a powerful tool for deploying and managing containerized applications in a scalable and efficient way.

