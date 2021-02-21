---
title: Microservices
status: Feedback Appreciated
category: concept
---
## Microservices

Microservices is an architectural approach where an application is broken down into multiple smaller components, or microservices. Each microservice does some work when requested, and also has a well-defined single responsibility. A legacy online store might be deployed as one large application (pejoratively referred to as a “monolith”) that handles baskets, customers, inventory and checkouts. By contrast a Microservices-based system would separate each of these functions out into individual Microservices - so a ‘Basket Microservice’, ‘Customer Microservice’ and so on. 

Different parts of an application may need to be scaled separately - for instance in an online store there are going to be many more product views than checkouts, and so we may need to have more copies of the product logic running than the checkout logic. In a monolithic application, we can’t deploy those bits of logic separately, and instead we have to duplicate the entire app, which leads to inefficient use of resources. In addition, we cannot update only the product logic without also updating the checkout logic. This dependency forces us into big batches of change, which are riskier.

Monolithic applications also make it easy for developers to succumb to design pitfalls. Because all the code is in one place, it is easier to make that code tightly-coupled and harder to enforce the principle of separation of concerns.

Separating areas of functionality into different Microservices makes it easier to deploy, update and scale them independently. Storing each Microservice in its own source code repository also means that it is harder for developers to entangle unrelated areas of functionality, ensuring that they can remain independent. Whilst Microservices solve many problems, they create operational overhead in that the number of things to deploy and keep track of increases by an order of magnitude or more. Many cloud-native technologies aim to make Microservices easier to deploy and manager.

