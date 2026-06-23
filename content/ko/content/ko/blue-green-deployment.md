---
title: Blue Green Deployment
status: Completed
category: concept
tags: ["methodology", "application", ""]
---

Blue-green deployment is a strategy for updating running computer systems with minimal downtime. 
The operator maintains two environments, dubbed “blue” and “green”. 
One serves production traffic (the version all users are currently using), whilst the other is updated. 
Once testing has concluded on the non-active (green) environment, 
production traffic is switched over (often via the use of a load balancer). 
Note that blue-green deployment usually means switching the entire environments, comprising many [services](/service/), all at once. 
Confusingly, sometimes the term is used with regard to individual services within a system. 
To avoid this ambiguity, the term “zero-downtime deployment” is preferred when referring to individual components.

## Problem it addresses

Blue-green deployments allow minimal downtime when updating software that must be changed in "lockstep" owing to a lack of backwards compatibility. 
For example, blue-green deployment would be appropriate for an online store 
consisting of a website and a database that needs to be updated, 
but the new version of the database doesn’t work with the old version of the website, and vice versa. 
In this instance, both need to be changed at the same time. 
If this was done on the production system, customers would notice downtime.

## How it helps

Blue-green deployment is an appropriate strategy for non-cloud native software that needs to be updated with minimal downtime. 
However, its use is normally a "smell" that legacy software needs to be re-engineered so that components can be updated individually.
