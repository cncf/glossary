---
title: Tightly Coupled Architectures
status: Completed
category: Property
---

Tightly coupled architecture is an architectural style where a number of application components are interdependent (the opposite paradigm of [loosely coupled architectures](https://github.com/cncf/glossary/blob/main/content/en/loosely_coupled_architecture.md)). This means that a change in one component will likely impact other components. It is generally easier to implement than more loosely coupled architectural styles, but can leave a system more vulnerable to cascading failures. They also tend to require coordinated rollouts of components which can become a drag on developer productivity.

Tightly coupled application architectures are a fairly traditional way of building applications. While not necessarily consistent with all the best practices of [microservice](https://github.com/cncf/glossary/blob/main/content/en/microservices.md) development they can be useful in specific circumstances. They tend to be faster and simpler to implement and much like [monolithic applications](https://github.com/cncf/glossary/blob/main/content/en/monolithic_apps.md) they can speed up the initial development cycle.
