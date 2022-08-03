---
title: GitOps
status: Feedback Appreciated
category: Concept
tags: ["", "", ""]
---

## What it is

GitOps is a set of best practices based on [shared principles](https://opengitops.dev/), 
applied to a workflow that depends on software agents that 
enable automation to reconcile a declared system state or configuration in a git repository.
These software agents and practices are used to execute a cohesive workflow that 
leverages a source control system like Git as the “single source of truth” and 
extends this practice to applications, infrastructure, and operational procedures.

## Problem it addresses

Existing processes for infrastructure configuration management can face challenges 
such as configuration drift, failed deployments, relying on a system's previous state for success, 
missing documentation, or unknown development history.
Adopting a GitOps workflow can help alleviate these issues, among several others.

## How it helps

GitOps is a paradigm that can be applied to a workflow 
to help manage an application and cloud system infrastructure. 
It enables organizations several advantages 
such as better coordination, transparency, stability, and reliability of a system.
Operating in a close loop ensures the current live state of a system matches 
against the desired target state, specified in the git repository.
