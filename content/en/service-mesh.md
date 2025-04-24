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

### Implementation Models

The traditional [Sidecar Container](/sidecar-container/) model deploys a dedicated proxy alongside each microservice instance in its pod, 
handling L3–L7 functions on a per-service basis​. In this approach, every service instance carries its own proxy, 
which adds CPU/memory overhead and operational complexity as the mesh scales

Where by contrast, Sidecarless Service Mesh rethinks the architecture by removing the need to run proxy containers alongside each service. 
Instead, it shifts the traffic control responsibilities to a centralized system operating at the host level, 
typically by leveraging powerful kernel technologies such as [eBPF](/ebpf/) (extended Berkeley Packet Filter).

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

By leveraging eBPF to run mesh logic in the kernel rather than in sidecar containers, 
a sidecarless service mesh centralizes all proxy functions at the node level, 
replacing thousands of sidecars with a small number of host-level agents​.  
This dramatically cuts resource consumption and eliminates extra network hops, 
thereby lowering latency and improving application performance.
Finally, because overhead no longer grows directly with each new service instance, 
the architecture scales smoothly as microservices count rises​.  
