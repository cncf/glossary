---
title: Servis Ağı (Service Mesh)
status: Completed
category: technology
tags: ["networking", "", ""]
---

[Mikroservis mimarisinde](/tr/microservices-architecture/) uygulamalar, bir ağ üzerinden birbiriyle haberleşen çok sayıda küçük [servise](/tr/service/) bölünür.
Tıpkı kablosuz ağlar gibi bilgisayar ağları da doğası gereği güvenilmez, müdahaleye açık ve kimi zaman yavaş olabilir.
Servis ağları (service mesh), servisler arasındaki ağ trafiğini (iletişimi) yöneterek ve tüm servisler genelinde [güvenilirlik](/tr/reliability/), [gözlemlenebilirlik](/tr/observability/) ve güvenlik yeteneklerini tek tip bir standart olarak ekleyerek bu zorlukları ortadan kaldırır.

## Hangi Sorunları Çözer

Mikroservis mimarisine geçişle birlikte mühendisler, birbirleriyle sürekli haberleşmesi gereken yüzlerce, hatta binlerce bağımsız servisle karşı karşıya kalır.
Bu durum ağ üzerinde devasa bir trafik akışı yaratır.
Bunun da ötesinde; yasal uyumluluklar gereği servisler arası iletişimin şifrelenmesi (mTLS), operasyon ekiplerine standart metriklerin sunulması veya arızaları teşhis etmek için ayrıntılı trafik izleme verilerinin toplanması gerekir.
Bu tür operasyonel yeteneklerin her bir mikroservisin kendi kaynak koduna tek tek yazılması; ekipler arası koordinasyon sürtüşmelerine yol açar, teknik borç biriktirir ve yeni özelliklerin teslim hızını ciddi oranda düşürür.

## Nasıl Yardımcı Olur

Servis ağları; uygulama kodunda hiçbir değişiklik yapılmasına gerek kalmaksızın, bir küme genelindeki tüm servislere güvenilirlik, gözlemlenebilirlik ve güvenlik işlevlerini standart olarak kazandırır.
Servis ağlarından önce bu işlevlerin her bir servisin koduna manuel olarak kodlanması gerekiyordu; bu da potansiyel hata kaynağı oluşturuyordu.

**Sidecar Konteyner** modeli, her bir [pod'u](/tr/pod/) yanına yerleştirilen bir vekil sunucu (proxy) ile eşleştirir.
Pod başına konumlandırılan bu proxy; ağ trafiğini yakalayıp yönetir, güvenlik politikalarını uygular, iş yüklerini dengeler ve performans telemetrisi toplar.
Bu yaklaşım hassas bir kontrol ve servis bazlı trafik yönetimi sunarken, sistem büyüdükçe daha fazla işlem kaynağı tüketebilir ve yönetimi karmaşıklaşabilir.

Buna karşılık **Sidecar'sız (Sidecarless)** mimari, [eBPF](/tr/ebpf/) gibi çekirdek (kernel) yeteneklerinden yararlanarak bu işlevleri doğrudan işletim sistemi düzeyine taşır.
Pod başına ayrı bir vekil sunucu çalıştırma zorunluluğunu ortadan kaldıran bu yöntem; kaynak tüketimini önemli ölçüde azaltır, gereksiz ağ atlamalarını (network hops) engelleyerek gecikmeyi düşürür ve performansı artırır.
Pod sayısından bağımsız olarak sabit bir ek yük sunduğu ve dağıtılacak aracı sayısını azalttığı için, ekiplere basitleştirilmiş bir operasyon ve doğrusal bir ölçeklenebilirlik sağlar.
