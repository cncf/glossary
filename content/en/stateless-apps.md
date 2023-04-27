---
title: Stateless Apps
status: Feedback Appreciated
category: technology
tags: ["fundamental", "application", ""]
---

## What it is

Stateless applications process requests as if they were their first. 
The app doesn't "remember" previous interactions or user session data. 
Data from previous interactions is referred to as state, and since that data isn't stored anywhere, these apps are state*less*. 
In short, stateless apps lack permanent storage. 
Here's an example. 
When you use a search engine, and that search is interrupted (e.g., the window is closed), those search results are lost. 
You'll need to start your search again.

On the other hand, applications that process requests while considering previous interactions are called [stateful applications](/stateful-apps/). 

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
