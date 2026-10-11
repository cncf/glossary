---
title: Équilibreur de charge (Load Balancer)
status: Completed
category: concept
tags: ["infrastructure", "réseau", ""]
---

Un équilibreur de charge est un outil qui répartit efficacement les requêtes entrantes entre plusieurs instances d'une application.
Prenons l'exemple d'une [architecture en microservices](/fr/microservices-architecture/), dans laquelle chaque service peut être [mis à l'échelle horizontalement](/fr/horizontal-scaling/).
L'équilibreur de charge est placé devant un microservice déployé en plusieurs instances et veille à ce qu'aucune instance ne soit surchargée.
Un équilibreur de charge peut être logiciel ou matériel.

## Problème auquel il répond

Les applications et les sites web modernes traitent en général des centaines de milliers de requêtes simultanées de leurs utilisateurs.
Pour absorber toutes ces requêtes, les applications sont souvent mises à l'échelle horizontalement.
Mais la mise à l'échelle horizontale pose un nouveau défi : comment répartir le trafic entrant de façon équilibrée entre tous les services ?
C'est là qu'interviennent les équilibreurs de charge.

## Quelle en est l'utilité

Les équilibreurs de charge répartissent dynamiquement toutes les requêtes entrantes entre plusieurs services, afin d'éviter qu'un service soit saturé pendant que d'autres sont sous-utilisés, voire inutilisés.
Autrement dit, ils distribuent la charge entre plusieurs services selon une règle définie (par exemple de façon équilibrée ou selon des pourcentages).
Les équilibreurs de charge sont essentiels aux performances globales d'une application et, au bout du compte, à l'expérience utilisateur.
