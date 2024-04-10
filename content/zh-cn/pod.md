---
title: Pod
status: Completed
category: concept
tags: ["基本原理", "基础设施", ""]
---

Pod 是可以在 [Kubernetes](/zh-cn/kubernetes/) 中创建和管理的、最小的可部署的计算单元。
它代表了部署和管理容器化应用程序的基本构建块。
每个 Pod 包含一个应用程序实例，并可以容纳一个或多个[容器](/zh-cn/container/)。
Kubernetes 将 Pod 作为较大部署的一部分进行管理，
并可以根据需要[垂直（Vertical）](/zh-cn/vertical-scaling/)或[水平自动扩缩](/zh-cn/horizontal-scaling/) Pod。

<!-- 
## Problem it addresses
-->
## 解决的问题

<!-- 
While containers generally act as independent units that run and control a particular workload, 
there are cases when containers need to interact and be controlled in a tightly coupled manner. 

If each of these closely related containers were managed individually, it would lead to redundant management tasks.
For example, the operator would have to repeatedly determine the placement of related containers to ensure they remain together.
And although the lifecycles of these related containers need to be synchronized, they can only be managed individually.  
 -->
虽然容器通常作为独立单元运行和控制特定工作负载，但在某些情况下，容器需要紧密耦合地交互和被控制。

如果这些密切相关的容器每个都被单独管理，就会导致冗余的管理任务。
例如，操作员将不得不重复确定相关容器的放置位置，以确保它们保持在一起。
此外，尽管这些相关容器的生命周期需要同步，但它们只能单独管理。

<!-- 
## How it helps
 -->
## 它如何帮助
<!--  
Pods bundle closely tied containers into a single unit, significantly simplifying container operations.
For instance, auxiliary containers are often used alongside the main container to add additional functionalities or to set up global configurations. 
Examples include containers that inject and apply basic settings to the main container, 
_sidecar_ (containers) that handle network traffic routing for the main container (see [service mesh](/zh-cn/service-mesh/)), 
or containers collecting logs in conjunction with each container.

Memory and CPU allocation can be defined either on a pod level, allowing the containers inside to share resources in a flexible way, or per container.
-->
Pod 将密切相关的容器捆绑成一个单元，大大简化了容器操作。
例如，辅助容器通常与主容器一起使用，以添加附加功能或设置全局配置。
示例包括将基本设置注入和应用于主容器的容器，
“sidecar”（容器）用于处理主容器的网络流量路由（请参阅 [service mesh](/zh-cn/service-mesh/)），
或者与每个容器一起收集日志的容器。

内存和 CPU 分配可以在 Pod 级别定义，允许内部容器以灵活的方式共享资源，也可以在每个容器上定义。
