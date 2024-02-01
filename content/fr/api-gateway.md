---
title: Passerelle d'API (API Gateway)
status: Completed
category: technology
tags: ["réseau", "", ""]
---

Une passerelle d'[API](/fr/application-programming-interface/) est un outil qui regroupe des APIs d'applications individuelles, les rendant toutes disponibles en un seul endroit.
Celà permet aux organisations de déplacer des fonctions clés, telles que l'authentification et l'autorisation ou la limitation du nombre de requêtes entre applications, vers un emplacement géré de manière centralisée.
Une passerelle d'API fonctionne comme une interface commune pour les consommateurs d'API (souvent externes).

## Problème auquel il répond

Si vous mettez des APIs à la disposition de consommateurs externes, vous voudrez un point d'entrée unique pour gérer et contrôler tous les accès.
De plus, si vous devez appliquer une fonctionnalité sur ces interactions, une passerelle d'API vous permettra de l'appliquer uniformément à tout le trafic sans nécessiter de modifications du code de l'application.

## Quel en est l'utilité

En fournissant un seul point d'accès pour diverses APIs d'applications, les passerelles d'API facilitent, pour les organisations, la mise en place de logiques métiers ou de sécurité transversales dans un emplacement centralisé.
Elles permettent également aux consommateurs d'applications de se rendre à une adresse unique pour tous leurs besoins.
Une passerelle d'API peut simplifier les préoccupations opérationnelles telles que la sécurité et l'[observabilité](/fr/observability/) en fournissant un point d'accès unique pour les requêtes vers tous les services web d'un système.
Comme toutes les requêtes transitent par la passerelle d'API, celle-ci représente un endroit unique pour ajouter des fonctionnalités telles que la collecte de métriques, la limitation du débit et l'autorisation.
