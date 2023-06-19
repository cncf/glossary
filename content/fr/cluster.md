---
title: Cluster
status: Completed
category: Concept
tags: ["infrastructure", "fundamental", ""]
---

## Ce que c'est

Un cluster est un groupe d'ordinateurs ou d'applications qui fonctionnent ensemble dans un but commun.
Dans le contexte du cloud native computing, le terme est souvent appliqué à [Kubernetes](/kubernetes/).
Un cluster Kubernetes est un ensemble de services (ou de charge de travail) qui s'exécute dans leurs propres conteneurs, souvent sur des machines différentes.
L'ensemble de tous ces services [conteneurisés](/containerization/), connectés au travers du réseau, représente un cluster.

## Problème auquel il répond

Un logiciel qui s'exécute sur un seul ordinateur représente un point de défaillance unique
- si cet ordinateur tombe en panne, ou si accidentellement quelqu'un débranche le cable d'alimentation,
alors quelque système critique pourrait être mis hors-ligne.
C'est pourquoi généralement les logiciels modernes sont souvent construits sous forme d'[applications distribuée](/distributed-apps/), regroupés ensemble comme un cluster.

## Quel en est l'utilité

Les applications réparties en cluster s'exécutent sur plusieurs machines, élimine le point de défaillance unique.
Cependant, fabriquer des systèmes distribués est vraiment difficile.
Dans les fait, c'est une discipline informatique à part entière.
Le besoin en systèmes globaux et les années d'essais et d'erreur ont mené au développement d'un nouveau genre de pile technique:
[cloud native technologies](/cloud-native-tech/).
Ces nouvelles technologies sont les blocs de construction qui facilitent l'exploitation et la création de systèmes distribués.

