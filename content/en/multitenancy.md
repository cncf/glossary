---
title: Multitenancy
status: Feedback Appreciated
category: Property
---

## What it is

Multitenancy (also commonly spelled multi-tenancy) refers to a single software installation that serves multiple tenants. A tenant is a user, application, or a group of users/applications that utilize the software to operate on their own data set. These tenants don't share data (unless explicitly instructed by the owner) and may not even be aware of one another.  

In other words, multitenant software provides each tenant with its segregated environment (work data, settings, list of credentials, etc.), simultaneously serving multiple tenants. From a tenant's perspective, each has its dedicated software installation, although, in reality, they are all sharing one. This is achieved by running the software on a server and allowing tenants to connect to it over the network via an interface and/or an [API](/application-programming-interface/) (also refer to [Client-Server Architecture](/client-server-architecture/)).

Typical and well-known examples of multitenant software are Google Mail, Google Docs, Microsoft Office 365, Salesforce CRM, Dropbox, with thousands more falling into this category fully or at least partially.

A tenant can be as small as just one user with a single login ID, completely independent of other users (as it is often the case with personal productivity software), or as large as an entire corporation with thousands of logins IDs each having their own privileges but interrelated in a multitude of ways. 

## Problem it addresses 

Multitenancy is a key to operational efficiency of server-run software.  Providing each tenant with a dedicated installation is wasteful in terms of hardware utilization and maintenance efforts.  

## How it helps

Multitenant software is designed in a way that tenants share the resources of one installation without affecting each other, or affecting only in predefined and controlled ways.  This results in huge savings for the software provider that can be passed on to the tenants, making services that would otherwise be very expensive much cheaper or even free (again, think web-based e-mail or document editors).

## Related terms

Multitenancy is not synonymous with [SaaS](https://glossary.cncf.io/software-as-a-service), although it is very common for SaaS to be multitenant and even to feature multitenancy as one of its core benefits.
