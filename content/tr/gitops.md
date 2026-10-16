---
title: GitOps
status: Completed
category: Concept
tags: ["methodology", "", ""]
---

GitOps, yazılım uygulamalarını ve altyapıyı; Git gibi bir sürüm kontrol sisteminde tanımlanan hedeflenen durumları ile gerçek durumlarını sürekli değerlendirerek ve uzlaştırarak (reconcile) yönetmeye yönelik bir dizi uygulamadır.
Durumların uzlaştırılması, kaynakların dağıtım veya güncellemeler yoluyla tanımlanan duruma uyacak şekilde değiştirilmesini kapsar.

GitOps yaklaşımında bir sistemin durumu veya yapılandırması, genellikle sürüm kontrol sistemi olan tek doğruluk kaynağında (source of truth) saklanan dosyalarda eksiksiz olarak tanımlanır.
Bununla birlikte, bir Kubernetes Operatörü veya Yapay Nesne Deposu (Artifact Storage) gibi farklı bir doğruluk kaynağı da olabilir.
Doğruluk kaynağı, canlı sistemi tanımlanan durumla uyumlu hale getiren otomatik süreçler tarafından sürekli değerlendirilir.
Bu süreçler gerektiğinde canlı sistemi güncelleyerek uygulamalar, altyapı ve operasyonel görevler genelinde tutarlılık sağlar.

## Hangi Sorunları Çözer

Altyapı ve uygulama yapılandırmalarını yönetmeye yönelik geleneksel yaklaşımlar; yapılandırma sapmasına (configuration drift), başarısız dağıtımlara, tutarsız ortamlara ve geçmiş değişikliklerin izlenmesinde zorluklara yol açabilir.
Bu durumlar kararsızlığa neden olur ve bakım yükünü artırır.
Yapılandırma sapmasını yöneten tek bir doğruluk kaynağı bulunmadığında, bu sapmanın tespit edilmesi ve çözülmesi güçleşir; bu da kesintileri veya arızaları giderme süresini uzatır.

## Nasıl Yardımcı Olur

GitOps; kuruluşların altyapı, uygulama geliştirme ve dağıtım yaşam döngüsünün tamamını tek ve birleşik bir süreç üzerinden yönetmelerine yardımcı olur.

GitOps, değişikliklerin şeffaflığı ve izlenebilirliği, bildirimsel (declarative) durumlar sayesinde güvenilirlik ve güvenlik, ayrıca geri alma (rollback), eski sürüme dönme ve kendi kendini iyileştirme (self-healing) özellikleri gibi pek çok avantaj sağlar.
