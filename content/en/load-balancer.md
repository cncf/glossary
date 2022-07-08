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
In order to handle all those requests, [horizontal scaling](/horizontal-scaling/) is nearly unavoidable.
Unfortunately, [horizontal scaling](/horizontal-scaling/) introduces a new level of complexity which is, how to distribute the incoming traffic to all horizontally scaled services. 
This is where load balancers come in handy.

## How it helps

Load balancers will distribute all the requests among multiple servers dynamically in a way 
where no one server gets a high load when there are other servers that can fulfill those requests. 
It spreads the load across multiple servers, following a defined schema (i.e. evenly or percentage-based). 
Thus load balancers are playing an important role in the overall performance and user experience of an application.