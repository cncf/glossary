---
title: Policy as Code (PaC)
status: Feedback Appreciated
category: concept
tags: ["", "", ""]
---

## What it is

Policy as Code is the practice of storing the definition of policies as one or more files in machine readable and processable form. 
This replaces the traditional model where policies are documented in human-readable form, in separate documents.

## Problem it addresses

Building applications and infrastructures is often constrained by a lot of policies, that are defined by an organization, 
e.g. security policies that forbid to store secrets in source code, 
to run a container with superuser permissions, or to store some data outside a specific geo region. 
It is very labor-intensive and error-prone for developers and reviewers to 
manually check applications and infrastructure against documented policies. 
Manual checking against policies cannot meet the responsiveness and scale requirements of cloud native applications.

## How it helps

By using Policy as Code it is possible to automate the checking of system properties and actions. 
Best practices of software development can be applied to Policy as Code authoring, 
e.g. by using Git and associated workflows. 
