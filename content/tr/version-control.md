---
title: Sürüm Denetimi (Version Control)
status: Completed
category: concept
tags: ["methodology", "fundamental", ""]
---

Sürüm denetimi (versiyon kontrolü), yazılım kodu ve yapılandırma dosyalarında zaman içinde yapılan tüm değişiklikleri kaydeden ve geçmişe dönük izlemeyi sağlayan bir sistemdir.

## Hangi Sorunları Çözer

Aynı proje üzerinde birden fazla geliştirici çalıştığında, birbirlerinin yazdığı kodları ezme ve değişikliklerin kime ait olduğunu takip edememe riski doğar.
Ayrıca sistemde beklenmedik bir hata oluştuğunda çalışan eski bir duruma geri dönmek son derece zor ve risklidir.

## Nasıl Yardımcı Olur

Git gibi modern sürüm denetim sistemleri; her değişikliği kimin, ne zaman ve hangi amaçla yaptığını kayıt altına alır.
Farklı özelliklerin çakışmadan paralel geliştirilmesini sağlayan dallanma (branching) mekanizması sunar.
Bulut yerel dünyasında [GitOps](/tr/gitops/) gibi pratiklerin temelini oluşturarak tüm altyapının kod olarak yönetilmesine ve tek bir güvenilir doğruluk kaynağına (source of truth) bağlanmasına olanak tanır.
