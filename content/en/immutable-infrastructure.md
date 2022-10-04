---
title: Immutable Infrastructure
status: Completed
category: property
tags: ["infrastructure", "", ""]
---

Immutable Infrastructure refers to computer infrastructure 
([virtual machines](/virtual-machine/), [containers](/container/), network appliances) 
that cannot be changed once deployed. 
This can be enforced by an automated process that overwrites unauthorized changes or 
through a system that won't allow changes in the first place. 
Containers are a good example of immutable infrastructure 
because persistent changes to containers can only be made by 
creating a new version of the container or recreating the existing container from its image.

By preventing or identifying unauthorized changes, 
immutable infrastructures make it easier to identify and mitigate security risks. 
Operating such a system becomes a lot more straightforward 
because administrators can make assumptions about it. 
After all, they know no one made mistakes or changes they forgot to communicate. 
Immutable infrastructure goes hand-in-hand with [infrastructure as code](/infrastructure-as-code/) 
where all automation needed to create infrastructure is stored in version control (e.g. Git). 
This combination of immutability and version control means that 
there is a durable audit log of every authorized change to a system.
