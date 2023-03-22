---
title: Tightly Coupled Architectures
status: Completed
category: Property
tags: ["fundamental", "architecture", "property"]
---

Tightly coupled architecture is an architectural style where a number of application components are interdependent 
(the opposite paradigm of [loosely coupled architectures](/loosely-coupled-architecture/)). 
This means that a change in one component will likely impact other components. 
It is generally easier to implement than more loosely coupled architectural styles, 
but can leave a system more vulnerable to cascading failures. 
They also tend to require coordinated rollouts of components 
which can become a drag on developer productivity.

Tightly coupled application architectures are a fairly traditional way of building applications. 
While not necessarily consistent with all the best practices of [microservice](/microservices/) development 
they can be useful in specific circumstances. 
They tend to be faster and simpler to implement and 
much like [monolithic applications](/monolithic-apps/) they can speed up the initial development cycle.
