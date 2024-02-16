---
title: İstemci-Sunucu Mimarisi
status: Completed
category: concept
tags: ["mimari", "temel kavram", ""]
---

## Nedir

İstemci-sunucu mimarisinde, bir uygulamayı oluşturan mantık (veya kod) iki veya daha fazla bileşen arasında bölünür. 
Bunlar, işin yapılmasını isteyen bir istemci (örn. web tarayıcınızda çalışan Gmail web uygulaması) ve bu isteği karşılayan bir veya daha fazla sunucudur (örn. Google’ın buluttaki bilgisayarlarında çalışan “e-posta gönder” servisi). 
Bu örnekte, yazdığınız e-postalar istemci (web tarayıcınızda çalışan uygulaması) tarafından bir sunucuya (Gmail’in giden e-postalarınızı alıcılarına ileten bilgisayarları) gönderilir.

Bu, tüm işi tek bir yerde yapan bağımsız uygulamaların (masaüstü uygulamaları gibi) tersidir. 
Örneğin, Microsoft Word gibi bir kelime işleme programı bilgisayarınıza kurulabilir ve tamamen bilgisayar üzerinden çalıştırılabilir.

## Hangi Sorunları Çözer

İstemci-sunucu mimarisi, bağımsız uygulamaların karşılaştığı büyük bir zorluğu çözer: düzenli güncellemeler. 
Bağımsız bir uygulamada, kullanıcıların her güncelleme için en son sürümü indirip yüklemesi gerekir. 
Göz atabilmek için Amazon’un tüm ürün kataloğunu kendi bilgisayarınıza indirmek zorunda kaldığınızı hayal edin!

## Nasıl Yardımcı Olur

Uygulama mantığını uzak bir sunucu ya da serviste uygulayarak, operatörler istemci tarafındaki mantığı değiştirmeye gerek kalmadan bunu güncelleyebilirler. 
Bu, güncellemelerin çok daha sık yapılabileceği anlamına gelir. Verilerin sunucuda depolanması, birçok istemcinin aynı verileri görmesini ve paylaşmasını sağlar. 
Çevrimdışı bir kelime işleme programına kıyasla çevrimiçi bir kelime işleme programı kullanmak arasındaki farkı düşünün. Çevrimiçi programda, dosyalarınız sunucu tarafında bulunur ve bunları sunucudan indiren diğer kullanıcılarla paylaşılabilir. Oysa geçmişte, dosyaların çıkarılabilir medyaya (disketlere!) kopyalanması ve onun aracılığıyla paylaşılması gerekiyordu.
