---
title: Hypervisor
status: Feedback Appreciated
category: Technology
tags: ["application", "", ""]
---

A hypervisor enables [virtualization](/virtualization/)
by taking the advantage of [bare metal machine](/bare-metal-machine/) resources
(CPU, Memory, Network, and Storage), dividing them into sub-parts, 
and allocating resources accordingly to create  [virtual machines (VM)](/virtual-machine/)
until the underlying host reaches its performance limits.

## Problem it addresses

Traditionally, a server could only run applications of a single operating system.
The process of acquiring software takes time. It requires infrastructure with a specific environment
and a team of engineers to manage and monitor them.
Servers were underutilized, considering the computing power of a server it can run multiple operating systems and more applications.
Running applications on bare metal wasn't enough to match the needs of fluctuating traffic.

## How it helps

In the context of [cloud computing](/cloud-computing/), the hypervisor becomes an effective tool.
In contrast to the traditional method of creating a virtual machine, a hypervisor makes the process much simpler and faster. 
Hardware resources are logically partitioned and assigned to the VMs keeping them isolated as distinct units,
ensuring they function independently so that issues on one don't affect the others,
and allowing VMs to install any necessary operating system.
A hypervisor is an abstraction over the physical hardware, it takes care of those low-level complexities of managing the VMs and monitoring them,
making VMs loosely bound to hardware, enabling organizations to migrate their applications to the remote servers/cloud 
and autoscale their services.
Over time, the use of this [multi-tenant](/multitenancy/) software has reduced computing costs.
