---
title: Kod Olarak Politika
status: Completed
category: Kavram
tags: ["metodoloji", "", ""]
---

Kod Olarak Politika, politikaların tanımlarının makine tarafından okunabilir ve işlenebilir şekilde bir veya daha fazla dosyada saklanması pratiğidir. Bu yaklaşım, politikaların insanlar tarafından okunabilir biçimde ayrı dokümanlarda tutulduğu geleneksel modelin yerine geçer.

## Hangi Sorunları Çözer

Uygulama ve altyapıların geliştirilmesi, genellikle bir organizasyonun tanımladığı çeşitli politikalar tarafından kısıtlanır. Örneğin; gizli bilgilerin kaynak kodunda saklanmasını yasaklayan güvenlik politikaları, bir konteynerin süper kullanıcı yetkileriyle çalıştırılmasını yasaklayan politikalar veya bazı verilerin belirli bir coğrafi bölge dışında depolanmasını engelleyen politikalar. Geliştiriciler ve gözden geçirenler için, uygulama ve altyapıyı belgelenmiş politikalara karşı elle kontrol etmek oldukça yoğun emekli ve hata eğilimlidir. Manuel süreçler, cloud native uygulamaların tepki verebilirlik ve ölçeklenebilirlik gereksinimlerini karşılayamaz.

## Nasıl Yardımcı Olur

Politikaların kod aracılığıyla tanımlanması, tekrarlanabilirliği sağlar ve hataları azaltır (manuel yaklaşıma kıyasla). Kod Olarak Politika’nın bir diğer avantajı, bu kodların Git gibi bir sürüm kontrol sistemi ile yönetilebilmesidir. Git, bir şeyler beklendiği gibi çalışmadığında oldukça faydalı olan bir kayıt geçmişi oluşturur. Bu sayede kullanıcılar, değişikliği kimin yaptığını belirleyebilir ve önceki sürüme geri dönebilir.