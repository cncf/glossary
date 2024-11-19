---
title: Sidecar Container
status: Feedback Appreciated
category: concept
---

The Sidecar Container is an implementation of the sidecar pattern. 
An application deployed on a second container will run side by side 
and share its lifecycle with a primary application running on a main container. 

## Problem it addresses

There are scenarios where it is convenient to group [containers](/container/) 
to deal with cross-platform requirements or shared functionality.
Such scenarios include [observability](/observability/) topics 
like logging, monitoring, tracing, but also security, and networking. 
For example, when multiple microservices have their sidecar containers 
acting as logging agents to collect and forward logs to a log server, 
or collecting metrics to forward to a monitoring system.

## How it helps

The term "sidecar" comes from the representation of a classic motorcycle 
with its attached sidecar. 
In this metaphor, the bike represents the main container 
and the sidecar the secondary container. 
This approach consists of using a separated process 
running on a secondary container to address problems 
that aren't unique to a single application 
but rather to the entire platform where the application is running. 
The Sidecar Container will share the same resources,
including storage and networking, as the main container. 
While doing this, it frees the main container to be focused on functional tasks 
or exposing business capabilities. 
As a secondary container, the "sidecar" takes care of platform related tasks 
such as logging, monitoring or security.   
It enforces the principle of separation of concerns 
and provides extending functionality without changing the main application's code. 