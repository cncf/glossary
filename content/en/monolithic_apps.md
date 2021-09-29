---
title: Monolithic Apps
status: Feedback Appreciated
category: concept
---

A monolithic application is one that contains all functionality in a single deployable program. This is often the simplest and easiest place to start when making an application, however, once the application grows in complexity, monoliths can become hard to maintain. Many developers will all need to be changing the same codebase, which increases the likelihood of conflicting changes, and increases the need for interpersonal communication between developers.

Devolving an application into microservices increases operational overhead, as there are more things to test, deploy, and keep running. Early in a product’s lifecycle it may be advantageous to defer this complexity and build a monolithic application until the product is determined successful.

A well-designed monolith can uphold lean principles, by being the simplest way to get an application up-and-running. When the business value of the monolithic application has been proven, action can be taken to decompose the monolith into microservices. Crafting an application as microservices before it is proven to be valuable, may be a premature spending of engineering effort, and if the application yields no value then that effort becomes waste.

