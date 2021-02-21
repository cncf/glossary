---
title: Virtualization
status: Feedback Appreciated
category: concept
---
## Virtualization

Virtualization, in the context of cloud native computing, refers to the process of taking a physical computer, sometimes called a server, and allowing it to run multiple isolated operating systems. Those isolated operating systems and their dedicated compute resources (CPU, memory, network) are referred to as virtual machines, or VMs. So when we talk about a virtual machine we’re talking about a software defined computer. Something that looks and acts like a real computer but is sharing hardware with other virtual machines. An example being a computer you lease from AWS, Amazon Web Services.

Virtualization is intended to address a few problems, the main two being: 1) Improve physical hardware usage allowing more apps to run on the same machine. 2) Enable users to speed up the time to get a new virtual computer.

With virtualized environments, e.g. a datacenter (a group of physical computers connected together), more apps can run on the same number of computers. It also allows the users of the datacenter to spin up a new "computer" (aka a VM) in minutes without worrying about the physical constraints of adding a new computer to a datacenter.

