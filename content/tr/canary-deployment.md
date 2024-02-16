---
title: Canary Deployment
status: Completed
category: concept
tags: ["yöntem", "uygulama", ""]
---

## Nedir

Canary deployment, biri canlı trafiğe sahip orijinal kodu diğeri ise canlı trafik olmadan güncellenmiş kodu içeren iki ortamla başlayan bir dağıtım stratejisidir. 
Trafik, uygulamanın orijinal sürümünden güncellenmiş sürümüne kademeli olarak taşınır. 
Canlı trafiğin %1’ini taşıyarak başlanabilir, sonrasında %10, %25 gibi kademeli artışlarla tüm trafik güncellenmiş sürümde çalışana kadar böyle devam edilebilir. 
Organizasyonlar yazılımın yeni sürümünü üretimde test edebilir, geri bildirim alabilir, hataları teşhis edebilir ve gerekirse hızlı bir şekilde kararlı sürüme geri dönebilir.

“Canary” terimi, madencileri güvende tutmak için kanaryaların kömür madenine götürüldüğü “kömür madenindeki kanarya” uygulamasına atıfta bulunmaktadır. 
Bu uygulamada eğer kokusuz, zararlı gazlar ortamda mevcut ise kanarya ölür ve madenciler hızlı bir şekilde madeni tahliye etmeleri gerektiğini bilirler. 
Benzer şekilde, güncellenen kodda bir sorun çıkarsa, canlı trafik orijinal sürüme geri aktarılır.

## Hangi Sorunları Çözer

Test stratejisi ne kadar kapsamlı olursa olsun, üretimde her zaman bazı hatalar bulunur. 
Trafiğin %100’ünü bir uygulamanın bir sürümünden diğerine kaydırmak daha etkili hatalara neden olabilir.

## Nasıl Yardımcı Olur

Canary deployment, organizasyonların büyük ölçekte trafiği yeni sürüme taşımadan önce yazılımın gerçekte oluşabilecek senaryolarda nasıl davrandığını görmelerini sağlar. 
Bu strateji, organizasyonların sistem kesintisini en aza indirmesini ve yeni dağıtımla ilgili sorunlar olması durumunda hızla önceki sürüme geri dönmesini sağlar. 
Ayrıca, genel kullanıcı deneyimi üzerinde önemli bir etkisi olmadan derinlemesine üretim uygulaması testine olanak tanır.
