---
title: Horizontal Scaling
status: Feedback Appreciated
category: Concept
---

## Horizontal Scaling

### What it is

In [cloud computing](https://github.com/cncf/glossary/blob/main/definitions/cloud_computing.md) perspective horizontal scaling is a scaling technique where a system's capacity is increased by adding more [nodes](https://github.com/cncf/glossary/blob/main/definitions/nodes.md) versus adding more compute resources to individual nodes(the latter being known as vertical Scaling). For example, let us consider we have a system of 4GB RAM and we want to increase it's capacity to 16GB RAM, horizontal scaling means doing this by making a system of 4 X 4GB RAM rather than switching to a 16GB RAM system.

It is an approach to enhance the performance of an application by adding new instances, or [nodes](https://github.com/cncf/glossary/blob/main/definitions/nodes.md), in order to better distribute the workload. In simple words it aims to decrease the server's load rather than expanding capacity of the individual server.

### Problem it addresses

As demand for an application grows beyond the current capacity of that application instance an operator needs to find a way to add capacity by scaling. Either by adding more application instances or by giving more compute resources to the existing instances, or said another way, by scaling your application horizontally or vertically.

### How it helps

Horizontal scaling helps as it can provide limitless scaling with endless additions to server instances. For example, horizontal scaling allows an application to process a greater number of requests by creating more nodes, or application instances, that can perform the work. If a single node can handle 1000 requests per second then each additional node should increase the total number of requests by around 1000 requests per second. So, it enhances the Input-Output concurrency, and also reduces the load on existing [nodes](https://github.com/cncf/glossary/blob/main/definitions/nodes.md) and expands disk capacity.
