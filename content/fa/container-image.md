---
title: Container Image
status: Feedback Appreciated
category: concept
tags: ["", "", ""]
---

Container Image یک فایل ایستا و Immutable است که وابستگی‌های لازم برای ایجاد یک [Container](/container/) را در خود دارد. این وابستگی‌ها می‌تواند شامل یک فایل باینری اجرایی، Libraryهای سیستم، ابزارهای سیستم، متغیرهای محیطی و سایر تنظیمات پلتفرم موردنیاز باشد. Container Image حاصل [Containerization](/containerization/) یک Application است و معمولاً در Container Registry ذخیره می‌شود؛ جایی که می‌توان آن را دانلود کرد و با استفاده از Container Runtime Interface (CRI) به‌صورت یک Process ایزوله اجرا نمود. چارچوب Container Image باید از Schema استاندارد تعریف‌شده توسط Open Container Initiative (OCI) پیروی کند.

## مسئله‌ای که حل می‌کند

در گذشته، سرورهای Application برای هر محیط به‌صورت جداگانه پیکربندی می‌شدند و Applicationها روی آن‌ها مستقر می‌شدند. هرگونه پیکربندی ناهماهنگ بین محیط‌ها مشکل‌آفرین است و اغلب به Downtime یا Deployment ناموفق منجر می‌شود. محیط یک Application باید قابل تکرار و به‌خوبی تعریف‌شده باشد؛ در غیر این صورت احتمال بروز Bugهای مرتبط با محیط افزایش می‌یابد. زمانی که محیط‌های Application به‌درستی یا به‌دقت پیکربندی نشده باشند، [Horizontal](/horizontal-scaling/) و [Vertical](/vertical-scaling/) Scaling Applicationها دشوار می‌شود.

## چگونه کمک می‌کند

Container Image یک Application را به همراه تمام وابستگی‌های Runtime آن ـ مانند Application Server ـ بسته‌بندی می‌کند. این کار سازگاری را در تمام محیط‌ها، از جمله ماشین توسعه‌دهنده، فراهم می‌کند. Container Image را می‌توان برای راه‌اندازی هر تعداد Container موردنیاز استفاده کرد و همین امکان [Scalability](/scalability/) بیشتری را فراهم می‌آورد.
