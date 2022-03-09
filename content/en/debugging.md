---
title: Debugging
status: Feedback Appreciated
category: concept
---

## What it is
Debugging is the process or activity of finding and resolving bugs (or errors) from computer programs, software, or systems to get the desired output. A bug is a defect or a problem leading to incorrect or unexpected output.

## Problem it addresses
Developers will build the source code, create a binary file including external libraries to run it into production. They will execute it and search for errors that affect the program, which will likely not function as desired (undefined behavior). To identify the source of the problem, developers have to review the code line-by-line. Catching errors is quite hard without context, i.e., variables, data, location in memory, etc.

## How it helps
Debugging techniques provide developers with different ways of finding bugs using special debugging tools. The usage of this tool depends on the stages of development. Analysis of logs, traces, and metrics is used for debugging directly in production without stopping the program's execution. During the programming phase, developers can use interactive debugging now on the source code. By running the program and connecting an external debugger tool, developers can control the flow of the program and instruct it to pause the execution at specific points where they suspect the error may happen; they usually get this information by reading the logs. They can understand the reason for the failure, correct the source code and create a bug fix or patch.
