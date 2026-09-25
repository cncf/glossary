---
title: Ingress
status: Completed
category: 技术
tags: ["基础", "", ""]
---

## 是什么

Ingress 是一组规则，用于管理从外部互联网进入集群中运行的容器或
容器组的流量。
它由两个元素组成：Ingress 资源 和 Ingress 控制器。
Ingress 资源是一个配置文件，与其他清单文件存放在一起，
允许管理员配置外部流量路由。
Ingress 控制器是实际根据 Ingress 资源中的配置执行流量路由的 Web 服务器技术。

## 解决的问题

云原生 Web 应用由多个服务组成，通常这些[服务](/zh-cn/service/)需要
能够通过互联网被用户使用浏览器访问。
为了在运行此应用时使用 [Kubernetes](/zh-cn/kubernetes/) 让这些服务对用户可访问，
我们需要将每个应用服务暴露给外部世界。
最直接的方法是使用 Kubernetes Load Balancer Service。
但是创建这样的 Service 会在底层基础设施上产生一个新组件。
这不仅引入了新的成本和管理开销，而且每个新创建的 Load Balancer
都有自己独立的外部 IP 地址。
这会导致糟糕的用户体验，因为作为用户，我们不想通过浏览不同的 URL
来访问一个应用。

## 如何帮助

Ingress 资源允许你配置流量如何被均衡和路由到应用的服务。
Ingress 控制器通过一个 URL（www.example-url.com）暴露单一入口点，
并基于不同的 URL 路径（www.example-url.com/path）执行实际的路由和均衡。
Ingress 控制器是运行在集群内部的一个组件，它解析 Ingress 资源中定义的规则。
由运行 Web 应用的集群运维人员从一组可行的技术（如 Nginx、Traefik、HAProxy 等）
中选择特定的 Ingress 控制器。
因此，如果一个应用由多个服务组成，用户可以通过一个单一的 URL 访问它。
这消除了在基础设施层面需要大量独立负载均衡器的需求，
并简化了每个服务的防火墙和负载均衡器规则的配置。
通过集中流量路由和处理配置，Ingress 提供了简化的可扩展性、
优化了资源利用率、降低了成本，并提高了集群中运行应用的整体可管理性。
