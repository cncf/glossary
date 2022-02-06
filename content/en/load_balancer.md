---
title: Load Balancer
status: Feedback Appreciated
category: concept
---

## What it is
A load balancer is a device used to distribute incoming network traffic across a bunch of servers.

## Problem it addresses
This helps solve the issue related to scalibility and high availability. When working on an application or service that needs to scale to hundreds of thousands of users, one will often need to distribute that application on multiple servers. The load balancer is the "traffic cop" that routes traffic.

## How it helps
A load balancer will act as front-end to a bunch of servers, so all incoming HTTP requests from clients are sent to IP address of the load balancer. Then it routes incoming requests to whichever server is the least busy, even though to the clients it all looks like one web address.
