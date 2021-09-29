---
title: Infrastructure as Code (IaC)
status: Completed
category: concept
---

## What it is
Infrastructure as code is the practice of storing the definition of infrastructure as one or more files. This replaces the traditional model where infrastructure as a service is provisioned manually, usually through shell scripts or other configuration tools.

## Problem it Addresses
Building applications in a cloud native way requires infrastructure to be disposable and reproducible. It also needs to [scale](https://github.com/cncf/glossary/blob/main/content/en/scalability.md) on-demand in an automated and repeatable way, potentially without human intervention. Manual provisioning cannot meet the responsiveness and scale requirements of [cloud native applications](https://github.com/cncf/glossary/blob/main/content/en/cloud_native_apps.md). Manual infrastructure changes are not reproducible, quickly run into scale limits, and introduces misconfiguration errors.

## How it Helps
By representing the data center resources such as servers, load balancers, and subnets as code, it allows infrastructure teams to have a single source of truth for all configurations and also allows them to manage their data center in a [CI](https://github.com/cncf/glossary/blob/main/content/en/continuous_integration.md)/[CD](https://github.com/cncf/glossary/blob/main/content/en/continuous_delivery.md) pipeline, implementing version control and deployment strategies.

