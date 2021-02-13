---
title: Service
status: Feedback Appreciated
category: concept
---
## Service

**Status:** Feedback Appreciated

A “Service” is a term with more meanings than virtually any other used in IT today. Traditionally a service represented a software system of which requests were made, as opposed to ‘fat client’ applications where all logic was contained in the program running on a user’s desktop. 

In the context of Kubernetes the term service has a very specific meaning - something running in a Kubernetes cluster, that may be implemented by many instances, and that other workloads may wish to communicate with via an IP address. 

In other contexts, a service might mean a web service (one that communicates via HTTP(S)), a data service (databases, message queues, caches) or microservices (applications embodying the service design pattern with a single responsibility).

Services in Kubernetes allow workloads to communicate with an application without knowing how many instances of it are running, or the IP addresses of all of those instances. 

A Kubernetes Service registers a new IP address and forwards traffic on to the workloads that implement the required functionality. The removes the need for clients of that application to know about and track the addresses of all of the instances of the application, thus reducing complexity and overhead for developers.

