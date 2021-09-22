---
title: Stateless Apps
status: Feedback Appreciated
category: Technology
---

## Stateless Apps

### What it is

A Stateless application doesn’t save any client session (state) data on the server where the application lives. Each session is carried out as if it was the first time and responses are not dependent upon data from a previous session. It provides functionality to use print services, CDN (Content Delivery Network) or the Web Servers in order to process every short-term request.
For example, when you use a Coke machine, you’re the one who maintains the state. After buying a drink, the machine doesn’t remember what kind of drink you purchased, but you do because you’re holding it in your hand. In this respect, it’s more accurate to say that a stateless application externalizes its state rather than maintaining it on the server. 

### Problem it addresses

Stateless applications tackle the problem of resiliency, elasticity, and high availability. Because different pods across a [cluster](cluster.md) can work independently, with multiple requests coming to them at the same time. If there’s a problem, you can easily restart the application, and it will return to its initial state with little or no downtime.

### How it helps

In a Stateless Application the only thing your cluster is responsible for is the code, and other static content, being hosted on it. No changing databases, no writes and no left over files when the pod is deleted. Stateless [containers](container.md) are easier to deploy, you don’t need to worry about saving container data on persistent storage volumes and you also don't have to worry about backing up the data. Boiling everything down, Stateless is the way to go if you just need information in a transitory manner, quickly and temporarily.
