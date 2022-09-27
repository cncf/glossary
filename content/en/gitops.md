---
title: GitOps
status: Completed
category: Concept
tags: ["methodology"]
---

## What it is

GitOps is a set of best practices based on [shared principles](https://github.com/open-gitops/documents/blob/release-v1.0.0/PRINCIPLES.md), applied to a workflow that depends on software agents to continuously and automatically reconcile an actual running system with its desired state declared in an immutably versioned state store like Git.
These software agents and practices are used to execute a cohesive workflow and extends this practice to applications, infrastructure, and operational procedures.

## Problem it addresses

Existing processes for infrastructure configuration management – including scripting and tightly coupled CI/CD – are often error prone and can face challenges such as configuration drift, failed deployments, relying on a system's previous state for success, missing documentation, or unknown development history.
Event driven CD does not address drift that may happen independently of CI.
Giving external automation tools credentials to your production systems widens the attack footprint.
Adopting a GitOps workflow can help alleviate these issues, among several others.

## How it helps

The GitOps paradigm can be applied to a workflow to help manage applications and cloud system infrastructure. 
It enables organizations several advantages such as better coordination, transparency, stability, and reliability of a system, and faster mean time to recovery.
Direct access to desired state store and continuous reconciliation allows GitOps agents to ensure the current live state of a system matches the desired target state, regardless of when or how any system failure or drift between the two may occur.
Using GitOps for CD improves security by separation of duty between CI and CD, where CI no longer needs credentials to your live system.
