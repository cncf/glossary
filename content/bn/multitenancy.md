---
title: বহু মালিকানা (Multitenancy)
status: Completed
category: সম্পত্তি
tags: ["architecture", "property", ""]
---

## এটা কি

Multitenancy (or multi-tenancy) refers to a single software installation that serves multiple tenants.
মাল্টিটেন্যান্সি (বা মাল্টি-টেনেন্সি) একটি একক সফ্টওয়্যার ইনস্টলেশনকে বোঝায় যা একাধিক ভাড়াটেদের পরিষেবা দেয়।
A tenant is a user, application, or a group of users/applications that utilize the software to operate on their own data set.
ভাড়াটে হল একজন ব্যবহারকারী, অ্যাপ্লিকেশন, বা ব্যবহারকারী/অ্যাপ্লিকেশনের একটি গোষ্ঠী যারা তাদের নিজস্ব ডেটা সেটে কাজ করার জন্য সফ্টওয়্যারটি ব্যবহার করে।
These tenants don't share data (unless explicitly instructed by the owner) and may not even be aware of one another.
এই ভাড়াটেরা ডেটা ভাগ করে না (যদি না মালিকের দ্বারা স্পষ্টভাবে নির্দেশ দেওয়া হয়) এবং এমনকি একে অপরের বিষয়ে সচেতন নাও হতে পারে।

A tenant can be as small as one independent user with a single login ID — think personal productivity software — or as large as an entire corporation with thousands of login IDs, each with its own privileges yet interrelated in multiple ways. 
একজন ভাড়াটিয়া একটি একক লগইন আইডি সহ একজন স্বাধীন ব্যবহারকারীর মতো ছোট হতে পারে — মনে করুন ব্যক্তিগত উত্পাদনশীলতা সফ্টওয়্যার — বা হাজার হাজার লগইন আইডি সহ একটি সম্পূর্ণ কর্পোরেশনের মতো বড়, প্রতিটির নিজস্ব বিশেষাধিকার থাকলেও একাধিক উপায়ে আন্তঃসম্পর্কিত।
Multitenant software examples include Google Mail, Google Docs, Microsoft Office 365, Salesforce CRM, and Dropbox, among many more that categorize as either entirely or partially multitenant software.
মাল্টিটেন্যান্ট সফ্টওয়্যার উদাহরণগুলির মধ্যে রয়েছে গুগল মেইল, গুগল ডক্স, মাইক্রোসফ্ট অফিস 365, সেলসফোর্স সিআরএম এবং ড্রপবক্স, যা সম্পূর্ণ বা আংশিকভাবে মাল্টিটেন্যান্ট সফ্টওয়্যার হিসাবে শ্রেণীবদ্ধ করা হয়েছে।

## এটি যেই সমস্যাটি নির্দেশ করে

Without multitenancy, each tenant would need a dedicated software installation.
মাল্টিটেন্যান্সি ছাড়া, প্রতিটি ভাড়াটে একটি ডেডিকেটেড সফ্টওয়্যার ইনস্টলেশন প্রয়োজন হবে।
This increases resource utilization and maintenance efforts, ultimately software costs.
এটি সম্পদের ব্যবহার এবং রক্ষণাবেক্ষণের প্রচেষ্টা বাড়ায়, শেষ পর্যন্ত সফ্টওয়্যার খরচ।

## এটা কিভাবে সাহায্য করে

Multitenant software provides each tenant a segregated environment (work data, settings, list of credentials, etc.), simultaneously serving multiple tenants. From a tenant's perspective, each has its dedicated software installation, although, in reality, they are all sharing one. 
মাল্টিটেন্যান্ট সফ্টওয়্যার প্রতিটি ভাড়াটেকে একটি পৃথক পরিবেশ (কাজের ডেটা, সেটিংস, প্রমাণপত্রের তালিকা, ইত্যাদি) প্রদান করে, একই সাথে একাধিক ভাড়াটেদের পরিবেশন করে। ভাড়াটেদের দৃষ্টিকোণ থেকে, প্রত্যেকেরই ডেডিকেটেড সফ্টওয়্যার ইনস্টলেশন রয়েছে, যদিও বাস্তবে, তারা সবাই এক ভাগ করে নিচ্ছে। 
This is achieved by running the software on a server and allowing tenants to connect to it over the network via an interface and/or an [API](/application-programming-interface/) (also refer to [Client-Server Architecture](/client-server-architecture/)).
এটি একটি সার্ভারে সফ্টওয়্যার চালানোর মাধ্যমে এবং ভাড়াটেদের একটি ইন্টারফেস এবং/অথবা একটি [API](/application-programming-interface/) (এছাড়াও [ক্লায়েন্ট-সার্ভার আর্কিটেকচার] পড়ুন) এর মাধ্যমে নেটওয়ার্কের মাধ্যমে এটির সাথে সংযোগ করার অনুমতি দিয়ে অর্জন করা হয় /ক্লায়েন্ট-সার্ভার-আর্কিটেকচার/))।
With multitenant software, tenants share the resources of one installation without affecting each other or only in predefined and controlled ways. The resulting resource savings on the software provider's side can be passed on to the tenants, significantly reducing the software cost for users (again, think web-based e-mail or document editors).
মাল্টিটেন্যান্ট সফ্টওয়্যার সহ, ভাড়াটেরা একে অপরকে প্রভাবিত না করে বা শুধুমাত্র পূর্বনির্ধারিত এবং নিয়ন্ত্রিত উপায়ে একটি ইনস্টলেশনের সংস্থান ভাগ করে নেয়। সফ্টওয়্যার প্রদানকারীর পক্ষ থেকে সম্পদের সঞ্চয়গুলি ভাড়াটেদের কাছে প্রেরণ করা যেতে পারে, ব্যবহারকারীদের জন্য সফ্টওয়্যার খরচ উল্লেখযোগ্যভাবে হ্রাস করে (আবার মনে করুন, ওয়েব-ভিত্তিক ই-মেইল বা ডকুমেন্ট এডিটর)।

## সম্পর্কিত পদ

Multitenancy is not synonymous with [SaaS](/software-as-a-service/),
although it is very common for SaaS to be multitenant and even to feature multitenancy as one of its core benefits.
মাল্টিটেন্যান্সি [SaaS](/software-as-a-service/) এর সমার্থক নয়,
যদিও এটি SaaS-এর জন্য মাল্টিটেন্যান্ট হওয়া এবং এমনকি এর মূল সুবিধাগুলির মধ্যে একটি হিসাবে মাল্টিটেন্যান্সি বৈশিষ্ট্য করা খুবই সাধারণ।
