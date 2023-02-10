---
title: Container Image
status: Feedback Appreciated
category: concept
tags: ["", "", ""]
---

## What it is

A container image is an immutable, static file containing the dependencies for the creation of a [container](/container/). 
These dependencies may include a single executable binary file, system libraries, 
system tools, environment variables, and other required platform settings. 
Container images result from an application's [containerization](/containerization/) and are typically stored in container registries, 
where they can be downloaded and run as an isolated process using a Container Runtime Interface (CRI). 
A container image framework must follow the standard schema defined by the Open Container Initiative (OCI).

## Problem it addresses 

Traditionally, application servers are configured per environment, and applications are deployed to them. 
Any misconfiguration between environments is problematic and often leads to downtime or failed deployments. 
An application's environment needs to be repeatable and well-defined; 
otherwise, the chance of environment-related bugs increases. 
When application environments are configured inadequately or inaccurate, 
[horizontal](/horizontal-scaling/) and [vertical](/vertical-scaling/) scaling of applications becomes challenging. 

## How it helps

Container images bundle an application with any of its runtime dependencies, such as an application server. 
This provides consistency across all environments, including a developer's machine. 
Container images can be used to instantiate as many containers as needed, allowing for greater [scalability](/scalability/). 
