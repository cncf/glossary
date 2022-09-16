---
title: Event Streaming
status: Feedback Appreciated
category: concept
---

## What it is

Event streaming is an approach where software sends event data from one application to another to continuously communicate what they are doing.
Picture a service broadcasting everything it does to all other services.
Each activity taken by a service is referred to as an event, hence event streaming.
For example, the NASDAQ gets updates on stock and commodities pricing every second. 
An application that monitors a specific set of stocks would need to receive that information in near real-time. 
If you had an application that monitored a specific set of stocks, you would want to receive that information in near real-time. 
If NASDAQ provides an API that send the information from their application to yours, you have event streaming.
The data sent and the changes in that data (stock prices) are the events, while the process of delivering them to an application is event streaming.

## Problem it addresses

Traditionally, one would use single TCP requests. 
However, a TCP approach requires creating a connection for each event.
With increasingly more data becoming real-time, scaling such a solution becomes inefficient, whereas opening a connection once and allowing events to flow is ideal.
The amount of generated data is growing exponentially, leading to the constant flux in the data state. 
Developers and users need to see that data in near real-time.

## How it helps

Event streaming allows data changes to be communicated from source to receiver.
Instead of waiting for services to request information, the service continuously streams all its events (or activities).
It isn't concerned about what happens to the information.
It just does what it needs to do and broadcasts it, thus remaining completely independent of any other service.
