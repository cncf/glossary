---
title: Containers
status: Completed
category: technology
tags: ["application", "", ""]
---

## What it is

A container is a running process with resource and capability constraints managed by a computer’s operating system. 
The files available to the container process are packaged as a container image. 
Containers run adjacent to each other on the same machine, 
but typically the operating system prevents the separate container processes from interacting with each other.

## Problem it addresses

Before containers were available, separate machines were necessary to run applications. 
Each machine would require its own operating system, which takes CPU, memory, and disk space, 
all for an individual application to function. 
Additionally, the maintenance, upgrade, and startup of an operating system is another significant source of toil. 

## How it helps

Containers share the same operating system and its machine resources, 
spreading the operating system’s resource overhead and creating efficient use of the physical machine. 
This capability is only possible because containers are typically limited from being able to interact with each other. 
This allows many more applications to be run on the same physical machine.

There are limitations, however. 
Since containers share the same operating system, processes can be considered less secure than alternatives. 
Containers also require limits on the shared resources. 
To guarantee resources, administrators must constrain and limit memory and CPU usage so that other applications do not perform poorly.
