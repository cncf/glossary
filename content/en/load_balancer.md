---
title: Load Balancer
status: Feedback Appreciated
category: concept
---
## What it is

A load balancer is a way to distribute incoming user requests among multiple instances of an application. The solution can be software or hardware based.

## Problem it addresses

Suppose a person starts a business and builds a website. Initially, the number of people visiting their site would be less hence the speed with which the server(a computer that sends some information in response to a user’s request) serves the website would be optimal. Now the person invests in some marketing and their business starts to grow. This would result in an increased number of users visiting their website (probably from all around the globe). One server might not be enough to handle the increased number of requests. And would result in a slower website and frequent crashing of the server. One would have to add more servers to handle these many requests. But what if one of the servers goes down, what happens to the users it was serving? There was no way of keeping a check on these situations.
All this would eventually result in users drifting away from the website, affecting the business and the expensive cost of maintenance of servers.

## How it helps

Adding a load balancer will help in distributing the requests among the multiple servers in a way that would maximize the website's speed and ensure that no server is overworked. If any of the servers goes down, the load balancer will redirect the requests to other working servers. Also in case of [horizontal scaling](/horizontal_scaling/), it would automatically start sending the requests to the new server.
<<<<<<< HEAD

=======
>>>>>>> 420cff9ebeffbd619e4236504e30c2b7a05998c6
