---
title: WebAssembly (Wasm)
status: Completed
category: technology
tags: ["application", "runtime", ""]
---

WebAssembly (Wasm), modern web tarayıcılarında ve sunucu tarafı çalışma zamanlarında yüksek performansla çalışmak üzere tasarlanmış, taşınabilir ve ikili (binary) bir kod biçimidir.

## Hangi Sorunları Çözer

Geleneksel web ortamlarında tarayıcı içi çalıştırma neredeyse tamamen JavaScript ile sınırlıydı.
JavaScript metin tabanlı ve dinamik tipli olduğu için yüksek işlem gücü gerektiren video işleme, 3B grafikler, kriptografi veya veri yoğun hesaplamalarda performans darboğazları yaratıyordu.
Ayrıca C, C++, Rust veya Go gibi dillerle yazılmış mevcut zengin kütüphanelerin web ortamında doğrudan yeniden kullanılması mümkün değildi.

## Nasıl Yardımcı Olur

WebAssembly, donanıma yakın hızlarda neredeyse yerel (near-native) bir yürütme performansı sunar.
Geliştiricilerin C, C++, Rust ve Go gibi dillerle yazdıkları kodları tarayıcıda veya sunucu tarafında güvenli bir kum havuzu (sandbox) içinde çalıştırmalarını sağlar.
Bulut yerel ekosisteminde Wasm; hafifliği, milisaniyeler seviyesindeki açılış hızı ve güvenli yalıtımı sayesinde [konteynerlerin](/tr/container/) yanında ve [sunucusuz mimarilerde (serverless)](/tr/serverless/) yeni nesil bir mikro çalışma zamanı olarak hızla yaygınlaşmaktadır.
