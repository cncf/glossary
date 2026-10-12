---
title: Sola Kaydırma (Shift Left)
status: Completed
category: methodology
tags: ["methodology", "security", "devops"]
---

Sola kaydırma (shift left), yazılım geliştirme yaşam döngüsünde (SDLC) test, güvenlik ve uyumluluk denetimleri gibi kritik aşamaların sürecin sonundan geliştirmenin en erken aşamalarına ("soluna") taşınması pratiğidir.

## Hangi Sorunları Çözer

Geleneksel yazılım teslim modellerinde güvenlik ve performans testleri genellikle dağıtım öncesindeki en son aşamada yapılırdı.
Bu durum, sistem mimarisinin derinliklerine işlemiş kritik hataların çok geç keşfedilmesine yol açar; hataları düzeltmek kat kat daha maliyetli, zaman alıcı ve sancılı hale gelirdi.
Ayrıca geliştirme ve güvenlik ekipleri arasında sürtüşmelere ve teslimat gecikmelerine neden olurdu.

## Nasıl Yardımcı Olur

Sola kaydırma yaklaşımı, güvenlik ve kalite denetimlerini geliştiricinin yerel ortamına ve otomatikleştirilmiş [CI/CD](/tr/continuous-integration/) boru hatlarına entegre eder.
Statik kod analizi (SAST), bağımlılık güvenlik taramaları ve otomatik birim testleri sayesinde hatalar henüz kod yazılırken yakalanır.
Böylece yazılım güvenliği [DevSecOps](/tr/devsecops/) ilkeleriyle birleştirilerek daha güvenilir, hızlı ve düşük maliyetli teslimatlar gerçekleştirilir.
