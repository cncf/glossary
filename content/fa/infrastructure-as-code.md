---
title: Infrastructure as Code (IaC)
status: Completed
category: concept
tags: ["infrastructure", "methodology", ""]
---

Infrastructure as Code (زیرساخت به‌صورت کد) رویه‌ای است که در آن تعریف زیرساخت به‌صورت یک یا چند فایل ذخیره می‌شود. این رویکرد جایگزین مدل سنتی می‌شود که در آن زیرساخت به‌صورت سرویس به شکل دستی Provision می‌شد، معمولاً با اسکریپت‌های Shell یا ابزارهای پیکربندی دیگر.

## مسئله‌ای که حل می‌کند

ساخت Applicationها به شیوه Cloud Native مستلزم آن است که زیرساخت Disposable و قابل بازتولید باشد. همچنین باید بتواند به‌صورت خودکار و تکرارپذیر، احتمالاً بدون دخالت انسان، On-Demand [Scale](/scalability/) شود. Provisioning دستی نمی‌تواند نیازهای پاسخ‌گویی و Scale [Applicationهای Cloud Native](/cloud-native-apps/) را برآورده کند. تغییرهای دستی زیرساخت تکرارپذیر نیست، سریع به محدودیت Scale می‌رسد و خطای Misconfiguration ایجاد می‌کند.

## چگونه کمک می‌کند

با نمایش Resourceهای مرکز داده مانند Serverها، Load Balancerها و Subnetها به‌صورت کد، تیم‌های زیرساخت می‌توانند یک منبع حقیقت واحد برای همه پیکربندی‌ها داشته باشند و مرکز داده خود را در Pipeline [CI](/continuous-integration/)/[CD](/continuous-delivery/) مدیریت کنند و Version Control و استراتژی‌های Deployment را پیاده کنند.
