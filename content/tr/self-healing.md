---
title: Kendi Kendini İyileştirme (Self-Healing)
status: Completed
category: property
tags: ["fundamental", "architecture", "reliability"]
---

Kendi kendini iyileştirme (self-healing), bir sistemin insan müdahalesine gerek duymadan arızaları ve olağandışı durumları otomatik olarak algılama ve düzeltme yeteneğidir.

## Hangi Sorunları Çözer

Geleneksel mimarilerde bir servis veya sunucu çöktüğünde sorunu tespit etmek, arızalanan bileşeni yeniden başlatmak veya yedek sunucuya geçiş yapmak için sistem yöneticilerinin manuel müdahalesi gerekirdi.
Bu durum hizmet kesinti sürelerini uzatır, nöbetçi mühendisler üzerinde aşırı stres yaratır ve hizmet kalitesi sözleşmelerinin (SLA) ihlal edilmesine yol açardı.

## Nasıl Yardımcı Olur

[Kubernetes](/tr/kubernetes/) gibi bulut yerel platformlar, sürekli olarak çalışan bileşenlerin durumunu denetler (health checks / liveness probes).
Bir konteyner veya [pod](/tr/pod/) yanıt vermeyi kestiğinde, platform arızalı bileşeni otomatik olarak sonlandırır ve yerine anında yeni bir tane başlatır.
Benzer şekilde arızalanan bir [düğüm (node)](/tr/nodes/) üzerindeki iş yükleri otomatik olarak sağlıklı düğümlere tahliye edilir.
Bu sayede sistem kesintisiz [güvenilirlik](/tr/reliability/) ve yüksek erişilebilirlik sunar.
