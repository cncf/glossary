---
title: Livraison Continue (Continuous Delivery)
status: Completed
category: concept
tags: ["méthodologie", "application", ""]
---

La livraison continue, souvent abrégée en CD, est un ensemble de pratiques
dans lequel les modifications de code sont automatiquement déployées dans un environnement d'acceptation
(ou, en cas de déploiement continu, en production).
La CD comprend des procédures pour garantir que le logiciel est correctement testé
avant le déploiement et fournit un moyen de revenir en arrière sur les modifications si nécessaire.
L'intégration continue (CI) est la première étape vers la livraison continue
(c'est-à-dire que les modifications doivent fusionner proprement avant d'être testées et déployées).

## Problème auquel il répond

Le déploiement de mises à jour [fiables](/fr/reliability/) devient un problème à grande échelle.
Idéalement, nous déploierions plus fréquemment pour fournir de meilleures prestations aux utilisateurs finaux.
Cependant, le faire manuellement se traduit par des coûts élevés pour chaque modification.
Historiquement, pour éviter ces coûts, les organisations publiaient moins fréquemment,
déployant plus de changements à la fois et augmentant le risque que quelque chose se passe mal.

## Quel en est l'utilité

Les stratégies CD créent un parcours entièrement automatisé vers la production
qui teste et déploie le logiciel en utilisant diverses stratégies
telles que les déploiements [canari](/fr/canary-deployment/) ou [bleu/vert](/fr/blue-green-deployment/).
Cela permet aux développeurs de déployer du code fréquemment, leur donnant ainsi la certitude que la nouvelle révision a été testée.
En règle générale, le développement basé sur le tronc (trunk-based development) est utilisé dans les stratégies CD, par opposition aux branches de fonctionnalités (feature branching) ou aux propositions de révision (pull requests).

## Termes liés

* [Intégration Continue](/fr/continuous-integration/)
* [Déploiement Continu](/fr/continuous-deployment/)