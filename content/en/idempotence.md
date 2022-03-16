---
title: Distributed Apps
status: Feedback Appreciated
category: concept
---

## What is it?

In terms of Maths or Computational science, Idempotence refers to a property where no matter how many times you execute some operations you achive the same outcome. The term "idempotent" in the world of IT refers to an operation that does not affect the application that it is called in, if it is called more than once with the same parameters.

## Problem it addresses

Idempotency is important in APIs because a resource may be called multiple times if the network is interrupted. In this scenario, non-idempotent operations can cause significant unintended side-effects by creating additional resources or changing them unexpectedly. When a business relies on the accuracy of its data, non-idempotency posts a significant risk.

## How it is solved

The question should be asked, then – if being idempotent results in the same form day in and day out, why can’t we just make everything idempotent? The problem is that sometimes, in some significant special cases, it is desirable for both the value and the form to change.

For example, POST is by definition something that results in a server state change and a change in expected form and value. If POST was idempotent, everything sent and accepted the web server would already have to exist on the server in some form to respond with the same codes and value response. For that reason, POST cannot be idempotent or safe – it defies the very purpose of the verbiage. The method itself hinges upon both changing resources and changing responses following each request.

The response, however, is the same – an error code that either says the item exists or does not, and whether or not it was deleted. No matter what function is done with DELETE, it should result in the same response, even if the value itself is different. Thus, we can see that even something that appears to be non-idempotent can, itself, be idempotent, solidifying the importance of truly grasping this conceptual definition.
