---
title: Infrastructure en tant que code
status: Completed
category: concept
tags: ["infrastructure", "méthodologie", ""]
---

L'infrastructure en tant que code est la pratique de stocker la définition d'infrastructure dans un ou plusieurs fichiers.
Ceci remplace le modèle traditionnel où l'infrastructure en tant que service est provisionnée manuellement,
habituellement au travers de scripts ou autres outils de configuration.

## Problème auquel il répond

Construire des applications d'une manière Cloud Native nécessite des infrastructures qui peuvent être duplicables et jettables.
Il est également nécessaire de pouvoir [mettre à l'échelle](/fr/scalability/) à la demande de manière automatique et répétable, potentiellement sans intervention humaine.
Le provisionnement manuel ne pouvant pas répondre aux besoins de réactivité et de passage à l'échelle des [applications Cloud Natives](/fr/cloud-native-apps/).
Les changements manuels sur l'infrastructure ne sont pas reproductibles, affichent rapidement des problèmes de mise à l'échelle, et amènent des erreurs de configuration.

## Quel en est l'utilité

En représentant les ressources des centres de données comme les serveurs, les équilibreurs de charge, et les sous-réseaux en tant que code, celà permet aux équipes en charge de l'infrastructure d'avoir une seule source de vérité pour toutes les configurations mais aussi de gérer leurs centres de données dans un pipeline [CI](/continuous-integration/)/[CD](/continuous-delivery/), qui implémente la gestion de version et des stratégies de déploiement.
