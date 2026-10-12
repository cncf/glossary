---
title: İmaj Özeti (Image Digest)
status: Completed
category: concept
tags: ["application", "security"]
---

İmaj özeti (image digest), bir [konteyner imajı](/tr/container-image/) için içeriğe göre adreslenebilen benzersiz bir tanımlayıcıdır.
[OCI İmaj Belirtimi](https://specs.opencontainers.org/image-spec/#overview) standartlarında tanımlandığı üzere, imaj bildiriminin (manifest) kriptografik bir özetidir (genellikle SHA-256).
Bir imaj etiketini (tag) takma ada benzetebiliriz: İstediğiniz zaman farklı bir imaja yeniden atayabileceğiniz, insanlar tarafından okunabilen ve değiştirilebilir (mutable) bir etikettir.
Buna karşılık imaj özeti bir parmak izi gibidir: Değiştirilemez (immutable) bir yapıdadır ve her zaman tam olarak tek bir imajın birebir içeriğini temsil eder.

## Hangi Sorunları Çözer

Konteyner imajları yaygın olarak etiketler üzerinden referans gösterilir (örneğin `myapp:v1.0` veya `myapp:latest`).
Etiketler pratik ve kullanışlıdır ancak değiştirilebilirdir; bir kayıt defteri (registry) yöneticisi aynı etiket altında dilediği zaman farklı bir imaj yayınlayabilir.
Bu durum, `myapp:latest` etiketini kullanan iki farklı dağıtımın tamamen farklı yazılımlar çalıştırmasına yol açabilir.
Yinelenebilirliği (reproducibility) imkansız hale getirir ve ciddi güvenlik riskleri doğurur; örneğin ele geçirilmiş bir etiket, fark ettirmeden zararlı bir imajın üretim ortamına dağıtılmasına neden olabilir.

## Nasıl Yardımcı Olur

İmaj özeti, bir konteyner imajına başvurmak için kurcalamaya karşı korumalı ve garantili bir yöntem sunar.
Özet doğrudan imaj içeriğinin kendisinden türetildiği için, imajdaki en ufak bir değişiklik bambaşka bir özet üretir.
Ekipler bir imajı özetiyle referans göstererek (örneğin `myapp@sha256:abc123...`), etikete ne olursa olsun her zaman tam olarak aynı doğrulanmış imajı çalıştırdıklarından emin olurlar.
Bu yaklaşım; güvenlik denetimleri, yinelenebilir derlemeler ve üretim ortamlarındaki yazılım tedarik zinciri bütünlüğü için hayati önem taşır.

## İlgili Terimler

- [Konteyner (Container)](/tr/container/)
- [Konteyner İmajı (Container Image)](/tr/container-image/)
