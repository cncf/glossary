---
title: Düğümler (Nodes)
status: Completed
category: Concept
tags: ["altyapı", "temel kavram", ""]
---

## Nedir

Bir düğüm, ortak bir görevi gerçekleştirmek için diğer bilgisayarlar veya düğümlerle birlikte çalışan bir bilgisayardır.
Örneğin, dizüstü bilgisayarınız, modeminiz ve yazıcınızı düşünün.
Hepsi wifi ağınız üzerinden bağlıdır, iletişim kurar ve işbirliği yapar; her biri bir düğümü temsil eder.
[Bulut bilişimde](../cloud-computing/) bir düğüm, fiziksel bir bilgisayar,
sanal bir bilgisayar (VM) ve hatta bir [konteyner](../container/) olabilir.

## Hangi Sorunları Çözer

Bir uygulama tek bir makinede çalışabilir (ve birçok uygulama bunu yapar), ancak bununla bazı riskler beraberinde gelir.
Özellikle, temel sistemdeki bir arıza uygulamayı bozabilir.
Geliştiriciler bu sorunu çözmek için, her işlemin kendi düğümünde çalıştığı dağıtılmış uygulamalar oluşturmaya başladılar.
Bu nedenle, düğümler, bir araya gelerek ortak bir hedefe ulaşmak için bir [küme](../cluster/) veya grup oluşturan uygulamaları veya işlemleri çalıştırırlar.

## Nasıl Yardımcı Olur

Bir düğüm, bir kümeye atanabilen belirgin bir bilişim kaynağı (bellek, işlemci, ağ) sunar.
[Cloud native](../cloud-native-tech/) bir platformda veya uygulamada bir düğüm, işi gerçekleştirebilen tek bir birimi temsil eder.
İdeal olarak, her bir düğüm, belirli bir türdeki herhangi
bir diğer düğümden ayırt edilemeyecek şekilde farklılık göstermez.
