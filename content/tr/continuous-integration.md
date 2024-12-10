---
title: Sürekli Entegrasyon (CI)
status: Completed
category: concept
tags: ["uygulama", "yöntem", ""]
---

## Nedir

Genellikle CI olarak kısaltılan sürekli entegrasyon (continuous integration), kod değişikliklerini mümkün olduğunca düzenli olarak entegre etme uygulamasıdır. 
CI, sürekli teslimat (continuous delivery - CD) için ilk adımdır. 
CI süreci, kod değişikliklerinin bir kaynak kontrol sistemine (Git, Mercurial veya Subversion) gönderilmesiyle başlar ve test edilmiş bir yapının CD sistemi tarafından  kullanılmaya hazır hale gelmesiyle sona erer.**

## Hangi Sorunları Çözer

Yazılım sistemleri genellikle çok sayıda geliştiricinin bakımını ve güncellemesini yaptığı büyük ve karmaşık yapılardır. Sistemin farklı bölümleri üzerinde paralel olarak çalışan geliştiriciler, birbiriyle çelişen değişiklikler yapabilir ve istemeden birbirlerinin çalışmalarını bozabilirler. 
Ayrıca, aynı proje üzerinde birden fazla geliştirici çalıştığında, kod kalitesini test etme ve hesaplama gibi günlük görevlerin her bir geliştirici tarafından tekrarlanması gerekir. Bu da zaman kaybına yol açar. **

## Nasıl Yardımcı Olur

CI yazılımı, geliştirici bir değişiklik yaptığında kod değişikliklerinin doğru bir şekilde birleşip birleşmediğini otomatik olarak kontrol eder. 
CI sunucusunu kullanarak kod kalite kontrolü, testler ve hatta dağıtımlar yapmak oldukça yaygın bir uygulamadır. 
Böylece, ekipler arasında kalite kontrolün somut bir uygulaması haline gelir. 
CI, yazılım ekiplerinin her kod gönderiminin somut bir hata ya da uygulanabilir bir sürüm adayına dönüşmesini sağlar.
