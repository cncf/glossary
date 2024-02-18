---
title: Ölçeklenebilirlik
status: Completed
category: property
tags: ["temel kavram", "özellik", ""]
---

Ölçeklenebilirlik, bir sistemin ne kadar iyi büyüyebileceğini ifade eder.
Bir sistemin büyümesi demek, o sistemin yapması gereken herhangi bir şeyi yapma yeteneğini artırması olarak ifade edilebilir.
Örneğin bir [Kubernetes](/tr/kubernetes/) [küme](/tr/cluster/)si, içerisinde çalışan [konteynerleşmiş](/tr/containerization/) uygulamaların sayısını arttırarak veya azaltarak ölçeklenir,
ancak buradaki ölçeklenebilirlik çeşitli faktörlere bağlıdır.
Kümenin kaç adet [düğüm](/tr/nodes/)ü olduğu, her düğümün kaç adet [konteyner](/tr/container/) çalıştırabilir
ve kontrol düzleminin ne kadar kayıt ve işlemi desteklediği bu faktörlere birer örnektir.

Ölçeklenebilir bir sistem, sisteme daha fazla kapasite eklemeyi kolaylaştırır.
Burada, iki ölçeklendirme yaklaşımı arasında ayrım yaparız.
Bir tarafta, artan yükün üstesinden gelmek için sisteme yeni düğümler ekleyen [yatay ölçeklendirme](#) bulunur.
Diğer tarafta, tek bir düğümü daha fazla işlem gerçekleştirecek şekilde
(örn. makineye daha fazla bellek veya işlemci ekleyerek) güçlendiren [dikey ölçeklendirme](#) bulunur.
Ölçeklenebilir bir sistem kolaylıkla değişebilir ve kullanıcı ihtiyaçlarını karşılayabilir.
