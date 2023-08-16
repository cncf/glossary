---
title: eBPF
status: Completed
category: architecture
---

## What it is

eBPF, or extended Berkeley Packet Filter, is a technology that allows small, sandboxed programs or scripts to run in the kernel space of a Linux system without having to change the kernel's source code or load Linux kernel modules.

A Linux system has two spaces: the kernel and the user space. 
The kernel represents the operating system's core and is the only part 
with unlimited access to the hardware. 

Applications reside in the user space, and when they need higher permissions, 
they send a request to the kernel.
For applications that require more flexibility, such as direct hardware 
access, the kernel can be extended via what is known as the "Linux 
kernel modules" approach. This approach extends the kernel's default functionality,
 allowing applications deeper access to the underlying components. 
 However, this approach also introduces security risks.

## Problem it addresses
Typically, applications run in the user space, and if the application requires some privileges from the kernel (e.g., to access some hardware), 
it requests it from the kernel via a so-called "system call."  
In most cases, this approach works just fine. However, there are instances where developers require more flexibility for low-level system access.
Observability, security, and networking features are good examples.
To achieve that, we can use Linux kernel modules, extending the kernel base without adding directly to the kernel source code. 
While there are benefits to using Linux kernel modules, it also introduces security risks. 
Because they operate within the kernel space, Linux kernel modules can crash the kernel, and when the kernel crashes, so does the entire machine.
Kernel modules have elevated privileges and direct access to system resources, which, if not properly secured, can be exploited by attackers.

## How it helps
Compared to Linux Kernel modules, eBPF provides a more controlled and contained environment for executing user-defined programs. 
eBPF programs run in a sandboxed environment within the kernel, providing isolation and mitigating some risks. 
If a vulnerability or flaw is exploited in an eBPF program, its impact is generally limited to the sandboxed environment.
Moreover, before an eBPF program can start running in the kernel, it has to pass some verifications. 
The verifier component checks the eBPF program for any potential safety violations, 
such as out-of-bounds memory access, infinite loops, and the usage of unauthorized kernel functions.
This way, it ensures that the program will not enter an infinite loop and will not cause a kernel crash.
These safety controls make eBPF a more secure option to run applications in the Linux kernel compared to the Linux kernel modules.
