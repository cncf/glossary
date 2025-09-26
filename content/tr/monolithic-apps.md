---
title: Monolitik Uygulamalar
status: Completed
category: concept
tags: ["mimari", "temel kavram", ""]
---

Monolitik bir uygulama, tüm işlevselliği tek bir dağıtılabilir programda içerir. 
Bu genellikle bir uygulamayı oluştururken en basit ve en kolay başlangıç noktasıdır. 
Ancak uygulama büyüyüp karmaşıklaştıkça monolitik uygulamaların bakımı zorlaşabilir. 
Aynı kod tabanı üzerinde daha fazla geliştirici çalıştığında, çakışan değişikliklerin olasılığı ve geliştiriciler arasındaki iletişim ihtiyacı artar.


## Hangi Sorunları Çözer

Bir uygulamayı mikro servislere dönüştürmek, operasyonel ek yükü arttırır. 
Çünkü test edilecek, dağıtımı yapılacak ve çalışır durumda tutulacak daha fazla yapı vardır. 
Bir ürünün ilk oluşturulma aşamasında bu karmaşıklığı ertelemek ve ürünün başarılı olduğu belirlenene kadar monolitik bir uygulama oluşturmak avantajlı olabilir.


## Nasıl Yardımcı Olur

İyi tasarlanmış bir monolitik uygulama, bir uygulamayı çalışır hale getirmenin en basit yolu olan ilkeleri destekleyebilir. Monolitik uygulamanın iş değeri başarılı olduğunda, mikro servislere ayrıştırılabilir. 
Mikro servis tabanlı bir uygulamanın başarılı olduğu kanıtlanmadan önce hazırlanması, mühendislik uygulamalarına gereğinden fazla çaba gösterildiği anlamına gelebilir. 
Uygulama başarılı olmazsa, bu çaba boşa gitmiş olur.
