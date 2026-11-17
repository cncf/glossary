---
title: Stateless Apps
status: Completed
category: Property
tags: ["fundamental", "application", "property"]
---

A stateless application is an application that does not retain state locally between requests.
In this context, state refers to data retained from earlier interactions, such as user session details, file uploads in progress, or temporary calculations.
Instead of storing this data in local memory or on local disk, each request contains all the information needed to process it, or the application retrieves persistent data from an external shared system, such as a database, object store, or distributed cache.

Because no client-specific data is kept inside an application instance (a running copy of the application or service), every incoming request can be handled independently by any available instance.
This contrasts with [stateful applications](/stateful-apps/), which rely on data saved locally from previous requests to function properly.

## Problem it addresses

When applications store user session data or transaction history inside the memory or local disk of a specific instance, every subsequent request from that user must return to that exact same instance.
This tight coupling creates significant operational challenges in modern environments.

If that specific instance crashes, restarts during a routine update, or experiences hardware failure, the state stored inside it is lost, disrupting the user experience.
Routing traffic also becomes complicated because a [load balancer](/load-balancer/) must ensure requests are always sent to the same server.
Furthermore, as user demand fluctuates, scaling the system or replacing faulty servers becomes risky and slow when work cannot be freely distributed across different instances.

## How it helps

Stateless applications decouple request processing from persistent storage, making application instances interchangeable.
Because any running copy can handle any incoming request, systems can easily distribute traffic across multiple instances using a load balancer.

This architecture enables seamless [horizontal scaling](/horizontal-scaling/), allowing teams or automated orchestrators to add or remove instances on demand to match changing traffic without worrying about existing user sessions.
If an instance experiences a fault or crashes, traffic is immediately rerouted to remaining healthy copies without losing persistent data.
Failed instances can be restarted or replaced safely without impacting end users.
Furthermore, application deployments become simpler and less risky: new versions can be rolled out gradually by replacing old instances with new ones without needing complex session migration between servers.
