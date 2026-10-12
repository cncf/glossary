---
title: Kubernetes Operatörü (Kubernetes Operator)
status: Completed
category: concept
tags: ["infrastructure"]
---

Kubernetes Operatörü, bir Kubernetes kümesi içinde çalışan ve çekirdek koda müdahale etmeden kümenin yeteneklerini genişleten, karmaşık uygulamaların ve kaynakların otomatik olarak kurulmasını ve yönetilmesini sağlayan bir yardımcı yazılımdır.

## Hangi Sorunları Çözer

Örneğin bir veritabanı kümesi gibi karmaşık ve [durum bilgisi tutan (stateful)](/tr/stateful-apps/) bir uygulamayı çalıştırmak istediğimizde, sistemi ayakta ve çalışır durumda tutabilmek için çok sayıda operasyonel görevi yerine getirmemiz gerekir.
Bu durum özellikle yüksek erişilebilirlik (high availability) ve sıfır kesinti süresi (zero downtime) gibi gereksinimler için kritik öneme sahiptir.
Bir güncelleme veya donanım arızası anında küme nasıl davranmalıdır?
Veritabanı güvenli bir şekilde nasıl büyütülür veya küçültülür?
Bu tür operasyonlar doğrudan ilgili teknolojinin doğasına özgüdür; çünkü örneğin her veritabanı kümesi ölçekleme veya hata durumlarında aynı tepkiyi vermez.
Bu nedenle Kubernetes, her uygulama için genel geçer bir operasyonel yönetim mekanizması sunamaz.
Geleneksel olarak bu uzmanlık bilgisi bir sistem yöneticisi veya operatör tarafından bilinir ve elle icra edilir.
Ancak yüksek düzeyde otomatikleşmiş bulut yerel dünyasında, bu tür kritik operasyonlar için insan müdahalesine bağımlı kalmak sürdürülebilir değildir.

## Nasıl Yardımcı Olur

Kubernetes Operatörü temelde, yukarıda bahsedilen sorunları çözmek amacıyla özel kaynaklar inşa etmemizi sağlayan bir soyutlama ve tasarım modelidir.
Tipik olarak bir operatör, Özel Kaynak Tanımları (Custom Resource Definition - CRD) olarak bilinen yeni kaynak türlerinin yanı sıra, kümenin gerçek durumunu hedeflenen durumla sürekli senkronize tutmaktan sorumlu denetleyici bileşenler sunar.
Örneğin bir veritabanı operatörü; o veritabanının nasıl yedekleneceğini, nasıl ölçekleneceğini ve bir çökme durumunda hangi kurtarma adımlarının izleneceğini kod seviyesinde bilir.
Böylece ilgili teknolojinin derinlemesine uzmanı olmasak bile onu Kubernetes kümemizde güvenle çalıştırabilir, otomatik ölçekleme ve kendi kendini iyileştirme avantajlarından faydalanabiliriz.

## İlgili Terimler

* [Durum Bilgisi Tutan Uygulamalar (Stateful Applications)](/tr/stateful-apps/)
* [Kümeler (Clusters)](/tr/cluster/)
