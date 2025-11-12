---
title: gRPC
status: Completed
category: concept
tags: [methodology, network]
---

[gRPC](https://grpc.io/) is a modern, open-source, high-performance Remote Procedure Call (RPC) framework that can run in any environment. 
It uses HTTP/2 for transport, Protocol Buffers (protobuf) for interface definition and serialization, and provides features such as bi-directional streaming, flow control, header compression, and multiplexing.

## Problem it solves?

gRPC addresses common [distributed-systems](/distributed-systems/) challenges such as inefficient text-based payloads, inconsistent service contracts across languages, limited streaming support, and high-latency multiplexing over HTTP/1.1. 
It also reduces boilerplate by generating code from a single source of truth.
In modern [microservices architectures](/microservices-architecture/), these issues become critical as services frequently communicate with each other. 
gRPC offers a consistent, high-performance way for services written in different languages to interoperate, without relying on verbose REST/JSON payloads or inconsistent APIs.


## How it helps

Protocol Buffers provide compact and efficient binary serialization, which reduces payload size and CPU usage. Leveraging HTTP/2 enables multiplexed requests, lower latency, and native support for client, server, and bidirectional streaming. Generated client and server code enforce a single source of truth for service contracts, reducing integration errors and development overhead.  

For **microservices**, gRPC simplifies service-to-service communication and scales well in polyglot environments. 
Its **bi-directional streaming** makes it suitable not just for request/response patterns but also for real-time event-driven use cases such as log aggregation, IoT telemetry, or live data pipelines. 
While it is not a replacement for [event streaming](./event-streaming.md) platforms like Kafka, gRPC often complements them by providing fast, low-latency RPC communication at the service layer.  

Built-in primitives such as deadlines, metadata, and interceptors support robust, production-grade communication across heterogeneous environments.
