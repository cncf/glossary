---
title: Cluster
status: Completed
category: Concept
tags: ["infrastructure", "fondamental", ""]
---

## Ce que c'est

Un cluster est un groupe d'ordinateurs ou d'applications qui fonctionnent ensemble dans un but commun.
Dans un contexte Cloud Native, le terme est souvent appliqué à [Kubernetes](/fr/kubernetes/).
Un cluster Kubernetes est un ensemble de services (ou de charges de travail) qui s'exécutent dans leurs propres conteneurs, souvent sur des machines différentes.
L'ensemble de tous ces services [conteneurisés](/fr/containerization/), connectés au travers du réseau, représente un cluster.

## Problème auquel il répond

Un logiciel qui s'exécute sur un seul ordinateur représente un point de défaillance unique
— si cet ordinateur tombe en panne, ou si accidentellement quelqu'un débranche le câble d'alimentation,
alors un système critique pourrait être mis hors-ligne.
C'est pourquoi généralement les logiciels modernes sont souvent construits sous forme d'[applications distribuées](/fr/distributed-apps/), regroupées ensemble comme un cluster.

## Quel en est l'utilité

Les applications réparties en cluster s'exécutent sur plusieurs machines, éliminant le point de défaillance unique.
Cependant, fabriquer des systèmes distribués est vraiment difficile.
Dans les fait, c'est une discipline informatique à part entière.
Le besoin en systèmes globaux et les années d'essais et d'erreurs ont mené au développement d'un nouveau genre de pile technique:
[technologies Cloud Natives](/fr/cloud-native-tech/).
Ces nouvelles technologies sont les blocs de construction qui facilitent l'exploitation et la création de systèmes distribués.

