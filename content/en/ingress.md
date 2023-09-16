---
title: Ingress
status: Feedback Appreciated
category: technology
tags: ["fundamental", "", ""]
---

## What it is

An Ingress is an abstraction that helps to manage the traffic from the outside into a [Kubernetes](/kubernetes/) cluster. 
It consists of two elements, the ingress resource, and the ingress controller. 
The ingress resource is just a Kubernetes manifest file that lives along with other manifest files and allows for the configuration of traffic routing. 
The ingress controller is the web server technology that actually performs the routing of the traffic according to the configuration in the ingress resource.

## Problem it addresses

Cloud Native web applications consist of multiple services, where one or more of those need to be accessible over the internet for the users to visit using their browser. 
To make these services user accessible while using Kubernetes to run this application, we need to expose each service of the application to the outside world. 
The most straightforward way would be to use a Load Balancer type of Kubernetes Service. 
Creating such a Kubernetes Load Balancer Service results in a new component on the underlying infrastructure. 
This not only introduces new costs and management overhead but also, each newly created Load Balancer has its own external IP address. 
This leads to a bad user experience because as a user we don't want to browse different URLs just to access an application.

## How it helps

An Ingress resource allows you to configure how traffic is balanced and routed to all the services an application can consist of. 
The ingress controller is a web server that allows for a single entry point through a URL (www.example-url.com) and does the actual routing and balancing based on different URL paths (www.example-url.com/path). 
An Ingress controller is a component that runs within the cluster and interprets the rules defined in the Ingress resource.
It is up to the users or operators of a Kubernetes cluster to choose a specific Ingress controller from a set of possible technologies. 
So now, even though if an application consists of multiple services, the user can access it using a single URL. 
This eliminates the need for numerous separate load balancers on the infrastructur level and eases the configuration of firewall and load balancer rules for each service. 
By centralizing traffic routing and handling configurations, Ingress provides streamlined scalability, optimizes resource utilization, reduces costs, and improves overall manageability for applications in a Kubernetes cluster.