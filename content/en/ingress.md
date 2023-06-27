---
title: Ingress
status: Feedback Appreciated
category: technology
tags: ["fundamental", "", ""]
---

## What it is

An Ingress resource in [Kubernetes](/kubernetes/) helps to manage all the different deployment configurations in the same Kubernetes cluster using just a Kubernetes definition file that lives along with application definition files. It helps in controlling and mapping traffic based on the configurations predefined in the file.
It allows the users to access production-level applications using a single externally accessible URL that can be configured to balance traffic to different services within the cluster based on the URL path.

## Problem it addresses

Traditionally, users access deployed production-grade applications using URLs, typically HTTPS, but whenever the traffic increase, it leads to the need for an increase in the number of replicas of the pod to handle it. The pod is the smallest unit of workload in Kubernetes. It is the object that contains the application. A load balancer is present between the application and the users to handle traffic for a specific service.

Now, as the application scales and the incoming traffic grows, more pod replicas are needed, resulting in increased costs and complexity. Multiple load balancers are required for additional services, making management challenging and leading to improper resource utilization.

## How it helps

Ingress simplifies scaling by acting as a single entry point to multiple services within your Kubernetes cluster. It eliminates the need for numerous load balancers and eases the configuration of firewall and load balancer rules for each service. By centralizing traffic routing and handling configurations, Ingress provides streamlined scalability, optimizes resource utilization, reduces costs, and improves overall manageability for applications in a Kubernetes cluster.
An Ingress controller is a component that runs within the cluster and interprets the rules defined in the Ingress resource.
