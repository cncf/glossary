---
title: Event-Driven Architecture
status: Completed
category: concept
tags: ["architecture", "", ""]
---

Event-driven architecture is a software architecture that promotes the creation, processing, and consumption of events.
An event is any change to an application's state.
For example, hailing a ride on a ride-sharing app represents an event.
This architecture creates the structure in which events can be properly routed from their source (the app requesting a ride) to the desired receivers (the apps of available drivers nearby).

## Problem it addresses

As more data becomes real-time, finding reliable ways to ensure that events are captured and routed to the appropriate [service](/service/) that must process event requests gets increasingly challenging.
Traditional methods of handling events often have no way to guarantee that messages are appropriately routed or were actually sent or received.
As applications begin to scale, it becomes more challenging to orchestrate events.

## How it helps

Event-driven architectures establish a central hub for all events (e.g., Kafka).
You then define the event producers (source) and consumers (receiver), and the central event hub guarantees the flow of events.
This architecture ensures that services remain decoupled and events are properly routed from the producer to the consumer.
The producer will take the incoming event, usually by HTTP protocol, then route the event information.
