---
title: プロジェクトに貢献する
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

クラウドネイティブ用語集のコンテンツは[GitHubのリポジトリ](https://github.com/cncf/glossary)内に、関連する[Issue](https://github.com/cncf/glossary/issues)、[Pull Request](https://github.com/cncf/glossary/pulls)、[Discussion](https://github.com/cncf/glossary/discussions)とともに管理されています。

プロジェクトに貢献するには以下4種類の方法があります。

1) [既存のIssueに対応する](#work-on-an-existing-issue)
2) [新しい用語を提案する](#propose-new-terms)
3) [既存の用語をアップデートする](#update-an-existing-term)
4) [用語を翻訳する](#help-translate-the-glossary)

## 用語集のコミュニティに参加しましょう! {#join-the-glossary-community}

継続的に貢献したい場合、月次のGlossary Working Groupミーティングへの参加をご検討ください。ミーティングの詳細は[CNCFカレンダー](https://www.cncf.io/calendar/)で見つけることができます。また、CNCF Slackの[#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB)チャンネルに参加すると、メンテナや他の貢献者とつながることもできます。みなさんの参加をお待ちしています！

## 既存のIssueに対応する {#work-on-an-existing-issue}

[用語集のGitHub Issue](https://github.com/cncf/glossary/issues)にアクセスすると、Issueの一覧を見ることができます。言語やIssueの種類などをラベルでフィルターすることもできます。まずはGitHubのアカウントが必要な点に注意してください。

![Issueとラベル](/images/how-to/issue-and-labels.png)

興味のある用語があっても、まずは誰か別の人が取り組んでいないかを確認してください。下図では、上3つが誰も取り組んでいないのに対して、その次の用語は既に誰かがアサインされています。

![用語のアサイン](/images/how-to/howto-04.png)

取り組みたい用語を見つけたら、Issueの中でコメントを書きます。

![Issueを要求](/images/how-to/claiming-an-issue.png)

加えて、CNCF Slackの[#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB)に参加し、自分が用語の追加に関するIssueを更新したことをメンテナに伝えてください(可能であれば、_@Catherine Paganini_、_@jmo_、_@Seokho Son_、_@Jihoon Seo_、_@iamnoah_ にメンションを投げてください)。また、1回につき1つの用語しか作業できない点に注意してください。複数用語を追加・編集したい場合はまず1つを終わらせてから次の1つに取り組んでください。

メンテナによって一度Issueにアサインされたあとで作業を始めることができます。次のステップに関しては[新しい用語の定義を提出する(Pull Requestの作成)](#submitting-a-new-term)セクションをご覧ください。

## 新しい用語を提案する {#propose-new-terms}

他の人が作業できるようにしたり、あるいは自分で定義を追加するために、新しい用語の追加を提案することができます。いずれにしても、Issueの作成をするところから始まります。追加したい用語が[CNCFのcloud native definition](https://github.com/cncf/toc/blob/main/DEFINITION.md)の要件を満たすかどうか確認してください。例外は、クラウドネイティブの概念を理解するために必要な基礎的な用語だけです。

ここから先は、GitHubに慣れていない人向けの入門ガイドです。**GitHubに慣れている**のであれば、Issueテンプレートの使用、適切な命名規則、Slack でのPR申請（そうしないと見逃す可能性があります）、ファイルテンプレートの場所を確認するために、_ざっと目を通してください_。そして、始める前に必ず[スタイルガイド](/style-guide/)を読んでください。よろしくお願いします！

### Issueの作成 {#creating-an-issue}

Go to the [Glossary GitHub repo](https://github.com/cncf/glossary/issues) issues and click on "New issue".

![issues](/images/how-to/howto-01.png)

You'll see a variety of templates. To propose a new term in English, select "Request to add a new term (English)".

![templates](/images/how-to/english-issue-template.jpg)

Add the word you're suggesting, answer the two questions below, check the checkboxes, and hit "Submit new issue".
If you're just proposing a new term, you're done! To work on it, follow the next steps.

### Triaging your issue {#triaging-your-issue}

Next, the maintainers will triage the issue. 
That means they will assess if the term should be part of the Glossary 
(note, not every term will be admitted. Terms should be established and widely-used cloud native terms).

Please let the maintainers know that you've submitted a term on Slack as they may otherwise miss it. 
Ideally, tag _@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_, and/or _@iamnoah_. 
If the term is approved and you want to work on it, they'll assign it to you.

Note that you can only claim one term at a time. 
If you want to work on multiple terms, please finish one before claiming the next.

### 新しい用語の定義を提出する(Pull Requestの作成) {#submitting-a-new-term}

Before getting started, please read the [Style Guide](/style-guide/) — it will help minimize backs and forth. 
As stated in the style guide, we highly recommend starting with a Google or Word doc. 

Once the term is ready to submit, go to content (under code)…

![content](/images/how-to/howto-05.png)

…then "en" (or the language you are submitting for)…

![language folder](/images/how-to/howto-06.png)

…and select `_TEMPLATE.md`

![template](/images/how-to/howto-07.png)

Copy the content…

![copy content](/images/how-to/howto-08.png)

…and go back to the "en" folder. Hit "Add file" and select "Create new file".

![create new file](/images/how-to/howto-09.png)

Add the term name in the URL (no capitalization, no spaces, no parentheses, and use hyphens to separate words)
and .md at the end (note: if your preview doesn't work, you probably forgot to add .md at the end).
Now paste the template content below. Copy and paste your definition into the file.
To make reviews easier, please **use [semantic line breaks](https://sembr.org/)** (e.g. one line per sentence).
Note that GitHub uses markdown to format the text (e.g., hyperlink, bold, italic).
Please refer to this [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/).
To verify you've used markdown as intended, go to "Preview".

![finalize term](/images/how-to/howto-10.png)

Scroll down and name the new commit file when you are ready to submit. 
You are now about to commit the term to your own branch. 
Submitting a PR requires one more step. Hit "Commit new file" and…

![commit new file](/images/how-to/howto-11.png)

…now you're creating an PR:

![create a pr](/images/how-to/howto-12.png)

You should now see your PR under "Pull requests".

![prs](/images/how-to/howto-13.png)

## 既存の用語をアップデートする {#update-an-existing-term}

既存の用語をアップデートするには、Issueを通じて変更を提案するか、Pull Requestを直接作成することができます。

### Request a change via an issue {#request-a-change-via-an-issue}

If you want to flag a problem with a term but don't know how or want to fix it yourself, click on "Report issue".

![report issue](/images/how-to/howto-14.png)

This will directly open an issue. Please elaborate on which change is needed and why. Hit submit, and that's it. 

![submit issue](/images/how-to/howto-15.png)

### Update a term directly {#update-a-term-directly}

To change a term directly, go to "Edit this page".

![edit this page](/images/how-to/howto-16.png)

This will open the term's GitHub page. Make your changes and submit a PR. 
Please refer to "Submitting a new term" above for a detailed description (jump to the section that speaks about markdown).

## 用語を翻訳する {#help-translate-the-glossary}

用語集をあなたの母国語に翻訳するのを手伝うには、CNCF Slackの[#glossary-localizations](https://cloud-native.slack.com/archives/C02N2RGFXDF)チャンネルに参加してください。既存の翻訳チームに参加することも、新しい翻訳チームを作ることもできます（何が必要かは、[Localization Guide](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md)をご覧ください）。また、毎月開催されるGlossary Working Groupのミーティングにも参加してください。ミーティングの詳細は、[CNCFカレンダー](https://www.cncf.io/calendar/)で確認できます。ご参加をお待ちしています！
