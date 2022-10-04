---
title: Virtualization
status: completed
category: technology
tags: ["fundamentals", "infrastructure", ""]
---

## What it is

Virtualization, in the context of cloud native computing, 
refers to the process of taking a physical computer, sometimes called a server, 
and allowing it to run multiple isolated operating systems. 
Those isolated operating systems and their dedicated compute resources (CPU, memory, and network) are 
referred to as virtual machines or VMs. 
When we talk about a [virtual machine](/virtual-machine/), we’re talking about a software-defined computer. 
Something that looks and acts like a real computer but is sharing hardware with other virtual machines.
[Cloud computing](/cloud-computing/) is primarily powered by virtualization technology.
As an example, you can lease a "computer" from AWS – that computer is actually a VM.

## Problem it addresses

Virtualization addresses a number of problems, including the improvement of physical hardware usage 
by allowing more apps to run on the same physical machine 
whilst still being isolated from each other for security.

## How it helps

Apps running on virtual machines have no awareness that they are sharing a physical computer. 
Virtualization also allows the users of the datacenter to spin up a new "computer" (aka a VM) in minutes 
without worrying about the physical constraints of adding a new computer to a datacenter. 
VMs also enable users to speed up the time to get a new virtual computer.
