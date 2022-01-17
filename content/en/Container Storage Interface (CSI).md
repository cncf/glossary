---
title: Container Storage Interface (CSI)
status: Completed
category: concept
---

## What it is
The Container Storage Interface (CSI) is a standard for exposing arbitrary block and file storage systems to containerized workloads on Container Orchestration Systems (COs) like Kubernetes.
In simple language, just like the name, it is the interface that the container system can use to talk to storage.

## Problem it addresses
Earlier after people showing interest in cloud and containers and started migrating the data to containers, the problem was that the containers were not that reliable if the somehow the container node dies then then there's no way to retrieve the data(if the data is associated with the node) thus along with containers storage was introduced to easily switch and eve prevent loss of data
But now the user had to interface the storage with every conntainer, thus CSI got introduced which is nothing but a standard interface to skip the repetetive interfacing. 

## How it helps
It helps enabling storage system to talk to containers.
It aims to reduce the effort - only one driver for all the containers orchestrators 

