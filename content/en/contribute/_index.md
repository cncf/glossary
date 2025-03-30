---
title: How To Contribute
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

## Welcome 

Welcome to the Cloud Native Glossary contributing guide, and thank you for your interest. 
There are a number of ways you can contribute to this project, which we'll cover in detail here: 

1) [Work on an existing issue](#work-on-an-existing-issue)
2) [Propose new terms](#propose-new-terms)
3) [Update existing ones](#update-an-existing-term)
4) [Localize the glossary](#help-localize-the-glossary)

## CNCF glossary overview 

The goal of this glossary is to simplify the cloud native space — which is notorious for its complexity — and thus make it more accessible to people. 

The Cloud Native Glossary content is stored in [this GitHub repo](https://github.com/cncf/glossary) 
where you'll find a list of [issues](https://github.com/cncf/glossary/issues), pull requests ([PRs](https://github.com/cncf/glossary/pulls)), and 
[discussions](https://github.com/cncf/glossary/discussions) about the glossary. 

## Who can contribute?

How you can participate in this project depends on your level of cloud native expertise. 
Simplifying complex concepts requires a deep knowledge of the topic. 
Therefore, to contribute new terms, you must be proficient in them. 
Contributors are typically engineers who have worked with these technologies for some time or academics focused on cloud native. 

That know-how is required because explaining complex concepts in simple words is _really_ hard. And while the digestible, user-friendly outcome may seem easy, achieving the desired simplicity results from hard work and collaboration between cloud native experts. 

If you are not a cloud native expert yet but still want to contribute, we recommend teaming up with someone who is. 
Once the expert is confident that the term accurately describes the concept, you are ready for your first Glossary contribution.

The localization effort is where beginners proficient in another language can make valuable contributions to the Glossary. 
With solid existing definitions in English, less experienced contributors can localize terms to a target language. You can join an existing localization team or create a new one. Read this guide's [Help Localize the glossary](#help-localize-the-glossary) section to learn how to get started. 

## Before you start

Before beginning your Glossary contributor journey, be sure to complete the following steps:

1. Create a [GitHub account](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account), if you don't have one already. 
2. Sign the [Contributor License Agreement](https://docs.linuxfoundation.org/lfx/easycla/v2-current/contributors) (CLA). 
3. [Verify your commit signature](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification)
4. Enable [vigilant mode](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits#about-vigilant-mode) in your GitHub account to display the "Verified" status on your commits. 

## Best practices {#best-practices}

To facilitate the reviewing process, please use [semantic line breaks](https://sembr.org/) (e.g., one line per sentence).
We recommend checking out this [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/) 
to correctly format Markdown text in GitHub (e.g., hyperlink, bold, italic).
And when naming .md files, please use lowercase letters and hyphens instead of spaces to separate words and avoid parenthesis.

## Style guide

Read our [Style Guide](/style-guide/) to understand our guidelines for formatting and writing documents and make the contribution process more efficient. 

## Join the Glossary community! {#join-the-glossary-community}

Connect with the maintainers and fellow contributors in our [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) channel on the CNCF Slack 
— we'd love to meet you! 

## Work on an existing issue {#work-on-an-existing-issue}

Go to the [Glossary GitHub repo issues](https://github.com/cncf/glossary/issues) to find a list of available issues. 
You can use labels (e.g., English language, help needed, good first issue) to filter out issues.

![Issue and labels](/images/how-to/issue-and-labels.png)

Be sure the term you select hasn't already been assigned to anybody. 
For example, here you can see that the first three terms are available while the fourth one has already been assigned.

![assigning a term](/images/how-to/howto-04.png)

Once you select a term to work on, comment on the issue. 

![Claiming an issue](/images/how-to/claiming-an-issue.png)

Additionally, notify the maintainers on the [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) channel of the CNCF Slack workspace and 
tag _@iamnoah_, _@nate-double-u_, _@Seokho Son_ and/or _@Jihoon Seo_ to be sure they don't miss it.

For the next steps, please refer to the [Submitting a new term (creating a PR)](#submitting-a-new-term) section.

**Note**: you can start working on an issue after the maintainers assigned it to you. 
You can only claim one term at a time. 
Workig on multiple terms is sequential, you must complete a term before claiming the next one.

## Propose new terms {#propose-new-terms}

You can propose a new term for others to work on or create a new definition yourself. 
Either way, you'll start by [creating an issue](#creating-an-issue). 
To be added to the glossary, every new term must meet the [CNCF's cloud native definition](https://github.com/cncf/toc/blob/main/DEFINITION.md). 
The only exceptions are foundational terms needed to understand cloud native concepts.

Below is a step-by-step guide for people unfamiliar with GitHub. 
**If you are a GitHub Pro**, please _do_ scan this guide to gather enough information about the following topics:

1. Locating templates for issues and new terms.
2. Claiming issues. 
3. Solving [spell check](#spell-check) failures. 

### Creating an issue {#creating-an-issue}

Go to the [Glossary GitHub repo](https://github.com/cncf/glossary/issues) issues and click on "New issue".

![issues](/images/how-to/howto-01.png)

Select "Request to add a new term (English)" from the list of templates. 

![templates](/images/how-to/english-issue-template.jpg)

Add the word you're suggesting, answer the questions, check the boxes, and hit "Submit new issue".
If you're just proposing a new term, you're done! If you want to work on the definition, keep reading.

### Triaging your issue {#triaging-your-issue}

Next, the maintainers will triage the issue. 
That means they will assess if the term should be part of the Glossary. 
Not every term will be admitted. To be included in the Glossary, they should be established and widely-used cloud native concepts.

Please let the maintainers know that you've proposed a new term on Slack and tag _@iamnoah_, _@nate-double-u_, _@Seokho Son_ and/or _@Jihoon Seo_ so that they don't miss it.
If you want to work on the definition, let the maintainers know and they'll assign it to you.

### Submitting a new term (creating a PR) {#submitting-a-new-term}

As stated in our [Style Guide](/style-guide/), we highly recommend starting with a Google or Word doc. 

Once the term is ready to submit, go to content (under <>code)…

![content](/images/how-to/howto-05.png)

…then "en" (for English) or the first two letters of the language you are contributing to…

![language folder](/images/how-to/howto-06.png)

…and select `_TEMPLATE.md`

![template](/images/how-to/howto-07.png)

Copy the content…

![copy content](/images/how-to/howto-08.png)

…and go back to the "en" folder. Click "Add file" and select "Create new file".

![create new file](/images/how-to/howto-09.png)

Add the name of the term in the URL as described in the [Best practices](#best-practices) section. 
Add the .md extension at the end of the name (without this extension you won't be able to preview your file).
Now paste the template content in the section below. Copy and paste the text of your definition into the file.
To verify you've used Markdown as described in the [Best practices](#best-practices) section, click on "Preview".

![finalize term](/images/how-to/howto-10.png)

Scroll down and name the new commit file. Hit "Commit new file" when you are ready to submit 
and…

![commit new file](/images/how-to/howto-11.png)

… you're now ready to create a new PR:

![create a pr](/images/how-to/howto-12.png)

Once you hit the "Create pull request" button your PR should be visible in the "Pull requests" tab.

![prs](/images/how-to/howto-13.png)

## Update an existing term {#update-an-existing-term}

To update an existing term, you can either request changes by creating an issue 
or work on the changes yourself and submit a PR.

### Request a change via an issue {#request-a-change-via-an-issue}

If you want to flag a problem with a term, you can use the "Report issue" option of the CNCF Glossary webpage. 
Locate yourself in the CNCF page of the concept you'd like to flag and click on "Report issue". 
This will automatically open an issue for you

![report issue](/images/how-to/howto-14.png)

Please describe your suggestions and why they are needed. Hit submit, and that's it. 

![submit issue](/images/how-to/howto-15.png)

### Update a term directly {#update-a-term-directly}

To modify a term and submit your suggestions, click "Edit this page."

![edit this page](/images/how-to/howto-16.png)

This will open the term's GitHub page. Make your changes and create a PR. 
Please refer to the [Best practices](#best-practices) section above 
and read our [Style Guide](/style-guide/) to make sure you follow our guidelines. 

## Help localize the glossary {#help-localize-the-glossary}

To help localize the glossary into a target language, please join the [#glossary-localizations](https://cloud-native.slack.com/archives/C02N2RGFXDF) channel on the CNCF Slack workspace and send us a message.
You can either join an existing team or create a new one 
(to see what it takes, read our [Localization Guide](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md)). 
Please read the **How to contribute** guide of the target language to gather the specifics of that team's contribution process. 

## Spell check {#spell-check}

There are two main reasons why the spell check can fail:

- The PR contains misspellings. 
- The PR contains words that are not registered in the word list. 

To add new words to the list, follow these steps:

1. In your PR, locate the file "wordlist.txt". 
2. Click "Edit this file" and add the missing words in alphabetic order. 
3. Add a commit message and select "Sign off and propose changes".

**Note**: the spell check is case-insensitive. 


**We updated this guide based on templates from [The Good Docs Project](https://thegooddocsproject.dev/).**
