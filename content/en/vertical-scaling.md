---
title: Vertical Scaling
status: Completed
category: Concept
tags: ["infrastructure", "", ""]
---

Vertical scaling, also known as "scaling up and down", is a technique where 
a system's capacity is increased by adding CPU and memory to individual [nodes](/nodes/) as the workload increases. 
Let's say, you have a computer of 4GB RAM and want to increase its capacity to 16GB RAM, 
scaling it vertically means switching to a 16GB RAM system. 
(Please refer to [horizontal scaling](/horizontal-scaling/) for a different scaling approach.)

## Problem it addresses

As demand for an application grows beyond the current capacity of that application instance, 
we need to find a way to scale (add capacity to) the system. 
We can either add more compute resources to existing nodes (vertical scaling) 
or more nodes to the system ([horizontal scaling](/horizontal-scaling/)). 
[Scalability](/scalability/) contributes to competitiveness, efficiency, reputation, and quality.

## How it helps

Vertical scaling allows you to resize your server without changing the application code. 
That contrasts to horizontal scaling, where the app must be replicable to scale, potentially requiring code updates. 
Vertical scaling increases the capacity of an existing application by 
adding compute resources, allowing the app to process more requests and do more work concurrently.

## Related terms

* [Horizontal Scaling](/horizontal-scaling/)
* [Auto Scaling](/auto-scaling/)
