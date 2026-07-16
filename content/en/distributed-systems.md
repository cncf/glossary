---
title: Distributed System
status: Completed
category: concept
tags: ["architecture", "infrastructure", "fundamental"]
---

A distributed system is a collection of autonomous computing elements 
connected over a network that appears to users as a single coherent system. 
Generally referred to as [nodes](/nodes/), these components can be hardware devices (e.g. computers, mobile phones) or software processes. 
Nodes are programmed to achieve a common goal and, to collaborate, they exchange messages over the network. 

## Problem it addresses

Numerous modern applications today are so big they'd need supercomputers to operate. 
Think Gmail or Netflix. No single computer is powerful enough to host the entire application. 
By connecting multiple computers, compute power becomes nearly limitless. 
Without distributed computing, many applications we rely on today wouldn't be possible. 

Traditionally, systems would [scale](/scalability/) vertically. 
That's when you add more CPU or memory to an individual machine. 
Vertical scaling is time-consuming, requires downtime, and reaches its limit quickly. 

## How it helps

Distributed systems allow for [horizontal scaling](/horizontal-scaling/) (e.g. adding more nodes to the system whenever needed). 
This can be automated allowing a system to handle a sudden increase in workload or resource consumption. 

A non-distributed system exposes itself to risks of failure because if one machine fails, the entire system fails. 
A distributed system can be designed in such a way that, 
even if some machines go down, 
the overall system can still keep working to produce the same result.
