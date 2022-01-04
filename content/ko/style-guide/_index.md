---
title: 스타일 가이드
toc_hide: true
menu:
  main:
    weight: 10
    pre: <i class='fas fa-ruler-horizontal'></i>
---

The following style guide is designed to help you understand the glossary definition structure and maintain a consistent style throughout.

The Cloud Native Glossary follows the [default style guide](https://github.com/cncf/foundation/blob/master/style-guide.md) located in the CNCF's repository.  Additionally it follows the following rules:

1. [Avoid colloquial language](https://en.wikipedia.org/wiki/Colloquialism)
2. [Use literal and concrete language](http://guidetogrammar.org/grammar/composition/abstract.htm)
3. [Omit contractions](https://en.wikipedia.org/wiki/Contraction_(grammar))
4. [Use passive voice sparingly](https://www.ef.com/ca/english-resources/english-grammar/passive-voice/)
5. [Aim to phrase statements in a positive form](https://examples.yourdictionary.com/positive-sentence-examples.html) 
6. [No exclamation marks outside of quotations](https://www.grammarly.com/blog/exclamation-mark/)
7. Do not exaggerate
8. Avoid repetition
9. Be concise

## Definition Template

Each glossary term is stored in a markdown file and follows this template:

```md
---
title: 
status: 
category: 
---

## What it is

A quick summary of the technology or concept.

## Problem it addresses 

A few lines about the problem it's addressing.

## How it helps

A few lines on how the thing solves the problem.
```

### Title

The **title** label will always be at the top of a definition layout and its value should be in title case. 

```md
---
title: Definition Template
```

### Status

The **status** label will come after the title label. The status label indicates whether definitions are thoroughly vetted or require more effort.

Valid values are: 

- Completed
- Feedback Appreciated 
- Not Started

You can always open an issue against a completed definition. While a definition is in flux, its status will be changed to *Feedback Appreciated*.

```md
---
title: Definition Template
status: Feedback Appreciated
```

### Category

The **category** label will come after the status label. Its value should be one of the following values:

- Technology
- Property
- Concept

```md
---
title: Definition Template
status: Feedback Appreciated
category: Concept
---
```

### Definition

The definition contains three subheadings to give the readers context: "What it is", "Problem it addresses", and "How it helps". All three are required for terms in the Technology and Concept categories, however, Property definitions do not require these headings. 


## Audience

The glossary is for a technical AND non-technical audience. So please ensure definitions are explained in simple terms and don't assume technical knowledge. When appropriate, use real-world examples that help readers (especially non-technical readers) better understand when and why the concept you're explaining is relevant. Also, link directly to glossary terms when used in your definition (only the first mention should be hyperlinked) and make sure to run your text through a spell check program.

As an example, take a look at the "What it is" section of the [service mesh definition](/service_mesh). It links back to the microservices, service, reliability, and observability definitions and uses a real-world example so (non-technical) readers can better relate to network challenges (comparing it to a wifi network everyone is familiar with).

Before getting started, please read some of the published terms on this site so you get a feeling for the level of detail and difficulty as well as when examples are appropriate.

The definition of a term should be based on empirical evidence of contemporary usage as published in literature, academic articles, talks, and white papers. In some cases, a term will suffer from conflation, imprecise usage, or, even worse, outright conflicting definitions. In these cases, the Glossary Committers will consider proposed clarifications or focused definitions on a case-by-case basis.
