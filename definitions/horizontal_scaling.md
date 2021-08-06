---
title: Horizontal Scaling
status: Feedback Appreciated
category: Concept
---

## Horizontal Scaling

### What it is

In [cloud computing](https://github.com/cncf/glossary/blob/main/definitions/cloud_computing.md) perspective Horizontal Scaling is type of [scalability](https://github.com/cncf/glossary/blob/main/definitions/scalability.md) whose approach is to add additional instances instead of moving into a larger instance size.

For example, let us consider we have a system of 4GB RAM and we want to increase it's capacity to 16GB RAM, Horizontal Scaling means doing this by making a system of 4 X 4GB RAM rather than switching to a 16GB RAM system.

It is an approach to enhance the performance of an application by adding new instances, or [nodes](https://github.com/cncf/glossary/blob/main/definitions/nodes.md), in order to better distribute the workload. In simple words it aims to decrease the server's load rather than expanding capacity of the individual server.

Load balancing, clustering, and distributed file systems are some of the crucial and popular strategies of horizontal scaling. It caters to portioning of data where each [node](https://github.com/cncf/glossary/blob/main/definitions/nodes.md) contains single part of the data.

### Problem it addresses

With growing demands of the application the system should be able to scale by increasing/growing/managing the resources for the customers using it. The latency of the API calls might increase due to heavy traffic, this is the problem that can be solved by horizontal scaling.

### How it helps

Horizontal scaling helps as it can provide limitless scaling with endless additions to server instances. It enhances the I/O concurrency, and also reduces the load on existing [nodes](https://github.com/cncf/glossary/blob/main/definitions/nodes.md) and expands disk capacity.
