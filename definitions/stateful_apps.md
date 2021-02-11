---
title: Stateful Apps
status: Feedback Appreciated
category: concept
---
## Stateful Apps

**Status:** Feedback Appreciated

In a Kubernetes environment, stateful applications store state information generated from requests. To run, all pods within a stateful container must have a local volume of persistent storage. By contrast, stateless applications are containerized microservices that have a single function or service. They leverage a server to process requests, but the server doesn’t retain state information between requests, and different requests can be processed by different servers. They don’t require storage to run, because they don’t retain any data.

Stateless applications tackle the problem of resiliency, because different pods across a cluster can work independently, with multiple requests coming to them at the same time. If there’s a problem, you can easily restart the application, and it will return to its initial state with little or no downtime. As such, the benefits of stateless applications include resiliency, elasticity, and high availability. However, most applications we use today are at least partly stateful, as they store things like preferences and settings to improve the user experience.

Depending on what application you’re deploying, you may choose to use either stateful or stateless. Stateless containers are easier to deploy, and you don’t need to worry about saving container data on persistent storage volumes. You also don't have to worry about backing up the data. However, if your application needs to retain state information to do what it’s supposed to do, stateful is the only option. If you choose stateful, make sure you have a Kubernetes-native backup solution to prevent accidental data loss or corruption.

