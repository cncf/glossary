---
title: GitOps
status: Feedback Appreciated
category: concept
---


## What it is
GitOps is a [set of principles](https://github.com/open-gitops/documents/blob/main/PRINCIPLES.md) for operating and managing software systems. In GitOps, environment specifics are defined, or "declared," in a repository with the application code — the system of record.

## Problem it addresses
Configuration management via YAML or JSON files often becomes unwieldy at scale. These files can grow exponentially, especially in large organizations with numerous developers and frequent code changes. Potential consequences include frequently failed deployments (e.g., usage of the incorrect config files), long and slow disaster recovery from system outages, lack of visibility into system workflows, reduced developer productivity, among other challenges.

## How it helps
A GitOps approach provides a complete history of how environments have been modified over time. Operators can easily revert to a previous state whenever an error is introduced because all configurations are stored in Git repositories. This approach allows organizations to increase team productivity, deploy more frequently, automate rollbacks, and remediate outages quickly and effectively.
