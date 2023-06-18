---
title: Runtime
status: Feedback Appreciated
category: concept
tags: ["application", "", ""]
---

## What it is

A runtime in general is something that executes a piece of software. 
It can be seen as an abstraction of the underlying operating system that knows how to translate the commands of the program into respective actions on the operating system level. 
In [cloud native](/cloud-native-apps/) computing, when we talk about the runtime we refer to the container runtime. 
The container runtime is that piece of Kubernetes that knows and takes care of how to run containers.

## Problem it addresses

Traditional software applications often face challenges when deployed and executed in distributed environments like cloud platforms. 
These challenges include managing dependencies, scaling resources, handling failures, and ensuring consistent behavior across different environments.
 

## How it helps

Runtime helps address these challenges by providing a standardized and containerized execution environment. 
It [abstracts](/abstraction/) away the underlying infrastructure details, enabling applications to be deployed and run consistently across different cloud platforms or environments. 
The runtime environment includes features like [container orchestration](container-orchestration/), automatic [scaling](/auto-scaling/), service discovery, and fault tolerance, simplifying application deployment, management, and scaling.

A runtime allows developers to focus on building and shipping applications without worrying about specific infrastructure details. 
It provides [portability](/portability/), scalability, and resilience, allowing applications to dynamically adapt to changing conditions and handle increased workloads efficiently.


## Related terms

- [Cloud Native](https://glossary.cncf.io/cloud-native-apps/)
- [Containerization](https://glossary.cncf.io/containerization/)
- [Container Orchestration](https://glossary.cncf.io/container-orchestration/)
- [Microservices Architecture](https://glossary.cncf.io/microservices-architecture/)
