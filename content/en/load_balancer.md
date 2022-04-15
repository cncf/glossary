---
title: Load Balancer
status: Feedback Appreciated
category: concept
---

## What it is

A load balancer is a tool that distributes incoming requests among multiple instances of an application. Each service of a [microservices](/microservices/) app generally has multiple replicas (or instances), and the load balancer ensures no one service gets the bulk of the requests. Load balancers can be software or hardware-based.

## Problem it addresses

In a scenario where multiple application instances are running on a group of servers, It can become tedious to manage and direct millions of incoming user requests toward available servers. A server might become overloaded with requests, resulting in reduced throughput, slower response time, and inefficient utilization of resources.

## How it helps

Adding a load balancer will help in distributing the requests among the multiple servers in a way that would maximize the website's speed and ensure that no server is overworked. If any of the servers goes down, the load balancer will redirect the requests to other working servers. Also in case of [horizontal scaling](/horizontal_scaling/), it would automatically start sending the requests to the new server.
