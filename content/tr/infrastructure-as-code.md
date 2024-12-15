---
title: Kod Olarak Altyapı (IaC)
status: Completed
category: concept
tags: ["altyapı", "yöntem", ""]
---

## Nedir

Kod olarak altyapı _(Infrastructure as Code - IaC)_, altyapı tanımının bir veya daha fazla dosya olarak saklanması uygulamasıdır.
Bu, servis olarak altyapının _(Infrastructure as a Service - IaaS)_ genellikle
bir shell script veya diğer yapılandırma araçları aracılığıyla manuel olarak oluşturulduğu geleneksel modelin yerini alır.

## Hangi Sorunları Çözer

Uygulamaları bulut tabanlı bir şekilde geliştirmek, altyapının tek kullanımlık ve tekrarlanabilir olmasını gerektirir.
Ayrıca bu uygulamaların insan müdahalesine gerek kalmadan, ihtiyaca bağlı olarak otomatik
ve tekrarlanabilir bir şekilde ölçeklendirilmesi gerekir.
Altyapı kaynaklarının manuel olarak oluşturulması, bulut tabanlı uygulamaların yanıt verme ve ölçeklendirme gereksinimlerini karşılayamaz.
Manuel altyapı değişiklikleri tekrarlanamaz, hızla ölçek sınırlarına ulaşır ve yanlış yapılandırma hatalarına neden olur.

## Nasıl Yardımcı Olur

Sunucular, yük dengeleyiciler ve alt ağlar gibi veri merkezi kaynaklarının kod olarak temsil edilmesi,
altyapı ekiplerinin tüm yapılandırmalar için tek bir doğruluk kaynağına sahip olmalarını sağlar
ve aynı zamanda versiyon kontrolü ve dağıtım stratejilerini uygulayarak veri merkezlerini
bir CI/CD hattında yönetmelerine olanak tanır.
