---
title: gRPC
status: Completed
category: technology
tags: ["networking", ""]
---

[gRPC](https://grpc.io/) is a way for different programs to talk to each other over a network.
Think of it like a phone system where one program can call another and request information or ask it to do something.
Unlike older methods that send messages as text (which is slow and uses more data), 
gRPC sends messages in a compact format that computers can read faster.

## Problem it addresses

When programs need to share information frequently, sending text-based messages back and forth can be slow.
Imagine sending a detailed letter every time you need to ask a simple question—it takes time to write, send, and read.
This becomes a bigger problem when you have many programs working together, 
each needing quick answers from the others.

Additionally, when different programs are built using different programming languages, 
they need a common way to understand each other.
Without clear rules for how they should communicate, errors and misunderstandings can occur.

## How it helps

gRPC solves this by using a compact format to send information, 
which is faster to transmit and process.
It also lets you define once how programs should talk to each other, 
and then for various programming languages the protocol supports automatically creates the necessary code.

gRPC allows programs to send and receive information at the same time, 
like having a conversation instead of exchanging letters.
For example, in a ride-sharing app, 
a driver's phone can continuously send location updates 
while receiving new passenger requests and route changes.
