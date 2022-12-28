---
title: Microservices Architecture 
status: Completed
tags: ["architecture", "fundamental", ""]
---

## What it is

A microservices architecture is an architectural approach that breaks applications into individual, independent (micro)[services](/service/) — all closely working together, appearing to the end user as a single entity. 
Take Netflix as an example. 
Its interface allows you to access, search, and preview videos. 
These capabilities are likely powered by smaller services that each handle one aspect, e.g., authentication, search, and running previews in your browser. 

This architectural approach allows developers to push out new features or update functionality much faster than if they were all tightly coupled, such as in a [monolithic application](/monolithic-apps/) (more to that below).

## Problem it addresses

Microservices are a response to challenges posed by monolithic applications. 
Generally, different parts of an application will need to be [scaled](/scalability/) separately. 
An online store, for example, is going to have more product views than checkouts. 
That means you'll need more copies of the product view functionality running than the checkout. 
In a monolithic application, those bits of logic can't be deployed separately. 
If you can't scale the product functionality individually, 
you'll have to duplicate the entire app with all other components you don't need – an inefficient use of resources.
Monolithic applications also make it easy for developers to succumb to design pitfalls. 
Because all the code is in one place, it is easier to make that code [tightly-coupled](/tightly-coupled-architectures/) and 
harder to enforce the principle of separation of concerns. 
Monoliths often require developers to understand the entire codebase before they can be productive.

## How it helps

Separating functionality into different microservices makes them easier to deploy, update, and scale independently. 
By allowing different teams to focus on their own small part of a bigger application 
you also make it easier for them to work on their apps without negatively impacting the rest of the organization.
While microservices solve many problems, they also create operational overhead 
— the things you need to deploy and keep track of increase by order of magnitude or more. 
Many [cloud-native technologies](/cloud-native-tech/) aim to make microservices easier to deploy and manage.
