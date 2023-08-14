---
title: Maillage de services (Service Mesh)
status: Completed
category: technology
tags: ["réseau", "", ""]
---

## Ce que c'est 

Dans un monde de [microservices](/fr/microservices-architecture/), les applications sont découpées en plusieurs petits [services](/fr/service/) qui communiquent via 
le réseau.
Exactement comme votre réseau wifi, les réseaux informatiques sont intrinsèquement non fiables, piratables et souvent lents.
Les services mesh répondent à cette problématique en gérant le trafic (i.e., la communication) entre les services et ajoutent de la
[fiabilité](/fr/reliability/), de l'[observabilité](/fr/observability/) et des fonctionnalités liées à la sécurité de manière uniforme pour tous
les services.

## Problème auquel il répond

Après avoir migré vers une architecture microservices, les ingénieurs doivent gérer une centaine
voir des milliers de services, qui doivent tous communiquer.
Cela signifie que beaucoup de trafic va transiter sur le réseau.
Par dessus tout cela, chaque application peut avoir besoin de chiffrer ses communications pour des contraintes
réglementaires, fournir des métriques pour les équipes opérationnelles et proposer des informations détaillées sur le traffic
pour aider à diagnostiquer les problèmes.
Si cela devait être géré au niveau de chaque application, chacune de ces fonctionnalités pourrait conduire à créer des frictions entre les équipes et ralentir le développement de nouvelles fonctionnalités.

## Quel en est l'utilité

Le maillage de services (services mesh) ajoute de la fiabilité, de l'observabilité et de la sécurité
pour tous les services du cluster sans avoir à changer le code des services.
Avant les services mesh, cette fonctionnalité devait être implémentée dans chaque service,
devenant une potentielle source de bug, voir de dette technique.
