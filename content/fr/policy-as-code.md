---
title: Politique en tant que code
status: Completed
category: concept
tags: ["méthodologie", "", ""]
---

La politique en tant que code est la pratique de stocker la définition des politiques sous forme d'un ou plusieurs fichiers dans un format lisible et exploitable par un programme informatique.
Cela remplace le modèle traditionnel où les politiques sont documentées sous une forme lisible par l'homme dans des documents distincts.

## Problème auquel il répond

La construction d'applications et d'infrastructures est souvent contrainte par de nombreuses politiques définies par une organisation,
par exemple des politiques de sécurité qui interdisent de stocker des secrets dans le code source, d'exécuter un conteneur avec des permissions de super-utilisateur
ou de stocker des données en dehors d'une région géographique spécifique.
Il est très laborieux et sujet aux erreurs pour les développeurs et les relecteurs de vérifier manuellement les applications et les infrastructures par rapport aux politiques documentées.
Les processus manuels ne peuvent pas répondre aux exigences de réactivité et de mise à l'échelle des applications Cloud Natives.

## Quelle en est l'utilité

La description des politiques sous forme de code permet la répétabilité et réduit les erreurs (contrairement à ce qui se fait manuellement).
Un autre avantage de la politique en tant que code est que le code peut être géré par un système de contrôle de version comme Git. 
Git crée un historique des modifications, ce qui est particulièrement utile lorsque quelque chose ne fonctionne pas comme prévu.
Cela permet à l'utilisateur de déterminer qui a apporté la modification et de revenir à une version précédente.
