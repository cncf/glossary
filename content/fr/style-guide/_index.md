---
title: Guide de rédaction
toc_hide: true
menu:
  main:
    weight: 10
---

Ce guide de rédaction aide à comprendre la cible du Glossaire, la structure des définitions, le niveau requis de détails, ainsi que la manière
de maintenir un style constant.

Le Glossaire Cloud Native suit le guide de [rédaction de référence](https://github.com/cncf/foundation/blob/master/style-guide.md) du dépôt de la CNCF.

De plus, les règles suivantes sont appliquées:

1. Utiliser un langage simple, accessible, et éviter les jargon technique ainsi que les buzzwords.
2. [Éviter le langage du registre familier](https://fr.wikipedia.org/wiki/Registre_familier)
3. [Employer un langage littéral et concret](https://guidetogrammar.org/grammar/composition/abstract.htm)
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

## Ce que c'est

Un bref descriptif de la technologie ou du concept.

## Problème qu'il adresse

Quelques lignes à propos du problème qu'il adresse.

## Quel en est l'utilité

Quelques lignes sur comment le problème est résolu.
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

- **Ce que c'est** : fournis une explication claire et concise de ce dont nous parlons.
- **Problème qu'il adresse** : se concentre sur le problème, pas la solution (cela vient dans la section suivante).
  Pour faire simple, éviter de mentionner le terme qui est défini. Le problème nous aide à nous concentrer sur *ce qui* nous a mené à avoir besoin de ce terme.
- **Quel en est l'utilité**: maintenant, revenir sur le terme en lui-même. Comment est-ce qu'il adresse le problème décrit précédemment ?

Noter que les propriétés ne nécessitent pas de section séparée. Un définition suffira.

Pour faciliter la revue, merci d'utiliser les **sauts à la ligne sémantiques** (une phrase par ligne).

#### La qualité est primordiale

Si vos modifications sont acceptées, vos changements seront les définitions officielles de la CNCF pour ce terme (jusqu'à ce qu'ils soient mis à jour
par une autre personne).
La création d'un terme qui respecte les standards élevés de la CNCF ne doit pas se faire précipitamment - la qualité requiert du temps et de l'effort.

**Faites vos recherches**: Même si vous avez confiance en votre connaissance du terme, vérifiez que vous avez la bonne définition.
L'utilisation des termes en entreprise ne reflètent pas toujours la globalité.
Lorsque vous effectuez vos recherches, essentiellement lorsque vous n'êtes pas 100% familier avec ce dernier, utilisez plusieurs sources.
De nombreuses définitions ne sont pas unilatérales, spécifiquement lorsqu'elles sont issues d'une solution propriétaire.
Le Glossaire se doit de contenir des définitions neutres de toute solution propriétaire, et globales.

**Ne pas plagier**. Comme toute publication sérieuse, le Glossaire se doit d'appliquer les mêmes règles.
Ne pas copier et coller le travail d'autrui, à mois que ce ne soit une citation ou contribution.
Si une section particulière d'une définition vous parait appropriée, paraphrasez-la avec vos propres mots.

**Référencez les ressources faisant autorité**. Lorsque cela est possible, référencez les ressources faisant autorité sur le terme, telles que les documentations de projet.
Notez qu'il n'est pas possible de référer des ressources développées par les vendeurs.

#### Rester simple

Le Glossaire tend à **expliquer des concepts complexes avec des mots simples** - cette tâche est particulièrement difficile, et nécessitera de nombreuses révisions.
Toujours garder à l'esprit le public cible lors de la rédaction d'une définition.
Évitez l'utilisation de termes d'entreprise ou les buzzwords - vous vous retrouverez probablement obligé de vous corriger vous-même à plusieurs reprises sur ce point.

Lorsque la situation est appropriée, utiliser des **exemples de la vie réelle** qui peuvent aider les lecteurs (en particulier les moins techniques d'entre eux) à avoir une meilleure
vision du *quand* et *pourquoi* du concept que vous expliquez.

Lorsqu'utilisé dans vos définitions, toujours **rediriger vers des termes existant du Glossaire** (uniquement la première mention du terme doit-être redirigée).

**Exemple**: référez vous à la section "Ce que c'est" de la définition d'un [service mesh](/fr/service-mesh/).
Cette dernière fait référence aux définitions de micro-services, service, fiabilité, et observabilité.
De plus, elle utilise un exemple de la vie réelle en comparant les enjeux des réseaux dans un environnement micro-services (un concept auquel un non-technique peut difficilement s'identifier) à une problématique de réseau wifi (ce que toute personne possédant un ordinateur peut comprendre).
Lorsque cela est possible, tentez de faire cette connexion.

#### Débuter avec un document Google ou Word

Nous recommandons de débuter les modifications dans un document Google ou Word, de laisser reposer votre définitions pendant quelques jours, et d'y revenir par la suite.
Aussi, assurez-vous d'effectuer une vérification orthographique avant de soumettre votre PR.

Afin d'éviter qu'un autre contributeur soumette une PR concernant le terme sur lequel vous travaillez,
assurez-vous de vous approprier un ticket (ou d'en créer un) et qu'il vous soit assigné.
Plus d'information sur la documentation de [Comment contribuer](/fr/contribute/).

Avant de démarrer, veillez à lire quelques termes du Glossaire afin de vous approprier le niveau de détails et de difficulté,
ainsi que de l'utilisation judicieuse des exemples.

## Processus de revue: à quoi s'attendre

Notez que nous ne sommes actuellement que 3 mainteneurs, effectuant ce travail sur notre temps personnel.
Occasionnellement, nous serons capables de revoir les termes rapidement; en d'autres occasions, il est possible que cela prenne plus de temps - merci de votre patience.
Si vous avez des questions, n'hésitez pas à nous contacter sur le canal Slack #glossary (pour savoir où et comment le trouver, référez-vous à la section de [Comment contribuer](/fr/contribute/)).

Notre but est de faire du Glossaire la meilleure des ressources possible.
Une fois que vous aurez soumis votre PR, il est possible que nous demandions une ou plusieurs révisions.
Ne soyez pas frustré - c'est le cas pour un grand nombre de PRs.
Ces allers-retours et notre collaboration assureront que votre contribution devienne une définition réellement
utile, lue et référée par de nombreux lecteurs aux quatres coins du monde.
