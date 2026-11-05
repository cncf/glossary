---
title: Konteyner İmajı
status: Completed
category: Kavram
tags: ["uygulama", "temel kavram", ""]
---

Konteyner imajı, bir [konteynerin](/tr/container/) oluşturulması için gerekli tüm bağımlılıkları içeren, değiştirilemez (immutable) ve statik bir dosyadır.
Bu bağımlılıklar tek bir yürütülebilir ikili (binary) dosya, sistem kütüphaneleri, sistem araçları, ortam değişkenleri ve diğer gerekli platform ayarlarını içerebilir.
Konteyner imajları bir uygulamanın [konteynerleştirilmesi](/tr/containerization/) sonucunda ortaya çıkar ve genellikle konteyner kayıt defterlerinde (registry) saklanır.
Buradan indirilerek bir Konteyner Çalışma Zamanı Arayüzü (CRI) aracılığıyla yalıtılmış bir işlem olarak çalıştırılabilirler.
Bir konteyner imaj çerçevesi, Açık Konteyner Girişimi (Open Container Initiative - OCI) tarafından tanımlanan standart şemaya uygun olmalıdır.

## Hangi Sorunları Çözer

Geleneksel mimaride uygulama sunucuları ortam bazında ayrı ayrı yapılandırılır ve uygulamalar bu sunuculara dağıtılır.
Ortamlar arasındaki en ufak bir yapılandırma uyuşmazlığı sorunlara yol açar ve sıklıkla kesintilere ya da başarısız dağıtımlara neden olur.
Bir uygulamanın ortamı, tekrarlanabilir ve iyi tanımlanmış olmalıdır;
aksi takdirde, ortamla ilgili hataların ortaya çıkma olasılığı artar.
Uygulama ortamları yetersiz veya hatalı yapılandırıldığında, uygulamaların [yatay](/horizontal-scaling/) ve [dikey](/vertical-scaling/) ölçeklendirilmesi zorlaşır.

## Nasıl Yardımcı Olur

Konteyner imajları bir uygulamayı, uygulama sunucusu gibi tüm çalışma zamanı bağımlılıklarıyla birlikte tek bir çatı altında paketler.
Bu yapı, geliştirici bilgisayarları da dahil olmak üzere tüm ortamlarda tam bir tutarlılık sağlar.
Konteyner imajları ihtiyaç duyulan sayıda konteyneri başlatmak için kullanılabilir ve bu sayede daha yüksek [ölçeklenebilirlik](/tr/scalability/) sunar.
