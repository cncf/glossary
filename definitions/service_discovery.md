---
title: Service Discovery
status: Feedback Appreciated
category: concept
---
## Service Discovery

Modern applications are composed of multiple individual services that need to collaborate to provide value to the end user. To collaborate, they communicate over a network, and to communicate, they must first locate one another. Service discovery is the process of figuring out how to do that.

Cloud native architectures are dynamic and fluid, meaning they are constantly changing. When a container crashes on one node, a new container is spun up on a different node to replace it. Or, when an app scales, replicas are spread out throughout the network. There is no one place where a particular service is; the location of everything is constantly changing. Service discovery keeps track of services within the network so services can find one another when needed. 

Service discovery tools address this problem by providing a common place to find and potentially identify individual services. There are basically two types of tools in this category: (1) Service discovery engines are database-like tools that store info about what services exist and how to locate them. And (2) name resolution tools (e.g. Core DNS) receive service location requests and return network address information.

