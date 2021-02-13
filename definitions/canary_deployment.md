---
title: Canary Deployment
status: Feedback Appreciated
category: concept
---
## Canary Deployment

**Status:** Feedback Appreciated

Based on the expression “Canary in a coal mine”, canary deployments are designed to examine new software deployments, in production, with limited negative impact in case of errors.  Organizations can run two (or more) versions of the same software in production, get feedback, diagnose errors, and quickly rollback to the stable version if necessary. A common example of a canary deployment is the blue green deployment strategy.

Examining a new deployment based solely on automated testing may not give accurate feedback. Updating deployments all at once may cause errors or failures that require a rollback to the previous version causing downtime.

Allowing organic interaction with new deployments in a controlled manner allows for targeted feedback from users. This strategy enables organizations to minimize downtime with quick rollbacks in case of issues with the new deployment.

