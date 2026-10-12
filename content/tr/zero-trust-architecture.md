---
title: Sıfır Güven Mimarisi (Zero Trust Architecture)
status: Completed
category: concept
tags: ["security", "architecture", ""]
---

Sıfır Güven Mimarisi (Zero Trust Architecture - ZTA), "asla güvenme, her zaman doğrula" ilkesine dayanan modern bir kurumsal siber güvenlik modelidir.

## Hangi Sorunları Çözer

Geleneksel çevre güvenliği (kale-ve-hendek) modellerinde, kurumsal ağın içindeki kullanıcılar ve cihazlar varsayılan olarak güvenilir kabul edilirdi.
Bir saldırgan dış çevre savunmasını aşıp ağ içine sızdığında, ağ genelinde yatayda serbestçe hareket edebilir ve kritik sistemlere erişebilirdi.

## Nasıl Yardımcı Olur

Sıfır güven mimarisinde ağın içi veya dışı ayrımı yapılmaz; hiçbir kullanıcıya, cihaza veya servise peşinen güvenilmez.
Her erişim isteği; kimlik doğrulama, yetkilendirme ve bağlamsal risk analizinden geçirilerek doğrulanır.
Mikrosegmantasyon ve en az yetki (least privilege) prensipleri uygulanarak saldırganların hareket alanı kısıtlanır; bulut yerel ortamlar [karşılıklı TLS (mTLS)](/tr/mutual-transport-layer-security/) ve rol tabanlı erişim denetimi ile korunur.
