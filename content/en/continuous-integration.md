---
title: Continuous integration (CI)
status: Completed 
category: concept
tags: ["application", "methodology", ""]
---

Continuous integration, often abbreviated as CI, is the practice of integrating code changes as regularly as possible. 
CI is a prerequisite for [continuous delivery](/continuous-delivery/) (CD). 
Traditionally, the CI process begins when code changes are committed to a source control system (Git, Mercurial, or Subversion) 
and ends with a tested artifact ready to be consumed by a CD system. 

## Problem it addresses

Software systems are often large and complex, with numerous developers maintaining and updating them. 
Working in parallel on different parts of the system, 
these developers may make conflicting changes and inadvertently break each other’s work. 
Additionally, with multiple developers working on the same project, 
any everyday tasks such as testing and calculating code quality would need to be repeated by each developer, wasting time.

## How it helps

CI software automatically checks that code changes merge cleanly whenever a developer commits a change. 
It's a near-ubiquitous practice to use the CI server to run code quality checks, tests, and even deployments. 
As such, it becomes a concrete implementation of quality control within teams. 
CI allows software teams to turn every code commit into either a concrete failure or a viable release candidate.

## Related terms

* [Continuous Delivery](/continuous-delivery/)
* [Continuous Deployment](/continuous-deployment/)
