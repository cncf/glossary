---
title: Değiştirilemez Altyapı
status: Completed
category: property
tags: ["altyapı", "özellik", ""]
---

Değiştirilemez Altyapı, dağıtıldıktan sonra değiştirilemeyen bilgisayar altyapısını ([sanal makineler](/tr/virtual-machine/), [konteynerler](/tr/container/), ağ cihazları) ifade eder. Bu, yetkisiz değişikliklerin üzerine yazan otomatik bir işlem veya ilk başta değişikliklere izin vermeyen bir sistem aracılığıyla sağlanabilir. Konteynerler, değiştirilemez altyapının iyi bir örneğidir. Çünkü konteynerlere kalıcı değişiklikler sadece konteynerin yeni bir sürümünü oluşturarak veya mevcut konteyneri görüntüsünden yeniden oluşturarak yapılabilir.

Yetkisiz değişiklikleri engelleyerek veya tanımlayarak, değiştirilemez altyapılar güvenlik risklerini belirlemeyi ve azaltmayı daha kolay hale getirir. Böyle bir sistem işletmek çok daha basitleşir çünkü yöneticiler onunla ilgili varsayımlar yapabilirler. Sonuçta, yöneticiler kimsenin hata yapmadığını veya yapılan değişiklikleri iletmeyi unutmadığını bilirler. Değiştirilemez altyapı, altyapıyı oluşturmak için gereken tüm otomasyonun (örneğin, Git gibi) sürüm kontrolünde depolandığı [kod olarak altyapı ile](/tr/infrastructure-as-code/) uyumlu çalışır. Bu değiştirilemezlik ve sürüm kontrolü kombinasyonu, bir sisteme yapılan her yetkilendirilmiş değişikliğin kalıcı bir denetim kaydı olduğu anlamına gelir.
