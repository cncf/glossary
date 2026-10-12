---
title: Hizmet Olarak Fonksiyon (Function as a Service - FaaS)
status: Completed
category: technology
tags: ["infrastructure", "", ""]
---

Hizmet Olarak Fonksiyon (Function as a Service - FaaS), olaylarla tetiklenen fonksiyonların çalıştırılması için platform sağlayan ve manuel müdahaleye gerek kalmadan otomatik ölçekleme sunan bir [bulut bilişim](/tr/cloud-computing/) modelidir.
Temelde FaaS, belirli olaylar tarafından tetiklenen, kısa süreli çalışan ve ardından kaynak israfını önlemek için kapanan bağımsız fonksiyonların dağıtılmasına olanak tanır.
Bu model bir [otomatik ölçekleme (autoscaling)](/tr/auto-scaling/) özelliği sunarak her istek başına bir fonksiyon örneğinin başlatılmasını ve yürütme sonrasında sonlandırılmasını sağlar; bu da modelin [durumsuz (stateless)](/tr/stateless-apps/) doğasını vurgular.
Sonuç olarak FaaS platformları gerçek bir kullandıkça öde faturalandırma modeli uygulayabilir ve fonksiyonlar boştayken maliyetleri sıfırlayarak sürekli kaynak tahsisi gerektiren Hizmet Olarak Platform (PaaS) gibi diğer modellerden ayrılır.

## Hangi Sorunları Çözer

Geleneksel olarak işletmeler şirket içi [veri merkezlerine (data centers)](/tr/data-center/) bağımlı kalmış, bu da donanım, yazılım ve personel için önemli yatırımlar gerektirmiştir.
Bu yapı, kaynakların en yoğun talep dönemlerine göre boyutlandırılmasını zorunlu kılar; bu da sakin dönemlerde atıl ve verimsiz kapasite oluşmasına yol açar.
Dahası, hızlı iş büyümesi mevcut BT kapasitesini zorlayarak operasyonel darboğazlara neden olabilir.
Buna karşılık [Hizmet Olarak Altyapı (IaaS)](/tr/infrastructure-as-a-code/) modelleri bulut tabanlı çözümler sunsa da, kaynakları ölçekleme sorumluluğunu yine kullanıcıya bırakır ve gerçek kullanımdan bağımsız olarak sunucuların sürekli açık kalması için ödeme talep eder.

## Nasıl Yardımcı Olur

FaaS, geliştiricilere sunucu altyapısını yönetme zorunluluğunu ortadan kaldırarak olaylara yanıt olarak web uygulamaları çalıştırmaları için güçlü bir [soyutlama](/tr/abstraction/) sağlar.
Örneğin bir dosya yükleme eylemi, dosyayı farklı biçimlere dönüştüren özel bir kod bloğunu otomatik olarak tetikleyebilir.
FaaS altyapısı kaynakları talebe göre otomatik olarak ayarlar ve geliştiricileri [ölçeklenebilirlik](/tr/scalability/) için karmaşık kodlar yazma yükünden kurtarır.
Ücretlendirme yalnızca kodun fiilen çalıştığı hesaplama süresi boyunca geçerlidir; fonksiyonlar etkin değilken hiçbir maliyet oluşmaz.

Daha fazla bilgi için [Sunucusuz Mimari (Serverless)](/tr/serverless/) sözlük girişine bakabilirsiniz.
"Sunucusuz" ve "FaaS" terimleri sıklıkla birbirinin yerine kullanılsa da, temelde farklı kavramları temsil ederler.
