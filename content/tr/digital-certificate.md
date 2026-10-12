---
title: Dijital Sertifika (Digital Certificate)
status: Completed
category: technology
tags: ["security", "", ""]
---

Bir (dijital) sertifika — sıklıkla açık anahtar sertifikası veya SSL/TLS sertifikası olarak da adlandırılır — ağ üzerinden gerçekleşen iletişimlerin güvenliğini sağlamak amacıyla kullanılan dijital bir belgedir.
Sertifikalar, iletişim kurduğumuz tarafın gerçekten iddia ettiği kişi veya kurum olduğunu doğrulamamızı sağlar.
Ayrıca alıp verdiğimiz verileri şifreleyerek iletişimimizin gizliliğini ve bütünlüğünü güvence altına alır.

## Hangi Sorunları Çözer

Cihazlar bir ağ üzerinden haberleştiğinde, belirli bir cihazın gerçekten iddia ettiği kimliğe sahip olduğuna dair kendiliğinden gelen bir garanti yoktur.
Buna ek olarak, iki cihaz arasındaki ağ trafiğinin üçüncü şahıslar tarafından dinlenmeyeceği (eavesdropping) veya araya girilmeyeceği garanti edilemez.
Sonuç olarak şifrelenmemiş her iletişim potansiyel olarak ele geçirilebilir; kullanıcı adları, parolalar, kredi kartı bilgileri ve hassas veriler sızdırılabilir.

## Nasıl Yardımcı Olur

Sertifikaları kullanan modern e-posta istemcileri ve web tarayıcıları, gönderenin veya ziyaret edilen web sitesinin kimliğinin doğruluğunu teyit eder (web tarayıcınızın adres çubuğundaki kilit simgesi buna bir örnektir).
Öte yandan sertifikalar, internet üzerindeki taraflar arasındaki veri akışını [aktarım katmanı güvenliği (TLS)](/tr/transport-layer-security/) protokolleri ile şifrelemek için kullanılır.
Trafiği dinleyen kötü niyetli bir aktörün iletilen veriyi okumasını veya değiştirmesini neredeyse imkansız hale getiren güçlü kriptografik mekanizmalar sunar.
Bulut yerel mimarilerde ve mikroservisler arasında ise servisler arası güvenli kimlik doğrulama ve şifreleme için [karşılıklı TLS (mTLS)](/tr/mutual-transport-layer-security/) sertifikaları kullanılır.
