---
title: Konteynerleştirme
status: Completed
category: Teknoloji
tags: ["uygulama", "", ""]
---

## Nedir

Konteynerleştirme, bir uygulamayı ve bağımlılıklarını bir konteyner imajına paketleme sürecidir.
Konteyner oluşturma süreci, [Open Container Initiative](https://opencontainers.org/) (OCI) standardına uygun olmayı gerektirir.
Bu standarta uygun bir konteyner imajı üretiliyorsa, hangi konteynerleştirme aracının kullanıldığı önemli değildir.

## Hangi Sorunları Çözer 

Konteynerler yaygınlaşmadan önce, organizasyonlar tek bir bare-metal (fiziksel bilgisayar)
makinede birden fazla uygulamayı düzenlemek için sanal makineleri (VM'ler) kullanırdı. 
VM'ler, konteynerlardan önemli ölçüde daha büyüktürler ve çalıştırmak için bir hipervizöre ihtiyaç duyarlar.
Bu büyük VM şablonlarının depolanması, yedeklenmesi ve transfer edilmesi gerektiğinden, VM şablonlarının oluşturulması da yavaştır. 
Ayrıca, VM'ler yapılandırma sapması yaşayabilir ve bu, değiştirilemezlik ilkesine aykırıdır.

## Nasıl Yardımcı Olur

Konteyner imajları hafiftir (geleneksel VM'lerin aksine) ve 
konteynerleştirme süreci bir bağımlılık listesi içeren bir dosya gerektirir.
Bu dosya sürüm kontrolüne tabi tutulabilir ve imaj oluşturma süreci otomatikleştirilebilir.
Bu sayede, otomatik süreçler bu imaj oluşturma işiyle ilgilendiği
için organizasyonlar diğer önceliklere odaklanabilir. 
Bir konteyner imajı, içeriğine ve yapılandırmasına
tam olarak bağlı olan benzersiz bir tanımlayıcı ile saklanır.
Konteynerler planlandığında ve yeniden planlandığında
her zaman başlangıç durumlarına sıfırlanır, bu da yapılandırma sapmasını ortadan kaldırır.
