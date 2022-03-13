---
title: Golden Signals
status: Feedback Appreciated
category: concept
---

## What it is
 [Golden signals](https://sre.google/sre-book/monitoring-distributed-systems/#xref_monitoring_golden-signals) are metrics that help us understand how [services](https://glossary.cncf.io/service/) are experienced by users. While there are several metrics that can be observed, golden metrics focus on the most important/significant ones: Latency, traffic, errors, and saturation. 

*Latency* is the time it takes to service a request. *Traffic* measures the request frequency placed on the application. *Errors* measure the request failure rate. And *Saturation* measures the capacity of app resources, allowing users to address bottlenecks before they become a problem.
 
## Problem it addresses
Without metrics, engineers have nothing to deduce why applications are behaving a certain way. While earlier monitoring tools were designed to monitor machines (not applications/services), modern monitoring systems gather a huge variety of parameters. They collect so many metrics that it's easy to lose focus on what is relevant for the user. Which of all these metrics should you focus on to ensure your customers have a great user experience?

## How it helps
Golden signals help engineers focus on metrics that matter for the user experience. They help steer clear from getting stuck in the mud by putting performance data into different buckets and providing the visibility needed to pinpoint problems that might affect the user.

*Latency* tells us how long it takes the application to handle transactions. An increase in latency is likely a sign of a performance issue.

Measuring website traffic allows a clear understanding of what is working or what isn't and develops a more potent content. It helps in better utilization of traffic.

Keeping track of *errors* helps us understand when they increase and where and when to troubleshoot to fix the source of the problem. Measuring *saturation* allows us to keep track of resource limits and when a bottleneck is approaching. Saturation may lead to service degradation or even crash. 


