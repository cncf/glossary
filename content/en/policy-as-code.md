---
title: Policy as Code (PaC)
status: Completed
category: concept
tags: ["methodology", "", ""]
---

Policy as Code is the practice of storing the definition of policies as one or more files in machine-readable and processable form. 
This replaces the traditional model where policies are documented in human-readable form in separate documents.

## Problem it addresses

Building applications and infrastructures are often constrained by many policies that an organization defines, 
e.g. security policies that forbid storing secrets in source code, running a container with superuser permissions, 
or storing some data outside a specific geo region.
It is very labor-intensive and error-prone for developers and reviewers to manually check applications and infrastructure against documented policies. 
Manual processes cannot meet the responsiveness and scale requirements of cloud native applications.

## How it helps

Describing policies through code enables repeatability and reduces errors (unlike when done manually). 
Another advantage of Policy as Code is that code can be managed by a version control system like Git.
Git creates a change log history which is particularly helpful when something does not work as expected.
It allows the user to determine who made the change and revert back to a previous version.  
