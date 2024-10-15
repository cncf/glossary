---
title: Mutualisation (Multitenancy)
status: Completed
category: Property
tags: ["architecture", "propriété", ""]
---

La mutualisation (multitenancy en anglais) fait référence à une installation unique de logiciel utilisé par plusieurs locataires (tenant).
Un locataire est un utilisateur, une application ou un groupe d'utilisateurs/applications qui utilisent le logiciel pour travailler sur ses propres jeux de données.
Ces locataires ne partagent pas de données (sauf si c'est explicitement demandé par le propriétaire) et peuvent même ne pas se connaître.

Un locataire peut être petit comme un utilisateur indépendant avec un unique identifiant de connexion 
— pensez à un logiciel de productivité personnelle — ou aussi grand qu'une entreprise complète avec 
des centaines d'identifiants de connexion, chacun avec ses propres droits mais interdépendants de multiples
manières. Les exemples de mutualisation incluent : Google Mail, Google Docs, Microsoft Office 365, Salesforce CRM,
Dropbox, parmi tant d'autres qui sont complètement ou partiellement mutualisés.

## Problème auquel il répond

Sans mutualisation, chaque locataire aurait besoin d'une installation logicielle qui lui est dédiée.
Cela augmente l'utilisation de ressources et l'effort de maintenance, et au final le coût du logiciel.

## Quelle en est l'utilité

Le logiciel mutualisé fournit à chaque locataire un environnement isolé (données de travail, configurations, liste d'identifiants, etc.),
servant simultanément plusieurs locataires. Du point de vue du locataire, chacun à son installation logicielle dédiée,
bien qu'en réalité, ils en partagent tous une seule. Tout cela est possible en exécutant le logiciel sur un serveur et en autorisant
les colocataires à se connecter à celui-ci par une interface utilisateur et/ou par une [API](/fr/application-programming-interface/) (faisant référence à une 
[architecture client-serveur](/fr/client-server-architecture/)).
Avec les logiciels mutualisés, les colocataires partagent les mêmes ressources d'une même installation sans affecter les autres ou seulement
d'une manière prédéfinie et contrôlée. Les ressources économisées du côté du fournisseur du logiciel peuvent être répercutées aux locataires, réduisant
de manière significative le coût du logiciel pour les utilisateurs (encore une fois, pensez aux emails ou aux éditeurs de documents en ligne).

## Termes liés

La mutualisation n'est pas un synonyme de SaaS,
bien qu'il soit commun pour les SaaS d'être mutualisés et même de proposer la mutualisation comme un bénéfice majeur.
