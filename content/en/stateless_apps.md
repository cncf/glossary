---
title: Stateless Apps
status: Feedback Appreciated
category: technology
---

## What it is

When we speak of stateless (and [stateful](https://glossary.cncf.io/stateful_apps/)) apps, state refers to any data the app needs to store to function as designed. Stateless apps, as the name suggests, neither read nor store state information. You already use stateless applications on a regular basis. When you use a search engine to pull up a query about a question you have, you’re using a stateless application. Even if you’re interrupted during the process, you can come straight back and ask the same question, or a different question, because all memory of the previous transaction is gone between takes. 



## Problem it addresses

When it comes to stateful applications it has to store the details of every transaction that happened in the previous step. So the need for extensive memory in the form of databases and servers can make stateful applications  slower, heavier, harder to manage. 

Here in stateless applications, every transaction is fresh as the moment it was born, this eliminates the need for large memory overheads. If there’s a problem, you can easily restart the application, and it will return to its initial state with little or no downtime.

## How it helps

Stateless Protocols/applications works better at the time of crash/accidentally if your application is closed because there is no state that must be restored, a failed server can simply restart after a crash. hence you don’t have to worry about backing up the data if an application/server crashes. Companies can easily add or remove new instances of the application whenever necessary.
