---
title: Sanallaştırma
status: completed
category: technology
tags: ["temel kavram", "altyapı", "yöntem"]
---

Cloud native bilişimi bağlamında sanallaştırma,
bazen sunucu olarak da adlandırılan fiziksel bir bilgisayarın
birden fazla yalıtılmış işletim sistemi çalıştırmasına imkan sağlayan süreci ifade eder.
Bu yalıtılmış işletim sistemleri ve bu sistemler için ayrılmış bilişim kaynakları (işlemci, bellek, ve ağ),
sanal makineler (Virtual Machines) veya VM’ler olarak adlandırılır.
Bir [sanal makine](#)den bahsettiğimizde, yazılım ile tanımlanmış bir bilgisayardan bahsediyoruz.
Bu, gerçek bir bilgisayar gibi görünen ve davranan ancak donanımı diğer sanal makinelerle paylaşan bir şeydir.
[Bulut bilişim](/tr/cloud-computing/), aslında sanallaştırma teknolojisi tarafından desteklenmektedir.
Örnek olarak, AWS'den bir "bilgisayar" kiralayabilirsiniz; bu bilgisayar aslında bir VM'dir.

## Hangi Sorunları Çözer

Sanallaştırma, aynı fiziksel makinede birden fazla uygulamanın
güvenlik amacıyla birbirinden yalıtılmış halde çalışmasına izin vererek
donanım kullanımının iyileştirilmesi de dahil olmak üzere bir dizi sorunu giderir.


## Nasıl Yardımcı Olur

Sanal makinelerde çalışan uygulamalar, fiziksel bir bilgisayarı paylaştıklarının farkında değildir.
Sanallaştırma aynı zamanda veri merkezi kullanıcılarının, veri merkezine yeni bir bilgisayar eklemenin
fiziksel kısıtlamaları konusunda endişelenmeden yeni bir "bilgisayar"ı (diğer adıyla VM)
birkaç dakika içinde çalıştırmasına olanak tanır.
