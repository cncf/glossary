---
title: Virtual Machine
status: Feedback Appreciated
category: Technology
---
## Virtual Machine

### What it is
A virtual machine enables a computer system to host other computer systems as guests on the same core system. The host system separates these secondary systems and limits the CPU usage, RAM, and filesystem size and access. It will expose virtualised hardware resources (IRQ controllers, Timers, PCI devices) or will emulate them, depending on its capabilities and configuration.
Virtual Machines allow for a complete operating system and the attached user space isolation from the physical machine. With this separation, processes can be executed using different operating systems and environments, while sharing the same hardware resources.

### Problem it Addresses
Virtual Machines make operating servers at scale easier. Because the whole environment where the workloads are executed is virtualised it can be easily backed up and restored if needed. It can also be easily migrated to another physical machine if maintenance is needed while keeping the service operational and with virtually zero downtime. Sharing the hardware resources between several workloads allows for their more cost effective utilisation. It also enables allocating worker nodes on-demand, sharing the same infrastructure between different tenants.

### How it helps
A lack of scalability, resource utilization, and maintainability pushed the development of Virtual Machines. Machines could run at a higher utilization with more applications being located on a single host. Organizations can make upgrades to a single Guest machine separate from the other processes running on the host. It is also easier to modify or replace the hardware of the host machine if the applications are not running directly on the host, but are contained in Virtual Machines. Lastly, Developer and application environments are created quicker and in a more repeatable manner.
