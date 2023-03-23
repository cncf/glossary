---
title: How To Contribute
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

The Cloud Native Glossary content is stored in [this GitHub repo](https://github.com/cncf/glossary) 
where you'll find a list of [issues](https://github.com/cncf/glossary/issues), pull requests ([PRs](https://github.com/cncf/glossary/pulls)), and 
[discussions](https://github.com/cncf/glossary/discussions) about the glossary. 

There are four ways you can contribute:

1) [Work on an existing issue](#work-on-an-existing-issue)
2) [Propose new terms](#propose-new-terms)
3) [Update existing ones](#update-an-existing-term)
4) [Help translate the glossary](#help-translate-the-glossary)

## Who can contribute?

The goal of this glossary is to simplify the cloud native space — which is notorious for its complexity — and thus make it more accessible to people. 

Simplifying complex concepts requires expertise of the topic and peer-collaboration. Therefore, to contribute with a new term you must have expert knowledge of the cloud native space. 

The localization effort is where beginners can make valuable contributions to the glossary. 
With solid existing definitions in English, less experienced contributors can localize terms to a target language. You can join an existing localization team or create a new one. Read the section [Help translate the glossary](#help-translate-the-glossary) of this guide to learn how to get started. 

Before making any contribution to the glossary, you will need to sign the [Contributor License Agreement](https://docs.linuxfoundation.org/lfx/easycla/v2-current/contributors) (CLA). You will also need to [verify your commit signature](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification) and enable [vigilant mode](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits#about-vigilant-mode) in your GitHub account to display the "Verified" status on your commits. 


## Join the Glossary community! {#join-the-glossary-community}

If you want to contribute regularly, consider joining our monthly Glossary Working Group meetings. 
You can find the meeting details in the [CNCF calendar](https://www.cncf.io/calendar/). 
You can also connect with the maintainers and fellow contributors in our [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) channel on the CNCF Slack 
— we'd love to meet you! 

## Work on an existing issue {#work-on-an-existing-issue}

Go to the [Glossary GitHub repo issues](https://github.com/cncf/glossary/issues) where you will find a list of available issues. You can use labels (e.g., English language, help needed, good first issue) to filter out issues. 
Note that you'll need a GitHub account to do any of this.

![Issue and labels](/images/how-to/issue-and-labels.png)

Be sure the term you select hasn't already been assigned to anybody. 
For example, here you can see that the first three terms are available while the fourth one has already been assigned.

![assigning a term](/images/how-to/howto-04.png)

Once you select a term to work on, write a comment in the issue. 

![Claiming an issue](/images/how-to/claiming-an-issue.png)

Additionally, please join the [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) channel on the CNCF Slack and 
let the maintainers know that you've selected an issue
(tag _@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_, and/or _@iamnoah_ to be sure they don't miss it). 

For the next steps, please refer to the [Submitting a new term (creating a PR)](#submitting-a-new-term) section.

**Note**: you can start working on an issue after the maintainers assigned it to you. 
You can only claim one term at a time. 
Workig on multiple terms is sequential, you must complete a term before claiming the next one.

## Propose new terms {#propose-new-terms}

You can propose a new term for others to work on or create a new definition yourself. 
Either way, you'll start by creating an issue. 
Please note that terms must meet the [CNCF's cloud native definition](https://github.com/cncf/toc/blob/main/DEFINITION.md). 
The only exceptions are foundational terms needed to understand cloud native concepts.

Below is a step-by-step guide for those not yet familiar with GitHub. 
**If you are a GitHub Pro**, please _do_ scan this guide to ensure you gather enough information about the following topics:

1. Locating templates for issues and new terms.
2. Using naming conventions. 
3. Claiming issues. 
4. Solving [spell check](#spell-check) failures. 

Before getting started, we encourage you to read our [Style Guide](/style-guide/) to make the contribution processs more efficient — thank you! 

### Creating an issue {#creating-an-issue}

Go to the [Glossary GitHub repo](https://github.com/cncf/glossary/issues) issues and click on "New issue".

![issues](/images/how-to/howto-01.png)

Select "Request to add a new term (English)" from the list of templates. 

![templates](/images/how-to/english-issue-template.jpg)

Add the word you're suggesting, answer the questions, check the boxes, and hit "Submit new issue".
If you're just proposing a new term, you're done! If you want to work on the definition, follow the next steps.

### Triaging your issue {#triaging-your-issue}

Next, the maintainers will triage the issue. 
That means they will assess if the term should be part of the Glossary. 
Not every term will be admitted. To be included in the glossary, they should be established and widely-used cloud native concepts.

Please let the maintainers know that you've proposed a new term on Slack and tag _@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_, and/or _@iamnoah_ so that hey don't miss it.  
If you want to work on the definition, let the maintainers know and they'll assign it to you.

### Submitting a new term (creating a PR) {#submitting-a-new-term}

As stated in our [Style Guide](/style-guide/), we highly recommend starting with a Google or Word doc. 

Once the term is ready to submit, go to content (under <>code)…

![content](/images/how-to/howto-05.png)

…then "en" (or the language you are contributing to)…

![language folder](/images/how-to/howto-06.png)

…and select `_TEMPLATE.md`

![template](/images/how-to/howto-07.png)

Copy the content…

![copy content](/images/how-to/howto-08.png)

…and go back to the "en" folder. Click "Add file" and select "Create new file".

![create new file](/images/how-to/howto-09.png)

Add the name of the term in the URL (no capitalization, no spaces, no parentheses, and use hyphens to separate words).
Add the .md extension at the end (without this extension you won't be able to preview your file).
Now paste the template content in the section below. Copy and paste your definition into the file.
To make reviews easier, please **use [semantic line breaks](https://sembr.org/)** (e.g., one line per sentence).
Note that GitHub uses markdown to format the text (e.g., hyperlink, bold, italic).
Please refer to this [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/).
To verify you've used markdown as intended, click on "Preview".

![finalize term](/images/how-to/howto-10.png)

Scroll down and name the new commit file when you are ready to submit. 
You are now about to commit the term to your own branch. 
To submit a PR hit "Commit new file" and…

![commit new file](/images/how-to/howto-11.png)

…now you're creating a PR:

![create a pr](/images/how-to/howto-12.png)

After completing these steps your PR should be visible in the "Pull requests" tab.

![prs](/images/how-to/howto-13.png)

## Update an existing term {#update-an-existing-term}

To update an existing term, you can either report an issue or submit a PR containing your suggestions.

### Request a change via an issue {#request-a-change-via-an-issue}

If you want to flag a problem with a term, you can use the "Report issue" option of the CNCF Glossary webpage. 
Locate yourself in the CNCF page of the concept you'd like to flag and click on "Report issue", which will create an issue. 

![report issue](/images/how-to/howto-14.png)

Please describe your suggestions and why they are needed. Hit submit, and that's it. 

![submit issue](/images/how-to/howto-15.png)

### Update a term directly {#update-a-term-directly}

To modify a term directly, go to "Edit this page".

![edit this page](/images/how-to/howto-16.png)

This will open the term's GitHub page. Make your changes and submit a PR. 
Please refer to the "Submitting a new term" section above, and more specifically, the part that describes how to work with markdown. 

## Help translate the glossary {#help-translate-the-glossary}

To help translate the glossary into your native language, please join the [#glossary-localizations](https://cloud-native.slack.com/archives/C02N2RGFXDF) channel on the CNCF Slack workspace and let us know.
You can either join an existing team or create a new one 
(to see what it takes, read our [Localization Guide](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md)). Please read the **How to contribute** guide of the target language to gather the specifics of that team's contribution process. 
Please also join our monthly Glossary Working Group meetings. You can find the meeting details in the [CNCF calendar](https://www.cncf.io/calendar/). 
We look forward to meeting you there!

## Spell check {#spell-check}

There are two main reasons why the spell check can fail:

- The PR contains misspellings. 
- The PR contains words that are not registered in the word list. 

To add new words to the list, follow these steps:

1. In your PR, locate the file "wordlist.txt". 
2. Click "Edit this file" and add the missing words in alphabetic order. 
3. Add a commit message and select "Sign off and propose changes".

**Note**: the spell check is case-insensitive. 
