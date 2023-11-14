---
title: Virtual Machine
status: Completed
category: Technology
tags: ["fundamental", "infrastructure", ""]
---

## What it is

A virtual machine (VM) is a computer and its operating system 
that is not bound to a particular piece of hardware. 
VMs rely on [virtualization](/virtualization/) to carve a single physical computer into multiple virtual computers. 
That separation allows organizations and infrastructure providers to 
easily create and destroy VMs without impacting the underlying hardware.

## Problem it addresses

When a [bare metal](/bare-metal-machine/) machine is bound to a single operating system, 
how well the machine's resources can be used is somewhat limited. 
Also, when an operating system is bound to a single physical machine, 
its availability is directly tied to that hardware. 
If the physical machine is offline due to maintenance or hardware failures, so is the operating system.

## How it helps

By removing the direct relationship between an operating system and a single physical machine, 
you solve several problems of bare metal machines: 
provisioning time, hardware utilization, and resiliency.

With no new hardware to be bought, installed, or configured to support it, 
provisioning time for a new computer is dramatically improved. 
VMs allow you to use your existing physical hardware resources better 
by placing multiple virtual machines on a single physical machine. 
Not bound to a particular physical machine, VMs are also more resilient than physical machines. 
When a physical machine needs to go offline, 
the VMs running on it can be moved to another machine with little to no downtime
