---
title: Service Discovery
status: Completed
category: concept
tags: ["networking", "", ""]
---

Service Discovery فرایند یافتن Instanceهای منفردی است که یک Service را تشکیل می‌دهند. ابزار Service Discovery Nodeها یا Endpointهایی را که Service را می‌سازند ردیابی می‌کند.

## مسئله‌ای که حل می‌کند

معماری‌های Cloud Native پویا و سیال هستند؛ یعنی دائماً در حال تغییرند. یک App [Containerized](/containerization/) احتمالاً چندین بار در طول عمر خود Start و Stop می‌شود. هر بار که این اتفاق بیفتد، آدرس جدیدی خواهد داشت و هر Appی که بخواهد آن را پیدا کند به ابزاری نیاز دارد تا اطلاعات موقعیت جدید را فراهم کند.

## چگونه کمک می‌کند

Service Discovery Appها را در شبکه ردیابی می‌کند تا در صورت نیاز بتوانند یکدیگر را پیدا کنند. این سرویس مکانی مشترک فراهم می‌کند تا Serviceهای منفرد شناسایی و پیدا شوند. موتورهای Service Discovery ابزارهایی شبیه پایگاه‌داده هستند که اطلاعات مربوط به Serviceهای موجود و نحوه یافتن آن‌ها را ذخیره می‌کنند.
