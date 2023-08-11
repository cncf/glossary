---
title: Orchestration de Conteneurs
status: Completed
category: Concept
---

## Ce que c'est

L'orchestration de [Conteneurs](/fr/container/) fait référence à la gestion et à l'automatisation du cycle de vie d'applications conteneurisées au sein d'environnements dynamiques.
Réalisée à l'aide d'un orchestrateur de conteneurs (la plupart du temps, [Kubernetes](/fr/kubernetes)), elle permet les déploiements, le passage à l'échelle (automatique), (l'auto-)remédiation et le monitoring.
L'orchestration est une métaphore:
L'outil d'orchestration dirige les conteneurs tel un chef d'orchestre, s'assurant que chaque conteneur (ou musicien) fait ce qu'il doit faire.

## Problème auquel il répond

Gérer manuellement des [microservices](/fr/microservices-architecture), la sécurité, et la communication réseaux à grande échelle — et des [systèmes distribués](/fr/distributed-systems) en général — est compliqué, pour ne pas dire impossible.
L'orchestration de conteneurs permet aux utilisateurs d'automatiser toutes ces tâches de gestion.

## Quelle en est l'utilité

Les outils d'orchestration de conteneurs permettent aux utilisateurs de déterminer l'état d'un système.
Tout d'abord, vous déclarez tel qu'il devrait être (i.e. x conteneurs, y pods, etc...).
L'outil d'orchestration va ensuite automatiquement surveiller l'infrastructure et la corriger si son état dévie de l'état déclaré (i.e. ajouter un nouveau conteneur si un autre est tombé en panne).
Cette automatisation simplifie nombre des tâches complexes et hautement manuelles qui sont réalisées autrement par les équipes d'ingénieurie, comme l'approvisionnement, le déploiement, la scalabilité (vers le haut ou le bas), la répartition de charge parmi d'autres activités.
