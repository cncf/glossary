---
title: योगदान कैसे करें
toc_hide: true
menu:
  main:
    weight: 10
    pre: <i class='fas fa-pen-square'></i>
---

क्लाउड नेटिव शब्दावली के लिए सभी सामग्री [इस GitHub रेपो](https://github.com/cncf/glossary) में संग्रहीत है। यहाँ आपको [इशू](https://github.com/cncf/glossary/issues), [PRs](https://github.com/cncf/glossary/pulls] और [चर्चाओं](https://github.com/cncf/glossary/discussions) की सूची मिलेगी।

आप तीन तरीकों से योगदान कर सकते हैं:

1) नए शब्द प्रस्तावित करें
2) मौजूदा शब्द अपडेट करें
3) शब्दकोष का अनुवाद करने में सहायता करें

## शब्दावली समुदाय में शामिल हों! 
यदि आप नियमित रूप से योगदान देना चाहते हैं, तो हमारी मासिक शब्दावली कार्य समूह की बैठकों में शामिल होने पर विचार करें। आप CNCF कैलेंडर में मीटिंग विवरण प्राप्त कर सकते हैं। आप [CNCF कैलेंडर](https://www.cncf.io/calendar/) पर हमारे #glossary मेन्टेनेरों और साथी योगदानकर्ताओं से भी जुड़ सकते हैं — हमें आपसे मिलकर खुशी होगी!

## नए शब्द प्रस्तावित करें
आप दूसरों के द्वारा परिभाषित होने को नये शब्द प्रस्तावित कर सकते हैं या स्वयं एक नई परिभाषा लिख सकते हैं। किसी भी तरह से, आप एक समस्या बनाकर शुरू करेंगे (ध्यान दें कि ऐसा करने के लिए आपको एक GitHub खाते की आवश्यकता होगी)।

नीचे उन लोगों के लिए चरण-दर-चरण मार्गदर्शिका दी गई है जो GitHub से परिचित नहीं हैं। **यदि आप एक गिटहब में निपुण हैं**, तो कृपया सुनिश्चित *करें* कि आप हमारे इशू टेम्प्लेट, उपयुक्त नामकरण परंपराओं का उपयोग करते हैं, Slack पर एक PR पर दावा करते हैं (अन्यथा हमसे चूक हो सकती है), और फ़ाइल टेम्पलेट कहां खोजें। कृपया शुरू करने से पहले [स्टाइल गाइड](https://glossary.cncf.io/style-guide/) पढ़ना सुनिश्चित करें — धन्यवाद!

### इशू बनाना
[शब्दावली गिटहब रेपो](https://github.com/cncf/glossary/issues) issue पर जाएं और "new issue" पर क्लिक करें।

![इशू](/images/how-to/howto-01.png)

आपको कई तरह के टेम्प्लेट दिखाई देंगे। हिंदी में एक नया शब्द प्रस्तावित करने के लिए, "English Language Glossary Request" चुनें।

![टेम्पलेट](/images/how-to/howto-02.png)

वह शब्द जोड़ें जिसका आप सुझाव दे रहे हैं और "submit new issue" दबाएं। यदि आप सिर्फ एक नया शब्द प्रस्तावित कर रहे हैं, तो आपका काम हो गया! इस पर काम करने के लिए, अगले चरणों का पालन करें।

![नया इशू](/images/how-to/howto-03.png)

Please join the #glossary channel on the CNCF Slack and let @Catherine Paganini, @jmo, and @Seokho Son know that you've submitted an issue and would like to work on it. They'll assign the issue to you signaling to everyone else that the term is already taken.

Here you can see that the first three terms are available while the next term has been assigned to someone.

![assigning a term](/images/how-to/howto-04.png)

Note that you can only claim one term at a time. If you want to work on multiple terms, please finish one before claiming the next.

### Submitting a new term (creating a PR)

Before getting started, please read the [Style Guide](https://glossary.cncf.io/style-guide/) — it will help minimize backs and forth. As stated in the style guide, we highly recommend starting with a Google or Word doc. 

Once the term is ready to submit, go to content (under code)…

![content](/images/how-to/howto-05.png)

…then "en" (or the language you are submitting for)…

![language folder](/images/how-to/howto-06.png)

…and select  _TEMPLATE.md

![template](/images/how-to/howto-07.png)

Copy the content…

![copy content](/images/how-to/howto-08.png)

…and go back to the "en" folder. Hit "add file" and select "create new file."

![create new file](/images/how-to/howto-09.png)

Add the term name in the URL (no capitalization and no space) and .md at the end (note: if your preview doesn't work, you probably forgot to add .md at the end). Now paste the template content below. Copy and paste your definition into the file. Note that GitHub uses markdown to format the text (e.g., hyperlink, bold, italic). Please refer to this [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/). To verify you've used markdown as intended, go to "preview."

![finalize term](/images/how-to/howto-10.png)

Scroll down and name the new commit file when you are ready to submit. You are now about to commit the term to your own branch. Submitting a PR requires one more step. Hit "commit new file" and…

![commit new file](/images/how-to/howto-11.png)

…now you're creating an PR:

![create a pr](/images/how-to/howto-12.png)

You should now see your PR under "Pull requests."

![prs](/images/how-to/howto-13.png)

## Update an existing term
To update an existing term, you can either suggest a change via an issue or go ahead and update the term directly by submitting a pull request (PR).

### Request a change via an issue
If you want to flag a problem with a term but don't know how or want to fix it yourself, click on "report issue."

![report issue](/images/how-to/howto-14.png)

This will directly open an issue. Please elaborate on which change is needed and why. Hit submit, and that's it. 

![submit issue](/images/how-to/howto-15.png)

### Update a term directly
To change a term directly, go to "edit this page." 

![edit this page](/images/how-to/howto-16.png)

This will open the term's GitHub page. Make your changes and submit a PR. Please refer to "submitting a new term" above for a detailed description (jump to the section that speaks about markdown).

## Help translate the glossary
To help translate the glossary into your native language, please join the #glossary-localizations channel on the CNCF Slack and let us know. You can either join an existing team or create a new one (to see what it takes, check out or [Localization Guide](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md)). Please also join our monthly Glossary Working Group meetings. You can find meeting details in the [CNCF calendar](https://www.cncf.io/calendar/). We look forward to meeting you there!




