---
title: Sürekli Teslimat (CD)
status: Completed
category: concept
tags: ["yöntem", "uygulama", ""]
---

## Nedir

Genellikle CD olarak kısaltılan sürekli teslimat (continuous delivery), 
kod değişikliklerinin otomatik olarak bir kabul ortamına dağıtıldığı (veya sürekli dağıtım (continuous deployment) 
durumunda üretime otomatik olarak dağıtıldığı) bir dizi uygulamadır. 
CD, yazılımın dağıtımdan önce yeterince test edilmesini sağlayacak kritik prosedürleri içerir ve 
gerektiğinde değişiklikleri geri almak için bir yol sunar. 
Sürekli entegrasyon (continuous integration - CI), sürekli teslimata yönelik ilk adımdır (yani, değişiklikler test edilmeden ve dağıtılmadan önce temiz bir şekilde birleştirilmelidir).

## Hangi Sorunları Çözer

Güvenilir güncellemelerin dağıtımı büyük ölçeklerde bir sorun haline gelir. 
İdeal koşullarda, son kullanıcılara daha iyi ürün sunmak için daha sık dağıtım yapmalıyız. 
Ancak, bunu manuel olarak yapmak, her değişiklik için yüksek işlem maliyetleri anlamına gelir. 
Geçmişte, bu maliyetlerden kaçınmak için organizasyonlar daha az sıklıkta ürünlerini piyasaya sürerek bir kerede daha fazla değişiklik dağıtmış ve bir şeylerin yanlış gitme riskini arttırmıştır.

## Nasıl Yardımcı Olur

CD stratejileri, canary veya blue-green sürümleri gibi çeşitli dağıtım stratejileri kullanarak yazılımı test eden ve 
dağıtan tamamen otomatik bir üretim yolu oluşturur. 
Bu, geliştiricilerin kodu sık sık dağıtmasına olanak tanıyarak yeni revizyonun test edildiğinden emin olmalarını sağlar. Tipik olarak, CD stratejilerinde feature branching veya pull request aksine gövde tabanlı geliştirme (trunk-based development) kullanılır.

