---
title: ডিস্ট্রিবিউটেড সিস্টেম (Distributed System)
status: Completed
category: ধারণা
tags: ["স্থাপত্য", "", ""]
---

একটি ডিস্ট্রিবিউটেড সিস্টেম হলো একটি নেটওয়ার্কের সাথে সংযুক্ত স্বায়ত্তশাসিত কম্পিউটিং উপাদানগুলোর একটি সংগ্রহ
যা ব্যবহারকারীদের কাছে একটি একক সুসংগত সিস্টেম হিসাবে প্রদর্শিত হয়। 
সাধারণত [নোড](/bn/nodes/) হিসাবে উল্লেখ করা হয়, এই উপাদানগুলো হার্ডওয়্যার ডিভাইস (যেমন কম্পিউটার, মোবাইল ফোন) বা সফ্টওয়্যার প্রক্রিয়া হতে পারে।
নোডগুলো একটি সাধারণ লক্ষ্য অর্জনের জন্য প্রোগ্রাম করা হয় এবং সহযোগিতা করার জন্য, তারা নেটওয়ার্কে বার্তা বিনিময় করে। 

## এটা যেসব সমস্যাতে দৃষ্টিপাত করে

অনেক আধুনিক অ্যাপ্লিকেশন আজ এত বড় যে তাদের পরিচালনা করার জন্য সুপার কম্পিউটারের প্রয়োজন হবে। 
জিমেইল বা নেটফ্লিক্সের কথা ভাবুন। সম্পূর্ণ অ্যাপ্লিকেশন হোস্ট করার জন্য কোনো একক কম্পিউটার যথেষ্ট শক্তিশালী নয়।
একাধিক কম্পিউটার সংযোগ করে, কম্পিউট শক্তি প্রায় সীমাহীন হয়ে যায়। 
ডিস্ট্রিবিউটেড কম্পিউটিং ছাড়া, আজকে আমরা অনেক অ্যাপ্লিকেশন উপর নির্ভরশীল হওয়া সম্ভব হবে না।


ঐতিহ্যগতভাবে, সিস্টেমগুলি উল্লম্বভাবে [স্কেল](/bn/scalability/) করবে। আপনি যখন একটি পৃথক মেশিনে আরও সিপিউ (CPU) বা মেমরি যোগ করেন তখনই। 
উল্লম্ব স্কেলিং সময় সাপেক্ষ, ডাউনটাইম প্রয়োজন, এবং দ্রুত তার সীমাতে পৌঁছে যায়।


## এটা কিভাবে সাহায্য করে

ডিস্ট্রিবিউটেড সিস্টেমগুলো [ অনুভূমিক স্কেলিং](/bn/horizontal-scaling/) করার অনুমতি দেয় (যেমন যখনই প্রয়োজন হয় সিস্টেমে আরও নোড যোগ করা) | 
এটি স্বয়ংক্রিয়ভাবে একটি সিস্টেমকে কাজের চাপ বা সম্পদ খরচে হঠাৎ বৃদ্ধি পরিচালনা করার অনুমতি দেয়। 

একটি নন-ডিস্ট্রিবিউটেড সিস্টেম ব্যর্থতার ঝুঁকিতে নিজেকে প্রকাশ করে কারণ যদি একটি মেশিন ব্যর্থ হয়, পুরো সিস্টেম ব্যর্থ হয়। 
একটি ডিস্ট্রিবিউটেড সিস্টেম এমনভাবে ডিজাইন করা যেতে পারে যে, এমনকি কিছু মেশিন নিচে গেলেও, সামগ্রিক সিস্টেম একই ফলাফল তৈরি করতে কাজ চালিয়ে যেতে পারে।
