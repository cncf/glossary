---
title: Bare Metal Machine
status: Completed
category: technology
tags: ["infrastructure", "", ""]
---

Bare metal refers to a physical computer, more specifically a server, that has one, and only one, operating system. 
The distinction is important in modern computing because many, if not most, servers are [virtual machines](/virtual-machine/). 
A physical server is typically a fairly large computer with powerful hardware built-in. 
Installing an operating system and running applications directly on that physical hardware, 
without [virtualization](/virtualization/), is referred to as running on “bare metal.”

## Problem it addresses

Pairing one operating system with one physical computer is the original pattern of computing. 
All the resources of the physical computer are available directly to the operating system and with no virtualization layer present, 
there is no artificial delay in translating operating system instructions to hardware.

## How it helps

By dedicating all compute resources of a computer to a single operating system, 
you potentially provide the best possible performance to the operating system. 
If you need to run a workload that must have extremely fast access to hardware resources, 
bare metal may be the right solution. 

In the context of [cloud native apps](/cloud-native-apps/), 
we generally think of performance in terms of [scaling](/scalability/) to a large number of concurrent events, 
which can be handled by [horizontal scaling](/horizontal-scaling/) (adding more machines to your resource pool). 
But some workloads may require [vertical scaling](/vertical-scaling/) (adding more power to an existing physical machine) 
and/or an extremely fast physical hardware response in which case bare metal is better suited. 
Bare metal also allows you to tune the physical hardware and possibly even hardware drivers to help accomplish your task.
