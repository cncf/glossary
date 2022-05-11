---
title: 风格指南
toc_hide: true
menu:
  main:
    weight: 10 
---

以下的风格指南旨在帮助你了解云原生词汇表的定义结构，并在整个过程中保持一致的风格。

云原生词汇遵循位于CNCF资源库中的 [默认风格指南](https://github.com/cncf/foundation/blob/master/style-guide.md)。 此外，它还遵循以下规则：

1. [避免使用俗语](https://en.wikipedia.org/wiki/Colloquialism)
2. [使用字面和具体的语言](https://guidetogrammar.org/grammar/composition/abstract.htm)
3. [省略缩略语](https://en.wikipedia.org/wiki/Contraction_(grammar))
4. [少用被动语态](https://www.ef.com/ca/english-resources/english-grammar/passive-voice/)
5. [力求以积极的形式表述](https://examples.yourdictionary.com/positive-sentence-examples.html)
6. [引号外不加感叹号](https://www.grammarly.com/blog/exclamation-mark/)
7. 不要夸大其词
8. 避免重复
9. 要简明扼要

## Definition Template

每个词汇表术语都存储在一个 markdown 文件中，并遵循这个模板：

```md
---
title: 
status: 
category: 
---

## 是什么

对该技术或概念的快速总结。

## 解决的问题

关于它所解决的问题的几句话。

## 如何帮助

用几句话说明这个东西是如何解决问题的。
```

### 标题

**title** 标签将始终位于定义布局的顶部，其值应使用标题大小写。

```md
---
title: 定义模板
```

### 状态

**status** 标签将出现在标题标签之后。状态标签表明定义是经过彻底审查还是未完成的。

有效值：

- Completed
- Feedback Appreciated
- Not Started

你可以随时对一个已完成的定义提出问题。当一个定义处于变化中时，它的状态将被改变为 *Feedback Appreciated*。

```md
---
title: 定义模版
status: Feedback Appreciated
```

### 类别

**category** 标签将出现在状态标签之后。它的值应该是以下值之一：

- 技术
- 属性
- 概念

```md
---
title: 定义模版
status: Feedback Appreciated
category: 概念
---
```

### 定义

该定义包含三个小标题，为读者提供背景："是什么"，"解决的问题"，以及 "如何帮助"。对于技术和概念类的术语来说，这三个标题都是必须的，然而，属性类的定义则不需要这些标题。

## 受众

云原生词汇表是为技术和非技术的受众准备的。因此，请确保用简单的术语解释定义，不要假设有技术知识。在适当的时候，使用现实世界的例子，帮助读者（尤其是非技术性读者）更好地理解你所解释的概念在什么时候和为什么是相关的。
另外，在你的定义中使用术语时，要直接链接到词汇表（只有第一次提到时才应该有超链接），并确保通过拼写检查程序运行你的文本。

作为一个例子，看看 [服务网状](/zh-cn/service_mesh/)的“是什么”部分。它链接到了微服务、服务、可靠性和可观察性的定义，并使用了一个真实世界的例子，所以（非技术）读者可以更好地与网络挑战相联系（将其与每个人都熟悉的 wifi 网络相比较）。

在开始之前，请阅读本网站上的一些已发表的术语，这样你就能感觉到详细程度和难度，以及何时举例合适。

术语的定义应基于文献、学术文章、讲座和白皮书中公布的当代用法的经验证据。在某些情况下，一个术语会出现混淆、不精确的用法，或者更糟糕的是，定义完全冲突。在这些情况下，云原生词汇表委员会将逐一考虑建议的澄清或重点定义。
