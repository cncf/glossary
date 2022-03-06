---
title: Container Storage Interface (CSI)
status: Completed
category: concept
---

## What it is
The Container Storage Interface (CSI) is a standard for exposing arbitrary block and file storage systems to containerized workloads on Container Orchestration Systems (COs) like Kubernetes.
In simple language, just like the name, it is the interface that the container system can use to talk to storage.
It is about storage operations within container native enviornments. It is an API and common methodology to address storage as an industry standard.

## Problem it addresses
After people started showing interest in cloud & containers, and started migrating the data to containers, the problem was that containers were not that reliable. If somehow the container node dies, then there's no way to retrieve the data (if the data is associated with the node). Thus container storage was introduced to easily switch and prevent loss of data.
But in this the user had to interface the storage with every container, thus CSI got introduced which is nothing but a standard interface to skip the repetetive interfacing. 

## How it helps
It helps enabling storage system to talk to containers.
It aims to reduce the effort - only one driver for all the containers orchestrators. Thus the developer doesn't have to worry about the internal storage specifics.
