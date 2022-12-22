---
title: Policy as Code (PaC)
status: Feedback Appreciated
category: concept
tags: ["methodology", "", ""]
draft: true
---

## What it is

Policy as Code is the practice of storing the definition of policies as one or more files in machine-readable and processable form. 
This replaces the traditional model where policies are documented in human-readable form in separate documents.

## Problem it addresses

Building applications and infrastructures are often constrained by many policies that an organization defines, e.g., security policies that forbid storing secrets in source code, running a container with superuser permissions, or storing some data outside a specific geo region.
It is very labor-intensive and error-prone for developers and reviewers to manually check applications and infrastructure against documented policies. 
Manual processes cannot meet the responsiveness and scale requirements of cloud native applications.

## How it helps

Using Policy as Code makes it possible to automate the checking of system properties and actions.
It also helps implement software development best practices, such as using Git and associated workflows.
