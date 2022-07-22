---
title: Service Discovery
status: Completed
category: concept
tags: ["networking", "", ""]
---

## What it is

Service discovery is the process of finding individual instances that make up a service. 
A service discovery tool keeps track of the various nodes or endpoints that make up a service. 

## Problem it addresses

Cloud native architectures are dynamic and fluid, meaning they are constantly changing. 
A [containerized](/containerization/) app will likely end up starting and stopping multiple times in its lifetime. 
Each time that happens, it will have a new address and 
any app that wants to find it needs a tool to provide the new location information. 

## How it helps

Service discovery keeps track of apps within the network so they can find one another when needed. 
It provides a common place to find and potentially identify individual services. 
Service discovery engines are database-like tools that store info about what services exist and how to locate them.
