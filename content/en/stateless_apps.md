---
title: Stateless Apps
status: Feedback Appreciated
category: technology
---

## What it is

A stateless application is a program that does not save client data generated during interaction with the user in one session, for use in the next session. An example for stateless application could be a calculator that always starts with zero without storing the calculations or data from before.

## Problem it addresses

Stateless applications tackle the problem of resiliency, because different pods across a [cluster](/cluster/) can work independently, with multiple requests coming to them at the same time. If there’s a problem, you can easily restart the application, and it will return to its initial state with little or no downtime. As such, the benefits of stateless applications include resiliency, elasticity, and high availability. However, most applications we use today are at least partly [stateful](/stateful_apps/), as they store things like preferences and settings to improve the user experience.

## How it helps

Boiling everything down, in a Stateless Application the only thing your cluster is responsible for is the code, and other static content, being hosted on it. That’s it, no changing databases, no writes and no left over files when the pod is deleted. Stateless [containers](/container/) are easier to deploy, and you don’t need to worry about saving container data on persistent storage volumes. You also don't have to worry about backing up the data.
