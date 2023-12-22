---
title: Konteynerler
status: Completed
category: technology
tags: ["uygulama", "temel kavram", ""]
---

## Nedir

Konteyner, bir bilgisayarın işletim sistemi tarafından yönetilen, kaynak ve yetenek kısıtlamalarına sahip, çalışan bir işlemdir.
Konteyner işlemi içerisinde erişilebilir olan dosyalar konteyner imajı olarak paketlenmiştir.
Konteynerler aynı makinede birbirlerine bitişik olarak çalışır,
ancak genellikle işletim sistemi ayrı konteyner işlemlerinin birbiriyle etkileşime girmesini engeller.

## Hangi Sorunları Çözer

Konteynerler öncesinde, her uygulamayı çalıştırmak için ayrı makineler gerekirdi.
Tek bir uygulamanın çalışması için kullanılan her makine CPU, bellek ve disk alanı gerektiren
kendi işletim sistemine de ihtiyaç duymaktadır.
Buna ek olarak işletim sisteminin bakımı, yükseltilmesi ve başlatılması da bir diğer önemli zahmet kaynağıdır.

## Nasıl Yardımcı Olur

Konteynerler aynı işletim sistemini ve bu işletim sisteminin üzerinde durduğu makinenin kaynaklarını paylaşarak
işletim sisteminin kaynak yükünü dağıtır ve fiziksel makinenin verimli kullanımını sağlar.
Bu davranış, konteynerlerin birbirleriyle etkileşime girebilmelerinin genellikle sınırlı olması nedeniyle mümkündür
ve aynı fiziksel makinede birden fazla uygulamanın çalıştırılmasına olanak tanır.

Ancak limitler de mevcuttur.
Konteynerler aynı işletim sistemini paylaştığı için, işlemlerin alternatiflere göre daha az güvenli olduğu düşünülebilir.
Konteynerler aynı zamanda paylaşılan kaynaklar üzerinde de sınırlamalar gerektirir.
Kaynakları doğru yönetmek için sistem yöneticilerinin veya geliştiricilerin,
konteynerin bellek ve CPU kullanımını kısıtlaması ve sınırlandırması gerekir.
Böylece, işletim sistemindeki diğer işlemler ve uygulamaların performansı kötü yönde etkilenmemiş olur.
