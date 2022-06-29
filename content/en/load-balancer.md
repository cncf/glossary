---
title: Load Balancer
status: Feedback Appreciated
category: concept
tags: ["", "", ""]
---

## What it is

A load balancer is a tool that efficiently distributes incoming requests among multiple instances of an application. Take a [microservice](/microservices/) architecture for example, where each service can be [scaled horizontally](/horizontal-scaling/). A load balancer sits in front of a scaled microservice and ensures that no one instance gets the bulk of the requests.
Load balancers can be software or hardware-based.

## Problem it addresses

Modern applications and websites serve thousands of simultaneous requests from end-users, and returning responses to each of that requests responsively, efficiently, and reliably is not easy.
Previously network requests are routed to specific servers and in this high load scenario, some servers may get a very high number of requests and some servers stay comfortably.

## How it helps

A Load balancer will distribute all the requests among multiple servers dynamically in a way where no one server gets a high load when there are other servers that can fulfill those requests. It evenly spreads the load across multiple servers. Thus optimizing every single request to get responded fast and reliably to end-users.