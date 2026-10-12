---
title: Sidecar Konteyneri (Sidecar Container)
status: Completed
category: concept
tags: ["application", "architecture", ""]
---

Sidecar konteyneri, popüler sidecar tasarım deseninin bir uygulamasıdır.
İkincil bir konteynerde çalışan yardımcı bir uygulama, ana konteynerde çalışan birincil uygulama ile yan yana çalışır ve onunla aynı yaşam döngüsünü paylaşır.

## Hangi Sorunları Çözer

Günlük kaydı (logging), izleme (monitoring), dağıtık izleme (tracing) gibi işlevlerin yanı sıra güvenlik ve ağ yönetimi senaryolarını ele almak için [konteynerleri](/tr/container/) ve onların yaşam döngülerini tek bir çatı altında gruplamak büyük kolaylık sağlar.
Bu tasarım yaklaşımından önce, örneğin günlük kaydı iş mantığı genellikle ana konteynerin içindeki uygulama koduna gömülürdü.
Bu durum, geliştiriciye veya uygulamaya bağlı olarak farklı biçimlerde uygulanmasına yol açar; bakımını yapması ve yönetmesi son derece karmaşık sistemler ortaya çıkarırdı.
Örneğin günlük kaydı kütüphanesini güncellemek çalışma zamanında ana uygulamayı etkileyebilir, dolayısıyla operasyonel riskleri artırabilirdi.

## Nasıl Yardımcı Olur

İkincil bir konteynerde bağımsız bir süreç çalıştırarak endişelerin ayrılığı (separation of concerns) ilkesini zorunlu kılar ve ana uygulama kodunu değiştirmeden ona ek yetenekler kazandırır.

Sidecar konteyneri; depolama birimleri (volumes) ve yerel ağ (localhost) dahil olmak üzere ana konteynerle aynı [pod](/tr/pod/) kaynaklarını paylaşır.
Bu sayede ana konteyner tüm operasyonel yüklerden arınarak yalnızca kendi temel işlevine ve iş mantığına odaklanabilir.

Örneğin, birden çok mikroservisin her biri kendi sidecar konteynerini bir log toplama ajanı olarak kullanabilir; ana uygulama yerel bir dizine log yazarken, sidecar konteyneri bu dosyaları eşzamanlı okuyup merkezi log sistemine güvenle aktarabilir.
