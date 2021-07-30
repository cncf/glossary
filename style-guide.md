# CNCF Glossary Style Guide 

The following style guide is designed to help you understand the glossary definitions and structure and maintain a consistent style throughout the glossary.

The CNCF glossary is stored and edited in Markdown for the following reasons:

- Source text is readable and portable.
- Text is easily found and contributed to.
- Markdown files are maintainable over time.
- Storage in a VCS (such as GitHub) enables structured changes.
- The syntax is simple and easy to remember.
- We can programmatically make changes if needed.

Contents:

- [CNCF Glossary Style Guide](#cncf-glossary-style-guide)
- [CNCF Default Style Guide](#cncf-default-style-guide)
- [Repository Structure](#repository-structure)
- [Definition Layout](#definition-layout)
- [Title](#title)
- [Status](#status)
- [Category](#category)
- [Definition](#definition)

# CNCF Default Style Guide

The CNCF glossary follows the [default style guide](https://github.com/cncf/foundation/blob/master/style-guide.md) located in the CNCF's repository. 


1. [Avoid colloquial language](https://en.wikipedia.org/wiki/Colloquialism)
2. [Use literal and concrete language](http://guidetogrammar.org/grammar/composition/abstract.htm)
3. [Omit contractions](https://en.wikipedia.org/wiki/Contraction_(grammar))
4. [Use passive voice judiciously](https://www.ef.com/ca/english-resources/english-grammar/passive-voice/)
5. [Aim to phrase statements in a positive form](https://examples.yourdictionary.com/positive-sentence-examples.html) 
6. [No exclamation marks outside of quotations](https://www.grammarly.com/blog/exclamation-mark/)
7. Do not exaggerate
8. Avoid repetition
9. Be concise

# Repository Structure

The following outline represents the repository structure for the glossary. If there is a movement of folders or files, the change can be found here.

```shell
glossary/
└ .github/
    └ settings.yml
└ definitions/
    └ all_glossary_definition_files.md
└ images/
    └ all_glossary_images.*
└ CONTRIBUTING.md
└ glossary.md
└ LICENSE
└ persona.md
└ readme.md
└ style-guide.md
```

# Definition Layout

Each definition uses a markdown file. Currently, there are four requirements for the definition layout to be complete.

```md
---
title: 
status: 
category: 
---

## Definition

### What it is

A Quick summary of the technology or concept.

### Problem it Addresses 

A few lines of the problem it's addressing.

### How it Helps

A few lines of how the thing solves the problem.
```

The meta description, the first three requirements, are contained by two three dash lines.

```md
---
title: 
status: 
category: 
---
```

With the definition located underneath.

# Title

The **title** label will always be at the top of a definition layout and it's contents will be capitalized. 

```md
---
title: Definition Template
```

# Status

The **status** label will come after the title label. The status label helps us understand which definitions are thoroughly vetted or require more effort.

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

# Category

The **category** label will come after the status label, its contents will be capitalized, and consist of the following options:

- Technology
- Property
- Concept

These options give more context as to how the definition is interpreted. 

```md
---
title: Definition Template
status: Feedback Appreciated
category: Concept
---
```

# Definition

The **definition** label will be the final label in the md file. The definition contains three sections to help the give readers context about the core definition. The three sections are:

1. The core definition 
2. The issue it is addressing
3. How it solves or approaches the issue

NOTE: Three sections are required for terms in the technology and concept categories. Property definitions only require the first section. 

```md
---
title: Definition Template
status: Feedback Appreciated
category: Concept
---
  A Quick summary of the concept, what it is. [for all three categories]

  A few lines of the problem it's addressing. [technology and concept only]

  A few lines of how the thing solves the problem. [technology and concept only]
```

# Content

The glossary is for a technical AND non-technical audience. So please ensure definitions are explained in simple terms and don't assume technical context. When appropriate, use real-world examples that help readers (especially non-technical readers) better understand when and why the concept you're explaining is relevant. Also, link back to a glossary term when used in your definition (only the first mention should be hyperlinked) and make sure to run your text through a spell check program before posting.

Take the "what it is" section of the [service mesh definition](https://github.com/cncf/glossary/edit/main/definitions/service_mesh.md). It links back to the microservices, service, reliability, and observability definitions and uses a real-world example so (non-technical) readers can better relate to network challenges (comparing it to a wifi network everyone is familiar with).

Before getting started, please read some of the terms that are ready so you get a feeling for the level of detail and difficulty as well as when examples are appropriate.
