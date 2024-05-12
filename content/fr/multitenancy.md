---
title: Mutualisation (Multitenancy)
status: Completed
category: Property
tags: ["architecture", "property", ""]
---

La mutualisation (multitenancy en anglais) fait référence à une installation unique de logiciel utilisé par plusieurs locataires (tenant).
Un locataire est un utilisateur, une application ou un groupe d'utilisateurs/applications qui utilisent le logiciel pour travailler sur ses propres jeux de données.
Ces locataires ne partagent pas de données (sauf si c'est explicitement demandé par le propriétaire) et peuvent même ne pas se connaître.

Un locataire peut être petit comme un utilisateur indépendant avec un unique identifiant de connexion 
— Penser à un logiciel de productivité personnelle — ou aussi large qu'une entreprise complète avec 
des centaines d'identifiants de connexion, chacun avec ses propres droits mais interdépendants de multiples
manières. Les exemples de colocation incluent : Google Mail, Google Docs, Microsoft Office 365, Salesforce CRM,
Dropbox, parmi tant d'autres qui sont complètement ou partiellement mutualisé.

## Problème auquel il répond

Sans mutualisation, chaque locataire aurait besoin d'une installation logicielle qui lui est dédiée.
Cela augmente l'utilisation de ressources et l'effort de maintenance, et au final le coût du logiciel.

## Quel en est l'utilité

Le logiciel mutualisé fournit pour chaque locataire un environnement ségrégué (données de travail, paramètres, liste d'identifiants, etc.),
servant simultanément plusieurs locataires. De la perspective du locataire, chacun à son installation logicielle dédiée,
bien qu'en réalité, ils en partagent tous une. Tout cela est possible en exécutant le logiciel sur un serveur et en autorisant
les colocataires à se connecter à celui-ci par le réseau et/ou par une [API](/fr/application-programming-interface.md), se référer à
[Architecture Client-Serveur](/fr/client-server-architecture.md).
Avec les logiciels mutualisés, Les colocataires partagent les mêmes ressources d'une même installation sans atteindre les autres où seulement
d'une manière prédéfinie et contrôlé. Les resources économisées du côté du fournisseur du logiciel peuvent être répercutées aux locataires, réduisant
de manière significative le coût du logiciel pour les utilisateurs (encore une fois, pensez aux emails et aux éditeurs de documents en ligne).

## Termes liés

La mutualisation n'est pas un synonyme de SaaS,
Bien qu'il soit commun pour les SaaS d'être mutualisé et même de proposer la mutualisation comme un bénéfice majeurs.
