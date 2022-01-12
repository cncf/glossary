---
title: GitOps
status: Feedback Appreciated
category: Concept
---

## What it is

GitOps is a set of best practices based on [shared principles](https://opengitops.dev/) applied to managing and operating a cloud-native infrastructure and applications. 
The GitOps approach is used to strategize a cohesive workflow that leverages Git as the "single source of truth" and extends this practice to an application's configuration, infrastructure, and operational procedures. 
The GitOps controller automates matching the Git state with the system state in a bidirectional manner.

## Problem it addresses

Some existing processes for infrastructure configuration management can face challenges, such as:

- Failed deployments

Relying on a disaster recovery strategy with manual or semi-manual processes isn't always reliable. 

- Configuration drift

This approach can create consequences, such as security vulnerabilities, high costs due to lack of efficiencies resulting in stale workloads, and risking downtime in an application or service because it's not scaling enough or is scaling too frequently.

- Poor Infrastructure design

Legacy infrastructure designs limit developers to access or understand large-scale systems that limit their productivity.

- Missing documentation or unknown development history

Many teams depend on working practices developed over decades and document changes in a centrally maintained wiki that is uncontrolled and not maintained.

Adopting a GitOps workflow can help alleviate some of these issues.

## How it helps

GitOps is a deployment practice that improves the management of a cloud system infrastructure. It helps by enabling a declarative format that a team can describe how their infrastructure works. It also helps describe the entire system running on top of it. This approach provides traceability to any changes that are made within any environment and supports automated rollbacks, self-healing attributes, and easier recovery during service outages.
By operating in a close loop it ensures that the desired state of a system matches a declared state by utilizing software agents to protect against human error or manual intervention.

GitOps can increase a team's productivity, allowing them to deploy more frequently, automate rollbacks and remediate outages quickly and effectively.