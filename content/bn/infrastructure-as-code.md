---
title: কোড হিসেবে পরিকাঠামো (Infrastructure as Code)
status: Completed
category: ধারণা
tags: ["অবকাঠামো", "পদ্ধতি", ""]
---

কোড হিসেবে পরিকাঠামো হল, অবকাঠামোর সংজ্ঞা এক বা একধিক ফাইল হিসেবে সংরক্ষণ করার অনুশীলন। এটি প্রথাগত মডেলকে প্রতিস্থাপন করে যেখানে পরিকাঠামোকে একটি পরিষেবা হিসেবে মানবিকভাবে প্রতিবিধান করা হয় সাধারণত সেল স্ক্রিপ্ট বা অন্যান্য কনফিগারেশন উপাদানের মাধ্যমে।

## এটা যেসব সমস্যাতে দৃষ্টিপাত করে

ক্লাউড নেটিভ পদ্ধতিতে অ্যাপ্লিকেশন তৈরি করার জন্য পরিকাঠামো নিষ্পত্তিযোগ্য এবং পুনরুৎপাদনযোগ্য হতে হবে। সাধারণত মানুষের হস্তক্ষেপ ছাড়াই এটি একটি স্বয়ংক্রিয় এবং পুনরাবৃত্তি যোগ্য উপায় [স্কেল](/bn/scalability/) করতে পারে। মানবিক নজরদারি প্রতিক্রিয়াশীলতা এবং [ক্লাউড নেটিভ অ্যাপ্লিকেশনগুলির](/bn/cloud-native-apps/) প্রয়োজনীয়তা পূরণ করতে পারে না। মানবিক কাঠামো পরিবর্তনগুলি উৎপাদনযোগ্য নয়, দ্রুত পরিমাপ সীমার মধ্যে চলে যায় এবং মাইক্রো কনফিগারেশন ভুলগুলি করে।

## এটা কিভাবে সাহায্য করে

ডেটা সেন্টার রিসোর্স যেমন সার্ভার, লোড ব্যালেন্সার এবং সাবনেটগুলিকে কোড হিসাবে উপস্থাপন করে, এটি অবকাঠামো দলগুলিকে সমস্ত কনফিগারেশনের জন্য সত্যের একক উৎস থাকতে দেয় এবং একটি [CI](/bn/continuous-integration/) পাইপলাইনে তাদের ডেটা সেন্টার পরিচালনা করতে দেয়, সংস্করণ নিয়ন্ত্রণ এবং স্থাপনার কৌশল প্রয়োগ করে।
