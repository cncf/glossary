---
title: Load Balancer
status: Feedback Appreciated
category: concept
tags: ["infrastructure", "networking", ""]
---

Load Balancer ابزاری است که درخواست‌های ورودی را به‌صورت کارآمد بین چندین Instance از یک Application توزیع می‌کند. برای مثال، معماری [Microservice](/microservices-architecture/) را در نظر بگیرید که هر Service آن می‌تواند [به‌صورت افقی](/horizontal-scaling/) Scale شود. Load Balancer در جلوی Microservice مقیاس‌شده قرار می‌گیرد و اطمینان می‌دهد هیچ Instanceی تمام درخواست‌ها را دریافت نکند. Load Balancerها می‌توانند نرم‌افزاری یا سخت‌افزاری باشند.

## مسئله‌ای که حل می‌کند

Applicationها و وب‌سایت‌های مدرن معمولاً صدها هزار درخواست هم‌زمان End-User را سرویس می‌دهند. برای مدیریت همه این درخواست‌ها، Applicationها اغلب به‌صورت افقی Scale می‌شوند. اما Scale افقی چالش جدیدی ایجاد می‌کند: چگونه ترافیک ورودی را به‌طور برابر بین همه Serviceها توزیع کنیم؟ اینجا است که Load Balancer وارد می‌شود.

## چگونه کمک می‌کند

Load Balancer تمام درخواست‌های ورودی را به‌صورت پویا بین چند Service توزیع می‌کند تا هیچ سرویسی بخش عمده ترافیک را دریافت نکند و سایر Serviceها درخواست کمی یا هیچ درخواستی نداشته باشند. به بیان دیگر، بار را با پیروی از Schema تعریف‌شده (مثلاً به‌صورت یکنواخت یا درصدی) در میان Serviceها تقسیم می‌کند. Load Balancerها برای عملکرد کلی Application و در نهایت تجربه کاربری حیاتی هستند.
