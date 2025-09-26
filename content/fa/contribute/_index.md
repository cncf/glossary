---
title: چگونه مشارکت کنیم
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

## خوش‌آمدید

به راهنمای مشارکت در Cloud Native Glossary خوش آمدید و از علاقه شما سپاس‌گزاریم. راه‌های متعددی برای مشارکت در این پروژه وجود دارد که در ادامه با جزئیات آن‌ها آشنا می‌شوید:

1) [کار روی یک Issue موجود](#work-on-an-existing-issue)
2) [پیشنهاد اصطلاح‌های جدید](#propose-new-terms)
3) [به‌روزرسانی اصطلاح‌های فعلی](#update-an-existing-term)
4) [بومی‌سازی Glossary](#help-localize-the-glossary)

## نمای کلی Glossary CNCF

هدف این Glossary ساده‌سازی فضای Cloud Native — که به پیچیدگی مشهور است — و در نتیجه دسترس‌پذیرتر کردن آن برای همه است.

محتوای Cloud Native Glossary در [این مخزن GitHub](https://github.com/cncf/glossary) نگه‌داری می‌شود؛ جایی که فهرست [Issueها](https://github.com/cncf/glossary/issues)، Pull Requestها ([PR](https://github.com/cncf/glossary/pulls)) و [گفت‌وگوها](https://github.com/cncf/glossary/discussions) درباره Glossary را خواهید یافت.

## چه کسانی می‌توانند مشارکت کنند؟

نحوه مشارکت شما به میزان تخصصتان در Cloud Native بستگی دارد. ساده‌سازی مفاهیم پیچیده نیازمند دانش عمیق در آن موضوع است. بنابراین برای افزودن اصطلاح جدید باید روی آن تسلط داشته باشید. مشارکت‌کنندگان معمولاً مهندسانی هستند که مدت‌ها با این فناوری‌ها کار کرده‌اند یا پژوهشگرانی که روی Cloud Native تمرکز دارند.

این دانش لازم است، زیرا توضیح مفاهیم پیچیده با واژه‌های ساده _واقعاً_ دشوار است. نتیجه ساده و کاربرپسند حاصل همکاری و تلاش زیاد متخصصان Cloud Native است.

اگر هنوز متخصص Cloud Native نیستید ولی می‌خواهید مشارکت کنید، پیشنهاد می‌کنیم با فردی متخصص همراه شوید. وقتی او مطمئن شد تعریف دقیق است، شما آماده نخستین مشارکت در Glossary هستید.

تلاش بومی‌سازی جایی است که تازه‌کارانِ مسلط به زبان دیگر می‌توانند نقش ارزشمندی ایفا کنند. با وجود تعاریف دقیق به انگلیسی، مشارکت‌کنندگان کمتر باتجربه می‌توانند اصطلاحات را به زبان مقصد ترجمه کنند. می‌توانید به تیم بومی‌سازی موجود بپیوندید یا تیم جدیدی بسازید. برای شروع، بخش [کمک به بومی‌سازی Glossary](#help-localize-the-glossary) در همین راهنما را بخوانید.

## پیش از آغاز

قبل از شروع مسیر مشارکت در Glossary، این مراحل را انجام دهید:

1. اگر هنوز حسابی ندارید، یک [حساب GitHub](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account) بسازید.
2. اگر در محیط محلی خود توسعه می‌دهید، مقادیر [`user.name`](https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git#setting-your-git-username-for-every-repository-on-your-computer) و [`user.email`](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-email-address-for-every-repository-on-your-computer) را در تنظیمات Git درست تنظیم کنید.
3. هر زمان با `git commit` Commit می‌زنید، گزینه `-s` را برای افزودن امضای DCO اضافه کنید. یا این‌که با اجرای `git config --global alias.ci "commit -s"` یک نام مستعار به `gitconfig` اضافه کنید.

## بهترین رویه‌ها {#best-practices}

برای تسهیل فرایند بازبینی، لطفاً از [Semantic Line Break](https://sembr.org) استفاده کنید. همچنین توصیه می‌کنیم این [برگه تقلب Markdown](https://www.markdownguide.org/cheat-sheet/) را برای فرمت‌بندی درست متن در GitHub (مانند لینک، بولد، ایتالیک) بررسی کنید. هنگام نام‌گذاری فایل‌های `.md` از حروف کوچک و خط تیره به‌جای فاصله استفاده کنید و از پرانتز بپرهیزید.

## راهنمای سبک

[راهنمای سبک](/style-guide/) ما را بخوانید تا با دستورالعمل‌های نگارشی و قالب‌بندی آشنا شوید و روند مشارکت را کارآمدتر کنید.

## به جامعه Glossary بپیوندید! {#join-the-glossary-community}

با Maintainerها و سایر مشارکت‌کنندگان در کانال [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) در Slack CNCF در ارتباط باشید — خوشحال می‌شویم شما را ببینیم!

## کار روی یک Issue موجود {#work-on-an-existing-issue}

برای یافتن فهرست Issueهای موجود به [Issues مخزن Glossary در GitHub](https://github.com/cncf/glossary/issues) بروید. می‌توانید با استفاده از Labelها (مانند English language، help needed، good first issue) نتایج را فیلتر کنید.

![Issue و Labelها](/images/how-to/issue-and-labels.png)

اطمینان حاصل کنید اصطلاحی که انتخاب کرده‌اید از قبل به کسی اختصاص داده نشده باشد. برای مثال، در این تصویر سه اصطلاح نخست آزاد هستند و اصطلاح چهارم قبلاً Assign شده است.

![Assign کردن اصطلاح](/images/how-to/howto-04.png)

پس از انتخاب اصطلاح، روی Issue نظر بگذارید.

![Claim کردن Issue](/images/how-to/claiming-an-issue.png)

علاوه بر آن، Maintainerها را در کانال [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) در Slack CNCF مطلع کنید و _@iamnoah_، _@nate-double-u_، _@Seokho Son_، _@Jihoon Seo_ و/یا _@Junya Okabe_ را Mention کنید تا درخواست شما دیده شود.

برای مراحل بعدی، به بخش [ارسال اصطلاح جدید (ایجاد PR)](#submitting-a-new-term) مراجعه کنید.

**نکته**: پس از این‌که Maintainerها Issue را به شما Assign کردند، می‌توانید کار را آغاز کنید. در هر زمان فقط یک اصطلاح را می‌توان Claim کرد. کار روی اصطلاحات متعدد باید به‌صورت متوالی باشد؛ ابتدا اصطلاح فعلی را کامل کنید و سپس سراغ بعدی بروید.

## پیشنهاد اصطلاح‌های جدید {#propose-new-terms}

می‌توانید اصطلاح جدیدی را برای دیگران پیشنهاد دهید یا خودتان تعریف آن را بنویسید. در هر دو حالت باید [یک Issue بسازید](#creating-an-issue). برای افزوده‌شدن به Glossary هر اصطلاح جدید باید با [تعریف Cloud Native CNCF](https://github.com/cncf/toc/blob/main/DEFINITION.md) هم‌خوان باشد. تنها استثنا اصطلاحات پایه‌ای هستند که برای درک مفاهیم Cloud Native لازم‌اند.

در ادامه راهنمای گام‌به‌گام برای افراد ناآشنا با GitHub می‌آید. **اگر GitHub Pro هستید**، لطفاً این راهنما را مرور کنید تا اطلاعات لازم را درباره موارد زیر به دست آورید:

1. پیدا کردن Templateهای Issue و اصطلاح جدید.
2. Claim کردن Issueها.
3. رفع خطاهای [Spell Check](#spell-check).

### ساخت Issue {#creating-an-issue}

به بخش Issues در [مخزن Glossary در GitHub](https://github.com/cncf/glossary/issues) بروید و روی «New issue» کلیک کنید.

![issues](/images/how-to/howto-01.png)

از فهرست Templateها گزینه «Request to add a new term (English)» را انتخاب کنید.

![templates](/images/how-to/english-issue-template.jpg)

واژه پیشنهادی را وارد کنید، به سؤالات پاسخ دهید، گزینه‌ها را تیک بزنید و «Submit new issue» را فشار دهید. اگر فقط پیشنهاد اصطلاح جدید می‌دهید، همین کافی است. اگر می‌خواهید روی تعریف کار کنید، ادامه دهید.

### رسیدگی به Issue شما {#triaging-your-issue}

در مرحله بعد Maintainerها Issue را بررسی می‌کنند تا مشخص شود این اصطلاح باید بخشی از Glossary باشد یا خیر. همه اصطلاحات پذیرفته نمی‌شوند؛ تنها مفاهیم جاافتاده و پرکاربرد Cloud Native در Glossary قرار می‌گیرند.

لطفاً Maintainerها را در Slack مطلع کنید و _@iamnoah_، _@nate-double-u_، _@Seokho Son_، _@Jihoon Seo_ و/یا _@Junya Okabe_ را Mention کنید تا درخواست شما دیده شود. اگر قصد دارید روی تعریف کار کنید، اطلاع دهید تا Issue به شما Assign شود.

### ارسال اصطلاح جدید (ایجاد PR) {#submitting-a-new-term}

همان‌طور که در [راهنمای سبک](/style-guide/) آمده، قویاً توصیه می‌کنیم ابتدا پیش‌نویس را در Google Doc یا Word آماده کنید.

پس از آماده شدن متن، به پوشه `content` (در بخش <>Code) بروید…

![content](/images/how-to/howto-05.png)

… سپس پوشه «en» (برای انگلیسی) یا دو حرف اول زبان موردنظر…

![language folder](/images/how-to/howto-06.png)

… و فایل `_TEMPLATE.md` را انتخاب کنید.

![template](/images/how-to/howto-07.png)

محتوا را کپی کنید…

![copy content](/images/how-to/howto-08.png)

… و به پوشه «en» بازگردید. «Add file» و سپس «Create new file» را انتخاب کنید.

![create new file](/images/how-to/howto-09.png)

نام اصطلاح را مطابق دستورالعمل‌های [بهترین رویه‌ها](#best-practices) در URL وارد کنید و در انتها `.md` اضافه کنید (بدون این پسوند امکان پیش‌نمایش ندارید). حالا Template را در بخش ویرایشگر Paste کنید و متن تعریف خود را جایگزین کنید. برای اطمینان از رعایت Markdown مطابق [بهترین رویه‌ها](#best-practices) روی «Preview» کلیک کنید.

![finalize term](/images/how-to/howto-10.png)

پایین بروید، پیامی برای Commit بنویسید و وقتی آماده بودید «Commit new file» را بزنید و…

![commit new file](/images/how-to/howto-11.png)

… حالا آماده ایجاد PR هستید:

![create a pr](/images/how-to/howto-12.png)

پس از کلیک روی «Create pull request»، PR شما در تب «Pull requests» ظاهر می‌شود.

![prs](/images/how-to/howto-13.png)

## به‌روزرسانی اصطلاح موجود {#update-an-existing-term}

برای به‌روزرسانی یک اصطلاح می‌توانید با ایجاد Issue درخواست تغییر بدهید یا خودتان تغییر دهید و PR ارسال کنید.

### درخواست تغییر از طریق Issue {#request-a-change-via-an-issue}

برای اعلام مشکل در یک اصطلاح می‌توانید از گزینه «Report issue» در وب‌سایت CNCF Glossary استفاده کنید. به صفحه اصطلاح موردنظر بروید و روی «Report issue» کلیک کنید؛ یک Issue به‌صورت خودکار ایجاد می‌شود.

![report issue](/images/how-to/howto-14.png)

پیشنهادها و دلیل نیاز به آن‌ها را توضیح دهید و ارسال کنید؛ همین.

![submit issue](/images/how-to/howto-15.png)

### به‌روزرسانی مستقیم اصطلاح {#update-a-term-directly}

برای اعمال تغییر و ارسال پیشنهاد، روی «Edit this page» کلیک کنید.

![edit this page](/images/how-to/howto-16.png)

با این کار صفحه GitHub آن اصطلاح باز می‌شود؛ تغییرات خود را اعمال کنید و PR بسازید.
این کار صفحه GitHub آن اصطلاح را باز می‌کند. تغییرات را اعمال کنید و PR بسازید. برای رعایت نکات قالب‌بندی، به بخش [بهترین رویه‌ها](#best-practices) در بالا و [راهنمای سبک](/style-guide/) مراجعه کنید.

## کمک به بومی‌سازی Glossary {#help-localize-the-glossary}

برای بومی‌سازی Glossary به زبان مقصد، به کانال [#glossary-localizations](https://cloud-native.slack.com/archives/C02N2RGFXDF) در Slack CNCF بپیوندید و پیام بفرستید. می‌توانید به تیم موجود ملحق شوید یا تیم جدیدی تشکیل دهید (برای اطلاع از الزامات، [راهنمای بومی‌سازی](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md) را بخوانید). لطفاً راهنمای «How to Contribute» مربوط به زبان مقصد را مطالعه کنید تا از جزئیات فرایند مشارکت آن تیم آگاه شوید.

## Spell Check {#spell-check}

دو دلیل اصلی برای شکست تست Spell Check وجود دارد:

- PR شامل غلط املایی است.
- PR کلماتی دارد که در فهرست واژگان ثبت نشده‌اند.

برای افزودن واژه جدید به فهرست مراحل زیر را انجام دهید:

1. در PR خود فایل «wordlist.txt» را پیدا کنید.
2. روی «Edit this file» کلیک کنید و واژه‌های جدید را به ترتیب الفبایی اضافه کنید.
3. پیام Commit بنویسید و گزینه «Sign off and propose changes» را انتخاب کنید.

**نکته**: Spell Check نسبت به بزرگی و کوچکی حروف حساس نیست.

**این راهنما بر اساس Templateهای [The Good Docs Project](https://thegooddocsproject.dev/) به‌روزرسانی شده است.**
