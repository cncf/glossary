---
title: Container Image
status: Feedback Appreciated
category: concept
---
## Container Image

A Container Image is the blueprint for a container. It is made up of a set of filesystem layers, including any dependencies needed to run an application and the application itself. Container Images are stored in container registries, where they can be downloaded and run on a container runtime.

Traditionally, application servers are configured per environment and applications are deployed to them. Misconfiguration between environments is problematic and often leads to downtime or failed deployments. It can be hard to replicate an environment on a developer's machine, which slows down development and increases the chance of environment related bugs. Horizontal and vertical scaling of application servers can be difficult.

Container Images bundle an application with any of its runtime dependencies, such as an application server. This provides consistency across all environments, including a developer's machine. Container Images can be used to instantiate as many containers as needed, allowing for greater scalability. 