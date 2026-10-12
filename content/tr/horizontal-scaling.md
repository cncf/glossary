---
title: Yatay Ölçekleme (Horizontal Scaling)
status: Completed
category: Concept
tags: ["infrastructure", "", ""]
---

Yatay ölçekleme, tekil düğümlere daha fazla işlem kaynağı eklemek yerine (bu durum [dikey ölçekleme](/tr/scalability/) olarak adlandırılır), sisteme daha fazla [düğüm (node)](/tr/nodes/) ekleyerek sistem kapasitesinin artırılması tekniğidir.
Örneğin 4 GB belleğe (RAM) sahip bir sistemimiz olduğunu ve kapasitesini 16 GB'a çıkarmak istediğimizi varsayalım.
Yatay ölçekleme yaklaşımı, tek bir 16 GB RAM'li makineye geçmek yerine sisteme her biri 4 GB RAM'e sahip 3 yeni düğüm ekleyerek kapasite artışını sağlar.

Bu yöntem, iş yükünü daha dengeli paylaştırmak için ortama yeni uygulama örnekleri veya düğümler ekleyerek sistem performansını ve dayanıklılığını artırır.
Basit bir ifadeyle tek bir sunucunun kapasitesini büyütmek yerine, sunucuların üzerindeki yükü dağıtmayı hedefler.

## Hangi Sorunları Çözer

Bir uygulamaya yönelik talep mevcut uygulama örneğinin sınırlarını aştığında, sistemi [ölçeklendirmenin](/tr/scalability/) (kapasite eklemenin) bir yolunu bulmamız gerekir.
Bunu ya sisteme yeni düğümler dahil ederek (yatay ölçekleme) ya da mevcut düğümlerin donanım kaynaklarını artırarak (dikey ölçekleme) gerçekleştirebiliriz.
Ancak dikey ölçeklemenin fiziksel donanım tavanı ve tek hata noktası (single point of failure) oluşturma gibi kısıtları vardır.

## Nasıl Yardımcı Olur

Yatay ölçekleme, uygulamaların altyapı kümesinin sunduğu sınırlara kadar esnek bir şekilde büyümesine olanak tanır.
Sisteme yeni örnekler eklendikçe uygulama çok daha yüksek sayıda eşzamanlı isteği işleyebilir hale gelir.
Örneğin tek bir düğüm saniyede 1.000 isteği karşılayabiliyorsa, eklenen her yeni düğüm toplam kapasiteyi saniyede yaklaşık 1.000 istek daha artırır.
Böylece belirli bir makinenin sınırlarına takılmadan uygulamanın eşzamanlı işlem gücü artırılmış olur.

## İlgili Terimler

* [Dikey Ölçekleme (Vertical Scaling)](/tr/scalability/)
* [Otomatik Ölçekleme (Auto Scaling)](/tr/auto-scaling/)
