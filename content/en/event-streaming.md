---
title: Event Streaming
status: Feedback Appreciated
category: concept
---

## What it is

Event streaming is an approach where [microservices](/microservices/) continuously communicate to the system what they are doing. 
Picture a service broadcasting everything it does to all other services. 
Each activity taken by a service is referred to as an event, hence event streaming. 
For example, the Netflix service in charge of registering user movie choices might "broadcast" an event communicating something like: "User X selected movie Y."
The message is now "out there" for the Netflix service in charge of pulling the movie from the database to pick it up.
The data in this stream contains information regarding events (changes of state)

## Problem it addresses

As more data becomes real-time, there will be an increased need to ensure that data is consistently flowing from a producer (source) to a consumer (receiver).
Past architectures would pull data in small batches over set period of time but nowadays, applications are needing to get constant, up-to-date data.

## How it helps
Event streaming allows services to be completely decoupled from one another (a fundamental principle of microservices architectures). 
Instead of waiting for services to request information from it, the service continuously streams all its events (or activities). 
It isn't concerned about what happens to the information. 
It just does what it needs to do and broadcasts it to the system, thus completely independent of any other service. 
