---
title: عقدة
status: مكتملة
category: مفهوم
---
العُقدة (Node) هو أي جهازٍ يعمل بتناغمٍ مع أجهزة أخرى، أو عقد لإنجاز هدفٍ مشترك،
و[العنقود](/cluster/)  هو مَجْمَع العُقد.
كأمثلةٍ على العُقد في بيتك حاسوبك الشخصي والطابعة وموجه الشبكة (المودم)،
فكلها أجهزةٌ مرتبطة بشبكةٍ رقمية تتعاون في مهمة واحدة.
وفي سياق [تقنيات الحوسبة السحابية](/cloud-native-tech/) يجوز تصنيف الحواسيب الحقيقية أو الافتراضية حتى الحاويات كعُقد،
فكل منها قابلٌ للضم مع أمثاله للتعاون على تشغيل التطبيقات.

## المشكلة التي تعالجها
إن تشغيل التطبيقات الرقمية على عقدة منفردة (سواءً كانت العقدة حاويةً أو حاسوباً) يشكل خطراً عليها،
فهي معرضةٌ للفشل عند عطل تلك العقدة.
ولذلك تُشَغَّل التطبيقات الحديثة موزعةً على عدة عقدٍ ضمن عنقود واحدٍ أو عدة عناقيد.

## كيف تساعد؟
تمثل العقدة أصغر وحدة مستقلة من الموارد الحاسوبية
(وهي [الذاكرة](https://ar.wikipedia.org/wiki/ذاكرة_حاسوب)
و[المعالج](https://ar.wikipedia.org/wiki/معالج_(حوسبة))
و[الشبكة](https://ar.wikipedia.org/wiki/شبكة_حاسوب))
يمكن تعيينها إلى عنقود.
من الممكن تشغيل تطبيق محدد على عقدة محددة،
مستخدماً موارد هذه العقدة خصيصاً لتشغيل ذلك التطبيق،
والأفضل ترك العقد غير متباينة لتوزيع التطبيقات بالتساوي عليها جميعاً،
مما يسهم في الإستفادة المثلى من موارد النظام.
