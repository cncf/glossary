---
title: Mise à l'échelle horizontale (Horizontal Scaling)
status: Completed
category: Concept
tags: ["infrastructure", "", ""]
---

La mise à l'échelle horizontale est une technique qui consiste à augmenter la capacité d'un système en ajoutant plus de [nœuds](/fr/nodes/) au lieu d'ajouter plus de ressources informatiques à des nœuds unitaires (ce dernier étant connu sous le nom de [mise à l'échelle verticale (Vertical Scaling)](/fr/vertical-scaling/)).
Supposons que nous avons un système avec 4 Go de mémoire et que nous voulons augmenter sa capacité à 16 Go, la mise à l'échelle horizontale consiste à ajouter 4 × 4 Go de mémoire plutôt que de passer à un système avec 16 Go de mémoire.

Cette approche améliore les performances d'une application en ajoutant de nouvelles instances, ou [nœuds](/fr/nodes/), pour mieux répartir la charge de travail.
En termes simples, elle vise à réduire la charge du serveur plutôt qu'à étendre la capacité du serveur unitaire.

## Problème auquel il répond

Lorsque la demande d'une application dépasse la capacité actuelle de l'instance de cette application, nous devons trouver un moyen de [mettre à l'échelle](/fr/scalability/) le système (ajouter de la capacité au système).
Nous pouvons soit ajouter plus de nœuds au système (mise à l'échelle horizontale) soit ajouter plus de ressources informatiques aux nœuds existants (mise à l'échelle verticale).

## Quel en est l'utilité

La mise à l'échelle horizontale permet aux applications de s'étendre jusqu'aux limites fournies par le cluster sous-jacent.
En ajoutant davantage d'instances au système, l'application peut traiter un plus grand nombre de requêtes.
Si un nœud unique peut traiter 1000 requêtes par seconde, chaque nœud supplémentaire devrait augmenter le nombre total de requêtes d'environ 1000 requêtes par seconde. 
Cela permet à l'application d'effectuer davantage de travail simultanément sans avoir besoin d'augmenter la capacité d'un nœud en particulier.

## Termes liés

* [Mise à l'échelle verticale (Vertical Scaling)](/fr/vertical-scaling/)
* [Mise à l'échelle automatique (Autoscaling)](/fr/auto-scaling/)
