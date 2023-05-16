---
title: eBPF
status: Completed
category: architecture
---

## What it is

Linux system has two spaces: kernel and user space. Kernel space is the core of the operating system and it is the only part that has unlimited access to the hardware. Usually, applications reside in the user space and if they need some higher permissions, they send a request to the kernel space for that.
For applications that require more flexibility (exp. to access hardware), there is an approach called “Linux kernel modules”. It allows extending the kernel base without adding directly to the kernel source code. However, it also introduces some security risks.
eBPF stands for "extended Berkeley Packet Filter". It is a revolved technology that allows applications to run within the kernel space of a Linux system without the need to change the kernel source or load Linux kernel modules.

## Problem it addresses
Normally, applications run in user space, and if the application requires some privileges from the kernel (exp. to access some hardware), then it needs to send a call referred to as a “system call” and ask for that request from the kernel. 
This might be good enough for many scenarios, however, there are cases, in which developers require more flexibility for hardware accessibility. Observability, security, and networking features are some of the ideal examples to be implemented within the kernel space. 
One of the possibilities to reach such a goal is to use Linux kernel modules, which allow extending the kernel base without adding directly to the kernel source code. While using Linux kernel modules bring the mentioned benefits, it adds to the security risks since they can make the kernel crash.

## How it helps

Before an eBPF program can start running in the kernel, it has to pass some verifications. The verifier component checks all the potential possibilities that would happen as a result of running the eBPF program. This way, it makes sure that the program would not go into an infinitive loop and would not cause a kernel crash. These safety controls make eBPF a more secure option to run applications in the Linux kernel compared to the Linux kernel modules.
