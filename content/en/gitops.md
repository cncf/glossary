---
title: GitOps
status: Completed
category: Concept
tags: ["methodology", "", ""]
---

GitOps is a set of practices for managing software applications and infrastructure by continuously evaluating 
and reconciling their desired states as defined in a version control system such as Git against their actual state. 
Reconciling states includes changing the resources to match the defined state via deployment or updates.

In GitOps, the state or configuration of a system is fully described in files stored in the source of truth, usually the version control system. 
It could, however, be another source of truth, such as a Kubernetes Operator or Artifact Storage.
The source of truth is evaluated by the automated processes that align the live system with the defined state. 
These processes adjust the live system as needed, ensuring consistency across applications, infrastructure, and operational tasks.

## Problem it addresses

Traditional approaches to managing infrastructure and application configurations can result in configuration drift, failed deployments, inconsistent environments, deployment failures, and difficulty tracking historical changes.
These issues can cause instability and increase maintenance overhead.
Configuration drift can be hard to detect and resolve without a source of truth governing it, increasing the time to resolve outages or failures. 

## How it helps

GitOps helps organizations manage the entire infrastructure, application development, and deployment lifecycle using a single and unified process.

GitOps brings organizations several other advantages, such as transparency and traceability of changes, reliability 
and security through declarative states, and rollback, revert, and self-healing attributes.
