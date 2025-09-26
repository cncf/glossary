---
title: Mutual Transport Layer Security (mTLS)
status: Completed
category: Concept
tags: ["security", "networking", ""]
---

Mutual TLS (mTLS) تکنیکی است که برای احراز هویت و رمزنگاری پیام‌هایی استفاده می‌شود که بین دو [Service](/service/) ارسال می‌شوند. mTLS همان پروتکل استاندارد [Transport Layer Security](/transport-layer-security/) (TLS) است با این تفاوت که به‌جای اعتبارسنجی تنها یک سمت اتصال، هر دو طرف اعتبارسنجی می‌شوند.

## مسئله‌ای که حل می‌کند

[Microservice](/microservices-architecture/)ها روی یک شبکه با هم ارتباط برقرار می‌کنند و درست مثل شبکه Wi-Fi شما، ارتباط در حال عبور روی آن شبکه می‌تواند هک شود. mTLS اطمینان می‌دهد هیچ طرف غیرمجازی نتواند به درخواست‌های مشروع گوش دهد یا خود را به جای آن‌ها جا بزند.

## چگونه کمک می‌کند

mTLS تضمین می‌کند ترافیک بین Client و Server در هر دو جهت امن و قابل اعتماد است و لایه امنیتی اضافی برای کاربرانی فراهم می‌کند که وارد شبکه یا Application می‌شوند. این روش همچنین اتصال Deviceهایی را که فرآیند Login ندارند ـ مانند Deviceهای Internet of Things (IoT) ـ تأیید می‌کند. حملاتی مانند On-Path Attack، Spoofing، Credential Stuffing، Brute Force و غیره را می‌توان با mTLS پیشگیری کرد.
