---
title: Containers
status: Completed
category: technology
tags: ["application", "fundamental", ""]
---

A container is a running process with resource and capability constraints managed by a computer’s operating system. 
The files available to the container process are packaged as a container image. 
Containers run adjacent to each other on the same machine, 
but typically the operating system prevents the separate container processes from interacting with each other.

## Problem it addresses

Containers enable consistent deployment and execution across diverse machines. By abstracting the user space and not the entire operating system, containers eliminate the toil of starting and maintaining independent instances of operating systems, enabling the next computing model after virtualization. 

## How it helps

Containers share the same operating system and its machine resources, 
spreading the operating system’s resource overhead and creating efficient use of the physical machine. 
This capability is only possible because containers are typically limited from being able to interact with each other. 
This allows many more applications to be run on the same physical machine.

There are limitations, however. 
Since containers share the same operating system, processes can be considered less secure than alternatives. 
Containers also require limits on the shared resources. 
To guarantee resources, administrators must constrain and limit memory and CPU usage so that other applications do not perform poorly.
