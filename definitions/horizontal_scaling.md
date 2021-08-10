---
title: Horizontal Scaling
status: Feedback Appreciated
category: Concept
---

## Horizontal Scaling

### What it is

Horizontal scaling is a technique where a system's capacity is increased by adding more [nodes](https://github.com/cncf/glossary/blob/main/definitions/nodes.md) versus adding more compute resources to individual nodes (the latter being known as vertical scaling). Let's say, we have a system of 4GB RAM and want to increase its capacity to 16GB RAM, scaling it horizontally means doing so by adding 4 x 4GB RAM rather than switching to a 16GB RAM system.

This approach enhances the performance of an application by adding new instances, or [nodes](https://github.com/cncf/glossary/blob/main/definitions/nodes.md), to better distribute the workload. In simple words, it aims to decrease the server's load rather than expanding capacity of the individual server.

### Problem it addresses

As demand for an application grows beyond the current capacity of that application instance, we need to find a way to scale (add capacity to) the system. We can either add more nodes to the system (horizontal scaling) or more compute resources to existing nodes (vertical scaling).

### How it helps

Horizontal scaling allows applications to scale nearly infinitely. By adding more instances to the system, the app can process a greater number of requests. If a single node can handle 1,000 requests per second, each additional node will increase the total number of requests by 1,000 requests per second. This enhances the input-output concurrency while reducing the load on existing nodes and expanding disk capacity.
