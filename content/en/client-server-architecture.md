---
title: Client-Server Architecture
status: Completed
category: concept
tags: ["architecture", "", ""]
---

## What it is

In a client-server architecture, the logic (or code) that makes up an application is split between two or more components: 
a client that asks for work to be done 
(e.g. the Gmail web application running in your web browser), 
and one or more servers that satisfy that request 
(e.g. the "send email" service running on Google’s computers in the cloud). 
In this example, outgoing emails that you write are sent by the client (web application running in your web browser) 
to a server (Gmail's computers, which forward your outgoing emails to their recipients).

This contrasts with self-contained applications (such as desktop applications) that do all the work in one place. 
For example, a word processing program like Microsoft Word may be installed and run entirely on your computer.

## Problem it addresses 

A client-server architecture solves a big challenge self-contained applications pose: regular updates. 
In a self-contained app, for each update, users would have to download and install the latest version. 
Imagine having to download all of Amazon’s product catalog to your own computer before being able to browse it!

## How it helps

By implementing application logic in a remote server or service, 
operators can update that without needing to change the logic on the client-side. 
This means updates can be made much more frequently. 
Storing data on the server allows many clients to all see and share the same data. 
Consider the difference between using an online word processor, compared to a traditional offline word processor. 
In the former, your files exist on the server-side and 
can be shared with other users who simply download them from the server. 
In the legacy world, files needed to be copied to removable media (floppy disks!) and shared with individuals.
