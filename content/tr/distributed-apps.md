---
title: Dağıtık Uygulamalar
status: Completed
category: concept
tags: ["mimari", "", ""]
---

## Nedir

Dağıtık uygulama, işlevselliğin birden fazla küçük, bağımsız parçaya bölündüğü bir uygulamadır. 
Dağıtık uygulamalar genellikle daha büyük bir uygulama içinde farklı sorunları ele alan tekil mikro servislerden oluşur. Cloud native ortamında, tekil bileşenler genellikle bir küme üzerinde konteyner olarak çalışır.

## Hangi Sorunları Çözer

Tek bir bilgisayar üzerinde çalışan uygulama tek bir hata noktasına sahiptir. 
Eğer bu bilgisayar arızalanırsa, uygulama kullanılamaz hale gelir. 
Dağıtık uygulamalar genellikle monolitik uygulamalarla karşılaştırılır. 
Bileşenler bağımsız olarak ölçeklendirilemediği için monolitik bir uygulamanın ölçeklendirilmesi daha zor olabilir. 
Ayrıca, daha fazla geliştiricinin sınırları iyi tanımlanmamış ortak bir kod temeli üzerinde çalışması gerektiğinden, monolitik bir uygulama büyüdükçe geliştiricinin hızı üzerinde bir engel haline gelebilir.

## Nasıl Yardımcı Olur

Uygulamayı farklı parçalara bölüp birçok yerde çalıştırırken sistemin bütünü daha fazla arızayı tolere edebilir. 
Ayrıca, uygulamanın yatay ölçeklendirme yeteneğinden yararlanmasını sağlar. 
Ancak bunun bir bedeli vardır: uygulamada artan karmaşıklık ve operasyonel ek yük. 
Bu tarz bir dizaynda tek bir uygulama yerine çok sayıda uygulama bileşeni çalıştırırsınız.
