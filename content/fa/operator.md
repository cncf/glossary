---
title: Kubernetes Operator
status: Completed
category: concept
tags: ["infrastructure"]
---

اپراتور Kubernetes برنامه کمکی‌ای است که داخل کلاستر Kubernetes اجرا می‌شود و بدون تغییر در کد هسته Kubernetes، قابلیت‌های آن را گسترش می‌دهد تا نصب و مدیریت خودکار Applicationها و Resourceهای پیچیده را ممکن کند.

## مسئله‌ای که حل می‌کند

وقتی می‌خواهیم یک Application [Stateful](/stateful-apps/) پیچیده مانند کلاستر Database اجرا کنیم، باید کارهای عملیاتی زیادی انجام دهیم تا آن را پایدار نگه داریم. این موضوع به‌ویژه برای ویژگی‌هایی مانند High Availability و Zero Downtime صادق است. کلاستر در زمان Update یا Failure چگونه رفتار می‌کند؟ چطور می‌توانیم آن را به‌صورت امن Scale Up یا Down کنیم؟ پاسخ این پرسش‌ها به نوع فناوری بستگی دارد؛ چون هر کلاستر Database هنگام Scale یا Failure رفتاری متفاوت دارد. به همین دلیل Kubernetes نمی‌تواند مدیریت عمومی برای این سناریوها ارائه دهد. این دانش معمولاً نزد Administrator انسانی ـ یا همان Operator ـ است. اما در دنیای Cloud Native که به‌شدت خودکار است، نمی‌توانیم همیشه وابسته به تعامل‌های دستی برای انجام عملیات حیاتی باشیم.

## چگونه کمک می‌کند

اپراتور Kubernetes در اصل یک Abstraction یا مدل است که به ما اجازه می‌دهد Resourceهایی بسازیم که در حل مسائل یادشده کمک می‌کنند. اپراتورهای موجود معمولاً مجموعه‌ای از Resourceهای جدید ـ با عنوان CRD (Custom Resource Definition) ـ و همچنین Componentهایی ارائه می‌دهند که مسئول همگام‌سازی وضعیت واقعی کلاستر با وضعیت مطلوب هستند. اگر اپراتور یک کلاستر Database را مثال بزنیم، این Componentها دقیقاً می‌دانند چگونه کلاستر را Scale Up یا Down کنند و در صورت Crash چه کاری انجام دهند. به این ترتیب لازم نیست برای استفاده از آن فناوری خاص در کلاستر Kubernetes متخصص باشیم تا بتوانیم از قابلیت‌هایی مثل Scale یا امکانات دیگر بهره ببریم.

## اصطلاحات مرتبط

* [Stateless applications](/stateless-apps/)
* [Stateful applications](/stateful-apps/)
* [Clusters](/cluster/)
