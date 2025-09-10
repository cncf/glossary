---
title: Pod
status: Completed
category: concept
tags: ["altyapı", "temel kavram", ""]
---

[Kubernetes](/tr/kubernetes/) ortamında bir pod, en temel dağıtılabilir birim olarak işlev görür. 
Konteynerleştirilmiş uygulamaları dağıtmak ve yönetmek için önemli bir yapı taşını temsil eder. 
Her pod tek bir uygulama örneği içerir ve bir veya [daha fazla konteyner](/tr/container/) barındırabilir. 
Kubernetes, podları daha büyük bir dağıtımın parçası olarak yönetir ve gerektiğinde podları [dikey](/tr/vertical-scaling/) veya [yatay](/tr/horizontal-scaling/) olarak ölçeklendirebilir.

## Hangi Sorunları Çözer

Konteynerler genellikle belirli bir iş yükünü çalıştıran ve kontrol eden bağımsız birimler olarak hareket ederken, konteynerlerin sıkı bir şekilde birbirine bağlı bir şekilde etkileşime girmesi ve kontrol edilmesi gereken durumlar vardır.

Birbiriyle yakından ilişkili bu konteynerlerin her birinin ayrı ayrı yönetilmesi, gereksiz yönetim görevlerine yol açacaktır.
Örneğin, operatörün bir arada kalmalarını sağlamak için ilgili konteynerlerin yerleşimini tekrar tekrar belirlemesi gerekecektir. 
Ve bu ilgili konteynerlerin yaşam döngülerinin senkronize edilmesi gerekmesine rağmen, yalnızca ayrı ayrı yönetilebilirler.

## Nasıl Yardımcı Olur

Pod'lar birbiriyle yakından bağlantılı konteynerleri tek bir birim halinde bir araya getirerek konteyner işlemlerini önemli ölçüde basitleştirir. 
Örneğin, ek işlevler eklemek veya genel konfigürasyonlar oluşturmak için genellikle ana konteynerin yanında yardımcı konteynerler kullanılır. 
Örnekler arasında ana konteynere temel ayarları enjekte eden ve uygulayan konteynerler, 
ana konteyner için ağ trafiği yönlendirmesini işleyen sidecar (konteynerler) (bkz. [servis ağı](/tr/service-mesh/) veya 
her konteynerle birlikte günlükleri toplayan konteynerler yer alır.

Bellek ve CPU tahsisi pod seviyesinde tanımlanabilir, böylece içerideki konteynerler kaynakları esnek bir şekilde paylaşabilir ya da konteyner başına paylaştırılabilir.
