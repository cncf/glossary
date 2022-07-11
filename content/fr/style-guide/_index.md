---
title: Guide de rédaction
toc_hide: true
menu:
  main:
    weight: 10
---

Ce guide de rédaction aide à comprendre la cible du Glossaire, la structure des définitions, le niveau requis de détails, ainsi que la manière
de maintenir un style constant.
This style guide will help you understand the Glossary audience, definition structure, required level of detail, and how to maintain a consistent style.

Le Glossaire Cloud Natif suit le guide de [rédaction de référence](https://github.com/cncf/foundation/blob/master/style-guide.md) du dépôt de la CNCF.

De plus, les règles suivantes sont appliquées:

1. Utiliser un langage simple, accessible, et éviter les jargon technique ainsi que les buzzwords.
2. [Éviter le langage du registre familier](https://fr.wikipedia.org/wiki/Registre_familier)
3. [Employer un langage litéral et concret](https://guidetogrammar.org/grammar/composition/abstract.htm)
4. [S'abstenir des contractions](https://fr.wikipedia.org/wiki/Contraction_(grammaire))
5. [Privilégier la forme passive](http://bdl.oqlf.gouv.qc.ca/bdl/gabarit_bdl.asp?id=4267)
6. [Favoriser des tournures de phrase positives](http://bdl.oqlf.gouv.qc.ca/bdl/gabarit_bdl.asp?id=4267)
7. [Aucun point d'exclamation en dehors des citations](http://bdl.oqlf.gouv.qc.ca/bdl/gabarit_bdl.asp?id=3333)
8. Ne pas exagérer
9. Éviter les répétitions
10. Être concis

## Cibles

Le Glossaire est rédigé comme référence technique ET non-technique.
Merci de s'assurer que les définitions sont expliquées en termes simples et ne pas assumer que les lecteurs ont un bagage technique. Plus d'informations dans la section Définition.

## Modèle de définition

Chaque terme du glossaire est stocké dans un fichier au format markdown, et suit le modèle suivant:

```md
---
title: 
status: 
category: 
---

## Qu'est-ce donc

Un bref descriptif de la technologie ou du concept.

## Problème addressé

Quelques lignes à propos du problèmes addressés par l'entité.

## Quel en est l'utilité

Quelques lignes sur comment cette entité résoud le problème.
```

### Titre

L'étiquette **title** est toujours placé en haut de la disposition, et sa valeur doit toujours être en majuscule.

```md
---
title: Modèle de définition
```

### Status

L'étiquette **status** vient après l'étiquette label. Cette étiquette indique si les définitions ont été soigneusement contrôlées, ou si l'explication
nécessite plus de travail.

Les valeurs acceptées sont:

- Completed
- Feedback Appreciated
- Not Started

Il est toujours possible d'ouvrir un ticket concernant une définition complétée (status "Completed"). Lorsque une définition est sujette au changement, son
status sera changé à *Feedback Appreciated*.

```md
---
title: Modèle de définition
status: Feedback Appreciated
```

### Category

L'étiquette **category** vient après celle du status. Sa valeur doit être l'une des possibilités suivantes:

- Technology
- Property
- Concept

```md
---
title: Modèle de définition
status: Feedback Appreciated
category: Concept
---
```

### Définition

#### Trois sous-sections

Les définitions pour les catégories **technology** et **concept** contiennent trois sous-sections:

- **Qu'est-ce donc** : fournis une explication claire et concise de ce dont nous parlons.
- **Problème addressé** : se concentre sur le problème, pas la solution (cela vient dans la section suivante).
  Pour faire simple, éviter de mentionner le terme qui est défini. Le problème nous aide à nous concentrer sur *ce qui* nous à mené à avoir besoin de cette entité.
- **Quel en est l'utilité**: maintenant, revenir sur le terme en lui-même. Comment est-ce qu'il addresse le problème décrit précédemment ?

Noter que les propriétés ne nécessitent pas de section séparée. Un définition suffira.

Pour faciliter la revue, merci d'utiliser les **sauts à la ligne sémantiques** (une phrase par ligne).

#### Quality is paramount

If merged, your submission will be the official CNCF definition for that term (until someone else improves it). 
Creating a term that meets the CNCF's high standards can't be rushed — quality takes time and effort.

**Do your research**: Even if you are confident you know the term, verify you got it right. 
We often use terms in organizations a certain way that may not reflect the full picture. 
When you do your research, especially when you're not 100% familiar with the term, use multiple resources. 
Many definitions are one-sided, especially if provided by a vendor. 
The Glossary must contain vendor-neutral, globally accepted definitions.

**Don't plagiarize**. The same rules apply to Glossary as to any other serious publication. 
Don't copy and paste other people's work unless you are quoting and contributing it to them. 
If you like a particular section of a definition, paraphrase it in your own words.

**Reference authoritative resources**. When possible, link to authoritative resources such as project docs. 
Note that we cannot link to content developed by vendors. 

#### Keeping it simple

The Glossary aims at **explaining complex concepts in simple words** — that is a surprisingly difficult task that will likely take multiple revisions. 
Always keep the audience in mind when drafting your definition. 
Avoid using industry terms and buzzwords — you'll probably catch yourself going back to them and may need to autocorrect. 

When appropriate, use **real-world examples** that help readers (especially non-technical ones) better understand *when* and *why* the concept you’re explaining is relevant. 

When used in your definition, always **link to existing glossary terms** (only the first mention should be hyperlinked).

**Example**: take a look at the “What it is” section of the [service mesh definition](/service-mesh/). 
It links back to the microservices, service, reliability, and observability definitions. 
Additionally, it uses a real-world example comparing network challenges in a microservices environment (something non-technical people can't relate to) 
to wifi problems (something anyone using a laptop can understand). 
Where possible, try to make that connection. 

#### Start with a Google or Word doc

We recommend starting with a Google or Word doc, letting it sit for a few days, and revisiting again. 
This will allow you to catch phrases or expressions that could be worded in a simpler and more accessible way. 
Also, make sure to run a spellcheck before submitting a PR.

To ensure no one else submits a PR while working on a term, make sure to claim an issue (or create one) and that it is assigned to you. 
More to that in the [How To Contribute](/contribute/) doc.

Before getting started, please read some of the published Glossary terms 
to get a feeling for the level of detail and difficulty and when examples are appropriate.

## The review process: what to expect

Please note that we are currently only three maintainers doing this in their spare time. 
Occasionally, we'll be able to review terms quickly; on other occasions, it may take some time — we appreciate your patience. 
If you have any questions, please get in touch with us in the #glossary Slack channel 
(for where and how to find it, please refer to our [How To Contribute](/contribute/) doc).

Our goal is for the Glossary to be the best possible resource. 
Once you submit a PR, we may ask for one or more revisions. 
Don't be frustrated — that is the case for many PRs. 
Those backs and forth and our collaboration will ensure that your contribution becomes a truly useful definition read and referred to by readers all around the globe.
