---
title: Load Balancer
status: Feedback Appreciated
category: concept
tags: ["", "", ""]
---

## What it is

A load balancer is a tool that efficiently distributes incoming requests among multiple instances of an application. Each service of a [microservices](/microservices/) app generally has multiple replicas (or instances), and the load balancer ensures no one service gets the bulk of the requests.
Load balancers can be software or hardware-based.

## Problem it addresses

Modern applications and websites serve thousands of thousands simultaneous requests from end-users, and returning response to each of that requests responsively, efficiently and reliably is not easy.
Previously, network requests are routed to specific servers and in this high load senario, some servers may get very high number of requests and some servers stay comfortably.

## How it helps

Load balancer will distribute all the requests among multiple servers dynamically in a way where no one server get high load when there is other servers which can fulfill those requests. It evently spreads the load across multiple servers. Thus optimising every single request to get responed fast and reliably to end users.