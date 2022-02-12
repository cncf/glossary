---
title: Stateless Apps
status: Feedback Appreciated
category: technology
---

## What it is

When we speak of stateless (and [stateful](https://glossary.cncf.io/stateful_apps/)) apps, state refers to any data the app needs to store to function as designed. As its name suggests (stateless) i.e it neither reads nor stores information about its state. Assume it is like a chalkboard or slate.

 Example:
 Search engine (incognito mode): Doing a search online to answer a question you’ve thought of. You type your question into a search engine and hit enter. You got the answer you are looking for. While reading accidentally refreshed or closed. When you open it again everything will be new. To find the answer have to search again. 


## Problem it addresses

 statelessness doesn’t mean that there isn’t a state. It just means that the state is held somewhere else. For example, when you use an ATM machine, you’re the one who maintains the state. After Withdrawing, the machine doesn’t remember what’s the password you have entered. Privacy is maintained. (Stateless applications tackle the problem of resiliency)If you are stuck at some point while doing a transaction on  ATM  machine you can easily restart the application/machine, and it will return to its initial state with little or no downtime.

## How it helps

Stateless Protocols/apps works better at the time of crash or accidentally if your application is closed because there is no state that must be restored, a failed server can simply restart after a crash. hence you don’t have to worry about backing up the data if an application/server crashes.