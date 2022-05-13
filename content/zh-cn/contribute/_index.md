---
title: 如何参与贡献
toc_hide: true
menu:
  main:
    weight: 10
---

Cloud Native Glossary 内容存储在 [this GitHub repo](https://github.com/cncf/glossary) 中, 您可以在其中找到关于 glossary 的 [issues](https://github.com/cncf/glossary/issues), [PRs](https://github.com/cncf/glossary/pulls), 和 [discussions](https://github.com/cncf/glossary/discussions). 

您可以通过三种方式做出贡献:

1) 提出新术语
2) 更新现有术语
3) 帮助翻译词汇表

## 加入 Glossary 社区! 
如果您想定期投稿, 请考虑加入我们的每月词汇表工作组会议. 您可以在 [CNCF calendar](https://www.cncf.io/calendar/) 找到会议详情. 您还可以在 CNCF Slack 上的 #glossary 频道中与维护者和其他贡献者联系 — 期待美好相遇! 

## 提出新术语
您可以提出一个新术语供其他人使用或自己创建一个新定义. 无论哪种方式, 您都将从创建问题开始(请注意, 您需要一个 GitHub 帐户来执行此操作).

以下是针对尚未熟悉 GitHub 的人的分步指南. **如果你是 GitHub Pro 账户**, 请快速查看以确保您使用我们的问题模板、适当的命名约定、在 Slack 上声明 PR（否则我们可能会错过它）以及在哪里可以找到文件模板. 在开始之前, 请务必阅读 [Style Guide](/zh-cn/style-guide/).

### 创建 issue
前往 [Glossary GitHub repo](https://github.com/cncf/glossary/issues) 并点击 "new issue".

![issues](/images/how-to/howto-01.png)

您将看到各种模板. 要使用中文提出新术语, 请选择“Chinese Language Glossary Request”.

![templates](/images/how-to/howto-02.png)

添加您建议的单词并点击“submit new issue”. 如果您只是提出一个新术语, 那么您就完成了! 要处理它, 请按照以下步骤操作.

![new issue](/images/how-to/howto-03.png)

请加入 CNCF Slack 上的 #glossary 频道, 让@Catherine Paganini、@jmo 和@Seokho Son 知道您已经提交了一个问题并希望解决它. 他们会将问题分配给您, 向其他所有人发出该术语已被占用的信号.

在这里, 您可以看到前三个术语可用, 而下一个术语已分配给某人.

![assigning a term](/images/how-to/howto-04.png)

请注意, 您一次只能申请一个术语. 如果您想按多个条款工作, 请先完成一个条款, 然后再申请下一个术语.

### 提交新术语 (创建 PR)

在开始之前, 请阅读 [Style Guide](/zh-cn/style-guide/) — 它将帮助减少来回次数. 如样式指南中所述, 我们强烈建议从 Google 或 Word 文档开始. 

准备好提交术语后, 转到内容(在代码中)...

![content](/images/how-to/howto-05.png)

...然后是“zh”(或您要提交的语言)...

![language folder](/images/how-to/howto-06.png)

...然后选择 _TEMPLATE.md

![template](/images/how-to/howto-07.png)

拷贝内容

![copy content](/images/how-to/howto-08.png)

...返回“en”文件夹. 点击“添加文件”并选择“创建新文件”.

![create new file](/images/how-to/howto-09.png)

在 URL 中添加术语名称(无大写和无空格)和末尾的 .md(注意：如果您的预览不起作用, 您可能忘记在末尾添加 .md). 现在粘贴下面的模板内容. 将您的定义复制并粘贴到文件中. 请注意, GitHub 使用 markdown 来格式化文本(例如, 超链接、粗体、斜体). 请参考这份 [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/). 要验证您是否按预期使用了markdown, 请转到“预览”.

![finalize term](/images/how-to/howto-10.png)

当您准备好提交时, 向下滚动并命名新的提交文件. 您现在即将将该术语提交到您自己的分支. 提交 PR 需要多一步. 点击“commit new file”...

![commit new file](/images/how-to/howto-11.png)

...现在你在创建 PR:

![create a pr](/images/how-to/howto-12.png)

你应该可以在"Pull requests"下看到你的 PR.

![prs](/images/how-to/howto-13.png)

## 更新现有术语
要更新现有术语, 您可以通过问题提出更改建议, 也可以通过提交拉取请求 (PR) 直接更新术语.

### 通过 issue 请求更改
如果您想标记一个术语的问题, 但不知道如何或想自己修复它, 请单击 "report issue."

![report issue](/images/how-to/howto-14.png)

这将直接打开一个问题. 请详细说明需要进行哪些更改以及原因. 点击提交, 就是这样. 

![submit issue](/images/how-to/howto-15.png)

### 直接更新术语
如要直接更改术语, 请转到“编辑此页面”.

![edit this page](/images/how-to/howto-16.png)

这将打开术语的 GitHub 页面. 进行更改并提交 PR. 有关详细说明, 请参阅上面的“提交新术语”(跳转到有关降价的部分).

## 云原生词汇表翻译帮助
为了帮助将云原生词汇表翻译成您的母语, 请加入 CNCF Slack 上的 #glossary-localizations 频道并告诉我们. 您可以加入现有团队或创建新团队（要查看需要什么, 请查看 [Localization Guide](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md)). 也请参加我们每月的词汇表工作组会议. 你可以在 [CNCF calendar](https://www.cncf.io/calendar/) 中找到会议详情. 我们期待在那里与您见面！
