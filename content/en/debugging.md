---
title: Debugging
status: Feedback Appreciated
category: concept
---

## What it is
Debugging is the process or activity of finding and resolving bugs (or errors) from computer programs, software, or systems to get the desired result. A bug is a defect or a problem leading to incorrect or unexpected result.

## Problem it addresses
Developers write source code and create a binary file with external libraries to run it in production. If a bug is introduced during that process, the code will likely not function as desired (undefined behavior) when executed. To identify the source of the problem, developers have to review the code line-by-line. Catching errors is quite hard without context, i.e., variables, data, location in memory, etc.

## How it helps
Debugging tools use various debugging techniques to help developers identify bugs. How these tools are used depends on the development stage. Analysis of logs, traces, and metrics, for instance, are used for debugging directly in production without requiring program execution to stop. Developers use interactive debugging on the source code during the programming phase. By running the program and connecting an external debugger tool, developers control the flow of the program and instruct it to pause the execution at specific points where they suspect the error may happen; they usually get this information by reading the logs. Once they have identified the source of the failure, they can correct the code and create a bug fix or patch.
