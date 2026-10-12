---
title: Ingress
status: Completed
category: technology
tags: ["fundamental"]
---

Ingress, bir küme (cluster) içerisinde çalışan bir konteynere veya konteyner grubuna dış dünyadan gelen internet trafiğini yönetmeye yarayan kurallar bütünüdür.
Temelde iki temel bileşenden oluşur: Ingress kaynağı (resource) ve Ingress denetleyicisi (controller).
Ingress kaynağı, diğer bildirim (manifest) dosyalarıyla birlikte yer alan ve yöneticilerin dış trafik yönlendirmesini yapılandırmasını sağlayan bir yapılandırma dosyasıdır.
Ingress denetleyicisi ise Ingress kaynağında tanımlanan kurallara göre trafiğin asıl yönlendirmesini gerçekleştiren web sunucusu teknolojisidir.

## Hangi Sorunları Çözer

Bulut yerel web uygulamaları birden çok servisten meydana gelir ve çoğu zaman bu [servislerin](/tr/service/) kullanıcılar tarafından tarayıcı üzerinden erişilebilir olması gerekir.
Bu uygulamayı çalıştırmak için [Kubernetes](/tr/kubernetes/) kullanıldığında, her bir uygulama servisini dış dünyaya açmak gerekir.
Bunun en doğrudan yolu bir Kubernetes Load Balancer Servisi kullanmaktır.
Ancak böyle bir servis oluşturmak, altyapı katmanında yeni bir yük dengeleyici bileşeninin ayağa kalkmasına yol açar.
Bu durum hem ek maliyet ve yönetim yükü doğurur hem de oluşturulan her yeni yük dengeleyicinin kendine ait ayrı bir harici IP adresi olur.
Kullanıcılar açısından tek bir uygulamaya erişmek için farklı IP veya adresler arasında gezinmek zorunda kalmak olumsuz bir kullanıcı deneyimi yaratır.

## Nasıl Yardımcı Olur

Ingress kaynağı, trafiğin bir uygulamanın servislerine nasıl dengeleneceğini ve yönlendirileceğini merkezi olarak yapılandırmanızı sağlar.
Ingress denetleyicisi tek bir giriş noktası URL'i (örneğin www.ornek-adres.com) sunar ve trafiği farklı URL yollarına (paths - www.ornek-adres.com/yol) göre yönlendirir ve dengeler.
Ingress denetleyicisi, küme içinde çalışan ve Ingress kaynağında tanımlanan kuralları yorumlayan bir bileşendir.
Küme yöneticileri; Nginx, Traefik, HAProxy gibi çeşitli teknolojiler arasından kendi ihtiyaçlarına uygun bir Ingress denetleyicisini seçebilir.
Böylece uygulama birden fazla servisten oluşsa bile son kullanıcı tek bir URL üzerinden tüm servislere erişebilir.
Bu yaklaşım, altyapı düzeyinde çok sayıda bağımsız yük dengeleyici kurma ihtiyacını ortadan kaldırır, güvenlik duvarı ve yönlendirme kurallarının yönetimini kolaylaştırır.
Trafik yönlendirme ve yönetimini merkezileştirerek operasyonel maliyetleri düşürür ve kaynak kullanımını optimize eder.
