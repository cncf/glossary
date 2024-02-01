---
title: Stateful Apps
status: Completed
category: Property
tags: ["fundamental", "application", "property"]
---

When we speak of stateful (and [stateless](/stateless-apps/)) apps, 
state refers to any data the app needs to store to function as designed. 
Any kind of online shop that remembers your cart is a stateful app for example. 

Today, most applications we use are at least partly stateful. In cloud native environments though, 
stateful apps are a challenge. This is because [cloud native apps](/cloud-native-apps) are very dynamic. 
They can be scaled up and down, restarted, and moved around but still need to be able to access their state.

Therefore, stateful apps needs some kind of storage that is accessible from anywhere, like databases.
