---
title: Stil Kılavuzu
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

Bu stil kılavuzu, Sözlük hedef kitlesini, tanım yapısını, gerekli ayrıntı düzeyini ve tutarlı bir stili nasıl koruyacağınızı anlamanıza yardımcı olacaktır.

Cloud Native Sözlüğü, CNCF repository’sinin [varsayılan stil kılavuzunu](https://github.com/cncf/foundation/blob/master/style-guide.md) takip eder. Bunlara ek olarak, aşağıdaki kurallara uyar:

1. Teknik jargon ve moda sözcüklerden kaçınarak basit ve erişilebilir bir dil kullanın
2. [Gündelik konuşma dilinden](https://tr.wikipedia.org/wiki/G%C3%BCnl%C3%BCk_dil) kaçının
3. Mecazi olmayan, somut bir dil kullanın
4. Kısaltmalardan kaçının
5. [Edilgen dili](https://sozluk.gov.tr/?/edilgen+fiil) idareli kullanın
6. İfadeleri olumlu bir biçimde ifade etmeyi hedefleyin
7. Alıntılar dışında ünlem işaretini kullanmayın
8. Abartılı bir dil kullanmayın
9. Tekrardan kaçının
10. Kısa ve öz olun

## Hedef Kitle

Sözlük, teknik ve teknik olmayan herkes için yazılmıştır. Lütfen tanımları basit terimlerle açıklayın ve okuyucunun teknik bilgiye sahip olduğunu varsaymayın.
Konu ile ilgili daha fazla bilgi aşağıda [Tanım](#tanım) bölümünde yer almaktadır.

## Asgari geçerli tanım

Cloud Native terimlerini herkesin anlamasını kolaylaştırmayı amaçlıyoruz.
Bu sebeple sadeliğe odaklanıyoruz.
En azından teknik açıdan geçerli *asgari bir tanım* sağlarken, teknolojiyi kullanan herkesin ilişkilendirebileceği örneklerle açık ve basit bir dil kullanın.
Bağlam ve örneklerden tasarruf etmek istemiyoruz - sonuçta bunlar okuyucunun kavramı anlamasına yardımcı oluyor - ancak, kavramı anlamak için teknik bir ayrıntıyı anlatmak gerekmiyorsa, bu ayrıntıyı es geçebiliriz.
Burada amaç, işleri olduğundan daha fazla bir karışıklığa getirmemek.
Okuyucu, temel fikri anladığında başka kaynakları kullanarak konu hakkında daha detaylı bilgi edinebilir.
Bu kısım, sözlüğün kapsamının dışında kalmaktadır.

## Tanım şablonu

Her sözlük terimi bir markdown dosyasında tutulur ve aşağıdaki şablonu takip eder:

```md
---
title:
status:
category:
---

## Nedir

Teknoloji veya konseptin hızlı bir özeti.

## Hangi Sorunları Çözer

Ele aldığı sorunla ilgili birkaç satır.

## Nasıl Yardımcı Olur

Bu kavramın sorunu nasıl çözdüğüne dair birkaç satır.
```

### Başlık

**Title** etiketi bir tanım düzeninin her zaman en üstünde bulunur ve karşılık değeri başlık biçiminde yazılmalıdır.

```md
---
title: Tanım Şablonu
```

### Durum

**Status** etiketi, title etiketinden sonra gelir. Bu etiket, tanımı tamamlamak için gereken eforu belirtir.

Geçerli değerleri şunlardır:

- Completed (Tamamlandı)
- Feedback Appreciated (Geribildirim memnun eder)
- Not Started (Başlanmadı)

Tamamlanmış bir tanım için her zaman yeni bir issue açabilirsiniz. Bir tanım değişim halindeyken, durumu *Feedback Appreciated* şeklinde değiştirilecektir.

```md
---
title: Tanım Şablonu
status: Feedback Appreciated
```

### Etiketler

**Tag** etiketi, **status** etiketinin hemen sonrasında gelir.
Bu etiketlerin anlamlı ve kullanıcıya yardımcı olabilmesi için, etiketleri tam anlamlarıyla ve yeterince kullanıyoruz.
Gereğinden fazla etiket kullanımı, etiketi amacından uzaklaştıracaktır.
Bu konudaki tek istisna, `fundamental` etiketidir.
Bu etiket, bulunduğu kavramın diğer cloud native kavramlarını anlayabilmek için gerekli olduğu anlamını taşır.
Diğer birçok terim, büyük çoğunlukla tek etikete sahip olacaktır.

**Not**: Proje geliştiricileri tarafından onaylanmadıkça yeni etiket kullanmayınız. Bir sayfaya etiket eklediğinizde, etiketi doğru yazdığınızdan emin olunuz. Etiketler, tekil şekilde kullanılmalıdır.

Var olan etiketler aşağıdaki gibidir:

- application
- architecture
- fundamental
- infrastructure
- methodology
- networking
- property
- security

```md
---
title: Tanım Şablonu
status: Feedback Appreciated
tags: ["tag 1", "tag 2", ""]
---
```

### Tanım

#### Üç alt başlık

**Teknoloji** ve **konsept** kategorisindeki tanımlarda üç alt başlık mevcuttur:

- **Nedir**: Konu hakkında kısa ve açık bir genel özet verin.
- **Hangi Sorunları Çözer**: Çözüme değil, probleme odaklanın. Çözüm bir sonraki bölümde olacaktır. Tanımlanan terimden bahsetmekten kaçının. Bahsettiğimiz problemler, *nelerin* bizi tanımladığımız kavrama ulaştırdığına odaklanın.
- **Nasıl Yardımcı Olur**: Şimdi, tanımladığımız terime dönerek yukarıda bahsettiğimiz problemleri nasıl ele aldığından bahsedin.

Özelliklerin ayrı bölümler gerektirmediğini unutmayın. Bir tanım yeterli olacaktır.

İncelemeyi kolaylaştırmak için lütfen satır başına bir cümle, yani [anlama bağlı satır sonları](https://sembr.org/) kullanmaya gayret gösterin.

#### Kalite her şeyden önemli

Gönderiminiz birleştirilirse, o terim için resmi CNCF tanımı olacaktır (ta ki, başka biri onu geliştirene kadar).
CNCF'nin yüksek standartlarını karşılayan bir terim oluşturmak aceleye getirilemez; kalite zaman ve çaba gerektirir.

**Araştırmanızı yapın**. Terimi bildiğinizden emin olsanız bile, doğru anladığınızdan emin olun.
Kuruluşlar içinde, terimleri genellikle resmin tamamını yansıtmayabilecek bir şekilde kullanırız.
Araştırma yaparken, özellikle terime %100 aşina değilseniz birden çok kaynak kullanın.
Pek çok tanım, özellikle bir şirket tarafından sağlanıyorsa, tek taraflıdır. Sözlük satıcıdan bağımsız, dünya çapında kabul görmüş tanımlar içermelidir.

**İntihal yapmayın**. Diğer ciddi yayınlar için geçerli olan aynı kurallar Sözlük için de geçerlidir.
Alıntı yapmadığınız ve onlara katkıda bulunmadığınız sürece başkalarının çalışmalarını kopyalayıp yapıştırmayın.
Bir tanımın belirli bir bölümünü beğendiyseniz, onu kendi sözcüklerinizle açıklayın.

**Yetkili kaynakları referans verin**. Mümkün olduğunca, proje belgeleri gibi yetkili kaynaklara bağlantı verin.
Şirketler tarafından geliştirilen içeriklere bağlantı veremeyeceğimizi unutmayın.

#### Basit tutun

Sözlük, **karmaşık kavramları basit sözcüklerle açıklamayı** amaçlar; bu, muhtemelen birden fazla revizyon gerektirecek, şaşırtıcı derecede zor bir iştir.
Tanımınızı hazırlarken daima hedef kitleyi aklınızda bulundurun.
Sektör terimlerini ve moda sözcükleri kullanmaktan kaçının; kendinizi bunlara dönerken yakalayabilir ve farklı terimler aramak için kendinizi eğitmeniz gerekebilir.

Uygun olduğunda, okuyucuların (özellikle teknik olmayanların) açıkladığınız fikrin *ne zaman* ve *neden* alakalı olduğunu daha iyi anlamalarına yardımcı olacak **gerçek dünyadan örnekler** kullanın.

Tanımınızda kullanıldığında, her zaman **mevcut sözlük terimlerine bağlantı verin** (yalnızca ilk bahsedilen yerde bağlantı verilmelidir).

#### Bir Google veya Word belgesi ile başlayın

Bir Google Docs veya Word belgesiyle başlamanızı, birkaç gün bekletmenizi ve yeniden gözden geçirmenizi öneririz.
Bu yöntem, daha basit ve erişilebilir bir şekilde ifade edilebilecek cümleleri veya ifadeleri yakalamanıza olanak tanır.
Ayrıca, bir PR göndermeden önce bir yazım denetimi yaptığınızdan emin olun.

Bir dönem üzerinde çalışırken başka bir kimsenin PR göndermediğinden emin olmak için bir issue talep edin (veya bir tane oluşturun) ve size atanmasını isteyin.
[Nasıl Katkıda Bulunulur](/tr/contribute/) belgesinde bununla ilgili daha fazla bilgi bulabilirsiniz.

Başlamadan önce, ayrıntı düzeyi, zorluk düzeyi ve örneklerin ne zaman uygun olduğu konusunda bir fikir edinmek için lütfen yayınlanmış bazı Sözlük terimlerini okuyun.

## İnceleme süreci: Ne beklemeli?

Lütfen boş zamanlarında bu işi yapan kısıtlı sayıda geliştiriciler olduğumuzu unutmayın.
Zaman zaman kavramları hızlı bir şekilde gözden geçirebiliriz; diğer durumlarda ise bu biraz zaman alabilir.
Sabrınız için teşekkür ederiz.
Herhangi bir sorunuz olursa, lütfen [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) Slack kanalından,
Türkçe çeviriler için ise [#glossary-localizations-turkish](https://cloud-native.slack.com/archives/C05ATBGLHJ7) kanalından,
bizimle iletişime geçin (nerede ve nasıl bulacağınız için lütfen [Nasıl Katkıda Bulunulur](/tr/contribute/) belgemize bakın).

Hedefimiz, Sözlüğün mümkün olan en iyi kaynak olmasıdır.
Bir PR gönderdikten sonra, bir veya daha fazla revizyon isteyebiliriz.
Hayal kırıklığına uğramayın - birçok PR için durum budur.
Bu gidip gelmeler ve işbirliğimiz, katkınızın dünyanın her yerindeki okuyucular tarafından okunan ve atıfta bulunulan faydalı bir tanım olmasını sağlayacaktır.
