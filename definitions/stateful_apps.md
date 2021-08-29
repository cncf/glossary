---
title: Stateful Apps
status: Completed
category: Concept
---
## Stateful Apps

### What it is

In [Client-Server Architecture](https://github.com/cncf/glossary/blob/main/definitions/client_server_architecture.md), a client initiates a session on the server and then invokes a series of service calls to the server, and finally exits the session.
 
An application designed on Client-Server Architecture is considered to be Stateful when the server remembers the state and uses this information to process for further incoming requests.
 
"State" refers to any changeable condition, including the results of internal operations, interactions with other applications or services, user-set preferences, environment variables, the contents of memory or temporary storage, or files opened, read from, or written to.

### Problem it addresses

A lot of the applications that we encounter on a day-to-day basis are at least somewhat stateful. For example, they can store authentication state, setting preferences, keep track of window size and location, and recent activity. A stateful application needs fewer network calls when contrasted with stateless applications.

Stateful applications and the data they contain are common in most organizations. Being able to support data-driven applications with Kubernetes enables more organizations to take advantage of containers for modernizing their legacy apps as well as for supporting additional mission-critical use cases which are often stateful.

### How it helps

A well-functioning stateful application can handle long-running connections and stores the context and history, which allows the server to process client requests faster, thereby making stateful applications faster in general. When a stateful application is interrupted, as the context and history are stored, so we can pick up where we left off with ease.
 
If your application needs to retain state information to do what it’s supposed to do, stateful is the only option. However, the stateful application makes the server complex and also throws challenges around scaling.
