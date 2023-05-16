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
You'll need to start all over.

On the other hand, applications that process requests while considering previous interactions are called [stateful applications](/stateful-apps/). 

## Problem it addresses

When stateful applications, apps that *do* have session data, are horizontally scaled, every instance needs access to that same data.
If one instance processes a request, the other instances must have access to that session data to take it into account when they process the next request. 
That brings some challenges. 
Pods must constantly communicate to ensure they are all in sync for a seamless user experience. 
However, networks are inherently unreliable. Also, session data is lost if there’s a problem and the application restarts. 
In short, stateful apps are less resilient. 

## How it helps

Put simply, in a stateless application, the cluster is only responsible for the code and some static content hosted on it. 
That's it. No changing databases. No writes. 
And no leftover files when the pod is deleted. 
With no need to worry about saving container data on persistent storage volumes, stateless [containers](/container/) are easier to deploy.
That being said, most applications today are at least partly stateful as they must store preferences and settings to improve the user experience.
