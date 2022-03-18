---
title: Container Storage Interface (CSI)
status: Completed
category: concept
---

## What it is
The Container Storage Interface (CSI) is a standard for exposing arbitrary block and file storage systems to containerized workloads on Container Orchestration Systems (COs) like Kubernetes.
Container Storage Interface (CSI) is a standardized interface that allows any container technology to "talk" to any cloud native storage system. It functions as an [abstraction](https://glossary.cncf.io/abstraction/) layer between these two technologies, significantly simplifying development work.
It is about storage operations within container native environment. It is an API and common methodology to address storage as an industry standard.

## Problem it addresses
After people started showing interest in cloud & containers, and started migrating the data to containers, the problem was that containers were not that reliable. If somehow the container node dies, then there's no way to retrieve the data (if the data is associated with the node). Thus container storage was introduced to easily switch and prevent loss of data.
But in this the user had to interface the storage with every container, thus CSI got introduced which is nothing but a standard interface to skip the repetitive interfacing. 

## How it helps
It helps enabling storage system to talk to containers.
It aims to reduce the effort - only one driver for all the containers orchestrator. Thus the developer doesn't have to worry about the internal storage specifics.
