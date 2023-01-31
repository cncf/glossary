---
title: Stateless Apps
status: Feedback Appreciated
category: technology
tags: ["fundamental", "application", ""]
---

## What it is

A stateless application operates independently of past interactions and user data. When a user interacts with the application, it processes the request immediately and forgets the information once the request is processed. This indicates that the application lacks any permanent storage containing information on prior user interactions or data. Each utilization of the application is treated as an isolated session, without reference to past interactions. For instance, consider someone using a search engine to find an answer. If their search is interrupted or the window is closed, they must start a new search because there is no saved information from their previous attempt.


## Problem it addresses

Stateless applications tackle the problem of resiliency, 
because different pods across a [cluster](/cluster/) can work independently, 
with multiple requests coming to them at the same time. 
If there’s a problem, you can easily restart the application, 
and it will return to its initial state with little or no downtime. 
As such, the benefits of stateless applications include resiliency, elasticity, and high availability. 
However, most applications we use today are at least partly [stateful](/stateful-apps/), 
as they store things like preferences and settings to improve the user experience.

## How it helps

Boiling everything down, in a Stateless Application the only thing your cluster is responsible for is 
the code, and other static content, being hosted on it. 
That’s it, no changing databases, no writes and no left over files when the pod is deleted. 
Stateless [containers](/container/) are easier to deploy, 
and you don’t need to worry about saving container data on persistent storage volumes. 
You also don't have to worry about backing up the data.
