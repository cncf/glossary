---
title: Stateful Apps
status: Feedback Appreciated
category: Concept
---
## Stateful Apps

### What it is

In a Kubernetes environment, stateful applications store state information generated from requests. To run, all pods within a stateful container must have a local volume of persistent storage. "State" refers to any changeable condition, including the results of internal operations, interactions with other applications or services, user-set preferences, environment variables, the contents of memory or temporary storage, or files opened, read from, or written to. By contrast, stateless applications are containerized microservices that have a single function or service.

### Problem it Addresses

Stateful applications and the data they contain are common in most organizations. Being able to support data-driven applications with Kubernetes enables more organizations to take advantage of containers for modernizing their legacy apps as well as for supporting additional mission-critical use cases which are often stateful. A lot of the applications that we encounter on a day-to-day basis are at least somewhat stateful. For example, they can store setting preferences, keep track of window size and location, and recent activity.

### How it Helps

Depending on what application you’re deploying, you may choose to use either stateful or stateless. When a stateful application is interrupted, the context and history can be stored, so you can pick up where you left off with ease. If your application needs to retain state information to do what it’s supposed to do, stateful is the only option. If you choose stateful, make sure you have a Kubernetes-native backup solution to prevent accidental data loss or corruption.

