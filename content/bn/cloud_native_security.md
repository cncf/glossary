---
title: ক্লাউড নেটিভ  নিরাপত্তা (Cloud Native Security)
status: Completed
category: concept
---

## এটা কি

ক্লাউড নেটিভ সিকিউরিটি এমন একটি পদ্ধতি যা [ক্লাউড নেটিভ অ্যাপ্লিকেশন](/cloud_native_apps/) এ নিরাপত্তা তৈরি করে। এটি নিশ্চিত করে যে নিরাপত্তা উন্নয়ন থেকে উৎপাদন পর্যন্ত সমগ্র অ্যাপ্লিকেশন জীবনচক্রের অংশ। ক্লাউড নেটিভ সিকিউরিটি ক্লাউড নেটিভ এনভায়রনমেন্টের বিবরণ, যথা দ্রুত কোড পরিবর্তন এবং অত্যন্ত ক্ষণস্থায়ী অবকাঠামোর সাথে খাপ খাওয়ানোর সময় প্রথাগত নিরাপত্তা মডেলের মতো একই মান নিশ্চিত করতে চায়। ক্লাউড নেটিভ নিরাপত্তা [DevSecOps](/devsecops/) নামক অনুশীলনের সাথে অত্যন্ত সম্পর্কিত।

## Problem it addresses

Traditional security models were built with a number of assumptions that are no longer valid. Cloud native apps change frequently, use a large number of open source tools and libraries, often run in vendor-controlled infrastructure, and are subject to rapid infrastructure changes. Code reviews, long quality assurance cycles, host-based vulnerability scanning, and last minute security reviews cannot scale with cloud native applications.

## How it helps

Cloud native security introduces a new way of working that protects applications by migrating from traditional security models to one where security is involved in every step of the release cycle. Manual audits and checks are largely replaced with automated scans. Rapid code release pipelines are integrated with tools that scan code for vulnerabilities before they’re compiled. Open source libraries are pulled from trusted sources and monitored for vulnerabilities. Instead of slowing change a cloud native security model embraces it by frequently updated vulnerable components or ensuring infrastructure is regularly replaced.
