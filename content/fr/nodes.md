---
title: Nœud 
status: Completed
category: Concept
tags: ["infrastructure", "fundamental", ""]
---

## Ce que c'est

Un nœud est un ordinateur qui travaille de concert avec d'autres ordinateurs, ou nœuds, pour accomplir une tâche commune.
Prenez votre ordinateur portable, votre modem et votre imprimante, par exemple.
Ils sont tous connectés sur votre réseau wifi communiquant et collaborant, chacun représentant un nœud.
En [Cloud computing](/cloud-computing/), un nœud peut être un ordinateur physique,
un ordinateur virtuel, appelé [VM](/virtual-machine/), ou encore un [Conteneur](/container/).

## Problème auquel il répond

Bien qu'une application puisse s'exécuter sur une seule machine, et beaucoup le font, cela comporte certains risques.
En effet, une panne du système sous-jacent va perturber l'application.
Pour résoudre ce problème, les développeurs ont commencé à créer des [applications distribuées](/distributed-apps/) où chaque processus s'exécute sur son propre nœud.
Ainsi, les nœuds exécutent des applications ou des processus dans le cadre d'un groupe formant un [cluster](/cluster/), c'est a dire un groupe de nœuds qui travaillent ensemble pour atteindre un objectif commun.

## Quel en est l'utilité

Un nœud fourni une unité de calcul (mémoire, processeur, réseau) que vous pouvez attribuer à un cluster.
Dans une plate-forme ou une application [cloud native](/cloud-native-tech/), un nœud représente une unité unique qui peut effectuer un travail.
Idéalement, les nœuds individuels sont indifférenciés en ce sens que
tout nœud d'un type particulier est indiscernable de tout autre nœud du même type.