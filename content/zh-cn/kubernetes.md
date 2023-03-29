---
title: Kubernetes
status: Completed
category: 技术
tags: ["基础设施", "", ""]
---

## 是什么

Kubernetes，通常缩写为K8s，是一种流行的现代基础设施自动化的开源工具。
它就像一个数据中心的操作系统，管理在 [分布式系统](/zh-cn/distributed-systems/) 上运行的应用程序（就像你笔记本上的操作系统，管理你的应用程序）。

Kubernetes在 [集群](/zh-cn/cluster/) 的 [节点](/zh-cn/nodes/) 上调度 [容器](/zh-cn/container/)。
它捆绑了几个基础设施结构，有时被称为 "基元"，如应用程序的实例、负载平衡器、持久性存储等，以一种可以被组成应用程序的方式。

Kubernetes 实现了自动化和可扩展性，使用户能够以可重复的方式声明性地部署应用程序。
Kubernetes 生态系统中的软件产品和项目利用这种自动化和可扩展性来扩展 Kubernetes [API](/zh-cn/application-programming-interface/) 。
这使他们能够利用 Kubernetes 的自动化，并使他们的工具更容易被有经验的 Kubernetes 从业者所接受。

## 解决的问题

长期以来，基础设施自动化和声明性配置管理一直是重要的概念，而且随着 [云计算](/zh-cn/cloud-computing/) 的普及而变得更加紧迫。
随着对计算资源的需求增加，组织感到压力，要用更少的工程师提供更多的操作能力，需要新的技术和工作方法来满足这一需求。
此外，云计算的兴起与 [容器化](/zh-cn/containerization/) 相搭配，那些忙于自动化更多传统基础设施的组织需要一种机制来自动配置和部署其容器。

## 如何帮助

Kubernetes 以类似于传统的基础设施即代码工具的方式帮助实现自动化，但它的优势在于，与虚拟机或物理机相比，容器更能抵抗配置漂移。
Kubernetes 的工作方式是声明式的，这意味着操作者不是提供关于如何做某事的指示，而是描述（通常是YAML文档）他们想要做什么；Kubernetes将自行处理 "如何 "的问题。这导致Kubernetes与基础设施即代码极为兼容。

Kubernetes 还能自我修复。这意味着它确保集群的实际状态总是与操作者的期望状态相匹配。
如果Kubernetes检测到一个偏差，Kubernetes 控制器就会启动并修复它。
因此，虽然它使用的基础设施可能不断变化，但 Kubernetes 本身也在不断自动适应变化，并确保它与预期状态相匹配。
