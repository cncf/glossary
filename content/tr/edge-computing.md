---
title: Edge Computing
status: Completed
category: Teknoloji
---

Edge computing, birincil [veri merkezinden](/tr/data-center/) veri kaynağına bazı depolama ve bilgi işlem kapasitesini aktaran [dağıtık sistem](/tr/distributed-systems/) yaklaşımıdır.
Toplanan veriler, işleme ve analiz için merkezi bir veri merkezine gönderilmek yerine yerel olarak işlenir (örn. bir fabrika katında, bir mağazada veya bir şehir genelinde).
Bu yerel işlem birimleri veya cihazlar sistemin kenarını (edge) temsil ederken, veri merkezi sistemin merkezini oluşturur.
Kenarda işlenen çıktı, daha ileri işlemler için birincil veri merkezine geri gönderilir.
Edge computing örnekleri arasında trafik akışını analiz eden bilek cihazları veya bilgisayarlar sayılabilir.

## Hangi Sorunları Çözer

Geçtiğimiz on yılda giderek artan sayıda edge cihazının (örn. cep telefonları, akıllı saatler veya sensörler) ortaya çıktığını gördük.
Bazı durumlarda gerçek zamanlı veri işleme yalnızca kullanışlı bir özellik değil, hayati bir zorunluluktur.
Kendi kendine giden araçları düşünün.
Şimdi araçtaki sensörlerden gelen verilerin işlenmeden önce bir veri merkezine aktarılması ve ardından aracın uygun şekilde tepki verebilmesi için geri gönderilmesi gerektiğini hayal edin.
Ağın doğasında var olan gecikme ölümcül olabilir.
Bu aşırı bir örnek olsa da, çoğu kullanıcı anlık geri bildirim sağlayamayan akıllı bir cihaz kullanmak istemez.

## Nasıl Yardımcı Olur

Yukarıda açıklandığı gibi, edge cihazların kullanışlı olabilmesi için kullanıcılara neredeyse gerçek zamanlı geri bildirim sağlamak amacıyla işleme ve analizin en azından bir kısmını yerel olarak yapmaları gerekir.
Bu, bazı depolama ve işlem kaynaklarının veri merkezinden verinin üretildiği yere, yani edge cihazına taşınmasıyla sağlanır.
İşlenmiş ve işlenmemiş veriler daha sonra ileri işleme ve depolama için veri merkezine gönderilir.
Kısaca, verimlilik ve hız edge computing'in temel itici güçleridir.