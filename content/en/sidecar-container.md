---
title: Sidecar Container
status: Completed
category: concept
---

The Sidecar Container is an implementation of the sidecar pattern. 
An application deployed on a second container will run side by side 
and share its lifecycle with a primary application running on a main container. 

## Problem it addresses

There are cross-platform situations where it is convenient to group [containers](/container/) 
and their lifecycle to deal with scenarios 
like logging, monitoring, tracing, but also security, and networking.
Before this approach, logging would typically be implemented in the application code 
inside the container. 
This can lead to different ways to implement the logic, 
depending on the developer or application, 
normally resulting in more complex systems to maintain and govern. 
For example, updating the logging logic might impact the application in runtime, 
hence increasing operational risk.  

## How it helps

It enforces the principle of separation of concerns 
and provides extending functionality without changing the main application's code, 
by using a separated process running on a secondary container.

The sidecar container will share the same resources,
including storage and networking, as the main container. 
While doing this, it frees the main container to be focused on functional tasks 
or exposing business capabilities. 

For example, when multiple microservices have their sidecar containers 
acting as logging agents reading from the same directory, 
the main application is writing its logs to.