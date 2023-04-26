---
title: Role-Based Access Control (RBAC)
status: Completed
category: concept
---

## What it is

Role-based access control (RBAC) is a method to regulate system and resource access based on individual user roles within an organization.
Each job function has a specific role and permissions. 
For instance, a marketing team member may have permission to view sales deals in the pipeline (*read* permission) but won't be allowed to edit them (*write* permission). 
Sales and marketing have different permissions based on their roles, hence role-based access control, and the same applies to roles within engineering teams. 

## Problem it addresses

Individually managing access permissions of multiple users across various system resources and data can be complex.
After all, each user likely needs access to a different set of resources. 
Let's say an organization has 500 developers (users) and 300 resources with varying permission levels (read, write, and no access). The administrator must ensure each user has the correct permissions for all 300 resources.  
RBAC simplifies the process by providing predefined access control based on role groups.


## How it helps

RBAC provides granular control over user permissions within software systems. 
Depending on their roles, team members can modify a section, only view it, or have no access at all. 
This granular permission allocation allows team members with different roles to work on the same system while minimizing risk.
