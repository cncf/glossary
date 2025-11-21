---
title: Comment contribuer
toc_hide: true
menu:
  main:
    weight: 10
---

Le contenu du glossaire Cloud Native est stocké dans [ce repos Github](https://github.com/cncf/glossary) où vous trouverez une liste d'[issues](https://github.com/cncf/glossary/issues),[PRs](https://github.com/cncf/glossary/pulls), et [discussions](https://github.com/cncf/glossary/discussions) à propos du glossaire. 

Vous pouvez contribuer de 4 façons :

1) [Travailler sur une issue existante](#work-on-an-existing-issue)
2) [Proposer un nouveau termes](#propose-new-terms)
3) [En mettre à jour un existant](#update-an-existing-term)
4) [Aider à traduire le glossaire](#help-translate-the-glossary)

## Rejoindre la communauté du glossaire ! {#join-the-glossary-community}
Envisager de rejoindre la réunion mensuelle du groupe de travail du glossaire si vous souhaitez contribuer de manière régulière.
Les détails de la réunion peuvent être trouvés dans le [calendrier de la CNCF](https://www.cncf.io/calendar/).
Vous pouvez aussi entrer en contact avec les mainteneurs et les contributeurs de notre [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) sur le Slack de la CNCF - Nous aimerions beaucoup vous rencontrer!


## Travailler sur une issue existante {#work-on-an-existing-issue}

Aller sur [Glossary GitHub repo issues](https://github.com/cncf/glossary/issues). 
Ici, vous trouverez une liste de toutes les issues. Vous pouvez les filtrer par label (e.g. English language, help needed, good first issue).

Un compte Github sera nécessaire.

![Issue et labels](/images/how-to/issue-and-labels.png)

Faites en sorte qu'un terme qui vous intéresse ne soit pas déjà attribué à quelqu'un d'autre.
Ici, vous pourrez voir que les 3 premiers termes disponibles alors que le suivant est déjà attribué.


![Assigné un termes](/images/how-to/howto-04.png)

Une fois que vous avez trouvé le terme sur lequel vous voulez travailler, dites-le dans l'issue. Cliquez dessus et rajouter un commentaire.


![S'assigner une issue](/images/how-to/claiming-an-issue.png)

Additionnellement, merci de rejoindre le channel Slack [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) et de faire savoir aux mainteneurs que vous avez créé une issue pour un terme (idéalement, en mentionnant, _@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_, et/ou _@iamnoah_ pour être sûr qu'il ne passe pas à côté).

Vous pouvez uniquement proposer un terme à la fois.

Si vous voulez travailler sur plusieurs termes, merci d'en finir un avant d'en proposer un nouveau.

Une fois qu'il vous a été assigné, vous pouvez commencer à travailler dessus.
Pour les étapes suivantes, merci de prendre connaissance de la section [Proposer un nouveau terme (créer une PR)](#submitting-a-new-term).

## Proposer un nouveau terme {#propose-new-terms}

Vous pouvez proposer un nouveau terme à la communauté ou créer vous-même la définition de ce terme.
Dans les deux cas, vous commencerez par créer une issue.
Il est à noter que les termes doivent être en accord avec le [CNCF's Cloud Native definition](https://github.com/cncf/toc/blob/main/DEFINITION.md).
Les seules exceptions sont les termes fondamentaux nécessaires pour comprendre les concepts Cloud Native.

Ci-après, un guide étape par étape pour ceux et celles qui ne sont pas familier avec Github
**Si vous avez un compte GitHub Pro**, merci de vérifier que vous utilisez nos modèles d'issue,
une convention de nommage appropriée, réclamé une PR sur Slack (autrement on pourrait l'avoir raté), et où trouver les modèles de fichier.
Et merci de lire le [Style Guide](/fr/style-guide/) avant de commencer - Merci!

### Créer une issue {#creating-an-issue}

Aller sur les issues du repos [Glossary](https://github.com/cncf/glossary/issues) et cliquer sur "New issue".

![issues](/images/how-to/howto-01.png)

Vous verrez plusieurs modèles. Pour proposer un nouveau terme en Français sélectionner "Request to add a new term (Optional:Non-English)".


![templates](/images/how-to/english-issue-template.jpg)

Ajouter le mot que vous suggérez, répondez aux deux questions d'en dessous, cocher la case et cliquer sur "Submit new issue".
Si vous souhaitez juste proposer un nouveau terme, vous pouvez vous arrêter là! Pour travailler dessus suivez les étapes d'après.


### Catégoriser votre issue {#triaging-your-issue}

Ensuite, les mainteneurs vont catégoriser le ticket.
Cela veut dire qu'ils vont évaluer si votre terme peut être présent dans le glossaire (Il est à noter, que tous les termes ne sont pas admis. Les termes doivent faire partie des termes couramment utilisés dans l'écosystème Cloud Native).

Merci de faire savoir aux mainteneurs que vous avez soumis un terme sur Slack, sinon il pourrait passer à côté.
Idéalement, mentionnez _@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_, and/or _@iamnoah_. 

Si le terme est approuvé et que vous voulez travailler dessus, ils vous assigneront l'issue.

Notez que vous pouvez vous assigner qu'à un seul terme à la fois.
Si vous souhaitez travailler sur plusieurs termes, merci d'en finir un avant de vous en attribuer un autre

### Proposer un nouveau terme (créer une PR) {#submitting-a-new-term}

Avant de commencer, merci de lire le [Style Guide](/fr/style-guide/) — il aidera à minimiser les aller/retour.
Comme mentionné dans le style guide, il est fortement recommandé de commencer par un document texte (Gdoc, Word ou autre)

Une fois que le terme est prêt à être proposé, rédigez le contenu (sous forme de code)...


![content](/images/how-to/howto-05.png)

...Alors "fr" (ou la langue pour laquelle vous souhaitez contribuer)...

![language folder](/images/how-to/howto-06.png)

... Et sélectionner `_TEMPLATE.md` 

![template](/images/how-to/howto-07.png)

...Copier le contenu...

![copy content](/images/how-to/howto-08.png)

...Et retourner sur le dossier "fr". Et cliquer sur "Add file" et sélectionner "Create new file".


![create new file](/images/how-to/howto-09.png)

Ajouter le terme dans l'url (pas de majuscules, pas d'espaces, pas de parenthèses et utiliser un tiret pour séparer les mots) rajouter .md à la fin du nom de votre fichier (note: Si la prévisualisation ne fonctionne pas, vous avez probablement oublié d'ajouter .md à la fin).
Maintenant copier le contenu. Copier et coller votre définition dans le fichier.
Pour faciliter les relectures, merci **d'utiliser [semantic line breaks](https://sembr.org/)** (e.g. une ligne par phrase).

Github utilise le format markdown pour mettre en forme le text (e.g., lien hypertexte, gras, italic).
Merci de lire ceci [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/).
Pour vérifier que vous avez correctement utilisé markdown, aller sur "Preview".


![finalize term](/images/how-to/howto-10.png)

Descendre en bas de la page et donner un nom à votre commit quand vous êtes prêt à l'ajouter.
Vous êtes, maintenant, prêt à commit votre terme sur votre propre branche.
Proposer une PR nécessite une dernière étape. Cliquer sur "Commit new file" et...

![commit new file](/images/how-to/howto-11.png)

...Maintenant vous créez une PR :

![create a pr](/images/how-to/howto-12.png)

Vous devriez voir votre PR sous "Pull requests".

![prs](/images/how-to/howto-13.png)

## Mettre à jour un terme existant {#update-an-existing-term}

Pour mettre à jour un terme existant, vous pouvez soit suggérer un changement via un ticket (issue) ou directement proposer la mise à jour d'un terme en soumettant une pull request (PR).

### Proposer un changement via un ticket {#request-a-change-via-an-issue}

Si vous voulez mettre en évidence un problème mais que vous ne savez pas ou ne voulez pas le corriger vous même, cliquez sur "Report issue'.

![report issue](/images/how-to/howto-14.png)

Cela va directement ouvrir un ticket. Merci d'être précis sur quels changements sont nécessaires et pourquoi. Cliquer sur "submit" et c'est fini.


![submit issue](/images/how-to/howto-15.png)

### Mettre à jour un terme directement {#update-a-term-directly}

Pour directement changer un terme, aller sur "Edit this page".

![edit this page](/images/how-to/howto-16.png)

Cela va ouvrir la page GitHub du terme. Faites vos changements et proposer une PR. Merci de prendre connaissance de "Proposer un nouveau terme" avant pour une description détaillé (sauter la section qui parle de markdown)


## Aider à traduire le glossaire {#help-translate-the-glossary}

Pour aider à traduire le glossaire dans votre langue principale, merci de rejoindre le Slack et le channel [#glossary-localizations](https://cloud-native.slack.com/archives/C02N2RGFXDF) et faites le nous savoir.

Vous pouvez soit rejoindre une équipe existante ou en créer une nouvelle (pour voir en quoi ça consiste, regarder [Localization Guide](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md)).

Merci aussi de rejoindre notre réunion mensuelle. Vous pouvez trouver plus de détails sur le [CNCF calendar](https://www.cncf.io/calendar/). 