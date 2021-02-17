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
9.  Be concise

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

Each definition uses a markdown file to display information about the definition. Currently, there are four requirements for the definition layout to be complete. 

```md
---
title: 
status: 
category: 
---

## Definition

A Quick summary of the concept, what it is.

A few lines of the problem it's addressing.

A few lines of how the thing solves the problem.
```

The first three requirements are contained by two three dash lines.

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

The **status** label will come after the tile label. The status label helps us understand which definitions are thoroughly vetted or require more effort.

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

The **category** label will come after the status label, it's contents will be capitalized, and consist of the following options:

- Concept
- Tool
- Opposite of "Other Definition"
- Application
- Objective
- Application

These options give more context about the definition. At least one category needs to be selected, however, multiple categories may be used.

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

The three sections should total no more than 300 words, with each section residing on its own line. See the following example:

```md
---
title: Definition Template
status: Feedback Appreciated
category: Concept
---
  A Quick summary of the concept, what it is.

  A few lines of the problem it's addressing.

  A few lines of how the thing solves the problem.
```

