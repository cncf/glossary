---
title: Güvenlik Kaos Mühendisliği (Security Chaos Engineering)
status: Completed
category: concept
tags: ["security", "methodology", ""]
---

Güvenlik Kaos Mühendisliği (Security Chaos Engineering - SCE), bir sistemin siber saldırılara ve güvenlik açıklarına karşı dayanıklılığını doğrulamak amacıyla sisteme proaktif olarak güvenlik arızaları ve saldırı senaryoları enjekte etme disiplinidir.

## Hangi Sorunları Çözer

Geleneksel güvenlik denetimleri ve sızma testleri (penetration testing) genellikle belirli zaman aralıklarıyla statik olarak yapılır.
Sürekli değişen bulut yerel ortamlarda, dağıtımların arasına sızabilecek yapılandırma hataları veya yeni güvenlik açıkları bir sonraki denetime kadar fark edilmeyebilir.
Güvenlik altyapısının (güvenlik duvarları, SIEM alarmları, yetkilendirme mekanizmaları) gerçek bir saldırı anında beklendiği gibi tepki verip vermeyeceği önceden kestirilemez.

## Nasıl Yardımcı Olur

Güvenlik Kaos Mühendisliği, [kaos mühendisliği](/tr/chaos-engineering/) prensiplerini bilgi güvenliği alanına uygular.
Sisteme kontrollü biçimde süresi dolmuş sertifikalar, yetkisiz API çağrıları veya yapılandırma sapmaları enjekte ederek izleme ve savunma mekanizmalarının gerçek zamanlı tepkisini test eder.
Böylece kör noktalar saldırganlardan önce tespit edilir ve sistemin otomatik savunma kabiliyeti güvence altına alınır.
