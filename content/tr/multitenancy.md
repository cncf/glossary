---
title: Çoklu Kiracılık (Multitenancy)
status: Completed
category: Özellik
tags: ["mimari", "özellik", ""]
---

Çoklu kiracılık birden fazla kiracıya hizmet veren tek bir yazılım kurulumunu ifade eder. Kiracı, kendi veri kümeleri üzerinde işlem yapmak için yazılımı kullanan bir kullanıcı, uygulama veya kullanıcılar/uygulamalar grubudur. Bu kiracılar veri paylaşmaz(sahibi tarafından açıkça belirtilmedikçe) ve birbirlerinden haberdar olmazlar.

Bir kiracı bağımsız bir kullanıcının tekil giriş kimlik numarası kadar küçük olabilir -kişisel verimlilik numarası olarak düşünün- ya da binlerce giriş kimlik numaraları, her birinin kendi ayrıcalıklarına sahip birbiriyle birçok açıdan ilişkili bütün bir şirket kadar büyük olabilir. Çoklu kiracılı yazılım örnekleri arasında Google Mail, Google Docs, Microsoft Office 365, Salesforce CRM ve Dropbox'ın yanı sıra, tamamen veya kısmen çoklu kiracılı olan birçok başka yazılım türü de sayılabilir.

## Hangi Sorunları Çözer

Çoklu kiracılık olmasaydı, her kiracının kendine özel yazılım kurulumuna ihtiyacı olurdu. Bu kaynak kullanımını ve bakım maliyetini, dolaylı olarak da yazılım maliyetlerini artırır.

## Nasıl Yardımcı Olur

Çoklu kiracılık her kiracıya yalıtılmış ortam sağlayarak (çalışma verileri, ayarlar, kimlik bilgisi listeleri(list of credentials), v.b.) aynı anda birden fazla kiracıya hizmet vermeyi sağlar. Kiracının bakış açısından her biri özel yazılım kurulumlarına sahiptir buna rağmen gerçekte hepsi bir tanesini paylaşmaktadır. Bu bir yazılımı bir sunucunun üzerinde çalıştırarak ve kiracıların ağ aracılığı ile arayüz üzerinden ve/veya [API](/tr/application-programming-interface)(ayrıca [İstemci-Sunucu Mimarisi](/tr/client-server-architecture/) olarak da bahsedilir) bağlanmasına izin verilerek sağlanır. Çoklu kiracılı yazılım ile kiracılar bir kurulumun kaynaklarını diğerlerini etkilemeden ya da sadece önceden tanımlanmış ve kontrol edilmiş yollarla paylaşılmasını sağlar. Yazılım sağlayıcısının elde edeceği kaynak tasarrufu, kiracılara yansıtılarak kullanıcılar için yazılım maliyetini önemli ölçüde düşürebilir (örneğin, web tabanlı e-posta veya belge düzenleyicileri düşünün).

## Bağlantılı Terimler

Çoklu kiracılık SaaS ile eş anlamlı değildir, ancak SaaS ürünlerinin çoklu kiracılığa sahip olması ve hatta temel avantajlarından biri olarak çoklu kiracılığı sunması oldukça yaygındır.