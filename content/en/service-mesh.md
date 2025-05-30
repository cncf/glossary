---
title: Service Mesh
status: Completed
category: technology
tags: ["networking", "", ""]
---

In a [microservices](/microservices-architecture/) world, apps are broken down into multiple smaller [services](/service/) that communicate over a network. 
Just like your wifi network, computer networks are intrinsically unreliable, hackable, and often slow. 
Service meshes address this new set of challenges by managing traffic (i.e., communication) between services and 
adding [reliability](/reliability/), [observability](/observability/), and security features uniformly across all services.

## Problem it addresses

Having moved to a microservices architecture, engineers are now dealing with hundreds, 
possibly even thousands of individual services, all needing to communicate. 
That means a lot of traffic is going back and forth over the network. 
On top of that, individual applications may need to encrypt communications to support regulatory requirements, 
provide common metrics to operations teams, or provide detailed insight into traffic to help diagnose issues. 
If built into the individual applications, 
each one of these features will cause friction between teams and slow down development of new features.

## How it helps

Service meshes add reliability, observability, and security features 
uniformly across all services across a cluster without requiring code changes. 
Before service meshes, that functionality had to be encoded into every single service, 
becoming a potential source of bugs and technical debt.

The [Sidecar Container](/sidecar-container/) model pairs each [pod](/pod/) with a proxy.
This per-pod proxy intercepts and manages network traffic, 
enforces security policies, balances workloads, 
and collects performance data for each service. 
While this approach offers excellent control and service-specific traffic management,
it also uses more computing resources and becomes more complex to manage as your system grows.

A **Sidecarless** design, on the other hand,
moves the aforementioned mesh functionality to the operating system level by using kernel features like [eBPF](/ebpf/).
By doing away with per-pod proxies,
this method drastically reduces resource usage and removes unnecessary network hops,
which lowers latency and boosts performance.
Because overhead remains constant regardless of pod count and there are fewer agents to deploy,
teams benefit from simplified operations and linear scalability as workload increases.

