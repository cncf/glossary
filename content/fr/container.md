---
title: Conteneurs
status: Completed
category: technology
tags: ["application", "fondamental", ""]
---

Un conteneur est un processus qui fonctionne avec des contraintes de ressources et de capacités gérées par le système d'exploitation d'un ordinateur.
Les fichiers accessibles au processus du conteneur sont regroupés dans une image de conteneur.
Les conteneurs sont exécutés les uns à côté des autres sur la même machine,
mais généralement le système d'exploitation empêche les processus de conteneurs différents d'interagir les uns avec les autres.

## Problème auquel il répond

Avant que les conteneurs ne soient disponibles, des machines dédiées étaient nécessaires pour faire fonctionner des applications.
Chaque machine nécessitait son propre système d'exploitation, qui utilisait du CPU, de la mémoire et de l'espace disque,
tout cela pour faire fonctionner une simple application.
De plus, la maintenance, la mise à jour et le lancement d'un système d'exploitation sont des sources de travail en plus.

## Quel en est l'utilité

Les conteneurs partagent le même système d'exploitation et ses ressources machine,
et se partagent donc la charge additionnelle des ressources dues au système d'exploitation, ce qui permet un usage efficace de la machine physique.
Cette possibilité est uniquement offerte, car les conteneurs sont habituellement limités dans leurs interactions mutuelles.
Ceci permet de faire fonctionner beaucoup plus d'applications sur la même machine physique.

Il y a cependant des limitations.
Étant donné que les conteneurs partagent le même système d'exploitation, les processus peuvent être considérés moins sécurisés que leurs alternatives.
Les conteneurs nécessitent également des limites sur les ressources partagées.
Pour garantir les ressources, les administrateurs doivent contraindre et limiter l'utilisation de la mémoire et du CPU afin de ne pas impacter les performances des autres applications.
