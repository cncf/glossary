---
title: Load Balancer
status: Feedback Appreciated
category: concept
---

## What it is
A load balancer is a method to distribute incoming network traffic across a group of servers in the back-end. The solution can be software or hardware based.

## Problem it addresses
This helps solve the issue related to high availability and distributed systems. When working on an application or service that needs to scale to hundreds of thousands of users, one will often need to distribute that application on multiple servers. The load balancer is the "traffic cop" that routes traffic.

## How it helps
A load balancer will act as front-end for network traffic and clients. It often has various methods to check which server(s) is up and has the lowest load to handle the request.