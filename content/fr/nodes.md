---
title: Nœud 
status: Completed
category: Concept
tags: ["infrastructure", "fondamental", ""]
---

## Ce que c'est

Un nœud est un ordinateur qui travaille de concert avec d'autres ordinateurs, ou nœuds, pour accomplir une tâche commune.
Prenons par exemple votre ordinateur portable, votre modem et votre imprimante.
Ils sont tous connectés via votre réseau wifi, communiquant et collaborant ensemble, chacun représentant un nœud.
En [cloud computing](/fr/cloud-computing/), un nœud peut être un ordinateur physique,
un ordinateur virtuel, appelé [VM](/fr/virtual-machine/), ou encore un [conteneur](/fr/container/).

## Problème auquel il répond

Bien qu'une application puisse s'exécuter sur une seule machine, comme beaucoup le font encore, cela comporte certains risques.
En particulier, une défaillance du système sous-jacent va perturber l'application.
Pour résoudre ce problème, les développeurs ont commencé à créer des [applications distribuées](/fr/distributed-apps/) où chaque processus s'exécute sur son propre nœud.
Ainsi, les nœuds exécutent des applications ou des processus dans le cadre d'un groupe formant un [cluster](/fr/cluster/), c'est-à-dire un groupe de nœuds qui travaillent ensemble pour atteindre un objectif commun.

## Quel en est l'utilité

Un nœud vous fournit une unité de calcul distincte (mémoire, processeur, réseau) que vous pouvez attribuer à un cluster.
Dans une plate-forme ou une application [Cloud Native](/fr/cloud-native-tech/), un nœud représente une unité unique qui peut effectuer un travail.
Idéalement, les nœuds individuels sont indifférenciés, c'est-à-dire que
tout nœud d'un type particulier est indiscernable de tout autre nœud du même type.