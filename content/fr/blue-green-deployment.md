---
title: Déploiement bleu/vert
status: Completed
category: concept
tags: ["méthodologie", "application", ""]
---

Le déploiement bleu/vert (ou Blue/Green) est une stratégie pour mettre à jour les systèmes informatiques en cours d'exécution avec un temps d'arrêt minimal.
L'opérateur maintient deux environnements, appelés "bleu" et "vert".
L'un sert le trafic de production (la version que tous les utilisateurs utilisent actuellement), tandis que l'autre est mis à jour.
Une fois que les tests ont été conclus sur l'environnement passif (vert),
le trafic de production est basculé (souvent via l'utilisation d'un répartiteur de charge).
Notez que le déploiement bleu/vert signifie généralement la basculement de l'ensemble des environnements, comprenant de nombreux [services](/fr/service/), en une seule fois.
De manière confuse, parfois le terme est utilisé en référence à des services individuels au sein d'un système.
Pour éviter cette ambiguïté, le terme "déploiement sans temps d'arrêt" (ou "zero-downtime") est préféré lorsqu'il s'agit de composants individuels.

## Problème auquel il répond

Les déploiements bleu/vert permettent une interruption minimale lors de la mise à jour de logiciels qui doivent être modifiés en "étapes vérouillées" (ou lockstep en anglais) en raison d'un manque de rétrocompatibilité.
Par exemple, le déploiement bleu/vert serait approprié pour une boutique en ligne composée d'un site web et d'une base de données qui doivent être mise à jour, mais la nouvelle version de la base de données ne fonctionne pas avec l'ancienne version du site web, et vice versa.
Dans ce cas, les deux doivent être modifiés en même temps.
Si cela était fait sur le système de production, les clients remarqueraient une interruption de service.

## Quel en est l'utilité

Le déploiement bleu/vert est une stratégie appropriée pour les logiciels non Cloud Natives qui doivent être mis à jour avec un temps d'arrêt minimal.
Cependant, son utilisation est normalement un "signe" que le logiciel hérité doit être redéveloppé afin que les composants puissent être mis à jour individuellement.
