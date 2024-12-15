---
title: Applications Distribuées
status: Completed
category: concept
tags: ["architecture", "", ""]
---

Une application distribuée est une application dont les fonctionnalités sont découpées en plusieurs parties indépendantes et plus petites.
Les applications distribuées sont généralement composées de [microservices](/fr/microservices-architecture/) individuels
qui s'occupent de différentes problématiques au sein d'une application plus large.
Dans un environnement Cloud Native, ces composants individuels s'exécutent généralement en tant que [conteneurs](/fr/container/) sur un [cluster](/fr/cluster/).

## Problème auquel il répond

Une application s'exécutant sur un seul ordinateur représente un point de défaillance unique — si cet ordinateur tombe en panne, l'application devient indisponible.
Les applications distribuées sont souvent opposées aux [applications monolithiques](/fr/monolithic-apps/).
Une application monolithique peut être plus difficile à mettre à l'échelle car les différents composants ne peuvent pas être mis à l'échelle indépendamment.
Les applications monolithiques peuvent également devenir un frein à la vitesse de développement à mesure qu'elles grossissent,
car davantage de développeurs doivent travailler sur une base de code partagée qui n'a pas toujours des limites bien définies.

## Quelle en est l'utilité

En divisant une application en différents éléments et en les exécutant à différents endroits, le système global peut tolérer davantage de pannes.
Cela permet également à une application de tirer parti des fonctionnalités de mise à l'échelle non disponibles pour une application ayant une instance unique,
à savoir la possibilité de [mettre à l'échelle horizontalement](/fr/horizontal-scaling/).
Cela a cependant un coût : une complexité accrue et des couts opérationnels supplémentaires
— vous exécutez désormais de nombreux composants d'application au lieu d'une seule application.
