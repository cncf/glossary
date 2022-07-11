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

Event streaming can be seen as an extension of [Event-driven architectures](/event-driven-architecture/) while event-driven architecture is the infrastructure designed to support the streaming of events to their respective services.
Event streaming is sending data at a near real-time rate that updates the application on changes of states (events).
