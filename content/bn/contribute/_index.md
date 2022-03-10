---
title: কিভাবে অবদান রাখতে হবে
toc_hide: true
menu:
  main:
    weight: 10
    pre: <i class='fas fa-pen-square'></i>
---
ক্লাউড নেটিভ শব্দকোষের(glossary) সমস্ত বিষয়বস্তু এই Github Repo সংরক্ষণ করা হয়েছে। আপনি সেখানে [issues](https://github.com/cncf/glossary/issues), [PRs](https://github.com/cncf/glossary/pulls) এবং শব্দকোষ(glossary) সম্পর্কে [ আলোচনার](https://github.com/cncf/glossary/discussions) একটি তালিকা পাবেন।

তিনটি উপায়ে আপনি অবদান রাখতে পারেন:

1) [একটি বিদ্যমান সমস্যা নিয়ে কাজ করুন](#work-on-an-existing-issue)
2) [নতুন শর্তাদি প্রস্তাব করুন](#propose-new-terms)
3) [বিদ্যমানগুলি আপডেট করুন](#update-an-existing-term)
4) [শব্দকোষ অনুবাদে সাহায্য করুন](#help-translate-the-glossary)

## শব্দকোষ সম্প্রদায়ে যোগ দিন!

আপনি যদি নিয়মিত অবদান রাখতে চান তবে আমাদের মাসিক শব্দকোষ ওয়ার্কিং গ্রুপ মিটিংয়ে যোগদানের কথা বিবেচনা করুন। আপনি [CNCF ক্যালেন্ডার](https://www.cncf.io/calendar/) এ মিটিংয়ের বিশদ বিবরণ পেতে পারেন। এছাড়াও আপনি CNCF Slack-এ আমাদের [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) চ্যানেলে রক্ষণাবেক্ষণকারী এবং সহযোগী অবদানকারীদের সাথে সংযোগ করতে পারেন — আমরা আপনার সাথে দেখা করতে চাই!

## একটি বিদ্যমান সমস্যা নিয়ে কাজ করুন

[Glossary GitHub repo issue](https://github.com/cncf/glossary/issues) এ যান। সেখানে আপনি সমস্ত সমস্যার একটি তালিকা দেখতে পাবেন। আপনি লেবেল দ্বারা ফিল্টার করতে পারেন (যেমন বাংলা ভাষা, সাহায্যের প্রয়োজন(help needed), প্রথম ভাল সমস্যা(good first issue))। মনে রাখবেন যে এটি করার জন্য আপনার একটি GitHub অ্যাকাউন্টের প্রয়োজন হবে।

![Issue and labels](/images/how-to/issue-and-labels.png)

Make sure the term you are interested in is not already assigned to someone. Here you can see that the first three terms are available while the next term has already been assigned.

![assigning a term](/images/how-to/howto-04.png)

Once you found a term you want to work on, say so in the issue. Click on it and add a comment.

![Claiming an issue](/images/how-to/claiming-an-issue.png)

Additionally, please also join the [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) channel on the CNCF Slack and let the maintainers know that you've raised an issue for a new term (ideally, tag _@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_, and/or _@iamnoah_ to be sure they don't miss it). Note that you can only claim one term at a time. If you want to work on multiple terms, please finish one before claiming the next one.

Once they assign it to you, you can start working on it. For the next steps, please refer to the [Submitting a new term (creating a PR)](#submitting-a-new-term-creating-a-pr) section.

## Propose new terms
You can propose a new term for others to work on or create a new definition yourself. Either way, you'll start by creating an issue.

Below is a step-by-step guide for those not yet familiar with GitHub. **If you are a GitHub Pro**, please *do* have a quick look to make sure you use our issue templates, appropriate naming conventions, claim a PR on Slack (otherwise we may miss it), and where to find the file template. And please make sure to read the [Style Guide](https://glossary.cncf.io/style-guide/) before getting started — thank you! 

### Creating an issue
Go to the [Glossary GitHub repo](https://github.com/cncf/glossary/issues) issues and click on "new issue."

![issues](/images/how-to/howto-01.png)

You'll see a variety of templates. To propose a new term in English, select "Request to add a new term (Default:English)."

![templates](/images/how-to/english-issue-template-new.png)

Add the word you're suggesting, answer the two questions below, and hit "submit new issue." If you're just proposing a new term, you're done! To work on it, follow the next steps.


### Triaging your issue
Next, the maintainers will triage the issue. That means they will assess if the term should be part of the Glossary (note, not every term will be admitted. Terms should be established and widely-used cloud native terms).

Please let the maintainers know that you've submitted a term on Slack as they may otherwise miss it. Ideally, tag _@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_, and/or _@iamnoah_.  If the term is approved and you want to work on it, they'll assign it to you.

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




