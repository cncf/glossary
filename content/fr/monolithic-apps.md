---
title: Applications Monolithiques
status: Completed
category: concept
tags: ["architecture", "fondamental", ""]
---

Une application monolithique contient toutes les fonctionnalités au sein d'un unique logiciel déployable.
C'est souvent la manière la plus simple pour commencer le développement d'une application.
Cependant, lorsque l'application se complexifie, les monolithes peuvent devenir difficiles à maintenir.
Avec plus de développeurs qui travaillent sur la même base de code, la probabilité de conflits dans les changements et donc de communication directe entre les développeurs augmente.

## Problème auquel il répond

Transformer une application en [microservices](/fr/microservices-architecture/) augmente la charge de travail - comme il y a plus de choses à tester, déployer et à maintenir opérationel.
Au début du cycle de développement d'un produit il peut être avantageux de repousser cette complexité et de construire une application monolithique jusqu'à ce que le produit soit reconnu comme un succès.

## Quelle en est l'utilité

Un monolith correctement architecturé peut respecter les principes lean en étant la manière la plus simple d'obtenir une application fonctionnelle.
Lorsque la valeur commerciale d'une application monolithique s'avère être un succès, elle peut être décomposée en microservices.
Créer une application microservices avant que la valeur ne soit attestée peut s'avérer être une dépense prématurée.
Si l'application n'amène aucune valeur, cet effort sera gâché.
