---
title: Durum Bilgisine Sahip Uygulamalar
status: Completed
category: concept
tags: ["temel kavram", "uygulama", ""]
---

Durum bilgisine sahip (stateful) ve durum bilgisine sahip olmayan (stateless) uygulamalardan bahsettiğimizde durum (state), uygulamanın tasarlandığı gibi çalışması için saklaması gereken verileri ifade eder. 
Örneğin, alışveriş sepetinizi hatırlayan herhangi bir çevrimiçi mağaza durum bilgisi olan bir uygulamadır.

Günümüzde kullandığımız çoğu uygulama en azından kısmen durum bilgisine sahip uygulamalardır. 
Ancak cloud native ortamlarında durum bilgisine sahip uygulamalar zorluk oluşturur. 
Bunun nedeni cloud native uygulamalarının çok dinamik olmasıdır. 
Cloud native uygulamalar ölçeklendirilebilir, yeniden başlatılabilir ve yer değiştirebilirler. 
Ancak yine de durumlarına erişebilmeleri gerekir.

Bu yüzden, durum bilgisine sahip uygulamalar, veritabanları gibi her yerden erişilebilen bir tür depolama alanına ihtiyaç duyarlar.
