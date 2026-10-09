---
title: Telemetry
status: Feedback Appreciated
category: concept
tags: ["methodology", "", ""]
---

Telemetry is the automated collection and transmission of data about a system's behavior and performance.
This data commonly includes logs, metrics, and traces, often called the three pillars of [observability](/observability/).
Systems emit telemetry continuously so operators and developers can understand how they are running without inspecting them directly.

## Problem it addresses

Modern applications run across many machines and services that change frequently.
It is not practical to inspect each component by hand to find out whether it is healthy, slow, or failing.
Without a steady stream of information about how a system behaves, problems stay hidden until users notice them.

## How it helps

Telemetry gives operators a steady, machine-readable view of a running system.
It lets them detect failures, diagnose performance issues, and understand how users experience the system.
Because telemetry is collected automatically and continuously, it supports monitoring, alerting, and [debugging](/debugging/) without requiring direct access to every component.

## Related terms

- [Observability](/observability/)
- [Debugging](/debugging/)
- [Distributed System](/distributed-systems/)
