---
title: Monolithic Apps
status: Completed
category: concept
tags: ["architecture", "fundamental", ""]
---

## What it is

A monolithic application contains all functionality in a single deployable program. 
This is often the simplest and easiest place to start when making an application. 
However, once the application grows in complexity, monoliths can become hard to maintain. 
With more developers working on the same codebase, 
the likelihood of conflicting changes and the need for interpersonal communication between developers increases.

## Problem it Addresses

Devolving an application into [microservices](/microservices/) increases its operational overhead 
— there are more things to test, deploy, and keep running. 
Early in a product’s lifecycle, it may be advantageous to defer this complexity and build a monolithic application 
until the product is determined successful.

## How it Helps

A well-designed monolith can uphold lean principles by being the simplest way to get an application up and running. 
When the business value of the monolithic application proves successful, it can be decomposed into microservices. 
Crafting a microservices-based app before it has proven valuable may be premature spending of engineering effort. 
If the application yields no value, that effort becomes wasted.
