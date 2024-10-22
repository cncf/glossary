---
title: Intégration Continue (CI)
status: Completed 
category: concept
tags: ["application", "méthodologie", ""]
---

L'intégration continue, souvent abrégée en CI, est la pratique consistant à intégrer les modifications de code aussi régulièrement que possible.
La CI est un prérequis à la [livraison continue](/fr/continuous-delivery/) (CD).
Traditionnellement, le processus CI commence lorsque les modifications de code sont envoyées dans un système de contrôle de code source (Git, Mercurial ou Subversion),
et se termine par un artefact testé prêt à être consommé par un système CD.

## Problème auquel il répond

Les systèmes logiciels sont souvent grands et complexes, et de nombreux développeurs les maintiennent et les mettent à jour.
En travaillant en parallèle sur différentes parties du système,
ces développeurs peuvent apporter des modifications contradictoires et, par inadvertance, se causer les uns les autres des problèmes.
De plus, avec plusieurs développeurs travaillant sur le même projet,
toutes les tâches quotidiennes telles que tester ou mesurer la qualité du code devraient être répétées par chaque développeur, ce qui ferait perdre du temps.

## Quelle en est l'utilité

Le logiciel de CI vérifie automatiquement que les modifications de code sont fusionées proprement chaque fois qu'un développeur soumet une modification.
L'utilisation du serveur CI pour exécuter des contrôles de qualité du code, des tests et même des déploiements est une pratique quasi universelle.
À ce titre, cela devient une mise en œuvre concrète d'un contrôle qualité au sein des équipes.
La CI permet aux équipes logicielles de transformer chaque modification de code en un échec concret ou en une version livrable viable.

## Termes liés

* [Livraison Continue](/fr/continuous-delivery/)
* [Déploiement Continu](/fr/continuous-deployment/)
