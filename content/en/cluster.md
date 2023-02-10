---
title: Cluster
status: Completed
category: Concept
tags: ["infrastructure", "fundamental", ""]
---

## What it is

A cluster is a group of computers or applications that work together towards a common goal. 
In the context of cloud native computing, the term is most often applied to [Kubernetes](/kubernetes/). 
A Kubernetes cluster is a set of services (or workloads) that run in their own containers, usually on different machines. 
The collection of all these [containerized](/containerization/) services, connected over a network, represent a cluster.

## Problem it addresses 

Software that runs on a single computer presents a single point of failure 
— if that computer crashes, or someone accidentally unplugs the power cable, 
then some business-critical system may be taken offline. 
That's why modern software is generally built as [distributed applications](/distributed-apps/), grouped together as clusters. 

## How it helps

Clustered, distributed applications run across multiple machines, eliminating a single point of failure. 
But building distributed systems is really hard. 
In fact, it's a computer science discipline in its own right. 
The need for global systems and years of trial and error led to the development of a new kind of tech stack: 
[cloud native technologies](/cloud-native-tech/). 
These new technologies are the building blocks that make the operation and creation of distributed systems easier.
