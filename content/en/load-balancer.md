---
title: Load Balancer
status: Feedback Appreciated
category: concept
tags: ["infrastructure", "networking", ""]
---

A load balancer is a tool that efficiently distributes incoming requests among multiple instances of an application. 
Take a [microservice](/microservices/) architecture for example, where each service can be [scaled horizontally](/horizontal-scaling/). 
A load balancer sits in front of a scaled microservice and ensures that no one instance gets the bulk of the requests.
Load balancers can be software or hardware-based.

## Problem it addresses

Modern applications and websites generally serve hundreds of thousands of simultaneous end-user requests. 
To handle all those requests, applications are often scaled horizontally.
But horizontal scaling introduces a new challenge. How do you distribute incoming traffic to all services equally? 
This is where load balancers come in.

## How it helps

Load balancers dynamically distribute all incoming requests among multiple services, ensuring that no one service gets the bulk of it while others only get a few or none. 
In short, it spreads the load across multiple services, following a defined schema (i.e., evenly or percentage-based). 
Load balancers are essential to an application's overall performance and, ultimately, the user experience.
