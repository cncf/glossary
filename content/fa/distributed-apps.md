---
title: Distributed Apps
status: Completed
category: concept
tags: ["architecture", "", ""]
---

Application توزیع‌شده Applicationی است که کارکرد آن به چند بخش مستقل کوچک‌تر تقسیم می‌شود. این Applicationها معمولاً از [Microservice](/microservices-architecture/)های جداگانه تشکیل شده‌اند که هر کدام بخش متفاوتی از نیازهای Application بزرگ‌تر را مدیریت می‌کنند. در محیط Cloud Native، اجزای منفرد معمولاً به‌صورت [Container](/container/) روی یک [کلاستر](/cluster/) اجرا می‌شوند.

## مسئله‌ای که حل می‌کند

Applicationی که روی تنها یک رایانه اجرا می‌شود، یک Single Point of Failure ایجاد می‌کند؛ اگر آن رایانه از کار بیفتد، Application در دسترس نخواهد بود. Applicationهای توزیع‌شده اغلب در مقابل [Monolithic Application](/monolithic-apps/)ها قرار می‌گیرند. Appهای Monolithic مقیاس‌پذیری سخت‌تری دارند، زیرا اجزای مختلف را نمی‌توان به‌صورت مستقل Scale کرد. همچنین با رشدشان می‌توانند سرعت توسعه‌دهندگان را کند کنند، چون توسعه‌دهندگان بیشتری باید روی Codebase مشترکی کار کنند که مرزهای مشخصی ندارد.

## چگونه کمک می‌کند

وقتی یک Application را به بخش‌های مختلف تقسیم و آن‌ها را در مکان‌های متعدد اجرا می‌کنیم، کل سیستم می‌تواند Failureهای بیشتری را تحمل کند. این کار همچنین اجازه می‌دهد Application از قابلیت‌های Scale که برای نمونه منفرد Application قابل دسترس نیست، استفاده کند؛ یعنی توانایی [Scale افقی](/horizontal-scaling/). البته این مزیت بهایی دارد: افزایش پیچیدگی و سربار عملیاتی ـ اکنون به‌جای یک App، تعداد زیادی جزء Application را اجرا می‌کنید.
