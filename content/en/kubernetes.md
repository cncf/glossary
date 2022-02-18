---
title: Kubernetes
status: Completed
category: technology
---

## What it is
Kubernetes, often abbreviated as K8s, is a popular open-source tool for modern infrastructure automation. It's like a data center operating system that manages applications running across a [distributed system](/distributed_systems/) (just like the OS on your laptop that manages your apps). 

Kubernetes schedules [containers](/container/) across [nodes](/nodes/) in a [cluster](/cluster/). It bundles several infrastructure constructs, sometimes referred to as “primitives,” like an instance of an app, load balancers, persistent storage, and others together in a way that they can be composed into applications. 

Kubernetes enables automation and extensibility, allowing users to deploy applications declaratively in a reproducible way. Software products and projects in the Kubernetes ecosystem take advantage of that automation and extensibility to extend the Kubernetes [API](/application_programming_interface/). This enables them to leverage Kubernetes’ automation and make their tools more accessible to experienced Kubernetes practitioners.

## Problem it addresses
Infrastructure automation and declarative configuration management have been important concepts for a long time and have only become more pressing as [cloud computing](/cloud_computing/) has gained popularity. As demand for compute resources increases and organizations feel pressured to provide more operational capabilities with fewer engineers, new technologies and working methods are required to meet that demand. Additionally, the rise of cloud computing was paired with [containerization](/containerization/) and organizations that were busy automating more traditional infrastructure needed a mechanism to automate the configuration and deployment of their containers.

## How it helps
Kubernetes helps with automation in a manner similar to traditional infrastructure as code tools but has the advantage of working with containers that are more resistant to configuration drift than virtual or physical machines.
Kubernetes works declaratively, which means that instead of operators providing the instructions about how to do something they instead describe, usually as a YAML document, what they want to be done; Kubernetes will take care of the "how" on its own. This results in Kubernetes being extremely compatible with infrastructure as code.

Kubernetes also self-heals. This means that it ensures the cluster’s actual state always matches the operator’s desired state. If Kubernetes detects a deviation, a Kubernetes controller kicks in and fixes it. So while the infrastructure it uses may be continually changing Kubernetes itself is continually, and automatically adapting to changes and ensuring that it matches with the desired state.


