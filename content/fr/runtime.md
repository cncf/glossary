---
title: Environnement d'exécution (Runtime)
status: Completed
category: concept
tags: ["application", "", ""]
---

En général, un environnement d'exécution (ou runtime en anglais) exécute un logiciel.
C'est une [abstraction](/fr/abstraction/) du système d'exploitation sous-jacent qui traduit les commandes du programme en actions pour le système d'exploitation.

Dans le contexte des [applications Cloud Natives](/fr/cloud-native-apps/), l'environnement d'exécution fait généralement référence à l'environnement d'exécution de conteneurs (ou container runtime en anglais).
Un environnement d'exécution de conteneurs implémente la spécification [Open Container Initiative](https://opencontainers.org/) pour garantir un fonctionnement cohérent des conteneurs quelle que soit la technologie d'orchestration utilisée.

## Problème auquel il répond

Sans l'abstraction d'un environnement d'exécution, l'application devrait prendre en considérations toutes les spécificités de chaque système d'exploitation, augmentant la complexité de l'exécution de l'application.

## Quelle en est l'utilité

L'environnement d'exécution de conteneurs est un composant nécessaire des orchestrateurs de conteneurs tels que Kubernetes.
Il gère le cycle de vie des conteneurs, et fait principalement trois choses.
Premièrement, il définit comment les images de conteneurs utilisées doivent être spécifiées et comment l'environnement d'exécution peut les récupérer.
Deuxièmement, il gère la manière dont ces images sont décompressées, superposées, montées et exécutées.
En outre, l'environnement d'exécution gère les ressources matérielles en prenant soin de toutes les actions au niveau du système d'exploitation.
Cela inclut l'allocation et l'isolation des ressources.
Avec le temps, différents produits d'environnement d'exécution de conteneurs ont évolué, conduisant à la spécification OCI,
qui est devenue la norme pour les environnements d'exécution de conteneurs.

L'introduction de cette norme permet aux utilisateurs finaux de combiner n'importe quel environnement d'exécution conforme à la spécification OCI avec n'importe quel orchestrateur de conteneurs conforme à la spécification OCI (comme Kubernetes).

## Termes liés

- [Cloud Native](/fr/cloud-native-apps/)
- [Conteneurisation](/fr/containerization/)
- [Orchestration de Conteneurs](/fr/container-orchestration/)
- [Architecture en Microservices](/fr/microservices-architecture/)
