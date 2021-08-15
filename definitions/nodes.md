---
title: Nodes
status: Feedback Appreciated
category: Concept
---

## Nodes

### What it is

A node is an independent compute unit that is connected with other nodes over a network forming a [cluster](cluster.md). Nodes can be multi-functional physical or [virtual machines](virtual_machine.md), or perform a very specific function within the network. Take your laptop, modem, and printer, for example. They are all connected over your wifi network communicating and collaborating, each representing one node. In [cloud computing](cloud_computing.md), nodes generally refer to [VMs](virtual_machine.md) or [containers](container.md) that accomplish a common goal.

### Problem it Addresses
While an application could (and many do) run on one single machine, there are some risks involved with that. Processes that share a machine aren't properly separated and, if one process crashes, it can drag other processes down with it. To address this, developers started creating distributed applications where each process runs on its own node. Thus, a node exists to run apps or processes as part of a group of computers and is part of a [cluster](cluster.md), or group, of nodes that works together in concert.

### How it Helps

A node gives you a distinct unit of compute, memory/cpu/network, that you can assign to a [cluster](cluster.md). In a cloud native platform or app a node represents a single unit that can perform work. Ideally, individual nodes are undifferentiated in that any one node of a particular type is indistinguishable from any other node of the same type.

