---
title: Canary Deployment
status: Completed
category: concept
tags: ["methodology", "application", ""]
---

Canary deployments is a deployment strategy that starts with two environments: 
one with live traffic and the other containing the updated code without live traffic. 
The traffic is gradually moved from the original version of the application to the updated version. 
It can start by moving 1% of live traffic, then 10%, 25%, and so on, 
until all traffic is running through the updated version. 
Organizations can test the new version of the software in production, get feedback, 
diagnose errors, and quickly rollback to the stable version if necessary.  

The term “canary” refers to the "canary in a coal mine" practice 
where canary birds were taken into coal mines to keep miners safe. 
If odorless harmful gases were present, the bird would die, and the miners knew they had to evacuate quickly. 
Similarly, if something goes wrong with the updated code, live traffic is "evacuated" back to the original version. 

## Problem it addresses

No matter how thorough the testing strategy, there are always some bugs discovered in production. 
Shifting 100% of traffic from one version of an app to another can lead to more impactful failures.

## How it helps

Canary deployments allow organizations to see how new software behaves in real-world scenarios 
before moving significant traffic to the new version. 
This strategy enables organizations to minimize downtime and quickly rollback in case of issues with the new deployment. 
It also allows more in-depth production application testing without a significant impact on the overall user experience.
