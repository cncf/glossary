---
title: Stateless Apps
status: Feedback Appreciated
category: Property
---
## Stateless Apps

### What it is

A stateless application doesn’t save any client session (state) data on the server where the application lives. Instead, it stores all data on the back-end database or externalizes state data into the caches of clients that interact with it. In web applications, stateless apps can behave like stateful ones. By using a Representational State Transfer (REST) API, developers can augment HTTP to make stateless apps to produce stateful behavior. An example of this would be your username appearing in a website navbar following a successful login. This stateful behavior is possible because of a session identifier (typically a cookie) that the client saves on its own system. 

### Problem it Addresses 

Stateless applications tackle the problem of resiliency, because different pods across a cluster can work independently, with multiple requests coming to them at the same time. If there’s a problem, you can easily restart the application, and it will return to its initial state with little or no downtime. As such, the benefits of stateless applications include resiliency, elasticity, and high availability. However, most applications we use today are at least partly stateful, as they store things like preferences and settings to improve the user experience.

### How it Helps

Boiling everything down, in a Stateless Application the only thing your cluster is responsible for is the code, and other static content, being hosted on it. That’s it, no changing databases, no writes and no left over files when the pod is deleted. Stateless containers are easier to deploy, and you don’t need to worry about saving container data on persistent storage volumes. You also don't have to worry about backing up the data.
