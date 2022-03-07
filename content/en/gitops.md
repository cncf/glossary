---
title: GitOps
status: Feedback Appreciated
category: Concept
---


## What it is
Let's start with DevOps and then move on to GitOps. 
**DevOps** is a set of methods that automate and integrate processes between development and operations teams. 
**GitOps** includes the involvement of a version-control system **Git** which increases the security and efficiency by many folds.

GitOps is a set of best practices based on [shared principles](https://opengitops.dev/) that are applied to a workflow that relies on software agents to automate the reconciliation of a declared system state or configuration in a git repository that stores the software's code.

It integrates operations such as Git deployment, management, and monitoring for containerized clusters and softwares.

The Git repository for the project stores the entire state of the system, making the history of system changes visible and editable.

These software agents and practices are used to execute a cohesive workflow that leverages a source control system like Git as the "single source of truth" and extends this practice to applications, infrastructure, and operational procedures.



## Problems it addresses
- Git eliminates the need of relying on previous software state for successful deployment.
- Failure of Deployment.
- Missing Documentation.
- Having Unknown Libraries.

 Implementing a GitOps workflow can help solve these problems, as well as a bunch of others.

## How it helps

- Git’s **Strong correctness and Security** tracks and manages each change in the state.
- GitOps's single model for making infrastructure, apps and Kubernetes provides **Consistency and Standardization**.
- Using GitOps allows you to **deploy faster** and **more frequently**. GitOps has been shown to increase deployment output by up to two to three times.
- As Git provides the complete history, error recovery only needs a **Git Revert**.
- Git provides an audit trail of who did what, thus **increasing stability**.

