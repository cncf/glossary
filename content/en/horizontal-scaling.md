---
title: Horizontal Scaling
status: Completed
category: Concept
tags: ["infrastructure", "", ""]
---

Horizontal scaling is a technique where a system's capacity is increased by adding more [nodes](/nodes/) 
versus adding more compute resources to individual nodes (the latter being known as [vertical scaling](/vertical-scaling/)). 
Let's say, we have a system of 4GB RAM and want to increase its capacity to 16GB RAM. 
Scaling it horizontally means doing so by adding 3 nodes x 4GB RAM rather than switching to 
a 16GB RAM system.

This approach enhances the performance of an application by adding new instances, or nodes, 
to better distribute the workload. 
In simple words, it aims to decrease the server's load 
rather than expanding capacity of the individual server.

## Problem it addresses

As demand for an application grows beyond the current capacity of that application instance, 
we need to find a way to [scale](/scalability/) (add capacity to) the system. 
We can either add more nodes to the system (horizontal scaling) 
or more compute resources to existing nodes (vertical scaling).

## How it helps

Horizontal scaling allows applications to scale to whatever limits the underlying cluster provides. 
By adding more instances to the system, the app can process a greater number of requests. 
If a single node can handle 1,000 requests per second, 
each additional node should increase the total number of requests by around 1,000 requests per second. 
This allows the application to do more work concurrently 
without needing to increase the capacity of any node in particular.

## Related terms

* [Vertical Scaling](/vertical-scaling/)
* [Auto Scaling](/auto-scaling/)
