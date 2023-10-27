---
title: Machine Physique (Bare Metal)
status: Completed
category: technology
tags: ["infrastructure", "", ""]
---

## Ce que c'est

Une machine physique, ou machine bare metal, fait référence à un ordinateur physique, plus précisément à un serveur, qui possède un et un seul système d'exploitation.
En informatique moderne, la plupart des serveurs sont des [machines virtuelles](/fr/virtual-machine/), il est donc important de faire cette distinction. 
Un serveur physique est généralement un ordinateur assez gros qui intègre du matériel puissant.
L'installation d'un système d'exploitation et l'exécution d'applications directement sur ce matériel physique,
sans [virtualisation](/fr/virtualization/), est ce que l'on appelle une machine physique, ou machine bare metal.

## Problème auquel il répond

Associer un système d'exploitation à un ordinateur physique est le modèle original de l'informatique.
Toutes les ressources de l'ordinateur physique sont disponibles directement pour le système d'exploitation et sans couche de virtualisation présente, aucune latence n'est induite par la traduction des instructions du système d'exploitation vers le matériel.

## Quel en est l'utilité

En dédiant toutes les ressources de calcul d'un ordinateur à un seul système d'exploitation,
vous fournissez théoriquement les meilleures performances possibles au système d'exploitation.
Si vous devez exécuter une charge de travail qui doit avoir un accès extrêmement rapide aux ressources matérielles,
une machine physique peut être la solution adéquate.

Dans le contexte des [applications Cloud Natives](/fr/cloud-native-apps/),
vous envisagez généralement les performances en termes de [mise à l'échelle](/fr/scalability/), pour traiter un grand nombre d'événements simultanés.
Vous pouvez utiliser pour cela la [mise à l'échelle horizontale](/fr/horizontal-scaling/) (ajout de plus de machines pour augmenter la capacité de traitement).
Mais, certaines charges de travail peuvent nécessiter une [mise à l'échelle verticale](/fr/vertical-scaling/) (ajouter plus de puissance à une machine existante)
et/ou une réponse extrêmement rapide du matériel. Dans ce cas, une machine physique est plus adaptée.
Les machines physiques permettent également des réglages avancés au niveau du matériel physique et éventuellement des pilotes matériels pour vous aider à accomplir votre tâche.
