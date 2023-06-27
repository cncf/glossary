---
title: eBPF
status: Completed
category: architecture
---

## What it is

eBPF, or extended Berkeley Packet Filter, is a technology that allows small, sandboxed programs or scripts to be run in the kernel space of a Linux system without having to change the kernel's source code or load Linux kernel modules.

A Linux system has two spaces: the kernel and the user space. 
The kernel represents the operating system's core and is the only part with unlimited access to the hardware. 

Applications reside in the user space, and when they need higher permissions, they send a request to the kernel. 
These permissions allow applications to perform tasks that require deeper integration with the underlying operating system, such as interacting with low-level hardware, modifying system configurations, or accessing protected data.

For applications that require more flexibility, e.g., access hardware, the kernel can be extended via a so-called "Linux kernel modules" approach. It allows extending the kernel base without adding directly to the kernel source code. 
However, since kernel modules operate within the kernel space, this approach introduces some security risks.

## Problem it addresses
Normally, applications run in user space, and if the application requires some privileges from the kernel (exp. to access some hardware), then it needs to send a call referred to as a “system call” and ask for that request from the kernel. 
This might be good enough for many scenarios, however, there are cases, in which developers require more flexibility for hardware accessibility. Observability, security, and networking features are some of the ideal examples to be implemented within the kernel space. 
One of the possibilities to reach such a goal is to use Linux kernel modules, which allow extending the kernel base without adding directly to the kernel source code. 
While using Linux kernel modules bring the mentioned benefits, it adds to the security risks because they operate within the kernel space and can make the kernel crash. 
Kernel modules have elevated privileges and direct access to system resources, making them a potential target for attackers.

## How it helps
Compared to Linux Kernel modules, eBPF provides a more controlled and contained environment for executing user-defined programs. 
eBPF programs run in a sandboxed environment within the kernel, providing isolation and mitigating some risks. 
If a vulnerability or flaw is exploited in an eBPF program, its impact is generally limited to the sandboxed environment.
Moreover, before an eBPF program can start running in the kernel, it has to pass some verifications. 
The verifier component checks all the potential possibilities that would happen as a result of running the eBPF program. 
This way, it makes sure that the program would not go into an infinitive loop and would not cause a kernel crash. 
These safety controls make eBPF a more secure option to run applications in the Linux kernel compared to the Linux kernel modules.
