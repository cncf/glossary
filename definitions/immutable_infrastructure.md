---
title: Immutable Infrastructure
status: Feedback Appreciated
category: concept
---
## Immutable Infrastructure

**Status:** Feedback Appreciated

Immutable Infrastructure is computer infrastructure (virtual machines, containers, network appliances) that cannot be changed once it has been deployed. This may be effectively immutable in the sense that unauthorised changes are overwritten by an automated process, or more strongly immutable in the sense that changes cannot be made in the first place. Some systems will use characteristics of the deployment infrastructure to identify elements that have diverged, and present these in a report to operators.

Security and compliance can be undermined by administrators making changes to running production systems. Often this is necessary for debugging live problems, but in the hands of undisciplined operators it can present an environment where no assumptions can be made about the state of the system, and even worse, no audit history is available. 

By preventing or identifying unauthorised changes, immutable infrastructure makes it easier to identify and mitigate security risks. It aids operability by ensuring that administrators can make given assumptions about a system, knowing that no-one else has made changes that they’ve forgotten to communicate. Immutable Infrastructure often goes hand-in-hand with Infrastructure-as-Code, wherein all automation that leads to the creation of infrastructure is stored in version control (eg Git). This combination of immutability and version control means that there is a durable audit log of every authorised change to a system.

