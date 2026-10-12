---
title: gRPC
status: Completed
category: technology
tags: ["networking", ""]
---

[gRPC](https://grpc.io/), farklı programların bir ağ üzerinden birbiriyle doğrudan haberleşmesini sağlayan modern ve yüksek performanslı bir uzaktan yordam çağrısı (RPC) çerçevesidir.
Bunu, bir programın diğer bir programı arayarak bilgi talep edebildiği veya belirli bir görevi yerine getirmesini isteyebildiği bir telefon santraline benzetebiliriz.
Mesajları düz metin (text) olarak ileten ve daha yavaş olup daha fazla bant genişliği tüketen geleneksel yöntemlerin aksine gRPC, mesajları bilgisayarların çok daha hızlı ayrıştırıp işleyebileceği ikili (binary) bir biçimde iletir.

## Hangi Sorunları Çözer

Programların sıklıkla veri paylaşması gerektiğinde, metin tabanlı mesajların (JSON veya XML gibi) sürekli karşılıklı iletilmesi gecikmeye yol açar ve performansı düşürür.
Basit bir soru sormak için her seferinde uzun bir resmi mektup göndermek gibi, metin tabanlı mesajların yazılması, ağ üzerinden iletilmesi ve çözümlenmesi zaman alır.
Çok sayıda servisin bir arada çalıştığı ve birbirlerinden anlık yanıtlar beklediği mikroservis mimarilerinde bu durum ciddi bir performans darboğazı oluşturur.

Buna ek olarak, farklı servisler çoğunlukla farklı programlama dilleriyle geliştirilir.
Servislerin birbiriyle anlaşabilmesi için ortak bir iletişim standardına ihtiyaç vardır.
Net ve standart kurallar tanımlanmadığında veri uyumsuzlukları ve iletişim hataları kaçınılmaz hale gelir.

## Nasıl Yardımcı Olur

gRPC, verileri iletmek ve işlemek için çok daha hızlı olan kompakt ikili protokol tamponları (Protocol Buffers) biçimini kullanarak bu sorunu çözer.
Ayrıca servislerin birbirleriyle nasıl konuşacağını tek bir şema dosyasında (.proto) bir kez tanımlamanıza olanak tanır; ardından desteklenen tüm diller için istemci ve sunucu kodlarını otomatik olarak üretir.

gRPC, mektup alışverişi yapmak yerine gerçek zamanlı bir telefon konuşması gerçekleştirmek gibi, programların aynı anda hem veri gönderip hem de veri alabilmesine (çift yönlü akış / bidirectional streaming) olanak tanır.
Örneğin bir araç çağırma uygulamasında sürücünün cihazı, yeni yolcu taleplerini ve rota güncellemelerini eşzamanlı olarak alırken sürekli anlık konum güncellemeleri de gönderebilir.
