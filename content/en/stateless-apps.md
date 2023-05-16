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
And that brings some challenges. 
All instances would have to somehow sync that session data, which often used to be stored only in-memory of an instance before the rise of the cloud.  
This approach isn't reliable as synchronizing session data between instances is a high effort. 
Additionally, state stored in memory is lost when an instance crashes or is gracefully shut down and relocated — a common scenario in the cloud. 

## How it helps

Put simply, in a stateless application, the cluster is only responsible for the code and some static content hosted on it. 
That's it. No changing databases. No writes. 
And no leftover files when the pod is deleted. 
With no need to worry about saving container data on persistent storage volumes, stateless [containers](/container/) are easier to deploy.
That being said, most applications today are at least partly stateful as they must store preferences and settings to improve the user experience.
