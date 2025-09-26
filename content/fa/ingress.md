---
title: Ingress
status: Completed
category: technology
tags: ["fundamental"]
---

Ingress مجموعه‌ای از Ruleهاست که به مدیریت ترافیک اینترنت از بیرون به داخل یک کانتینر یا گروهی از کانتینرهای در حال اجرا در کلاستر کمک می‌کند. Ingress از دو جزء تشکیل شده است: Ingress Resource و Ingress Controller. Ingress Resource یک فایل پیکربندی است که در کنار سایر فایل‌های Manifest قرار می‌گیرد و به ادمین‌ها اجازه می‌دهد مسیریابی ترافیک خارجی را تنظیم کنند. Ingress Controller فناوری Web Serverی است که بر اساس پیکربندی موجود در Ingress Resource، ترافیک را مسیردهی می‌کند.

## مسئله‌ای که حل می‌کند

Applicationهای وب Cloud Native از Serviceهای متعددی تشکیل شده‌اند و اغلب لازم است این [Service](/service/)ها برای کاربران از طریق اینترنت (با مرورگر) در دسترس باشند. برای در دسترس قرار دادن این Serviceها در حالی که Application روی [Kubernetes](/kubernetes/) اجرا می‌شود، باید هر Service Application را به دنیای بیرون Expose کنیم. ساده‌ترین راه استفاده از Kubernetes Load Balancer Service است؛ اما ایجاد چنین سرویسی منجر به یک مؤلفه جدید روی زیرساخت زیربنایی می‌شود. این کار علاوه بر هزینه و سربار مدیریتی، برای هر Load Balancer ایجادشده یک آدرس IP خارجی جداگانه ایجاد می‌کند. این موضوع تجربه کاربری را خراب می‌کند، چون کاربران نمی‌خواهند برای دسترسی به یک Application از URLهای مختلف استفاده کنند.

## چگونه کمک می‌کند

Ingress Resource به شما امکان می‌دهد نحوه Balancing و مسیریابی ترافیک به Serviceهای یک Application را تنظیم کنید. Ingress Controller یک نقطه ورود واحد از طریق یک URL (مثلاً www.example-url.com) ارائه می‌دهد و بر اساس مسیرهای مختلف URL (مثل www.example-url.com/path) مسیریابی و Balancing واقعی را انجام می‌دهد. Ingress Controller مؤلفه‌ای است که درون کلاستر اجرا می‌شود و Ruleهایی را که در Ingress Resource تعریف شده تفسیر می‌کند. اپراتورهای کلاستر می‌توانند بسته به فناوری‌های موجود مانند Nginx، Traefik، HAProxy و غیره، Controller مدنظرشان را انتخاب کنند. به این ترتیب، اگر Application از چندین Service تشکیل شده باشد، کاربر می‌تواند با یک URL به آن دسترسی یابد. این کار نیاز به Load Balancerهای متعدد در سطح زیرساخت را حذف می‌کند و پیکربندی Ruleهای فایروال و Load Balancer برای هر Service را ساده می‌سازد. با متمرکز کردن مسیریابی ترافیک و مدیریت پیکربندی، Ingress مقیاس‌پذیری را روان می‌کند، استفاده از منابع را بهینه می‌سازد، هزینه‌ها را کاهش می‌دهد و مدیریت کلی Applicationهای در حال اجرای کلاستر را بهبود می‌دهد.
