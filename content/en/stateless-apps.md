---
title: Stateless Apps
status: Feedback Appreciated
category: technology
tags: ["fundamental", "application", ""]
---

A stateless application doesn’t save any client session (state) data on the server where the application lives. 
Each session is carried out as if it was the first time and responses are not dependent upon data from a previous session and 
provides functionality to use print services, CDN (Content Delivery Network) or the Web Servers 
in order to process every short-term request. 
For example, someone is searching a question in the search engine and pressed the Enter button. 
In case if the searching operation gets interrupted or closed due to some reason, 
you have to start a new one as there is no saved data for your previous request.

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
