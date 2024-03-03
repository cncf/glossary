---
title: Olay Akışı
status: Completed
category: consept
tags: ["yöntem", "ağ tanımlama", ""]
---

Olay akışı, yazılımın, yaptıklarını sürekli olarak iletmek için olay verilerini bir uygulamadan diğerine gönderdiği bir yaklaşımdır. 
Yaptığı her şeyi diğer tüm servislere yayınlayan bir servis düşünün. 
Bir servis tarafından gerçekleştirilen her faaliyet bir olay olarak adlandırılır, dolayısıyla olay akışı olarak adlandırılır. 
Örneğin, NASDAQ her saniye hisse senedi ve ticari malların fiyatlandırılması hakkında güncellemeler alır. 
Belirli bir stok setini takip eden bir uygulamanız olsaydı, bu bilgiyi neredeyse gerçek zamanlı olarak almak isterdiniz. 
Yahoo! Finans, NASDAQ'tan çekilen ve uygulamalarındaki bilgileri (veya olayları) ona abone olan herhangi bir uygulamaya gönderen (veya akıtan) bir [API](/application-programming-interface/) sağlar. 
Gönderilen veriler ve bu verilerdeki değişiklikler (hisse senedi fiyatları) olaylardır, bunları bir uygulamaya iletme süreci ise olay akışıdır.

## Hangi Sorunları Çözer

Geleneksel olarak, Yahoo Finans, tek TCP istekleri kullanırdı. 
Bu, her olay için bir bağlantı oluşturulmasını gerektirdiği için çok verimsiz oluyordu. 
Veriler doğası gereği daha gerçek zamanlı hale geldikçe, böyle bir çözümü ölçeklendirmek verimsiz hale gelir. 
Bir kez bağlantı açmak ve olayların akışına izin vermek gerçek zamanlı toplama için idealdir. 
Üretilen veri miktarı katlanarak artıyor ve bununla birlikte veri durumu da sürekli bir değişim halindedir. 
Geliştiricilerin ve kullanıcıların bu verileri neredeyse gerçek zamanlı bir şekilde görebilmeleri gerekir.

## Nasıl Yardımcı Olur

Olay akışı, veri değişikliklerinin kaynaktan alıcıya iletilmesini sağlar. 
Servislerin bilgi talep etmesini beklemek yerine, servis tüm olaylarını (veya faaliyetlerini) sürekli olarak yayınlar. 
Bilgiye ne olacağı ile ilgilenmez. 
Sadece yapması gerekeni yapar ve yayınlar, böylece diğer tüm servislerden tamamen bağımsız kalır.