---
title: Déploiement continu (Continuous Deployment)
status: Completed
category: concept
tags: ["application", "méthodologie", ""]
---

Le déploiement continu, souvent abrégé en CD, va plus loin que la [livraison continue](/fr/continuous-delivery/)
en déployant le logiciel fini directement en production.
Le déploiement continu (CD) va de pair avec [l'intégration continue](/fr/continuous-integration/) (CI),
et on parle souvent CI/CD.
Le processus CI teste si les modifications apportées à une application donnée sont valides,
et le processus CD déploie automatiquement les modifications de code dans les environnements d'une organisation, de l'environnement de test jusqu'à celui de production.

## Problème auquel il répond

La livraison de nouvelles versions de logiciels peut être un processus fastidieux et source d'erreurs.
C'est aussi souvent quelque chose que les organisations ne voudront faire que rarement, pour éviter les incidents de production
et réduire le temps durant lequel les ingénieurs doivent être disponibles en dehors des heures ouvrées.
Les modèles traditionnels de déploiement de logiciels plongent les organisations dans un cercle vicieux,
où le processus de livraison du logiciel ne parvient pas à répondre aux besoins de l'organisation, à la fois en termes de stabilité et de fréquence de livraison des fonctionnalités.

## Quelle en est l'utilité

En automatisant le cycle de livraison et en obligeant les organisations à livrer en production plus fréquemment,
la CD fait pour les équipes d'exploitation ce que la CI a fait pour les équipes de développement.
Plus précisément, cela oblige les équipes opérationnelles à automatiser les parties pénibles et sujettes aux erreurs des déploiements en production, réduisant ainsi le risque global.
Cela permet également aux organisations de mieux accepter et de s'adapter aux changements de production, ce qui conduit à une plus grande stabilité.

## Termes liés

* [Intégration Continue](/fr/continuous-integration/)
* [Livraison Continue](/fr/continuous-delivery/)
