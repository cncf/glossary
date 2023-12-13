---
title: Service Mesh
status: Completed
category: technology
tags: ["networking", "", ""]
---

In a [microservices](/microservices/) world, apps are broken down into multiple smaller [services](/service/) that communicate over a network. 
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
