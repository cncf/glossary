---
title: Continuous Deployment (CD)
status: Completed
category: concept
---

## What it is
Continuous Deployment, often abbreviated as CD, goes a step further than [continuous delivery](/continuous_delivery/). After updating an application, the code goes through the [continuous integration](/continuous_integration/) process and is pushed to production if successful in the verification stage. Should verification fail, the process is blocked, and developers are alerted so they can troubleshoot. These steps are all fully automated.

## Problem it addresses
Anytime the new changes are released, it causes the entire infrastructure to slow down as they need to manually keep on checking if everything is proper on the production side. If anything goes wrong it may cause huge losses to that industry. So this causes industries to slow down the process of new release.

## How it helps
Continuous deployment automates the process of pushing code to production. CI/CD, in general, focuses on releasing smaller changes more often, implementing deployment strategies such as [canary](/canary_deployment/) or [blue-green](/blue_green_deployment/) releases, and ultimately delivering value to customer faster. 