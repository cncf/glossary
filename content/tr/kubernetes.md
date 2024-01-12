---
title: Kubernetes
status: Completed
category: technology
tags: ["altyapı", "temel kavram", ""]
---

## Nedir

Kubernetes, genellikle K8s olarak kısaltılan, açık kaynaklı bir konteyner orkestratörüdür.
Modern altyapılarda konteynerleştirilmiş uygulamaların yaşam döngüsünü otomatikleştirir ve bir "veri merkezi işletim sistemi" olarak işlev görerek uygulamaları dağıtık bir sistem üzerinde yönetir.

Kubernetes, [konteynerleri](../container/) bir [küme](../cluster/) içindeki [düğümler](../nodes/) üzerine planlar ve yük dengeleyici ve kalıcı depolama gibi birkaç altyapı kaynağını bir araya getirerek konteynerleştirilmiş uygulamaları çalıştırır.

Kubernetes, kullanıcıların uygulamaları bildirimsel (aşağıya bakınız) ve tekrarlanabilir bir şekilde  dağıtmalarına olanak tanıyan bir otomasyon ve genişletilebilirlik sağlar.
Kubernetes, [API’si](../application-programming-interface/) aracılığıyla genişletilebilir, bu da tecrübeli Kubernetes kullanıcılarının kendi ihtiyaçlarına göre otomasyon yeteneklerinden faydalanmalarına olanak tanır.

## Hangi Sorunları Çözer

Altyapı otomasyonu ve bildirimsel yapılandırma yönetimi uzun süredir önemli kavramlar idi, ancak [bulut bilişim](../cloud-computing/) popülerlik kazandıkça daha önemli hale geldiler.
Bilişim kaynaklarına olan talep arttıkça ve organizasyonlar daha az mühendisle daha fazla operasyonel yeteneğe sahip olmak zorunda kalırken, bu talebi karşılamak için yeni teknolojilere ve çalışma yöntemlerine ihtiyaç duyulmaktadır.

## Nasıl Yardımcı Olur

Geleneksel [kod olarak altyapı](../infrastructure-as-code/) (IaC) araçlarına benzer şekilde, Kubernetes de otomasyona yardımcı olur. Ancak konteynerlerle çalışma avantajına sahiptir.
Konteynerler, sanal veya fiziksel makinelere göre, yapılandırma sapmasına daha dayanıklıdır. 

Ayrıca, Kubernetes bildirimsel olarak çalışır, yani operatörler bir şeyi nasıl yapılacağının talimatını vermek yerine altyapının nasıl görünmesi gerektiğini açıklarlar (genellikle manifest dosyaları örneğin, YAML dosyası, olarak).
Kubernetes ardından "nasıl" ile ilgilenir.
Bu, Kubernetes'in kod olarak altyapı (IaC) ile son derece uyumlu olmasına neden olur.

Kubernetes aynı zamanda kendi kendini iyileştirir.
Kümenin gerçek durumu her zaman operatörün istenen durumuyla eşleşir.
Kubernetes, manifest dosyalarında tanımlanan şeyden sapma algıladığında, bir Kubernetes denetleyicisi devreye girer ve bunu düzeltir.
Kubernetes'in kullandığı altyapı sürekli değişebilir, ancak Kubernetes daima ve otomatik olarak değişikliklere adapte olur ve istenen durumla eşleştiğinden emin olur.
