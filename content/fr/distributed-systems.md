---
title: Système distribué
status: Completed
category: concept
tags: ["architecture", "", ""]
---

Un système distribué est un ensemble de composants autonomes connectés via un réseau, et qui apparaît à ses utilisateurs comme un seul système cohérent.
La plupart du temps appelés [nœuds](/fr/nodes/), ces composants peuvent aussi bien être des machines physiques (des ordinateurs ou des téléphones portables par exemple) que des processus logiciels.
Les nœuds sont programmés pour atteindre un objectif commun et échangent des messages via le réseau afin de collaborer.

## Problème auquel il répond

De nos jours, de nombreuses applications modernes sont si conséquentes de par leur taille qu'elles nécessiteraient des superordinateurs afin de pouvoir fonctionner.
Pensez à Gmail ou Netflix: il n'existe aucune machine physique suffisamment puissante pour héberger ces applications dans leur intégralité.
En connectant entre elles de multiples machines physiques, la puissance de calcul devient quasiment infinie.
Sans calcul distribué, beaucoup d'applications sur lesquelles nous nous appuyons aujourd'hui ne pourraient pas exister.

Traditionnellement, les systèmes  [passent à l'échelle](/fr/scalability/) verticalement, ce qui correspond à l'ajout de processeur ou de mémoire à une seule machine.
Le passage à l'échelle vertical est chronophage, nécessite un temps d'arrêt, et atteint rapidement ses limites.

## Quel en est l'utilité

Les systèmes distribués permettent un [passage à l'échelle horizontal](/fr/horizontal-scaling/) (par exemple en ajoutant des nœuds au système lorsque nécessaire).
Ceci peut être automatisé, permettant ainsi au système de gérer une croissance soudaine de charge de travail (workload) ou de consommation de ressources.

Un système non distribué s'expose à des risques de panne dans la mesure où, si une machine physique venait à tomber en échec, l'intégralité du système viendrait à tomber avec elle.
Un système distribué peut être pensé et conçu afin que, dans l'éventualité où une machine physique viendrait à tomber, le système au global puisse continuer de fonctionner avec le même résultat.
