---
title: Runtime
status: Completed
category: concept
tags: ["application", "", ""]
---

A runtime, in general, executes a piece of software.
It is an [abstraction](/abstraction/) of the underlying operating system that translates the program's commands into respective actions for the operating system. 

In the context of [cloud native](/cloud-native-apps/), _runtime_ generally refers to container runtime. 
A container runtime specifically implements the [Open Container Initiative](https://opencontainers.org/) specification to ensure consistent handling around different container orchestration technologies. 

## Problem it addresses

Without the abstraction of a container runtime, the application would have to deal with all the mechanics of each operating system, increasing the complexity of running the app. 

## How it helps
Container runtimes are a necessary component of container orchestrators such as Kubernetes. 
They handle the container lifecycle, which does mainly three things.
First, it defines how container images are specified and how the runtime can retrieve them. 
Second, they handle how these images are unpacked, layered, mounted, and executed.
Furthermore, runtimes manage hardware resources taking care of all these operating system-level actions. 
These include resource allocation and isolation.  
Over time, different container runtime products evolved, leading to the OCI Specification, 
which became the standard for container runtimes. 

Introducing this standard allows end users to combine any OCI-compliant runtime with any OCI-compliant container orchestrator (like Kubernetes). 

## Related terms

- [Cloud Native](https://glossary.cncf.io/cloud-native-apps/)
- [Containerization](https://glossary.cncf.io/containerization/)
- [Container Orchestration](https://glossary.cncf.io/container-orchestration/)
- [Microservices Architecture](https://glossary.cncf.io/microservices-architecture/)
