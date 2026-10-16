---
title: Yük Dengeleyici (Load Balancer)
status: Completed
category: concept
tags: ["infrastructure", "networking", ""]
---

Yük dengeleyici, gelen ağ ve uygulama isteklerini bir uygulamanın birden çok örneği (instance) arasında verimli bir şekilde paylaştıran bir araçtır.
Her bir servisin yatay olarak ölçeklenebildiği bir [mikroservis mimarisini](/tr/microservices-architecture/) ele alalım.
Yük dengeleyici, ölçeklenen mikroservislerin önünde konumlanarak hiçbir örneğin aşırı yük altında kalmamasını ve trafiğin dengeli dağıtılmasını sağlar.
Yük dengeleyiciler yazılım veya donanım tabanlı olabilir.

## Hangi Sorunları Çözer

Modern uygulamalar ve web siteleri genellikle aynı anda yüz binlerce son kullanıcı isteğine yanıt verir.
Bu yüksek trafik hacmini karşılayabilmek için uygulamalar çoğunlukla yatayda ölçeklendirilir.
Ancak yatay ölçekleme yeni bir zorluğu da beraberinde getirir: Gelen trafik tüm servislere nasıl eşit ve adil biçimde dağıtılacaktır?
İşte yük dengeleyiciler tam olarak bu noktada devreye girer.

## Nasıl Yardımcı Olur

Yük dengeleyiciler, gelen tüm istekleri belirlenen bir algoritmaya (örneğin eşit paylaşımlı veya yüzdelik ağırlıklı) göre dinamik olarak birden çok servis örneğine dağıtır.
Bu sayede bir servis örneğinin aşırı yüklenmesi, diğerlerinin ise atıl kalması engellenir.
Özetle yükü sistem genelinde dengeli bir biçimde yayarak uygulamaların genel performansını, [güvenilirliğini](/tr/reliability/) ve nihai kullanıcı deneyimini güvence altına alır.
