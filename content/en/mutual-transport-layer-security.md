---
title: Mutual Transport Layer Security (mTLS)
status: Completed
category: Concept
tags: ["security", "networking", ""]
---

Mutual TLS (mTLS) is a technique used to authenticate and encrypt messages sent between two [services](/service/). 
Mutual TLS is the standard [Transport Layer Security](/transport-layer-security/) (TLS) protocol but, 
instead of validating the identity of just one connection, both sides are validated.

## Problem it addresses

[Microservices](/microservices-architecture/) communicate over a network and, 
just like your wifi network, communication in transit over that network can be hacked. 
mTLS ensures that no unauthorized party can listen in on or impersonate legitimate requests.

## How it helps

mTLS ensures that traffic is secure and trusted in both directions between a client and server, 
providing an additional layer of security for users who log in to a network or applications. 
It also verifies connections with client devices that do not follow a login process, such as Internet of Things (IoT) devices. 
Attacks like on-path attacks, spoofing attacks, credential stuffing, brute force attacks, etc. can be prevented by mTLS.
