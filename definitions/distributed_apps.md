---
title: Distributed Apps
status: Feedback Appreciated
category: concept
---
## Distributed Apps

**Status:** Feedback Appreciated

A distributed application is one where the logic required to perform a useful action is split amongst many programs that run as distinct processes and may be located on different computers, perhaps even in different data centres.

An application running on one single computer is fragile - if that one computer fails for any reason, the application is totally unavailable. 

By splitting the application up into pieces and running those in many places, the overall system can tolerate more failures. This does however, come at a cost of increased complexity and operational overhead - you’re now running lots of applications instead of one!

