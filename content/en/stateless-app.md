---
title: Stateless Apps 
status: Completed
category: concept
tags: ["fundamental","application", ""]
---

## What it is
We must first understand what a state is in order to comprehend what it means to be stateless. 
The status quo or present state of an application at a particular time is described by its state.
A stateless application is one that does not retain records of previously carried out transactions or processes. 
As a result, it is clear that each process is done independently. 


## Problem it addresses
Stateless applications address the issue of non-dependency.
When applications do not have to keep track of previous knowledge
then they can perform their operations in isolation. 
A stateful app, for instance, mandates that the server log
the attempt to request a banking web page from the user
as well as any subsequent activity. 
Because the entire process is contained within a single session,
every step or operation must be redone
in the event of a network failure in order to continue where the user left off.
A stateless app, in contrast to stateful ones, 
makes use of authentication tokens
rather than keeping account of each action the user takes on the web page.
By using authentication tokens, 
the client and server communication is not reliant on a single session.


## How it helps
Horizontal scalability—the process of adding extra physical machines to your infrastructure 
to handle growing demand—is made possible by
the fact that applications can carry out their functions independently.
This is so that, in the event of a server failure, 
the components of a stateless program can be redeployed to another server.
Additionally, since the programs are running independently, 
an Application Programming Interface, or API, 
can be developed to connect the independently running components.


