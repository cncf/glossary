---
title: Style Guide
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

This style guide will help you understand the Glossary audience, definition structure, required level of detail, and how to keep a consistent style.

The Cloud Native Glossary follows the [default style guide](https://github.com/cncf/foundation/blob/master/style-guide.md) of the CNCF repository. 
Additionally, it follows the following rules:

1. Use simple, accessible language, avoiding technical jargon and buzzwords
2. [Avoid colloquial language](https://en.wikipedia.org/wiki/Colloquialism)
3. [Use literal and concrete language](https://guidetogrammar.org/grammar/composition/abstract.htm)
4. [Omit contractions](https://en.wikipedia.org/wiki/Contraction_(grammar))
5. [Use passive voice sparingly](https://www.ef.com/ca/english-resources/english-grammar/passive-voice/)
6. [Aim to phrase statements in a positive form](https://examples.yourdictionary.com/positive-sentence-examples.html) 
7. [No exclamation marks outside of quotations](https://www.grammarly.com/blog/exclamation-mark/)
8. Do not exaggerate
9. Avoid repetition
10. Be concise

## Audience

The Glossary is written for technical *and* non-technical audiences.
Please explain definitions in simple terms, and don’t assume technical knowledge. More about this is below in [Definition](#definition) and the [Sign Language Style Guide](#sign-language-style-guide).

## Minimum viable definition 

We aim to make it easy for anyone to understand cloud native terms. 
As such, we focus on simplicity. 
Use clear, simple language with examples anyone who uses technology can relate to while also providing a *minimum viable definition*, at least from a technical point of view. 
We don't want to save on context and examples—after all, those things help the reader understand the concept—but if a technical detail is not needed to understand it, we'll skip it. 
The goal is not to overcomplicate things. Once the reader understands the basic idea, other resources will help them dig deeper. 
That part is out of the scope of this Glossary. 

## Definition template

Each glossary term is stored in a markdown file and follows this template:

```md
---
title: 
status: 
category: 
---


A quick summary of the technology or concept.

## Problem it addresses 

A few lines about the problem it's addressing.

## How it helps

A few lines on how the thing solves the problem.
```

### Title

The **title** label will always be at the top of a definition layout, and its value should be in title case. 

```md
---
title: Definition Template
```

### Status

The **status** label will come after the title label. These labels indicate the amount of effort still required to complete the definition.

Valid values are: 

- Completed
- Feedback Appreciated 
- Not Started

You can always open an issue against a completed definition. While a definition is in flux, its status will be changed to *Feedback Appreciated*. Note that we should not localize the valid status values.

```md
---
title: Definition Template
status: Feedback Appreciated
```

### Tags

The **tag** label follows the status label. 
For the tags to be meaningful and thus helpful to the user, we will use them in a strict sense. 
Applying too many tags will only dilute its meaning. 
An exception to this is the `fundamental` tag, which indicates this term is needed to understand other cloud native concepts; most terms will likely only have one tag.

**Note**: Please only introduce new tags if approved by the maintainers. When you add tags to an entry, ensure they are spelled exactly as listed below (singular, no typos).

The current tags are:

- application
- architecture
- fundamental
- infrastructure
- methodology
- networking
- property
- security

```md
---
title: Definition Template
status: Feedback Appreciated
tags: ["tag 1", "tag 2", ""]
---
```

### Definition

#### Two subheadings

The definitions for **technology** and **concept** categories contain a quick summary and two subheadings: 

- (quick summary) provide a short and clear overview of what we are talking about.
- **Problem it addresses**: focus on the problem, not the solution (that comes in the next section). 
  Avoid mentioning the term that is defined. The problem focuses on *what* led us to need that thing. 
- **How it helps**: now, come back to the term. How does it address the problem described above?

Note that **properties** don't require separate sections. A definition will suffice. 

Please use [**semantic line breaks**](https://sembr.org) to ease review. 

#### Quality is paramount

If merged, your submission will be the official CNCF definition for that term (until someone else improves it). 
Creating a term that meets the CNCF's high standards can't be rushed—quality takes time and effort.

**Do your research**: Even if you are confident you know the term, verify you got it right. 
We often use terms in organizations in a certain way that may not reflect the full picture. 
When researching, especially when you're not 100% familiar with the term, use multiple resources. 
Many definitions are one-sided, especially if provided by a vendor. 
The Glossary must contain vendor-neutral, globally accepted definitions.

**Don't plagiarize**. The same rules apply to Glossary as to any other serious publication. 
Don't copy and paste other people's work unless you are quoting and contributing it to them. 
If you like a particular section of a definition, paraphrase it in your own words.

**Reference authoritative resources**. When possible, link to authoritative resources such as project docs. 
Note that we cannot link to content developed by vendors. 

#### Keeping it simple

The Glossary aims to **explain complex concepts in simple words**—a surprisingly difficult task that will likely take multiple revisions. 
Always keep the audience in mind when drafting your definition. 
Avoid using industry terms and buzzwords—you might catch yourself returning to them and may need to train yourself to look for different terms. 

When appropriate, use **real-world examples** that help readers (especially non-technical ones) better understand *when* and *why* the idea you’re explaining is relevant. 

When used in your definition, always **link to existing glossary terms** (only the first mention should be hyperlinked).

**Example**: look at the summary section of the [service mesh definition](/service-mesh/). 
It links back to the definitions of microservices, service, reliability, and observability. 
Additionally, it uses a real-world example comparing network challenges in a microservices environment (something non-technical people can't relate to) 
to wifi problems (something anyone using a laptop can understand). 
Where possible, try to make that connection. 



#### Start with a Google or Word doc

We recommend starting with a Google or Word doc, letting it sit for a few days, and revisiting it. 
This will allow you to catch phrases or expressions that could be worded in a more straightforward and accessible way. 
Also, make sure to run a spellcheck before submitting a PR.

To ensure no one else submits a PR while working on a term, claim an issue (or create one) and request it be assigned to you.
More about that in the [How To Contribute](/contribute/) doc.

Before getting started, please read some published Glossary terms 
to get a feeling for the level of detail and difficulty and when examples are appropriate.



## Sign Language Video Style Guide {#sign-language-style-guide}

If you are contributing a sign language video, please follow these guidelines to ensure our videos are clear, informative, and accessible to a wide audience (Including hearing community members).


### Technical equipment

All you need is a high-resolution camera and a stand. A modern smartphone should be enough.


### Recording Setup



* **Lighting:** Use frontal lighting to ensure your face and hands are well-lit.


* **Background:** Record in front of a flat, solid background to avoid distractions from the signing. Ensure no distracting decorations are included.


* **Dress Code:** Wear a solid, single-color top (no prints) that contrasts with your skin tone.


* **Camera Position:** Ensure that your head to your elbows are visible on the screen, and position the camera at eye level. The camera should be perpendicular to the background so that it appears straight, not slanted.


* **Signing Space:** Use as much space as possible to ensure you have full signing space while sitting or standing.


* **Sound:** Mute the microphone (input audio) when possible to avoid involuntary background noise.

### Signing



* **Clarity and Accuracy:** Record the sign twice from a frontal orientation, signing slowly enough for non-signers to see and mimic it. Demonstrating signs from the side is unnecessary unless it adds clarity. 


* **Facial Expression:** Use relaxed or neutral facial expressions. Mouthing or making grimaces is strongly discouraged. Maintain eye contact with the camera if possible.


* **Frequency:** Only one sign is needed for each video, as playback can be looped. Repeating the sign in a video is unnecessary.


* **Duration:** The total length of the video should not exceed 7 seconds.


* **Fingerspelling:** Use sign language for the word as much as possible. Fingerspelling is the last resort, commonly reserved for abbreviated or short words.


* **Posture:** Maintain a frontal orientation with eyes facing the camera while signing. Demonstrating signs using side orientation is unnecessary. When at rest, arms should be down with hands relaxed.

### Tips



* **Save storage space:** Please remember the shorter the video, the smaller the file would be. The faster it will upload.


* **Mistakes are good:** Keep the recording running while making several attempts. It is more likely you will find a good clip in between tries, and you can trim the unwanted parts. This is more efficient than making multiple recordings with one sign attempt in each.


* **Videos Examples:** Please refer to the [CNCF Glossary: Cloud Native Signs](https://www.youtube.com/playlist?list=PLj6h78yzYM2PDlYnmfpRfKgcgBMb34kb5) playlist for examples. 

### Post-Production



* **Editing:** If necessary, trim the beginning and the end of the video.


* **Label:** At a minimum, the filename of the video should contain the glossary term of the sign before uploading. For example, kubernetes.mp4.


* **Audio:** Remove the audio track entirely, if possible.


* **Upload:** Share the video on the #glossary-sign-language Slack channel and ask for feedback. If approved, the Sign Language Glossary leads will help you upload the video to the CNCF Playlist. Please do not upload the videos to your personal YouTube as YouTube could potentially remove duplicate videos from all accounts using the same videos (to prevent monetizing abuse) as CNCF uses YouTube to upload final videos. 


* **Video upload on CNCF playlist:** Share the video on the #glossary-sign-language Slack channel and ask for feedback. If approved, the Sign Language Glossary leads will help you upload the video to the CNCF Playlist. 

## The review process: What to expect

Please note that we are currently only a handfull maintainers doing this in their spare time. 
Occasionally, we'll be able to review terms quickly; on other occasions, it may take some time—we appreciate your patience. 
If you have any questions, please contact us in the #glossary Slack channel 
(for where and how to find it, please refer to our [How To Contribute](/contribute/) doc).

Our goal is for the Glossary to be the best possible resource. 
Once you submit a PR, we may ask for one or more revisions. 
Don't get frustrated—that is the case for many PRs. 
These back and forths and our collaboration will ensure that your contribution becomes a helpful definition read and referred to by readers all around the globe.
