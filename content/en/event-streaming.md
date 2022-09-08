---
title: Event Streaming
status: Feedback Appreciated
category: concept
---

## What it is

Event streaming is an approach where software will send event data from one application to another in order to continuously communicate what they are doing.
Picture a service broadcasting everything it does to all other services.
Each activity taken by a service is referred to as an event, hence event streaming.
For example, the NASDAQ gets updates on stock and commodities pricing every second. If you had an application that monitored a specific set of stocks, you would want to receive that information in near real-time. If NASDAQ provides an API that send the information from their application to yours, you have event streaming.
The data being sent as well as the changes in that data (stock prices) are the events while the process of delivering them to an application is event streaming.

## Problem it addresses

As data becomes more real time in nature, developers and providers need to find a way to send this data to multiple sources. In addition, because the data is changing, they also need to send changes to that data.
The amount of data being generated is growing exponentially and with that, the data state is in constant flux. Developers and users need to be able to see that data in near real-time.
Traditionally, one would use single TCP requests. This would be very inefficient as it would require a connection to be created for every event. Opening a connection once and allowing events to flow is ideal for real-time collection.

## How it helps

Event streaming allows for data changes to be communicated from source to receiver.
Instead of waiting for services to request information from it, the service continuously streams all its events (or activities).
It isn't concerned about what happens to the information.
It just does what it needs to do and broadcasts it to the system, thus completely independent of any other service.
