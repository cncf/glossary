---
title: Mutual Transport Layer Security (mTLS)
status: Completed
category: Concept
tags: ["güvenlik", "ağ", ""]
---

Karşılıklı TLS (mTLS), iki servis arasında gönderilen mesajların kimliğini doğrulamak ve şifrelemek için kullanılan bir tekniktir. mTLS, TLS protokolüdür ama yalnızca bir bağlantının kimliğini doğrulamak yerine her iki tarafınki de doğrulanır.

## Hangi Problemi Çözer

Mikroservisler bir ağ üzerinden iletişim kurar ve tıpkı kablosuz ağınız gibi ağ üzerinden yapılan iletişim de saldırıya uğrayabilir. mTLS, yetkisiz tarafların meşru istekleri dinleyememesini veya taklit edememesini sağlar.
mTLS ensures that no unauthorized party can listen in on or impersonate legitimate requests.

## Nasıl Yardımcı Olur

mTLS, bir ağda veya uygulamalarda oturum açan kullanıcılar için ek bir güvenlik katmanı sağlayarak istemci ve sunucu arasındaki trafiğin her iki yönde de güvenli ve güvenilir olmasını sağlar. Ayrıca nesnelerin interneti (IoT) cihazları gibi oturum açma sürecini takip etmeyen istemci cihazlarıyla olan bağlantıları da doğrular. Yol üzerindeki saldırılar, kimlik sahtekarlığı saldırıları, kimlik bilgileri doldurma, kaba kuvvet saldırıları vb. saldırılar mTLS tarafından önlenebilir. 
