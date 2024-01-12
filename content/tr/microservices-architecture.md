---
title: Mikroservis Mimarisi
status: Completed
tags: ["altyapı", "temel kavram", ""]
---

## Nedir

Mikroservis mimarisi, uygulamaları birbirinden bağımsız (mikro)servislere ayıran, her bir servisin belirli bir işlevselliğe odaklandığı bir mimari yaklaşımdır.
Bu servisler birbirleriyle yakın bir şekilde çalışır ve kullanıcıya tek bir sistem gibi görünür.
Netflix'i bir örnek olarak alalım.
Arayüzü, videolara erişim, arama ve önizleme yapmanıza izin verir.
Bu yetenekler muhtemelen tarayıcınızda oturum açma, arama ve önizleme çalıştırmak gibi belirli kabiliyetleri ele alan daha küçük servisler tarafından desteklenmektedir.

Bu mimari yaklaşım, geliştiricilere yeni özellikleri hızlı bir şekilde yayınlama veya işlevselliği güncelleme olanağı tanır, bu da tümüyle birbirine sıkıca bağlı olan monolitik (aşağıda anlatılıyor) bir uygulama durumunda mümkün olmazdı.

## Hangi Sorunları Çözer

Uygulamalar, her biri belirli bir kabiliyetten sorumlu farklı parçalardan oluşur.
Belirli bir işlevsellik için talep, diğer uygulama parçalarına olan talep ile aynı oranda artmayabilir veya azalmayabilir.
Netflix örneğimize geri dönelim.
Diyelim ki büyük bir pazarlama kampanyasının ardından Netflix, kayıtlarda büyük bir artış yaşadı, ancak günün erken saatlerinde yayınlanan içerikler nispeten sabit kaldı.
Kayıtlardaki bu artış, daha fazla kayıt kabiliyeti kapasitesi gerektirir.
Geleneksel olarak (monolitik yaklaşım), artışı karşılamak için tüm uygulamanın ölçeklendirilmesi gerekecekti. Bu da oldukça verimsiz bir kaynak kullanımı anlamına gelirdi.

Monolitik mimariler ayrıca geliştiricilerin tasarım hatalarına düşmesini kolaylaştırır.
Çünkü tüm kod aynı yerde bulunur, bu kodu sıkıca bağlamak daha kolay hale gelir ve sorumlulukların ayrılma prensibini uygulamak daha zorlaşır.
Monolitler genellikle geliştiricilere herhangi bir değişiklik yapmadan önce tüm kod tabanını anlamalarını gerektirir.
Mikroservis mimarisi, bu zorluklara bir yanıttır.


## Nasıl Yardımcı Olur

İşlevsellik farklı mikroservislere ayırmak, bunları bağımsız bir şekilde dağıtmayı, güncellemeyi ve ölçeklendirmeyi kolaylaştırır.
Ayrıca farklı ekiplerin daha büyük bir uygulamanın küçük bir bölümünde aynı anda çalışmasına izin verir, böylece uygulamanın geri kalan kısmını yanlışlıkla olumsuz etkileme riskini azaltır.
Mikroservis mimarisi birçok sorunu çözerken, operasyonel ek iş yükü de yaratır. Böylece dağıtmanız ve izlemeniz gereken şeyler büyük ölçüde artar.
Birçok [bulut-tabanlı teknoloji](../cloud-native-tech/), mikroservisleri daha kolay dağıtmayı ve yönetmeyi amaçlar.
