---
title: Nasıl katkı yapabilirim?
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

## Merhaba

Cloud Native Sözlüğü katkı rehberine hoşgeldiniz. İlginiz için teşekkür ederiz.
Detaylıca anlatacağımız şekilde, katkı yapmanın birkaç yolu var:

1) [Mevcut bir issue üzerinde çalışma](#work-on-an-existing-issue)
2) [Yeni terimler önerme](#propose-new-terms)
3) [Mevcut terimleri güncelleme](#update-an-existing-term)
4) [Sözlüğü kendi dilinize çevirme](#help-localize-the-glossary)

## Cloud Native Sözlüğü'ne genel bakış

Bu sözlüğün amacı, karmaşıklığı ile ünlü olan Cloud Native alanını sadeleştirmek ve herkese daha erişilebilir hale getirmektir.

Cloud Native Sözlüğü'nün içeriğinin tutulduğu [bu GitHub repository](https://github.com/cncf/glossary)'sinde, sözlük hakkında
[issue'lar](https://github.com/cncf/glossary/issues), pull request'ler ([PRs](https://github.com/cncf/glossary/pulls))
ve [tartışmalar](https://github.com/cncf/glossary/discussions) bulabilirsiniz.

## Kimler katkı yapabilir?

Nasıl katkıda bulunabileceğiniz, Cloud Native alanındaki bilgi seviyenize bağlıdır.
Karmaşık kavramları sadeleştirmek, konu hakkında oldukça derin bir bilgi seviyesi gerektirir.
Dolayısıyla, yeni terimler önermek için o terimler hakkında uzman olmanız gerekir.
Katkı yapanlar genellikle bu teknolojilerle bir süre çalışmış olan mühendisler veya Cloud Native'e odaklanmış akademisyenlerdir.

Karmaşık kavramları sade kelimeler ile açıklamak _gerçekten çok zor_ olduğu için, bu bilgi birikimi gereklidir. Ayrıca, kolay anlaşılabilir ve kullanıcı dostu sonuçlar elde etmek kolay gibi görünse de, arzu edilen sadelik ancak Cloud Native uzmanlarının sıkı çalışması ve işbirliği ile başarılabilir.

Eğer bir Cloud Native uzmanı değilseniz fakat katkıda bulunmak istiyorsanız, bir uzmanla takım olmanızı tavsiye ederiz. Uzman, terimin kavramı tam olarak tarif ettiğinden emin olduğunda, ilk Sözlük katkınıza hazırsınız demektir.

Başka bir dilde yeterliliğe sahip olan kişiler, yerelleştirme çabalarına katılarak Sözlük'e değerli katkı yapabilirler.
Bu yeni başlayanlar için de uygundur. İngilizce'deki oturmuş tanımlar ile, daha az tecrübeli kişiler başka bir dile yerelleştirme yapabilirler. Siz de, mevcut olan yerelleştirme takımlarına katılabilir veya yeni bir tane başlatabilirsiniz. Bu rehberin "[Sözlüğü yerelleştirmemize yardım edin](#help-localize-the-glossary)" kısmını okuyarak nasıl başlayacağınızı öğrenebilirsiniz.

**Türkçe yerelleştirme ekibi**

Türkçe yerelleştirme ekibi olarak katkılarınızı bekliyoruz!

Ekibimiz herkesin katılımına açık.

Türkçe yerelleştirme ekibi olarak her türden katılımcıya yönelik görevlerimiz bulunmakta.

CNCF Sözlüğü yerelleştirmesine yardımcı olarak:

- Açık kaynağa katkı yapmak için iyi bir başlangıç şansı edebilirsiniz. Açık kaynak katkı süreçlerine giriş yapıp, topluluk işleyişi hakkında fikir sahibi olabilirsiniz.
- Türkiye'den başka Cloud Native ile ilgilenen kişiler ile bağlantı kurabilirsiniz.
- CNCF topluluğu hakkında fikir edinebilirsiniz.
- Türk yazılım ve teknoloji topluluğuna fayda sağlayabilirsiniz.

Ekibimiz şeffaf ve açık bir şekilde çalışmakta.

Katılmak için bize CNCF Slack'inde, [#glossary-localization-turkish](https://cloud-native.slack.com/archives/C05ATBGLHJ7) kanalında selam verebilir ve katılım talimatlarını görebilirsiniz.

## Başlamadan Önce

Sözlük katkı serüveninize başlamadan önce, aşağıdaki adımları tamamladığınızdan emin olun:

1. Eğer yoksa, Bir [GitHub hesabı](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account) oluşturun.
2. [Katılımcı Lisans Sözleşmesi](https://docs.linuxfoundation.org/lfx/easycla/v2-current/contributors)ni (Contributor License Agreement - CLA) imzalayın.
3. [Commit imzanızı doğrulayın](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)
4. Commit'lerinizde "Onaylandı" göstergesini göstermek için GitHub hesabınızda [farkındalık modunu](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits#about-vigilant-mode) açın.

## Örnek Uygulamalar {#best-practices}

Gözden geçirme sürecini kolaylaştırmak için, lütfen [anlama bağlı satır sonları](https://sembr.org/) kullanın (örn: bir satırda bir cümle).
GitHub'da Markdown metinlerini doğru bir şekilde biçimlendirmek (örn: bağlantı, kalın, italik) için bu [Markdown kopya kağıdına](https://www.markdownguide.org/cheat-sheet/) bakmanızı tavsiye ederiz.
Ayrıca, .md dosyalarına isim verirken, lütfen parantezlerden kaçının, sadece küçük harfler kullanın ve boşluk yerine tire (-) kullanın.


## Stil Kılavuzu

Katkı sürecini daha verimli hale getirmek için, biçimlendirme ve belge yazımını anlatan [Stil Kılavuzumuzu](/tr/style-guide/) okuyun.

## Sözlük topluluğuna katılın! {#join-the-glossary-community}

Eğer düzenli olarak katkı yapmak istiyorsanız, aylık Sözlük Çalışma Grubu toplantılarımıza katılmayı değerlendirebilirsiniz.
[CNCF Takviminde](https://www.cncf.io/calendar/), toplantı detaylarını bulabilirsiniz.
Ayrıca, CNCF Slack'inde [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) kanalından da geliştiriciler ve katkı verenler ile de iletişime geçebilirsiniz. Sizinle tanışmayı çok isteriz!

## Mevcut bir issue üzerinde çalışma {#work-on-an-existing-issue}

Sözlük GitHub repository'sinden [issue'lara](https://github.com/cncf/glossary/issues) bakın. Etiketleri (örn. Turkish language, help needed, good first issue) kullanarak filtreleme yapabilirsiniz.

![Issue and labels](/images/how-to/issue-and-labels.png)

Seçtiğiniz issue'nun başkasına atanmadığından emin olun. Örneğin, burada ilk 3 issue'nun müsait olduğunu ama 4.'nün başkasına atanmış olduğunu görebilirsiniz.

![assigning a term](/images/how-to/howto-04.png)

Bir issue seçtikten sonra, yorum yazın.

![Claiming an issue](/images/how-to/claiming-an-issue.png)

Bunlara ek olarak, CNCF Slack’indeki [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) kanalında, proje geliştiricilerine haber verin.
_@Catherine Paganini_, _@Seokho Son_, _@Jihoon Seo_ ve _@iamnoah_ kullanıcılarını da, görmelerinden emin olmak için mesajınızda etiketleyin.

Sonraki adımlar için, lütfen [Yeni bir terim gönderme (PR oluşturma)](#submitting-a-new-term) kısmına bakın.

**Note**: Seçtiğiniz issue üzerinde proje geliştiricileri issue'yu size atadıktan sonra çalışabilirsiniz.
Aynı anda sadece tek bir terim issue'yu talep edebilirsiniz.
Birden çok terim üzerinde çalışacaksanız, bunları sırasıyla yapmanız gerekiyor.

## Yeni terimler önerme {#propose-new-terms}

Başkalarının üzerinde çalışması için veya kendiniz tanımını oluşturmak için bir terim önerebilirsiniz.
Her iki durumda da, bir [issue oluşturarak](#creating-an-issue) işe başlamalısınız.
Sözlük'e eklenmek için, her terimin [CNCF'in cloud native tanımına](https://github.com/cncf/toc/blob/main/DEFINITION.md) uygun olması gerekmektedir
Bu kuralın istisnası, sadece Cloud Native kavramlarını anlamak için kullanılan temel terimler olabilir.

Aşağıda, GitHub ile aşınalığı olmayanlar için bir adım adım kılavuz bulunmaktadır.
**GitHub hakkında tecrübeli olsanız bile**, lütfen şu konular hakkında bilgi sahibi olmak için bu _kılavuza gözatın_:

1. Issue'lar ve yeni terimler için şablonların yerini belirleme.
2. İssue talep etme.
3. [İmla kontrolü](#spell-check) hatalarını çözme.

### Yeni bir issue oluşturma {#creating-an-issue}

[Sözlük GitHub repository'sindeki](https://github.com/cncf/glossary/issues) "Issues" kısmına gidin ve Yeni Issue ("New issue") düğmesine basın.

![issues](/images/how-to/howto-01.png)

Şablonlardan, "Request to add a new term (English)" seçeneğini seçin.

![templates](/images/how-to/english-issue-template.jpg)

Önerdiğiniz terimi yazın, soruları cevaplayın, kutuları işaretleyin ve "Submit new issue" butonuna basın.
Eğer sadece bir terim öneriyorsanız, işiniz bu kadar! Eğer terimin tanımının üzerinde çalışmak istiyorsanız, okumaya devam edin.

### Oluşturduğunuz terimin tasnifi {#triaging-your-issue}

Sonrasında, sözlük proje geliştiricileri, oluşturduğunuz issue'yu tasnif edecekler.
Yani, terimin sözlüğün bir parçası olup olmayacağını değerlendirecekler.
Her terim önerisi kabul edilmeyebilir. Sözlüğe eklenecek terimlerin, oturmuş ve yaygın olarak kullanılan Cloud Native kavramları olması gerekiyor.

Lütfen, proje geliştiricilerlerine Slack üzerinden yeni bir terim önerdiğinizi bildirin ve _@Catherine Paganini_, _@Seokho Son_, _@Jihoon Seo_, and/or _@iamnoah_ kullanıcılarını mesajınızda etiketleyin.
Eğer terimin tanımı üzerinde çalışmak istiyorsanız, issue'yu size atamaları için proje geliştiricilerlerine haber verin.

### Yeni bir terim gönderme (PR oluşturma) {#submitting-a-new-term}

[Stil Kılavuzunda](/tr/style-guide/) açıklandığı gibi, bir Google Docs veya Word belgesi ile başlamanızı tavsiye ediyoruz.

Terim göndermeye hazır olduğunda, "content" klasörüne gidin.

![content](/images/how-to/howto-05.png)

…sonra "en" (İngilizce için) veya dilinizin ilk iki harfi.

![language folder](/images/how-to/howto-06.png)

… `_TEMPLATE.md dosyasını seçin.

![template](/images/how-to/howto-07.png)

İçeriği kopyalayın.

![copy content](/images/how-to/howto-08.png)

…ve "en" klasörüne geri gidin. "Add file" düğmesine basın ve "Create new file" seçeneğini seçin.

![create new file](/images/how-to/howto-09.png)

Adres kısmına, [Örnek Uygulamalar](#best-practices) kısmında bahsedildiği gibi isim yazın.
Dosya isminin sonuna .md uzantısını ekleyin (bu uzantı olmadan dosyanızın önizlemesini göremezsiniz).
Önceden kopyaladığınız içeriği şimdi aşağıya yapıştırın. Teriminizin tanımını artık yerine koyabilirsiniz.
Oluşturduğunuz Markdown içeriğini kontrol etmek için, [Örnek Uygulamalar](#best-practices) kısmında bahsedildiği üzere, "Preview" düğmesine basın.

![finalize term](/images/how-to/howto-10.png)

Aşağıya inin ve commit mesajı yazın. "Commit new file" düğmesine basın
ve…

![commit new file](/images/how-to/howto-11.png)

… artık bir PR göndermeye hazırsınız:

![create a pr](/images/how-to/howto-12.png)

"Create pull request" düğmesine bastığınızda, gönderdiğiniz PR "Pull requests" sekmesinde görünecek.

![prs](/images/how-to/howto-13.png)

## Mevcut bir terimi değiştirme {#update-an-existing-term}

Mevcut bir terimi değiştirmek için, bir issue oluşturarak istekte bulunabilir veya değişiklikleri
kendiniz yaparak bir PR gönderebilirsiniz.

### Issue oluşturarak değişiklik isteme {#request-a-change-via-an-issue}

Eğer bir terimdeki bir sorunu haber vermek isterseniz, CNCF Sözlük sayfalarındaki "Sorun Bildir" seçeneğini kullanabilirsiniz.
Sorun bildirmek istediğiniz sayfaya gidin ve "Sorun Bildir" linkine basın.
Bu sizin için otomatik olarak bir issue oluşturma formu dolduracaktır.

![report issue](/images/how-to/howto-14.png)

Önerilerinizi ve sebeplerini tarif edin ve "Submit" düğmesine basın.

![submit issue](/images/how-to/howto-15.png)

### Bir terimi doğrudan değiştirme {#update-a-term-directly}

Bir terimi değiştirip önerilerinizi bildirmek için, "Bu Sayfayı Düzenle" linkine basın.

![edit this page](/images/how-to/howto-16.png)

Terimin GitHub sayfası açılacaktır. Değişikliklerinizi yapın ve bir PR oluşturun.
Lütfen kurallarımıza uyduğunuzdan emin olmak için [Örnek Uygulamalar](#best-practices) kısmına bakın
ve [Stil Kılavuzu](/tr/style-guide/) kısmını okuyun.

## Sözlüğü yerelleştirmemize yardım edin {#help-localize-the-glossary}

Sözlüğü yerelleştirmemize yardımcı olmak için, lütfen CNCF Slack'indeki [#glossary-localizations](https://cloud-native.slack.com/archives/C02N2RGFXDF) kanalına katılın ve bize bir mesaj gönderin.
Mevcut bir ekibe katılabilir veya yeni bir ekip kurabilirsiniz
(gereklilikler için [Localization Guide](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md) belgesini okuyun).
Ekibin katkı sürecinin detaylarını öğrenmek için, lütfen katkı yapmak istediğiniz dildeki **"Nasıl katkı yapabilirim?"** kılavuzunu okuyun.

## İmla kontrolü {#spell-check}

İmla kontrolünün (spell check) hata vermesinin iki sebebi olabilir:

- Gönderdiğiniz PR imla hataları barındırıyor olabilir.
- Gönderdiğiniz PR kelime listesinde kayıtlı olmayan bazı kelimeler barındırıyor olabilir.

Kelime listesine yeni kelimeler eklemek için:

1. PR'ınızda, "wordlist.txt" dosyasını bulun.
2. "Edit this file" düğmesine basın ve eksik kelimeleri alfabetik sıraya uyacak şekilde ekleyin
3. Bir commit mesajı yazın ve "Sign off and propose changes" düğmesine basın.

**Not**: İmla kontrolü büyük-küçük harf duyarsız yapılmaktadır.


**Bu kılavuz [The Good Docs Project](https://thegooddocsproject.dev/) projesindeki şablonlar ile oluşturulmuştur.**
