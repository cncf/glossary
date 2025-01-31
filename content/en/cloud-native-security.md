---
title: Cloud Native Security
status: Completed
category: concept
tags: ["security", "", ""]
---

Cloud native security is an approach that builds security into [cloud native applications](/cloud-native-apps/). 
It ensures that security is part of the entire application lifecycle from development to production. 
Cloud native security seeks to ensure the same standards as traditional security models 
while adapting to the particulars of cloud native environments, 
namely rapid code changes and highly ephemeral infrastructure. 
Cloud native security is highly related to the practice called [DevSecOps](/devsecops/).

## Problem it addresses

Traditional security models were built with a number of assumptions that are no longer valid. 
Cloud native apps change frequently, use a large number of open source tools and libraries, 
often run in vendor-controlled infrastructure, and are subject to rapid infrastructure changes. 
Code reviews, long quality assurance cycles, host-based vulnerability scanning, 
and last minute security reviews cannot scale with cloud native applications.

## How it helps

Cloud native security introduces a new way of working that protects applications 
by migrating from traditional security models to one where security is involved in every step of the release cycle. 
Manual audits and checks are largely replaced with automated scans. 
Rapid code release pipelines are integrated with tools that scan code for vulnerabilities before they’re compiled. 
Open source libraries are pulled from trusted sources and monitored for vulnerabilities. 
Instead of slowing change a cloud native security model embraces it 
by frequently updated vulnerable components or ensuring infrastructure is regularly replaced.
