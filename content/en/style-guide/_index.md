---
title: Style Guide
toc_hide: true
menu:
  main:
    weight: 10
    pre: <i class='fas fa-ruler-horizontal'></i>
---

This style guide is designed to help you understand our audience, definition structure, the required level of detail, and how to maintain a consistent style.

The Cloud Native Glossary follows the [default style guide](https://github.com/cncf/foundation/blob/master/style-guide.md) located in the CNCF's repository.  Additionally it follows the following rules:

1. Use simple, accessible language, avoiding technical jargon and buzzwords
2. [Avoid colloquial language](https://en.wikipedia.org/wiki/Colloquialism)
3. [Use literal and concrete language](http://guidetogrammar.org/grammar/composition/abstract.htm)
4. [Omit contractions](https://en.wikipedia.org/wiki/Contraction_(grammar))
5. [Use passive voice sparingly](https://www.ef.com/ca/english-resources/english-grammar/passive-voice/)
6. [Aim to phrase statements in a positive form](https://examples.yourdictionary.com/positive-sentence-examples.html) 
7. [No exclamation marks outside of quotations](https://www.grammarly.com/blog/exclamation-mark/)
8. Do not exaggerate
9. Avoid repetition
10. Be concise

## Audience

The Glossary is written for a technical AND non-technical audience. Please ensure definitions are explained in simple terms and don’t assume technical knowledge. More do that below under Definition.

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

### Three sections

The definitions for **technology** and **concept** categories contain three subheadings: “What it is”, “Problem it addresses”, and “How it helps”. Note that **properties** don't require separate sections, a definition will suffice. 

### Keeping it simple

The Glossary aims at explaining complex concepts in simple words — that is a surprisingly difficult task that will likely take multiple revisions. Always keep the audience in mind when drafting your definition. Avoid using industry terms and buzzwords — you'll likely catch yourself going back to them and may need to autocorrect. 

When appropriate, use real-world examples that help readers (especially non-technical ones) better understand when and why the concept you’re explaining is relevant. Also, always link to existing glossary terms when used in your definition (only the first mention should be hyperlinked).
As an example, take a look at the “What it is” section of the [service mesh definition](https://glossary.cncf.io/service_mesh/). It links back to the microservices, service, reliability, and observability definitions and uses a real-world example so (non-technical) readers can better relate to network challenges.

### Start with a Google or Word doc

We recommend starting with a Google or Word doc, letting it sit for a few days, and revisiting again. This will allow you to catch phrases or expressions that could be worded in a simpler and more accessible way. Also, make sure to run a spellcheck before submitting a PR.

To ensure no one else submits a PR while you are working on that term, don't forget to claim an issue (or create one) and ensure it is assigned to you. To learn how to do that, please refer to the [How To Contribute](https://glossary.cncf.io/contribute/) doc.

Before getting started, please read some of the published Glossary terms to get a feeling for the level of detail and difficulty as well as when examples are appropriate.


## The review process: what to expect

Please note that we are currently only three maintainers who are doing this in their spare time. Occasionally, we'll be able to review terms quickly on other occasions it may take some time — we really appreciate your patience. If you have any questions, please contact us in the #glossary Slack channel (for where and how to find it, please refer to our [How To Contribute](https://glossary.cncf.io/contribute/) doc).

Our goal is for the Glossary to be the best possible resource. Once you submit a PR we may ask for one or more revisions. Don't be frustrated — that is the case with many PRs. Those backs and forth and our collaboration will ensure that your contribution becomes a truly useful definition read and referred to by readers all around the globe. 
