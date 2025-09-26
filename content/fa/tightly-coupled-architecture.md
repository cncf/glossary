---
title: Tightly Coupled Architecture
status: Completed
category: Property
tags: ["fundamental", "architecture", "property"]
---

Tightly Coupled Architecture یک سبک معماری است که در آن چندین جزء (component) یک application به هم وابسته‌اند  
(برخلاف پارادایم [loosely coupled architectures](/loosely-coupled-architecture/)).  
این یعنی تغییر در یک component احتمالاً روی componentهای دیگر هم تأثیر می‌گذارد.  
این سبک معمولاً راحت‌تر از معماری‌های loosely coupled پیاده‌سازی می‌شود،  
اما می‌تواند سیستم را در برابر **cascading failures** آسیب‌پذیرتر کند.  
همچنین معمولاً نیازمند rollout هماهنگ componentها است  
که می‌تواند باعث کاهش بهره‌وری توسعه‌دهندگان شود.  

Tightly Coupled application architectures یک روش نسبتاً سنتی برای ساخت applicationها هستند.  
اگرچه لزوماً با همه‌ی best practiceهای توسعه‌ی [microservice](/microservices-architecture/) سازگار نیستند،  
اما در شرایط خاص می‌توانند مفید باشند.  
آن‌ها معمولاً سریع‌تر و ساده‌تر پیاده‌سازی می‌شوند و  
مشابه [monolithic applications](/monolithic-apps/) می‌توانند چرخه‌ی توسعه اولیه را تسریع کنند.  