---
title: Bare Metal Machine
status: Completed
category: technology
tags: ["altyapı", "", ""]
---

Bare metal, özellikle yalnızca tek bir işletim sistemine sahip olan fiziksel bir bilgisayarı, yani sunucuyu ifade eder. Bu ayrım modern bilişimde önemlidir çünkü birçok, hatta çoğu sunucu [sanal makine (VM)](/tr/virtual-machine/) olarak çalışmaktadır. Fiziksel bir sunucu genellikle güçlü donanıma sahip, oldukça büyük bir bilgisayardır. İşletim sisteminin doğrudan fiziksel donanım üzerine kurulması ve uygulamaların [sanallaştırma](/tr/virtualization/) olmadan bu donanım üzerinde çalıştırılması, "bare metal üzerinde çalışmak" olarak adlandırılır.

## Hangi Sorunları Çözer

Bir fiziksel bilgisayar ile yalnızca bir işletim sistemi eşleştirmek, bilişimin özgün modelidir. Fiziksel bilgisayarın tüm kaynakları doğrudan işletim sistemine sunulur ve herhangi bir sanallaştırma katmanı olmadığından, işletim sistemi talimatlarının donanıma çevrilmesinde yapay bir gecikme oluşmaz.

## Nasıl Yardımcı Olur

Bir bilgisayarın tüm bilişim kaynaklarını (compute resources) tek bir işletim sistemine tahsis ederek, bu işletim sistemine mümkün olan en iyi performansı sağlamış olursunuz. Eğer donanım kaynaklarına son derece hızlı erişim gerektiren bir iş yükü (workload) çalıştırmanız gerekiyorsa, bare metal doğru çözüm olabilir.

[Cloud native uygulamalar](/tr/cloud-native-apps/) bağlamında, performans genellikle aynı anda gerçekleşen çok sayıda olaya [ölçeklenebilirlik](/tr/scalability/) üzerinden değerlendirilir; bu da [yatay ölçekleme](/tr/horizontal-scaling/) (kaynak havuzunuza daha fazla makine eklemek) ile sağlanabilir. Ancak bazı iş yükleri [dikey ölçekleme](/tr/vertical-scaling/) (mevcut fiziksel makineye daha fazla güç eklemek) ve/veya donanıma son derece hızlı fiziksel erişim gerektirebilir. Bu tür senaryolarda bare metal daha uygun bir çözümdür. Ayrıca, bare metal kullanımı donanım üzerinde ve hatta bazı durumlarda donanım sürücülerinde ince ayarlar (tuning) yapmanıza imkân tanır.