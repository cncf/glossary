---
title: Hypervisor
status: Feedback Appreciated
category: Technology
tags: ["application", "", ""]
---

## What it is

A hypervisor is a software application that performs [virtualization](/virtualization/)
by taking the advantage of [bare metal machine](/bare-metal-machine/) resources
(CPU, Memory, Network, and Storage), dividing them into sub-parts, 
and allocating resources accordingly to create multiple [virtual machines (VM)](/virtual-machine/).
In the marketplace, they are available as Type 1 hypervisors that can be installed directly on the physical server, 
giving it direct access to system hardware resources.
Type 2 hypervisors, on the other hand, are installed and 
executed by the operating system and allow the operating system to make hardware decisions.

## Problem it addresses

Traditionally, a server could only run one operating system at a time.
Devoting all the resources of that server to just a single application was not the most effective way.
Considering the capabilities of a server it can run multiple applications.
There is a need for software that can provide the same environment as a physical machine to the applications within it.
Multiply the environments and commit resources to them as needed, ensuring their security simultaneously.
So that the data of one cannot be accessed by the other.

## How it helps

The Hypervisor is used to create and allocate resources to virtual machines until we reach the saturating performance of the physical machines.
A hypervisor simplifies the migration in its current state in the event of a failure on the host server.
The reason for this is that it maintains snapshots of the workload so that it can be transported from one machine to another.
In the context of [cloud computing](/cloud-computing/), the hypervisor becomes an effective tool.
Organizations can migrate their applications to the cloud to take advantage of [cloud native apps](/cloud-native-apps/) and autoscale their services.
Over time, the use of this [multi-tenant](/multitenancy/) software has reduced computing costs.
