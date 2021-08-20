---
title: Stateful Apps
status: Feedback Appreciated
category: technology
---

## Stateful Apps

### What it is

Stateful apps save data to persistent disk storage for use by the server, by clients, and by other applications. The data that is saved is called the application’s state. An example of a stateful application is a database or key-value store to which data is saved and retrieved by other applications.

### Problem it addresses

Apps can be stateful or [stateless](stateless_apps.md). When an app is stateful, client data is either stored locally or on a remote host until the user logs out or the session expires after a predetermined time limit. The session data that is saved to persistent disk storage is accessible to the server, to the client and to other applications.

For example, your shopping cart while using any website in Cloud. Each time you select an item and add it in your cart, you add it with the items added previously and eventually, you navigate to the checkout page. For these reasons, stateful apps use the same servers each time they process a request from a user.

### How it helps

A web server does not retain information from multiple sessions, so when a state is needed for a web app, it must be built in. If desired, stateful features can be built in with dynamic pages. These pages can retain sessions by way of web address variables and server- and client-side stored data. Cookies are a common way such data is stored. The majority of applications we use day to day are stateful, but as technology advances, [microservices](microservices.md) and [containers](container.md) make it easier to build and deploy applications in the cloud.
