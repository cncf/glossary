---
title: Runtime
status: Feedback Appreciated
category: concept
tags: ["application", "", ""]
---

## What it is

A runtime in general is something that executes a piece of software. 
It can be seen as an abstraction of the underlying operating system that knows how to translate the commands of the program into respective actions on the operating system level. 

In the context of [cloud native](/cloud-native-apps/), when we talk about the runtime we refer to the container runtime. 
A container runtime specifically implements the [Open Container Inititative](https://opencontainers.org/) specification to ensure consistent handling around the ecosystem. 
This includes the container image specification, the method in which the runtime can retrieve an image, 
and how that image is unpacked, layered, mounted, and executed. 
These runtimes utilize kernel features such as namespaces and cgroups to provide isolation and resource management for the containers.

Container runtimes read the specification [configuration files](https://github.com/opencontainers/runtime-spec/blob/main/glossary.md#configuration) from a [bundle](https://github.com/opencontainers/runtime-spec/blob/main/glossary.md#bundle), and use that information to create a [container](https://github.com/opencontainers/runtime-spec/blob/main/glossary.md#container), launches a process inside the container, and performs other [lifecycle actions](https://github.com/opencontainers/runtime-spec/blob/main/runtime.md).

Common runtimes include containerd, CRI-O, Docker, Firecracker, gVisor, lxd, Podman, and runc. 


## Problem it addresses

Container runtimes are a necessary component of container orchestrators such as Kubernetes. The runtime is scoped to only handle the lifecycle of the containers. User-facing features such as scaling and service discovery, fault tolerance, etc. are handled by the orchestrator or some other high level tool that interfaces with the runtime. 

## How it helps

Container runtimes help to address this by taking of all those low level actions for us, 
thus they are responsible for launching, managing, and terminating containers. 
Over time different container runtime products evolved, leading to the OCI Specification, 
which became the standard for container runtimes. 

This allows a diverse set of container runtimes to be used with different tools. For example Kubernetes can use OCI compliant runtimes via it's container runtime interface, giving end users the flexibility of using a specific runtime. 




## Related terms

- [Cloud Native](https://glossary.cncf.io/cloud-native-apps/)
- [Containerization](https://glossary.cncf.io/containerization/)
- [Container Orchestration](https://glossary.cncf.io/container-orchestration/)
- [Microservices Architecture](https://glossary.cncf.io/microservices-architecture/)
