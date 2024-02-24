---
title: Olaya Dayalı Mimari
status: Completed
category: concept
tags: ["mimari", "", ""]
---

## Nedir

Olaya dayalı mimari, olayların üretilmesini, işlenmesini ve kullanılmasını destekleyen bir yazılım mimarisidir. 
Olay, bir uygulamanın durumunda meydana gelen herhangi bir değişikliktir. 
Örneğin, bir araç paylaşım uygulamasında araç çağırmak bir olayı temsil eder. 
Bu mimari, olayların kaynaklarından (yolculuk talebinde bulunan uygulama) istenen alıcılara (yakınlardaki uygun sürücülerin uygulamaları) düzgün bir şekilde yönlendirilebileceği bir yapı oluşturur.

## Hangi Sorunları Çözer

Daha fazla veri gerçek zamanlı hale geldikçe, olayların yakalanmasını ve olay isteklerini işlemesi gereken uygun hizmete yönlendirilmesini sağlamak için güvenilir yollar bulmak giderek zorlaşır. 
Olayları ele almaya yönelik geleneksel yöntemlerde, mesajların uygun şekilde yönlendirildiğini veya gerçekten gönderildiğini ya da alındığını garanti etmenin bir yolu yoktur. 
Uygulamalar büyümeye başladıkça, olayları organize etmek daha zor hale gelir.

## Nasıl Yardımcı Olur

Olaya dayalı mimariler, tüm olaylar için bir ana merkez oluşturur (örneğin Kafka). 
Sonrasında olay üreticilerini (kaynak) ve olay tüketicilerini (alıcı) tanımlarsınız ve ana olay merkezi olayların akışının gerçekleştirilmesini garanti eder. 
Bu mimari, hizmetlerin ayrık kalmasını ve olayların üreticiden tüketiciye düzgün şekilde yönlendirilmesini sağlar. 
Üretici, genellikle HTTP protokolü ile gelen olayı alır ve olay bilgisini yönlendirir.
