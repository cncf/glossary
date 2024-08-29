---
title: Découverte de services (Service Discovery)
status: Completed
category: Concept
tags: ["réseau", "", ""]
---

La découverte de services est le processus permettant de découvrir les différentes instances qui composent un service.
Un outil de découverte de service garde une trace des différents nœuds ou points de terminaison qui constituent un service.

## Problème auquel il répond

Les architectures cloud natives sont dynamiques et fluides, ce qui signifie qu'elles changent constamment.
Une application [conteneurisée](/fr/containerization/) finira probablement par démarrer et s'arrêter plusieurs fois au cours de sa durée de vie.
À chaque fois que cela se produit, elle aura une nouvelle adresse et
toute application qui souhaite la trouver aura besoin d'un outil qui lui fournira les nouvelles informations de localisation.

## Quelle en est l'utilité

Le mécanisme de découverte de services garde une trace des applications au sein du réseau afin qu'elles puissent se trouver mutuellement en cas de besoin.
Il fournit une méthode simple pour trouver et potentiellement identifier les services individuels.
Les moteurs de découverte de services sont des outils semblables à des bases de données qui stockent les informations sur les services existants et comment les localiser.