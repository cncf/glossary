---
title: Microservices
status: Completed
category: concept
tags: ["architecture", "", ""]
---

## What it is

Microservices are a modern approach to application development that takes advantage of cloud native technologies. 
While modern applications, like Netflix, appear to be a single app, 
they are actually a collection of smaller services – all closely working together. 
For instance, a single page that allows you to access, search, and preview videos is likely 
powered by smaller services that each handle one aspect of it 
(e.g. search, authentication, and running previews in your browser). 
In short, microservices refer to an application architecture pattern 
usually contrasted with [monolithic applications](/monolithic-apps/).

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
