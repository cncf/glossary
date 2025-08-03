---
title: Kubernetes Operator
status: Completed
category: concept
tags: ["infrastructure"]
---

A Kubernetes Operator is a helper program that runs inside a Kubernetes cluster 
and extends its capabilities without modifying the core code, 
enabling the automated installation and management of complex applications and resources.

## Problem it addresses

When we want to run a complex [stateful](/stateful-apps/) application like a database cluster for instance, 
we need to take care of a lot of operational tasks in order to keep it up and running. 
This is especially true for properties like the high availability and the zero downtime. 
How does the cluster behave in case of an update or failure? 
How can we securely scale it up or down? 
These are things that are very specific to the type of technology, 
because not every database cluster for instance behaves the same way in case of scaling or failure. 
That is why Kubernetes cannot provide a general handling of these scenarios. 
Also, this knowledge is usually known and executed by a human administrator or also called operator.  
But in the highly automated cloud native world we cannot always afford to be dependent on manual interactions of a person to do these critical operations. 

## How it helps

The Kubernetes Operator is basically an abstraction, a model, 
that allows us to build resources that can be used to help us with the above mentioned problems. 
Typically, existing operators provide a set of new resources - known as CRDs (Custom Resource Definition) - 
as well as components that are responsible for keeping the actual state of the cluster in sync with the desired state. 
If we take a database cluster operator for instance, 
these components know exactly how to scale this cluster up and down 
and what to do if it crashes etc. 
This way we don't need to be experts in that specific technology in order to use it in our Kubernetes cluster and make use of scaling or other specific features. 

## Related terms

* [Stateless applications](/stateless-apps/)
* [Stateful applications](/stateful-apps/)
* [Clusters](/cluster/)