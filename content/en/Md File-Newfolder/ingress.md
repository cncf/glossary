---
title: Ingress
status: Completed
category: technology
tags: ["fundamental"]
---

An Ingress is a set of rules that helps to manage internet traffic from outside into a container or a group of containers running in a cluster.
It consists of two elements: the ingress resource and the ingress controller.
The ingress resource is a configuration file that lives along with other manifest files and allows admins to configure the external traffic routing.
The ingress controller is the web server technology that actually performs the routing of the traffic according to the configuration in the ingress resource.

## Problem it addresses

Cloud Native web applications consist of multiple services, and often, those [services](/service/) need to be accessible over the internet for users to visit using their browser.
To make these services user accessible while using [Kubernetes](/kubernetes/) to run this application, we need to expose each application service to the outside world.
The most straightforward way would be to use a Kubernetes Load Balancer Service.
But creating such a service results in a new component on the underlying infrastructure.
This not only introduces new costs and management overhead, but each newly created Load Balancer has its own external IP address.
This leads to a bad user experience, because as a user, we don’t want to browse different URLs to access an application.

## How it helps

An Ingress resource allows you to configure how traffic is balanced and routed to an application’s services.
The ingress controller exposes a single entry point through a URL (www.example-url.com) and does the actual routing and balancing based on different URL paths (www.example-url.com/path).
An Ingress controller is a component that runs within the cluster and interprets the rules defined in the Ingress resource.
It is up to the cluster operators where the web app runs to choose a specific Ingress controller from a set of possible technologies like Nginx, Traefik, HAProxy, etc.
So now, if an application consists of multiple services, the user can access it using a single URL.
This eliminates the need for numerous separate load balancers on the infrastructure level and eases the configuration of firewall and load balancer rules for each service.
By centralizing traffic routing and handling configurations, Ingress provides streamlined scalability, optimizes resource utilization, reduces costs, and improves overall manageability for applications running in a cluster.