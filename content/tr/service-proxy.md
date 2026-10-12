---
title: Servis Vekil Sunucusu (Service Proxy)
status: Completed
category: technology
tags: ["networking", "architecture", ""]
---

Servis vekil sunucusu (service proxy), iki veya daha fazla servis arasında konumlanarak gelen ve giden ağ trafiğini denetleyen, yönlendiren ve yöneten bir ağ aracıdır.

## Hangi Sorunları Çözer

[Mikroservis mimarisinde](/tr/microservices-architecture/) servislerin doğrudan birbirleriyle konuşması; yük dengeleme, kimlik doğrulama, şifreleme ve hata anında yeniden deneme (retry) gibi mantıkların her bir servisin koduna ayrı ayrı yazılmasını zorunlu kılar.
Bu durum kod tekrarına, güvenlik açıklarına ve yönetim karmaşasına neden olur.

## Nasıl Yardımcı Olur

Servis vekil sunucusu, ağ iletişimini uygulama kodundan tamamen soyutlar.
İstekleri akıllıca yönlendirir, [yük dengeleme](/tr/load-balancer/) yapar, [aktarım katmanı güvenliği (TLS)](/tr/transport-layer-security/) ile iletişimi şifreler ve teleometri verileri toplar.
Envoy gibi modern vekil sunucular, [servis ağlarının (service mesh)](/tr/service-mesh/) temel veri düzlemi (data plane) yapı taşını oluşturur.
