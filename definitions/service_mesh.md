---
title: Service Mesh
status: Feedback Appreciated
category: concept
---
## Service Mesh

In a microservices world, apps are broken down into multiple smaller services (app components) that communicate over a network. Just like the wifi network you're connected to, computer networks are inherently unreliable, hackable, and often slow. 

Service meshes address this new set of challenges by managing traffic (i.e. communication) between services and adding reliability, observability, and security features uniformly across all services. 

Having moved to a microservices architecture, engineers are now dealing with hundreds possibly even thousands of individual services, all in need to communicate. That means a lot of traffic is going back and forth over the network -- your system’s new Achilles heel. To address this, the engineering team must implement additional functionality. 

Service meshes add reliability, observability, and security features uniformly across all services across a cluster without requiring code changes. Prior to service meshes, that functionality had to be encoded into every single service, becoming a potential source of bugs and technical debt.

