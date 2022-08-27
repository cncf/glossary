---
title: Service Mesh
status: Completed
category: technology
tags: ["networking", "", ""]
---

## Ce que c'est 

Dans un monde de [microservices](/microservices/), les applications sont découpées en plusieurs petits services qui communiquent via 
le réseau.
Exactement comme votre réseau wifi, les réseaux informatiques sont intrinsèquement non fiable, piratable et souvent lent.
Les services mesh répondent à cette problématique en gérant le trafic (i.e., la communication) entre les services et ajoute de la
[fiabilité](/reliability/), de l'[observabilité](/observability/) et des fonctionnalités liées à la sécurité de manière uniforme pour tous
les services.

## Problème Qu'il adresse

Après avoir migré vers une architecture microservices. Les ingénieurs doivent gérer une centaine
voir des milliers de services, qui doivent tous communiqués.
Cela signifie qu'il va y avoir beaucoup de trafic  qui va faire des aller et retour sur le réseau.
Par dessus tout cela, chaque application peut avoir besoin de chiffrer ses communications pour des contraintes
réglementaires, fournir des métriques pour les équipes opérationnelles fournir des informations détaillées à propos du trafic
pour aider à diagnostiquer les problèmes.
Si cela devait être géré au niveau de chaque application, chacune avec ses fonctionnalités cela pourrait causer des friction entre les équipes et ralentir le développement de nouvelles fonctionnalités.

## Quel en est l'utilité

Les services mesh ajoutent de la fiabilité, de l'observabilité et de la sécurité
pour tous les services du cluster sans avoir à changer le code des services.
Avant les services mesh, cette fonctionnalité devait être implémentée dans chaque service,
devenant une potentielle source de bug, voir une dette technique.