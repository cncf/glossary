---
title: Contrôle d'accès basé sur les rôles (RBAC)
status: Completed
category: Concept
tags: ["securité", "fondamental", ""]
---

## Ce que c'est

Le contrôle d'accès basé sur les rôles (RBAC) est une méthode visant à réguler l'accès aux systèmes et aux ressources en fonction des rôles attribués aux utilisateurs au sein d'une organisation. 
Chaque métier a un rôle spécifique assorti d'autorisations particulières. Par exemple, un membre de l'équipe marketing peut avoir la permission de consulter les ventes en cours (autorisation de lecture), 
mais ne sera pas autorisé à les modifier (autorisation d'écriture). 
Les équipes de vente et de marketing possèdent des autorisations différentes selon leurs rôles respectifs, d'où le terme "contrôle d'accès basé sur les rôles". 
Cette logique s'applique également aux rôles au sein des équipes d'ingénierie.

## Problème auquel il répond

La gestion individuelle des autorisations d'accès pour de multiples utilisateurs, à diverses ressources système et données, peut être complexe. 
Chaque utilisateur nécessite généralement l'accès à un ensemble de ressources spécifique. 
Supposons qu'une organisation compte 500 développeurs (utilisateurs) et 300 ressources avec différents niveaux d'autorisation (lecture, écriture et absence d'accès). 
L'administrateur doit s'assurer que chaque utilisateur dispose des autorisations adéquates pour les 300 ressources.
Le RBAC simplifie le processus en offrant un contrôle d'accès préétabli basé sur des groupes de rôles.

## Quel en est l'utilité

Le RBAC confère un contrôle granulaire sur les autorisations des utilisateurs au sein des systèmes logiciels. 
En fonction de leurs rôles, les membres de l'équipe peuvent soit modifier une section, simplement la consulter, ou bien s'en voir totalement interdire l'accès. 
Cette attribution précise des autorisations permet à des membres d'équipes ayant des rôles différents de travailler sur le même système tout en minimisant les risques.
