---
title: Containers
status: Feedback Appreciated
category: concept
---
## Containers

Containers are a packaging tool that decouples the application code from their environment. This allows code and services to be portable between multiple environments.

Containers use a method of virtualization called a Container Runtime that virtualizes the operating systems binaries and libraries rather than virtualizing hardware as we have seen in traditional virtual machine hypervisors. Because of this, the containers are smaller than most hypervisors and have smaller technical debt.

This allows developer to create application services that are both portable due to their small size and isolated from other services. The isolation allows them to use the toolset necessary for their specific use case without negatively effecting other services in the application.
 