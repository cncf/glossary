---
title: Load Balancer
status: Feedback Appreciated
category: concept
tags: ["", "", ""]
---

## What it is

A load balancer is a tool that efficiently distributes incoming requests among multiple instances of an application. 
Take a [microservice](/microservices/) architecture for example, where each service can be [scaled horizontally](/horizontal-scaling/). 
A load balancer sits in front of a scaled microservice and ensures that no one instance gets the bulk of the requests.
Load balancers can be software or hardware-based.

## Problem it addresses

Modern applications and websites generally serve hundreds of thousands of simultaneous end-user requests. 
To handle all those requests, applications are often [scaled horizontally](/horizontal-scaling/).
But horizontal scaling introduces a new challenge. How do you distribute incoming traffic to all services equally? 
This is where load balancers come in.

## How it helps

Load balancers dynamically distribute all incoming requests among multiple services, ensuring that no one service gets the bulk of it while others only get a few or none. 
where no one server gets a high load when there are other servers that can fulfill those requests. 
It spreads the load across multiple servers, following a defined schema (i.e. evenly or percentage-based). 
Thus load balancers are playing an important role in the overall performance and user experience of an application.