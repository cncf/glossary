---
title: Blue Green Deployment
status: Feedback Appreciated
category: concept
---
## Blue Green Deployment

**Status:** Feedback Appreciated

Blue/Green Deployment is a strategy for updating running computer systems with minimal downtime. The operator maintains two environments, dubbed “blue” and “green”. One serves production traffic, whilst the other is updated. Once testing has concluded on the non-active environment, production traffic is switched over to it (often via the use of a load balancer). It is of note that Blue/Green Deployment usually means the switching of entire environments, comprising many services, all at once. Confusingly, sometimes the term is used with regard to individual services within a system. To avoid this ambiguity, the term “zero-downtime deployment” is preferred when referring to individual components.

Blue/Green Deployments allow minimal downtime when updating software that must be changed in ‘lockstep’ owing to a lack of backwards compatibility. For example, Blue/Green Deployment would be appropriate for when an online store consisting of a website and a database needs to be updated, and the new version of the database doesn’t work with the old version of the website, and vice versa. In this instance, both need to be changed at the same time. If this was done on the production system, customers would notice downtime.

Blue/Green Deployment is an appropriate strategy for non-cloud native software that needs to be updated with minimal downtime. However its use is normally a ‘smell’ that legacy software needs to be re-engineered so that components can be updated individually.

