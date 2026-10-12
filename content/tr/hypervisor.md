---
title: Hipervizör (Hypervisor)
status: Completed
category: technology
tags: ["infrastructure", "virtualization", ""]
---

Hipervizör, fiziksel bir [sunucunun (bare metal machine)](/tr/bare-metal-machine/) donanım kaynaklarını (işlemci, bellek, ağ ve depolama) mantıksal alt parçalara bölerek [sanallaştırmayı](/tr/virtualization/) mümkün kılan ve altyapı limitlerine ulaşılana kadar [sanal makineler (VM)](/tr/virtualization/) oluşturan bir yazılım veya donanım katmanıdır.

## Hangi Sorunları Çözer

Geleneksel mimaride fiziksel bir sunucu yalnızca tek bir işletim sistemi çalıştırabilirdi.
Yeni bir sunucu temin etmek ve devreye almak zaman alır; özel ortamlara sahip altyapı yatırımları ve bunları izleyecek operasyon ekipleri gerektirirdi.
Sunucuların yüksek işlem gücüne rağmen tek bir işletim sistemine bağlı kalması, donanım kaynaklarının atıl ve verimsiz kullanılmasına yol açardı.
Uygulamaları doğrudan fiziksel donanım üzerinde çalıştırmak, dalgalanan trafik ve ölçekleme taleplerine hızla yanıt vermekte yetersiz kalıyordu.

## Nasıl Yardımcı Olur

[Bulut bilişim](/tr/cloud-computing/) dünyasında hipervizörler temel taşıyıcı bir rol üstlenir.
Sanal makine oluşturma sürecini çok daha hızlı, yinelenebilir ve esnek hale getirir.
Donanım kaynakları mantıksal olarak bölünerek sanal makinelere atanır ve bu makineler tamamen yalıtılmış birimler olarak bağımsız çalışır.
Böylece bir sanal makinede ortaya çıkan arıza diğerlerini etkilemez ve her sanal makineye farklı işletim sistemleri kurulabilir.
Fiziksel donanımı soyutlayan hipervizör; düşük seviyeli kaynak yönetimini üstlenerek sanal makineleri donanımdan bağımsız hale getirir, uygulamaların buluta taşınmasını ve servislerin otomatik ölçeklenmesini kolaylaştırır.
Zaman içinde bu [çok kiracılı (multi-tenant)](/tr/multitenancy/) mimari, kurumsal bilgi işlem ve altyapı maliyetlerini ciddi oranda düşürmüştür.
