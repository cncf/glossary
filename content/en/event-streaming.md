---
title: Event Streaming
status: Feedback Appreciated
category: concept
---

## What it is

Event streaming is an approach where [microservices](/microservices/) continuously communicate what they are doing. 
Picture a service broadcasting everything it does to all other services. 
Each activity taken by a service is referred to as an event, hence event streaming. 
For example, the Netflix service in charge of registering user movie choices might "broadcast" an event communicating something like: "User X selected movie Y."
The message is now "out there" for the Netflix service in charge of pulling the movie from the database to pick it up.

## Problem it addresses

The traditional communication approach for services is "ask, don't tell," coupling services to one another. 
In our example, the Netflix service that pulls the movie from the database would have to ask the service that registers user choices: 
"What's your current state? Any movies I need to get?" 
This approach assumes that the first service is always available to respond.

This method is problematic with real-time data, like in the case of Netflix. 
Users expect the app to stream the selected movie without any delay. 
With more data becoming real-time, there will be an increased need to ensure that data consistently flows from a producer (service source) to a consumer (service receiver).

## How it helps
Event streaming allows services to be completely decoupled from one another (a fundamental principle of microservices architectures). 
Instead of waiting for services to request information from it, the service continuously streams all its events (or activities). 
It isn't concerned about what happens to the information. 
It just does what it needs to do and broadcasts it to the system, thus completely independent of any other service. 
