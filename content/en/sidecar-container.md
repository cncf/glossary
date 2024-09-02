---
title: Sidecar Container
status: Feedback Appreciated
category: concept
---

The Sidecar Container is an implementation of the sidecar pattern. 
An application deployed on a second container will run side by side 
and share its lifecycle with a primary application running on a main container.

## Problem it addresses

There are scenarios where it is convenient to group [containers](/container/) to deal with problems related to the need to support cross-platform requirements or shared functionality. 
Problems like logging, monitoring, tracing or [observability](/observability/) in general, and security, traffic management, networking and common configurations applicable to multiple applications. These shared functionalities can be implemented independently as services and run on separate containers.

## How it helps

The term "sidecar" comes from the representation of a classic motorcycle with its attached sidecar. In this metaphor, the bike represents the main container and the sidecar the secondary container. 
This heterogeneous approach consists of using a separated and isolated process running on a secondary container to address problems that aren't unique to a single application but rather to the entire platform where the application is running. 
It enforces the principle of separation of concerns, centralised configuration, and best practices for governance. Besides its flexibility, it presents other advantages such as extending functionality without changing the main application's code, using different languages deployed on different runtimes, and sharing local resources between the core and the secondary applications. 

When applied to Kubernetes deployments, this approach creates a relationship of one pod to many containers, meaning that operational actions used in the pod, such as creation, scaling, and termination, will be equally applied to all containers inside. 
