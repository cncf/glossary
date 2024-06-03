---
title: Sidecar Container
status: Completed
category: concept
---

The Sidecar Container is an implementation of the sidecar pattern. An application deployed on a second container will run side by side and share its lifecycle with a primary application running on a main container.

## Problem it addresses

There are scenarios where it is convenient to group [containers](/container/) to deal with problems related to the need to support cross-platform requirements or shared functionality such as logging, monitoring, tracing or [observability](/observability/) in general, and security, traffic management, networking and transversal application configuration. These common functionalities can be implemented independently as services and run on separate containers.

## How it helps

The sidecar terms come after the representation of a classic motorcycle with its attached sidecar. In this metaphor, the bike represents the main container and the sidecar the secondary container. This heterogeneous approach consists of using a separated and isolated process running on a secondary container to address problems that aren't unique to a single application but rather to the entire platform where the application is running. It enforces Separation of Concerns, centralised configuration and governance best practices. Besides its flexibility, it presents other advantages such as extending functionality without changing the main application's code, using different languages deployed on different runtimes, and sharing local resources between the core and the secondary applications. 

When applied to Kubernetes deployments, this approach will create a relationship of 1 pod to many containers and implies that operational actions used to the pod, such as creation, scaling, and termination, will be equally applied to all containers inside. 
 
