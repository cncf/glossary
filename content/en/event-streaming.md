---
title: Event Streaming
status: Completed
category: concept
---

## What it is

Event streaming is an approach where software sends event data from one application to another to continuously communicate what they are doing.
Picture a service broadcasting everything it does to all other services.
Each activity taken by a service is referred to as an event, hence event streaming.
For example, NASDAQ gets updates on stock and commodities pricing every second.
If you had an application that monitored a specific set of stocks, you would want to receive that information in near real-time.
Yahoo! Finance provides an [API](https://glossary.cncf.io/application-programming-interface/) that pulls from NASDAQ and sends (or streams) the information (or events) from their application to any application that subscribes to it.
The data being sent as well as the changes in that data (stock prices) are the events while the process of delivering them to an application is event streaming.

## Problem it addresses

Traditionally, Yahoo! Finance would use single TCP requests.
This would be very inefficient as it would require a connection to be created for every event.
As data becomes more real-time in nature, scaling such a solution becomes inefficient.
Opening a connection once and allowing events to flow is ideal for real-time collection.
The amount of data being generated is growing exponentially and with that, the data state is in constant flux. Developers and users need to be able to see that data in near real-time.

## How it helps

Event streaming allows data changes to be communicated from source to receiver.
Instead of waiting for services to request information, the service continuously streams all its events (or activities).
It isn't concerned about what happens to the information.
It just does what it needs to do and broadcasts it, thus remaining completely independent of any other service.
