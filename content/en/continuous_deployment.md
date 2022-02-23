---
title: Continuous Deployment (CD)
status: Completed
category: concept
---

## What it is
Continuous Deployment, often abbreviated as CD, takes the process one step further than continuous delivery. Here all the changes that pass the verification steps at each stage in the pipeline are released to production. This process is completely automated and only a failed verification step will prevent pushing the changes into production.

## Problem it addresses
"Nobody touch production – I'm about to release!"

That phrase may be familiar to you. Deploying to production can be a risky and costly exercise that sometimes requires putting all development on hold. This causes release cycles to be slow and changes to stagnate in the development environment. It's the start of an awkward (and vicious) circle in which the more commits are made to the repository, the more risks get introduced into the next deployment to production, and the less likely your team is to make that release.

## How it helps
Continuous deployment solves this problem by automatically shipping every change pushed to the main repository to production. It's a radical approach – very different from spending days preparing and controlling each release – but there are several benefits to continuous deployment:

1. Releases become smaller and easier to understand.
2. No one is required to drop their work to make a deployment because everything is automated. 
3. The feedback loop with your customers is faster: new features and improvements go straight to production when they're ready.