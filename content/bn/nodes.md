---
title: Nodes
status: Completed
category: Concept
tags: ["infrastructure", "fundamental", ""]
—

title: নোড
status: Completed
category: ধারাবাহিক বিষয়
tags: ["প্রকৌশলী", "মৌলিক", ""]



## What it is

A node is a computer that works in concert with other computers, or nodes, to accomplish a common task. 
Take your laptop, modem, and printer, for example. 
They are all connected over your wifi network communicating and collaborating, each representing one node. 
In [cloud computing](/cloud-computing/), a node can be a physical computer, 
a virtual computer, referred to as a [VM](/virtual-machine/), or even a [container](/container/).


এটি কি
একটি নোড হল একটি কম্পিউটার, যা অন্য কম্পিউটার বা নোডগুলির সঙ্গে সহযোগিতা করে একটি সাধারণ কাজ সম্পাদন করে। যেমন আপনার ল্যাপটপ, মোডেম এবং প্রিন্টার। তারা সমস্ত একটি নোডকে প্রতিনিধিত্ব করে ওয়াইফাই নেটওয়ার্কের মাধ্যমে সংযোগ করে সম্পাদনা করে এবং সহযোগিতা করে। [ক্লাউড কম্পিউটিং] (/cloud-computing/) এ, একটি নোড হতে পারে একটি ফিজিক্যাল কম্পিউটার, [ভার্চুয়াল মেশিন] (/virtual-machine/) নামে উল্লেখ করা একটি ভার্চুয়াল কম্পিউটার বা এমন একটি [কন্টেনার] (/container/) হতে পারে।


## Problem it addresses

While an application could (and many do) run on one single machine, there are some risks involved with that. 
Namely that the failure of the underlying system will disrupt the application. 
To address this, developers started creating [distributed applications](/distributed-apps/) where each process runs on its own node. 
Thus, nodes run apps or processes as part of a group forming a [cluster](/cluster/), or group, of nodes that works together to achieve a common goal.

একটি অ্যাপ্লিকেশন একটি একক মেশিনে চলতে পারে এবং অনেকেই একটি একক মেশিনে চলে। কিন্তু এটিতে কিছু ঝুঁকি রয়ে গেছে। যার মধ্যে উপস্থিত সিস্টেমের বিফলতা অ্যাপ্লিকেশনটি বিচ্ছিন্ন করবে।
এই সমস্যাগুলি সমাধান করতে, উন্নয়কারীরা distributed applications তৈরি করতে শুরু করেছেন যেখানে প্রতিটি প্রক্রিয়া নিজের নোডে চালিত হয়। এই ভাবে নোডগুলি একটি cluster বা গ্রুপ হিসাবে কাজ করে একটি সাধারণ লক্ষ্য অর্জন করতে।

## How it helps

A node gives you a distinct unit of compute (memory, CPU, network) that you can assign to a cluster. 
In a [cloud native](/cloud-native-tech/) platform or app a node represents a single unit that can perform work. 
Ideally, individual nodes are undifferentiated in that 
any one node of a particular type is indistinguishable from any other node of the same type.

সে কেন সহায়তা করে
একটি নোড আপনাকে একটি ক্লাস্টারে বরাদ্দ করা যেতে পারে একটি পৃথক কম্পিউটিং ইউনিট (মেমরি, সিপিইউ, নেটওয়ার্ক) দেয়।
একটি ক্লাউড নেটিভ প্ল্যাটফর্ম বা অ্যাপ্লিকেশনে একটি নোড একটি কর্মক্ষম ইউনিট প্রদর্শন করে।
আশাকরি, ব্যক্তিগত নোডগুলি বিভিন্নতা দেখায় না যে একটি নির্দিষ্ট ধরনের একটি নোড অন্য ধরনের যেকোন অন্য নোড থেকে পৃথক হতে পারে।

