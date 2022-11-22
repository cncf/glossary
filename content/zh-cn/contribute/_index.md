---
title: 如何参与贡献
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

云原生词汇表的内容存储在这个 [GitHub 仓库](https://github.com/cncf/glossary)中，在这里你可以找到关于词汇表的 
[议题](https://github.com/cncf/glossary/issues)、
[PR](https://github.com/cncf/glossary/pulls) 和 
[讨论](https://github.com/cncf/glossary/discussions) 的列表。

你可以通过四种方式做出贡献：

1) [在现有的议题上工作](#在现有的议题上工作)
2) [提出新术语](#提出新术语)
3) [更新现有术语](#更新现有术语)
4) [云原生词汇表翻译帮助](#云原生词汇表翻译帮助)

## 加入 Glossary 社区 

如果你想定期做出贡献，可以考虑加入我们每月的词汇工作组会议。你可以在 [CNCF 日历](https://www.cncf.io/calendar/) 中找到会议细节。
你也可以在 CNCF Slack 的 [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) 频道中与维护者和其他贡献者联系，我们很乐意见到你! 

## 在现有的议题上工作

进入云原生词汇表 GitHub 仓库的 [议题](https://github.com/cncf/glossary/issues)。在那里你会看到一个所有议题的列表。
你可以通过标签来过滤（例如，English language, help needed, good first issue）。请注意，你需要一个 GitHub 账户来做这些事情。

![Issue 和 labels](/images/how-to/issue-and-labels.png)

确保你感兴趣的术语还没有分配给某人。这里你可以看到，前三个术语是可用的，而下一个术语已经被分配了：

![分配一个术语](/images/how-to/howto-04.png)

一旦你找到了一个你想做的术语，就在议题中说出来。点击它并添加一个评论。

![提出一个议题](/images/how-to/claiming-an-issue.png)

此外，请加入 CNCF Slack 的 [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) 频道，
让维护者知道你为一个新术语提出了一个议题（最好标记 
<em>@Catherine Paganini</em>, <em>@jmo</em>, <em>@Seokho Son</em>, 
<em>@Jihoon Seo</em>, 和/或 <em>@iamnoah</em> 以确保他们不会错过它）。
请注意，你一次只能认领一个术语。如果你想做多个术语，请在申请下一个术语之前完成前一个术语。

一旦他们把它分配给你，你就可以开始工作了。接下来的步骤，请参考 [提交一个新术语（创建一个PR）](#submitting-a-new-term)部分。

## 提出新术语

你可以提出一个新的术语让别人去研究，或者自己创造一个新的定义。无论哪种方式，你都要从创建一个议题开始。
请注意，术语必须符合 [CNCF的云原生定义](https://github.com/cncf/toc/blob/main/DEFINITION.md)。
唯一的例外是理解云原生概念所需的基础性术语。

以下是为那些还不熟悉 GitHub 的人提供的分步指南。
**如果你是 GitHub 的专业人员**，请**特别**看一下，确保你使用我们的议题模板，适当的命名惯例，在 Slack 上声明一个 PR（否则我们可能会错过它），以及在哪里找到文件模板。
在开始之前，请确保阅读 [风格指南](/zh-cn/style-guide/)--谢谢! 

### 创建议题

进入云原生词汇表 GitHub 仓库的 [议题](https://github.com/cncf/glossary/issues)，点击 "new issue"。

![议题](/images/how-to/howto-01.png)

你会看到各种各样的模板。要提出一个中文的新术语，请选择 "Chinese Language Glossary Request"。

![模板](/images/how-to/english-issue-template.jpg)

添加你所建议的词，回答下面的两个议题，勾选复选框，然后点击 "submit new issue"。如果你只是提出一个新词，你就完成了! 要进行工作，请按照接下来的步骤进行。

### 分流你的议题

接下来，维护者将对该议题进行分流。这意味着他们将评估该术语是否应成为术语表的一部分（注意，不是每个术语都会被接受。术语应该是既定的、广泛使用的云计算原生术语）。

请让维护者知道你已经在 Slack 上提交了一个术语，否则他们可能会错过它。
最好标记 <em>@Catherine Paganini</em>, <em>@jmo</em>, <em>@Seokho Son</em>, 
<em>@Jihoon Seo</em>, 和/或 <em>@iamnoah</em>。如果该术语被批准，并且你想从事该工作，他们会将其分配给你。

请注意，你一次只能申请一个术语。如果你想做多个术语，请在申请下一个术语之前完成前一个术语。

### 提交新术语 (创建 PR) {#submitting-a-new-term}

在开始之前，请阅读 [风格指南](/zh-cn/style-guide/)--它将有助于减少来回奔波。
正如风格指南中所述，我们强烈建议从 Google 或 Word 文档开始。

一旦术语准备好提交，进入 content（在代码下）...

![content](/images/how-to/howto-05.png)

...然后是 "zh-cn"（或你要提交的语言）...

![语言文件夹](/images/how-to/howto-06.png)

...然后选择 _TEMPLATE.md

![模板](/images/how-to/howto-07.png)

复制内容...

![复制内容](/images/how-to/howto-08.png)

...然后回到 "zh-cn"文件夹。点击 "add file " 并选择 "create new file"。

![创建新文件](/images/how-to/howto-09.png)

在URL中添加术语名称（不要大写，不要空格），并在末尾添加 .md（注意：如果你的预览不工作，你可能忘记在末尾添加.md）。现在粘贴下面的模板内容。复制并粘贴你的定义到文件中。为了方便审查，请 **使用 [语义换行符](https://sembr.org/)**（例如每句一行）。注意，GitHub 使用 markdown 来格式化文本（例如，超链接、粗体、斜体）。请参考这个 [markdown 小抄](https://www.markdownguide.org/cheat-sheet/)。为了验证你是否按照预期使用了markdown，请转到 "preview"。

![最终确定术语](/images/how-to/howto-10.png)

向下滚动，当你准备提交时，命名新的提交文件。现在你即将把术语提交到你自己的分支。提交 PR 还需要一个步骤。点击 "commit new file"，然后...

![提交新文件](/images/how-to/howto-11.png)

...现在你正在创建一个PR。

![创建一个PR](/images/how-to/howto-12.png)

你现在应该在 "Pull requests" 下看到你的PR。

![prs](/images/how-to/howto-13.png)

## 更新现有术语

要更新现有术语，您可以通过议题提出更改建议，也可以通过提交拉取请求 (PR) 直接更新术语。

### 通过 issue 请求更改

如果您想标记一个术语的议题，但不知道如何或想自己修复它，请单击 "report issue"。

![报告议题](/images/how-to/howto-14.png)

这将直接打开一个议题。请详细说明需要进行哪些更改以及原因。点击提交，就是这样。 

![提交议题](/images/how-to/howto-15.png)

### 直接更新术语

如要直接更改术语，请转到“edit this page”。

![编辑此页面](/images/how-to/howto-16.png)

这将打开术语的 GitHub 页面。进行更改并提交 PR。有关详细说明，请参阅上面的“提交新术语”(跳转到有关降价的部分)。

## 云原生词汇表翻译帮助

为了帮助将云原生词汇表翻译成您的母语，请加入 CNCF Slack 上的 [#glossary-localizations](https://cloud-native.slack.com/archives/C02N2RGFXDF) 频道并告诉我们。
您可以加入现有团队或创建新团队（要查看需要什么，请查看 [Localization Guide](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md)）。
也请参加我们每月的词汇表工作组会议。你可以在 [CNCF 日历](https://www.cncf.io/calendar/) 中找到会议详情。我们期待在那里与您见面！
