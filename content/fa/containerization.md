---
title: Containerization
status: Completed
category: Technology
tags: ["application", "", ""]
---

کانتینری‌سازی فرایند بسته‌بندی کد Application به همراه Libraryها و وابستگی‌های موردنیاز برای اجرای آن در یک فایل اجرایی سبک‌وزن واحد ـ به نام [Container Image](/container-image/) ـ است.

## مسئله‌ای که حل می‌کند

پیش از رواج [Container](/container/)، سازمان‌ها برای ارکستره کردن چند Application روی یک [ماشین Bare-Metal](/bare-metal-machine/) به [Virtual Machine](/virtual-machine/) (VM) متکی بودند. VMها به‌طور قابل توجهی از کانتینرها بزرگ‌تر هستند و برای اجرا به Hypervisor نیاز دارند. به دلیل ذخیره‌سازی، پشتیبان‌گیری و انتقال Templateهای بزرگ VM، ایجاد این Templateها نیز کند است. علاوه بر این، VMها می‌توانند دچار Configuration Drift شوند که اصل [Immutable بودن](/immutable-infrastructure/) را نقض می‌کند.

## چگونه کمک می‌کند

Container Imageها سبک‌وزن هستند (برخلاف VMهای سنتی) و فرایند کانتینری‌سازی به یک فایل با فهرست وابستگی‌ها نیاز دارد. این فایل را می‌توان Version Control کرد و فرایند Build را Automation نمود، به‌طوری‌که سازمان بتواند روی اولویت‌های دیگر تمرکز کند در حالی که فرایند خودکار ساخت را انجام می‌دهد. Container Image با یک شناسه یکتا ذخیره می‌شود که به محتوای دقیق و پیکربندی آن گره خورده است. وقتی کانتینرها زمان‌بندی و مجدداً زمان‌بندی می‌شوند، همیشه به وضعیت اولیه خود بازنشانی می‌شوند و همین Configuration Drift را از بین می‌برد.
