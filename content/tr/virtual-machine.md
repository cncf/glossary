---
title: Sanal Makine (Virtual Machine - VM)
status: Completed
category: technology
tags: ["infrastructure", "fundamental", "virtualization"]
---

Sanal makine (Virtual Machine - VM), fiziksel bir bilgisayarın donanım kaynaklarını taklit eden ve kendi bağımsız işletim sistemine sahip olan sanal bir bilgi işlem ortamıdır.

## Hangi Sorunları Çözer

Geleneksel olarak her bir sunucu tek bir işletim sistemi çalıştırabilir ve donanım kaynaklarının çoğunlukla yalnızca küçük bir kısmını kullanabilirdi.
Yeni bir sunucu kurmak haftalar sürebilir ve fiziksel bakım maliyetleri çok yüksek olurdu.

## Nasıl Yardımcı Olur

Sanal makineler, bir [hipervizör](/tr/hypervisor/) katmanı aracılığıyla tek bir fiziksel sunucu üzerinde birden çok bağımsız işletim sisteminin aynı anda çalışmasını sağlar.
Bu sayede donanım kaynakları maksimum verimle kullanılır, sunucu sağlama süresi dakikalara iner ve sistemler arasında güçlü bir izolasyon sağlanır.
Modern bulut yerel mimarilerde sanal makineler, [konteynerlerin](/tr/container/) ve [Kubernetes](/tr/kubernetes/) kümelerinin çalıştığı altyapı tabanını oluşturur.
