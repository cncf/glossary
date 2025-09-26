---
title: Runtime
status: Completed
category: concept
tags: ["application", "", ""]
---

Runtime به‌طور کلی نرم‌افزاری است که قطعه‌ای از نرم‌افزار را اجرا می‌کند. Runtime [Abstraction](/abstraction/)ی از سیستم‌عامل زیربنایی است که دستورات برنامه را به اقدام‌های متناظر برای سیستم‌عامل ترجمه می‌کند.

در زمینه [Cloud Native](/cloud-native-apps/)، _Runtime_ معمولاً به Container Runtime اشاره دارد. Container Runtime مشخصات [Open Container Initiative](https://opencontainers.org/) را پیاده‌سازی می‌کند تا رفتار یکسانی در فناوری‌های مختلف ارکستراسیون کانتینر تضمین شود.

## مسئله‌ای که حل می‌کند

بدون Abstractionی به نام Container Runtime، Application باید با تمام مکانیزم‌های هر سیستم‌عامل سر و کار داشته باشد که پیچیدگی اجرای App را افزایش می‌دهد.

## چگونه کمک می‌کند

Container Runtimeها مؤلفه‌ای ضروری برای ارکستراتورهای کانتینر مانند Kubernetes هستند. آن‌ها چرخه عمر کانتینر را مدیریت می‌کنند که عمدتاً سه کار انجام می‌دهد. اول، نحوه تعریف Container Image و روش دریافت آن توسط Runtime را مشخص می‌کنند. دوم، نحوه Unpack، لایه‌گذاری، Mount و اجرای این Imageها را مدیریت می‌کنند. علاوه بر این، Runtimeها منابع سخت‌افزاری را مدیریت می‌کنند و همه این اقدام‌های سطح سیستم‌عامل ـ شامل تخصیص و ایزوله‌سازی منابع ـ را بر عهده می‌گیرند. با گذشت زمان، Runtimeهای کانتینر مختلفی شکل گرفت و در نهایت مشخصات OCI به‌عنوان استاندارد Container Runtimeها پذیرفته شد.

معرفی این استاندارد باعث می‌شود کاربران نهایی بتوانند هر Runtime سازگار با OCI را با هر ارکستراتور کانتینر سازگار با OCI (مانند Kubernetes) ترکیب کنند.

## اصطلاحات مرتبط

- [Cloud Native](https://glossary.cncf.io/cloud-native-apps/)
- [Containerization](https://glossary.cncf.io/containerization/)
- [Container Orchestration](https://glossary.cncf.io/container-orchestration/)
- [Microservices Architecture](https://glossary.cncf.io/microservices-architecture/)
