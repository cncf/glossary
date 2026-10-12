---
title: Durumsuz Uygulamalar (Stateless Apps)
status: Completed
category: Property
tags: ["fundamental", "application", "property"]
---

Durumsuz uygulamalar (stateless applications), önceki hiçbir etkileşimi veya kullanıcı verisini hatırlamadan her bir isteği tamamen bağımsız olarak işler.
Önceki etkileşimlerden elde edilen veriler "durum" (state) olarak adlandırılır; bu veriler yerel olarak hiçbir yerde saklanmadığı için bu tür uygulamalar "durum*suz*" (state*less*) olarak tanımlanır.
Örneğin bir arama motoru kullandığınızda ve bu arama işlemi yarıda kesildiğinde (örneğin tarayıcı penceresi kapatıldığında), arama sonuçları kaybolur ve sürece baştan başlamanız gerekir.

Öte yandan, istekleri önceki etkileşimleri ve oturum geçmişini göz önünde bulundurarak işleyen ve saklayan uygulamalara [durum bilgisi tutan uygulamalar (stateful applications)](/tr/stateful-apps/) denir.
Bulut yerel mimarilerde durumsuz uygulamalar, herhangi bir sunucuda kolayca başlatılıp sonlandırılabildikleri ve yerel diske bağımlı olmadıkları için [yatay ölçekleme](/tr/horizontal-scaling/) ve yüksek erişilebilirlik açısından büyük avantaj sağlar.
