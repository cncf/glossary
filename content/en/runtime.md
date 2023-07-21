---
title: Runtime
status: Feedback Appreciated
category: concept
tags: ["application", "", ""]
---

## What it is

A runtime, in general, executes a piece of software.
It is an [abstraction](/abstraction/) of the underlying operating system that translates the program's commands into respective actions for the operating system. 

In the context of [cloud native](/cloud-native-apps/), _runtime_ generally refers to container runtime. 
A container runtime specifically implements the [Open Container Initiative](https://opencontainers.org/) specification to ensure consistent handling around the ecosystem. 
This includes the container image specification, the method by which the runtime can retrieve an image, 
and how that image is unpacked, layered, mounted, and executed. 
These runtimes utilize kernel features such as namespaces and cgroups to provide isolation and resource management for the containers.

## Problem it addresses

Container runtimes are a necessary component of container orchestrators such as Kubernetes. 
The runtime is scoped to only handle the lifecycle of the containers. 
User-facing features, such as scaling and service discovery, fault tolerance, etc., are managed by the orchestrator or some other high-level tool that interfaces with the runtime.

Without a container runtime, the user would have to manually handle the container lifecycle, interface directly with cgroups and namespaces in the kernel, and handle hardware resources.
The container runtime acts as an abstraction layer for these features.

## How it helps

Container runtimes help to address this by taking care of all those low-level actions for us; 
thus, they are responsible for launching, managing, and terminating containers.
Over time different container runtime products evolved, leading to the OCI Specification, 
which became the standard for container runtimes. 

This allows end users to use a specific container runtime that suits their needs best, 
as long as they use a product that can use OCI-compliant container runtimes (like Kubernetes)
and a specific container runtime that is OCI-compliant.

## Related terms

- [Cloud Native](https://glossary.cncf.io/cloud-native-apps/)
- [Containerization](https://glossary.cncf.io/containerization/)
- [Container Orchestration](https://glossary.cncf.io/container-orchestration/)
- [Microservices Architecture](https://glossary.cncf.io/microservices-architecture/)
