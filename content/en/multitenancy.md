---
title: Multitenancy
status: Feedback Appreciated
category: Property
---

## What it is

Multitenancy (often written as multi-tenancy) refers to the capability of a single software installation to serve multiple tenants.  A tenant in this context is a user, application, or a group of users / applications that use the software to operate on their own set of data, and this data is only shared with other tenants as explicitly instructed by the owner – or, more often, not at all.  

In other words, multitenant software provides each tenant with their own segregated environment (work data, settings, list of credentials etc), serving multiple tenants at the same time and in a way that for each tenant it looks and feels as if they use their own dedicated installation of the software.  To achieve that, the software runs on a server and provides a way for the tenants to connect to it over the network, offering them a user interface and/or an [API](https://glossary.cncf.io/application-programming-interface) (see [Client-Server Architecture](https://glossary.cncf.io/client-server-architecture)).

Typical and well-known examples of multitenant software are Google Mail, Google Docs, Microsoft Office 365, Salesforce CRM, Dropbox, with thousands more falling into this category fully or at least partially.

A tenant can be as small as just one user with a single login ID, completely independent of other users (as it is often the case with personal productivity software), or as large as an entire corporation with thousands of logins IDs each having their own privileges but interrelated in a multitude of ways. 

## Problem it addresses 

Multitenancy is a key to operational efficiency of server-run software.  Providing each tenant with a dedicated installation is wasteful in terms of hardware utilization and maintenance efforts.  

## How it helps

Multitenant software is designed in a way that tenants share the resources of one installation without affecting each other, or affecting only in predefined and controlled ways.  This results in huge savings for the software provider that can be passed on to the tenants, making services that would otherwise be very expensive much cheaper or even free (again, think web-based e-mail or document editors).

## Related terms

Multitenancy is not synonymous with [SaaS](https://glossary.cncf.io/software-as-a-service), although it is very common for SaaS to be multitenant and even to feature multitenancy as one of its core benefits.
