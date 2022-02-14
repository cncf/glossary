---
title: Stateless Apps
status: Feedback Appreciated
category: technology
---

## What it is

When we speak of stateless (and [stateful](https://glossary.cncf.io/stateful_apps/)) apps, state refers to any data the app needs to store to function as designed. Stateless apps, as the name suggests, neither read nor store state information. 
 Example:
 Search engine (incognito mode): Doing a search online to answer a question you’ve thought of. You type your question into a search engine and hit enter. You got the answer you are looking for. While reading accidentally refreshed or closed. When you open it again everything will be new. To find the answer have to search again.
 


## Problem it addresses

 Have you ever wondered? The dress/mobile you have browsed on a shopping website will pop up as an advertisement while browsing different sites even after closing the shopping site. Because your data is stored in a tool called cookie. Cookies are a tool for remembering you as a person. Every action including items you’ve viewed, an article you’ve read, posts you’ve liked will all be collected as data. 

These allow third-party advertisers and websites to assemble a deep and permanent profile of visitors' web browsing habits without your consent. Websites and third parties can also change and share more information such as sharing emails and phone numbers.

So, here comes the Stateless apps which do not store any of your data. Hence your privacy is maintained.  (Stateless applications tackle the problem of resiliency) If you are stuck at some point while doing some operations you can easily restart the application, and it will return to its initial state with little or no downtime.

## How it helps

Stateless Protocols/apps works better at the time of crash or accidentally if your application is closed because there is no state that must be restored, a failed server can simply restart after a crash. hence you don’t have to worry about backing up the data if an application/server crashes.