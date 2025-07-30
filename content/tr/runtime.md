---
title: Çalışma Zamanı (Runtime)
status: Tamamlandı
category: kavram
tags: ["uygulama", "", ""]
---

Bir çalışma zamanı (runtime), genel olarak, bir yazılım parçasını çalıştırır. Bu, programın komutlarını işletim sistemi için ilgili eylemlere çeviren temel işletim sisteminin bir [soyutlamasıdır](/tr/abstraction/).

[Cloud native uygulamalar](/tr/cloud-native-apps/) bağlamında, _çalışma zamanı_ genellikle konteyner çalışma zamanını ifade eder. Bir konteyner çalışma zamanı, farklı konteyner orkestrasyon teknolojileri arasında tutarlı işleme sağlamak için özellikle [Open Container Initiative](https://opencontainers.org/) spesifikasyonunu uygular.

## Hangi Sorunları Çözer

Konteyner çalışma zamanının soyutlaması olmadan, uygulama her işletim sisteminin tüm mekanikleriyle uğraşmak zorunda kalır ve bu da uygulamayı çalıştırmanın karmaşıklığını artırır.

## Nasıl Yardımcı Olur

Konteyner çalışma zamanları, Kubernetes gibi konteyner orkestratörlerinin gerekli bir bileşenidir. Konteyner yaşam döngüsünü yönetirler ve bu temel olarak üç şey yapar. İlk olarak, konteyner imajlarının nasıl tanımlandığını ve çalışma zamanının bunları nasıl alabileceğini belirler. 

İkinci olarak, bu imajların nasıl açıldığını, katmanlandığını, bağlandığını ve çalıştırıldığını yönetir. Ayrıca, çalışma zamanları tüm bu işletim sistemi seviyesindeki işlemleri üstlenerek donanım kaynaklarını yönetir. Bunlar arasında kaynak tahsisi ve izolasyonu yer alır.

Zaman içinde farklı konteyner çalışma zamanı ürünleri gelişti ve bu durum konteyner çalışma zamanları için standart haline gelen OCI Spesifikasyonuna yol açtı.

Bu standardın tanıtılması, son kullanıcıların herhangi bir OCI uyumlu çalışma zamanını herhangi bir OCI uyumlu konteyner orkestratörüyle (Kubernetes gibi) birleştirmesine olanak tanır.

## İlgili Terimler

- [Cloud Native](https://glossary.cncf.io/tr/cloud-native-apps/)
- [Konteynerleştirme](https://glossary.cncf.io/tr/containerization/)
- [Konteyner Orkestrasyonu](https://glossary.cncf.io/tr/container-orchestration/)
- [Mikroservis Mimarisi](https://glossary.cncf.io/tr/microservices-architecture/)