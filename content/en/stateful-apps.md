---
title: Stateful Apps
status: Completed
category: concept
tags: ["fundamental", "application", ""]
---

When we speak of stateful (and stateless) apps, 
state refers to any data the app needs to store to function as designed. 
Any kind of online shop that remembers your cart is a stateful app for example. 

## Problem it addresses

Using an app generally requires multiple requests. 
For example, when online banking, you'll authenticate yourself by 
entering your password (request #1), 
then you may transfer money to a friend (request #2), 
and finally, you'll want to view transfer details (request #3). 
To function correctly, each step has to remember the previous ones, 
and the bank needs to remember the state of everyone’s accounts. 
Today, most applications we use are at least partly stateful, 
as they store things like preferences and settings to improve the user experience.

## How it helps

There are several ways to store state for a stateful application. 
The simplest is to hold the state in memory and not persist it anywhere. 
The problem with that is, whenever the application has to be restarted, all state is lost. 
In order to prevent that, state is persisted either locally (on disk) or in database systems. 
