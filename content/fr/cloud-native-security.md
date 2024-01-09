---
title: Sécurité Cloud Natives
status: Completed
category: concept
tags: ["sécurité", "", ""]
---

La sécurité Cloud Native est une approche qui intègre la sécurité dans les [applications Cloud Natives](/fr/cloud-native-apps/).
Il garantit que la sécurité fait partie du cycle de développement de l'application du développement jusqu'à la mise en production.
La sécurité Cloud Native vise à garantir les mêmes standards que les modèles de sécurité traditionnels tout en s'adaptant aux particularités des environnements Cloud Natives, comme les infrastructures éphémères ainsi que les livraisons de code fréquentes.
La sécurité Cloud Native est hautement liée à la pratique du [DevSecOps](/fr/devsecops/)

## Problème auquel il répond

Les modèles de sécurité traditionnels ont été conçus avec des hypothèses qui ne sont aujourd'hui plus valides.
Les applications Cloud Natives changent fréquemment, utilisent beaucoup d'outils et de bibliothèques open source, elles tournent dans des infrastructures souvent contrôlées par un revendeur et elles sont sujettes à des changements d'infrastructures rapides.
Les revues de code, les longs cycles d'assurance qualité, l'analyse des vulnérabilités des hôtes, et les révisions de sécurité de dernière minute ne se mettent pas à l'échelle avec les applications Cloud Natives.

## Quel en est l'utilité

La sécurité Cloud Native introduit une nouvelle façon de travailler qui protègent les applications
en migrant depuis les modèles de sécurité traditionnels vers un modèle ou la sécurité est impliquée dans chaque étape du cycle de livraison.
Les audits et vérifications manuelles sont remplacés par des analyses automatisées.
Les pipelines de livraison de code ont intégré les outils qui analysent le code pour détecter des vulnérabilités avant que celui-ci soit compilé.
Les bibliothèques open source sont récupérées depuis des sources de confiance qui monitorent leurs vulnérabilités.
Au lieu de ralentir le changement, le modèle de sécurité Cloud Native l'adopte 
en mettant à jour les composants vulnérables fréquemment ou en s'assurant que l'infrastructure est remplacée régulièrement.
