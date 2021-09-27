---
title: Virtual Machine
status: Feedback Appreciated
category: Technology
---
## Virtual Machine

### What it is
A virtual machine enables a computer system to host other computer systems as guests on the same core system. The host system separates these secondary systems and limits the CPU usage, RAM, and filesystem size and access. With this separation, processes can be executed using different operating systems on the same physical machine.

### Problem it Addresses
Previous methods of infrastructure orchestration relied on Bare Metal Machines setup and configured in on premise environments. This method meant taking entire servers offline during upgrades or maintenance. Also, entire servers were required to lie dormant since scaling for demand was not possible. This lack of scalability leads to increased cost and lack of resource utilization.

### How it helps
A lack of scalability, resource utilization, and maintainability pushed the development of Virtual Machines. Machines could run at a higher utilization with more applications being located on a single host. Organizations can make upgrades to a single Guest machine separate from the other processes running on the host. It is also easier to modify or replace the hardware of the host machine if the applications are not running directly on the host, but are contained in Virtual Machines. Lastly, Developer and application environments are created quicker and in a more repeatable manner.
