---
title: Multitenancy
status: Completed
category: Property
tags: ["architecture", "property", ""]
---

Multitenancy (or multi-tenancy) refers to a single software installation that serves multiple tenants.
A tenant is a user, application, or a group of users/applications that utilize the software to operate on their own data set.
These tenants don't share data (unless explicitly instructed by the owner) and may not even be aware of one another.

A tenant can be as small as one independent user with a single login ID — think personal productivity
software — or as large as an entire corporation with thousands of login IDs, each with its own privileges
yet interrelated in multiple ways. Multitenant software examples include Google Mail, Google Docs,
Microsoft Office 365, Salesforce CRM, and Dropbox, among many more that categorize as either entirely
or partially multitenant software.

## Problem it addresses

Without multitenancy, each tenant would need a dedicated software installation.
This increases resource utilization and maintenance efforts, ultimately software costs.

## How it helps

Multitenant software provides each tenant a segregated environment (work data, settings, list of credentials, etc.),
simultaneously serving multiple tenants. From a tenant's perspective, each has its dedicated software installation,
although, in reality, they are all sharing one. This is achieved by running the software on a server and allowing
tenants to connect to it over the network via an interface and/or an [API](/application-programming-interface/)
(also refer to [Client-Server Architecture](/client-server-architecture/)).
With multitenant software, tenants share the resources of one installation without affecting each other or only
in predefined and controlled ways. The resulting resource savings on the software provider's side can be passed
on to the tenants, significantly reducing the software cost for users (again, think web-based e-mail or document editors).

## Related terms

Multitenancy is not synonymous with SaaS,
although it is very common for SaaS to be multitenant and even to feature multitenancy as one of its core benefits.
