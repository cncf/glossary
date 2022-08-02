---
title: Event Streaming
status: Feedback Appreciated
category: concept
---

## What it is

Event streaming is a system in which one is providing a constant flow of data.
The data in this stream contains information regarding events (changes of state)

## Problem it addresses

As more data becomes real-time, there will be an increased need to ensure that data is consistently flowing from a producer (source) to a consumer (receiver).
Past architectures would pull data in small batches over set period of time but nowadays, applications are needing to get constant, up-to-date data.

## How it helps
Event streaming allows services to be completely decoupled from one another (a fundamental principle of [microservices](/microservices/) architectures). Instead of waiting for services to request information from it, the service continuously streams all its events (or activities). It isn't concerned about what happens to the information. It just does what it needs to do and broadcasts it to the system, thus completely independent of any other service. 
