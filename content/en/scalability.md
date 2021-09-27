---
title: Scalability
status: Completed
category: property
---

Scalability refers to how well a system can grow. That is increasing the ability to do whatever the system is supposed to do. For example, a [Kubernetes](https://github.com/cncf/glossary/blob/main/definitions/kubernetes.md) [cluster](https://github.com/cncf/glossary/blob/main/definitions/cluster.md) scales by increasing or reducing the number of [containerized](https://github.com/cncf/glossary/blob/main/definitions/containerization.md) apps, but that scalability depends on several factors. How many [nodes](https://github.com/cncf/glossary/blob/main/definitions/nodes.md) does it have, how many [containers](https://github.com/cncf/glossary/blob/main/definitions/container.md) can each node handle, and how many records and operations can the control plane support?

A scalable system makes it easy to add more capacity. We differentiate between two scaling approaches. On the one hand, there is [horizontal scaling](https://github.com/cncf/glossary/blob/main/definitions/horizontal_scaling.md) which adds more nodes to handle increased load. In contrast, in vertical scaling individual nodes are made more powerful to perform more transactions (e.g. by adding more memory or CPU to an individual machine). A scalable system is able to change easily and meet user needs.


