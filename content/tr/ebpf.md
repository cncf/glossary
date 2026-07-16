---
title: eBPF
status: Completed
category: Technology
tags: ["mimari", "ağ tanımlama", "güvenlik"]
---

eBPF, yani Genişletilmiş Berkeley Paket Filtresi, Linux sistemlerinin kernel alanında, küçük ve izole (sandboxed) programların veya betiklerin, kernel kaynak kodunu değiştirmeye veya Linux kernel modülleri yüklemeye gerek kalmadan çalıştırılmasını sağlayan bir teknolojidir.

Bir Linux sistemi iki çalışma alanına sahiptir: kernel ve kullanıcı alanı (user space). Kernel, işletim sisteminin çekirdeğini temsil eder ve donanıma sınırsız erişim hakkına sahip tek bileşendir.

Uygulamalar kullanıcı alanında çalışır ve daha yüksek izinlere ihtiyaç duyduklarında bu taleplerini çekirdeğe iletir. Donanıma doğrudan erişim gibi daha fazla esneklik gerektiren uygulamalar için çekirdeğin işlevselliği, “Linux kernel modülleri” yaklaşımıyla genişletilebilir. Bu yöntem, uygulamaların alttaki bileşenlere daha derin erişim sağlamasına olanak tanır. Ancak bu yaklaşım güvenlik risklerini de beraberinde getirir; bu nedenle eBPF daha güvenli bir alternatif olarak öne çıkar.

## Hangi Sorunları Çözer
Genellikle uygulamalar kullanıcı alanında çalışır ve kernel tarafından belirli ayrıcalıklar gerektiğinde, örneğin donanıma erişim gibi, bunu “sistem çağrısı (system call)” aracılığıyla talep eder. Çoğu durumda bu yöntem yeterlidir. Ancak geliştiricilerin, sistemin alt katmanlarına daha fazla erişim gerektirdiği durumlar vardır. \*\*Gözlemlenebilirlik (observability)\*\*, \*\*güvenlik (security)\*\* ve ağ işlevleri bu tür gereksinimlerin başlıca örnekleridir.
Bu gibi durumlarda, kernel kaynak kodunu değiştirmeden kernel işlevselliğini genişletmek için Linux kernel modülleri kullanılabilir. Ancak bu modüllerin yararlarının olduğu gibi, güvenlik riskleri de taşırlar. Kernel alanında çalıştıkları için, Linux kernel modülleri kernel çökmesine neden olabilir ve kernel çökerse tüm sistem de çökmüş olur. Ayrıca kernel modülleri yüksek ayrıcalıklara ve sistem kaynaklarına doğrudan erişime sahiptir; yeterince güvenli yapılandırılmadıkları takdirde, saldırganlar bu modülleri istismar edebilir.

## Nasıl Yardımcı Olur
eBPF, Linux kernel modüllerine kıyasla kullanıcı tanımlı programların yürütülmesi için daha kontrollü ve sınırlı bir ortam sağlar. Kernel içinde, izole edilmiş (sandboxed) bir ortamda çalıştığı için izolasyon sunar ve riskleri azaltır. Eğer bir güvenlik açığı veya hata bir eBPF programında istismar edilirse, bu durumun etkisi genellikle yalnızca bu izole ortamla sınırlı kalır. Ayrıca, bir eBPF programı kernel içinde çalıştırılmadan önce çeşitli doğrulamalardan geçmek zorundadır. \*\*Doğrulayıcı (verifier)\*\* bileşen, bellek sınırları dışına çıkma, sonsuz döngü ve yetkisiz kernel işlevlerine erişim gibi güvenlik ihlallerini kontrol eder. Bu sayede programın çekirdeği çökerten bir sonsuz döngüye girmesi engellenmiş olur. Bu güvenlik denetimleri, eBPF’yi Linux kernelinde program çalıştırmak için Linux kernel modüllerine göre daha güvenli bir seçenek haline getirir.