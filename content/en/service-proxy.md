---
title: Service Proxy
status: Completed
category: technology
tags: ["networking", "", ""]
---

A service proxy intercepts traffic to or from a given [service](/service/), 
applies some logic to it, then forwards that traffic to another service. 
It essentially acts as a “go-between” that collects information about network traffic and/or applies rules to it.

## Problem it addresses

To keep track of service to service communication (aka network traffic) and 
potentially transform or redirect it, we need to collect data. 
Traditionally, the code enabling data collection and network traffic management was embedded within each application.

## How it helps

A service proxy allows us to “externalize” this functionality. 
No longer does it need to live within the apps. 
Instead, it’s now embedded into the platform layer (where your apps run).

Acting as gatekeepers between services, proxies provide insight into what type of communication is happening. 
Based on their insight, they determine where to send a particular request or even deny it entirely.

Proxies gather critical data, manage routing (spreading traffic evenly among services or rerouting if some services break down), 
encrypt connections, and cache content (reducing resource consumption).
