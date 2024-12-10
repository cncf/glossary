---
title: Blue Green Deployment
status: Completed
category: concept
tags: ["yöntem", "uygulama", ""]
---

## Nedir

Blue green deployment, çalışan bilgisayar sistemlerini minimum sistem kesintisiyle güncellemeye yönelik bir stratejidir. Operatör, “blue” ve “green” olarak adlandırılan iki ortamın devamlılığını sağlar. 
Biri canlı trafiğe hizmet ederken (tüm kullanıcıların o an kullandığı sürüm), diğeri güncellenir. 
Aktif olmayan (green) ortamda testler tamamlandıktan sonra, canlı trafiğe geçilir (genellikle bir yük dengeleyici kullanarak). 
Blue-green deployment genellikle birçok servisten oluşan tüm ortamların tek seferde değiştirilmesi anlamına gelir. 
Kafa karıştırıcı bir şekilde, bu terim bazen bir sistem içindeki tekil servisler için de kullanılmaktadır. 
Bu belirsizliği önlemek için, tekil bileşenlere atıfta bulunurken sıfır sistem kesintili dağıtım (zero-downtime deployment) terimi tercih edilmelidir.


## Hangi Sorunları Çözer

Blue-green deployment, geriye dönük uyumluluk eksikliği nedeniyle “birbirine bağlı olarak” değiştirilmesi gereken yazılımları güncellerken minimum sistem kesintisi sağlar. 
Örneğin, bir web sitesi ve güncellenmesi gereken bir veritabanından oluşan bir çevrimiçi mağaza için blue-green deployment uygun olacaktır. 
Ancak, veritabanının yeni sürümü web sitesinin eski sürümüyle çalışmaz veya bunun tersi de geçerlidir. 
Bu durumda, her ikisinin de aynı anda değiştirilmesi gerekir. 
Eğer bu canlı ortamda yapılsaydı, müşteriler sistem kesintisini fark ederdi.


## Nasıl Yardımcı Olur

Blue-green deployment, minimum sistem kesintisiyle güncellenmesi gereken cloud native olmayan yazılımlar için uygun bir stratejidir. 
Bununla birlikte, kullanımı eski yazılımın bileşenlerinin ayrı ayrı güncellenebilmesi için yeniden tasarlanması gerektiğinin bir göstergesidir.
