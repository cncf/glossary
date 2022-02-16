---
title: How To Contribute
toc_hide: true
menu:
  main:
    weight: 10
    pre: <i class='fas fa-pen-square'></i>
---

The Cloud Native Glossary content is stored in [this GitHub repo](https://github.com/cncf/glossary) where you'll find a list of [issues](https://github.com/cncf/glossary/issues), [PRs](https://github.com/cncf/glossary/pulls), and [discussions](https://github.com/cncf/glossary/discussions) about the glossary. 

There are three ways you can contribute:

1) Propose new terms
2) Update existing ones 
3) Help translate the glossary

## Join the Glossary community! 
Consider joining our monthly Glossary Working Group meetings if you want to contribute regularly. You can find meeting details in the [CNCF calendar](https://www.cncf.io/calendar/). You can also connect with the maintainers and fellow contributors in our #glossary channel on the CNCF Slack — we'd love to meet you! 

## Propose new terms
You can propose a new term for others to work on or create a new definition yourself. Either way, you'll start by creating an issue (note that you'll need a GitHub account to do this).

Below is a step-by-step guide for those not yet familiar with GitHub. **If you are a GitHub Pro**, please *do* have a quick look to make sure you use our issue templates, appropriate naming conventions, claim a PR on Slack (otherwise we may miss it), and where to find the file template. And please make sure to read the [Style Guide](https://glossary.cncf.io/style-guide/) before getting started — thank you! 

### Creating an issue
Go to the [Glossary GitHub repo](https://github.com/cncf/glossary/issues) issues and click on "new issue."

![issues](/images/how-to/howto-01.png)

You'll see a variety of templates. To propose a new term in English, select "English Language Glossary Request."

![templates](/images/how-to/howto-02.png)

Add the word you're suggesting and hit "submit new issue." If you're just proposing a new term, you're done! To work on it, follow the next steps.

![new issue](/images/how-to/howto-03.png)

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




