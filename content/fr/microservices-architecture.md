---
title: Architecture en Microservices
status: Completed
tags: ["architecture", "fundamental", ""]
---

## Ce que c'est

Une architecture en microservices est une approche architecturale qui divise les applications en (micro)[services](/service/) distincts et indépendants, chaque service étant focalisé sur une fonctionnalité spécifique. 
Ces services fonctionnent en étroite collaboration, et l'utilisateur final a l'impression d'utiliser un seul service.
Prenez Netflix comme exemple.
Son interface vous permet d'accéder, de rechercher et de prévisualiser des vidéos.
Ces fonctionnalités sont probablement alimentées par des services plus petits qui gèrent chacun une fonctionnalité, par exemple l'authentification, la recherche ou l'affichage d'aperçus dans votre navigateur.

Cette approche architecturale permet aux développeurs de déployer de nouvelles fonctionnalités ou de mettre à jour des fonctionnalités beaucoup plus rapidement que si elles étaient toutes fortement couplées, comme dans une [application monolithique](/monolithic-apps/) (voir ci-dessous).

## Problème auquel il répond

Les applications sont composées de différentes parties, chacune responsable d'une fonctionnalité spécifique.
L'augmentation de la demande pour une fonctionnalité particulière n'augmentera pas forcement la demande pour d'autres fonctionnalités de l'application.
Revenons à notre exemple Netflix.
Disons qu'après une grosse campagne marketing, Netflix connaît un gros pic d'inscriptions, mais l'utilisation du streaming est restée plus ou moins stable dans les premières heures de la journée.
L'augmentation du nombre d'inscriptions exige une plus grande capacité de la part de la fonctionnalité d'inscription.
Traditionnellement (approche monolithique), l'ensemble de l'application devrait être [mise à l'échelle](/scalability/) pour s'adapter à la demande - une utilisation très inefficace des ressources.

Les architectures monolithiques font parfois tomber les développeurs dans des pièges de conception.
Étant donné que tout le code se trouve au même endroit, il est facile de rendre ce code [étroitement couplé](/architectures-couplées-étroitement/) et plus difficile d'appliquer le principe de séparation des responsabilités.
Les monolithes exigent également souvent que les développeurs comprennent l'intégralité de la base de code avant d'y faire des modifications.
L'architecture des microservices est une réponse à ces défis.

## Quel en est l'utilité

La séparation des fonctionnalités en différents microservices facilite leur déploiement, leur mise à jour et leur mise à l'échelle de manière indépendante.
Cela permet également à différentes équipes de travailler simultanément sur une petite partie d'une grosse application sans avoir d'impact négatif par inadvertance sur le reste de l'application.
Bien qu'une architecture en microservices résolve de nombreux problèmes, elle crée également des surcouts opérationnels - le nombre d'éléments que vous devez déployer et gérer augmente considérablement. 
De nombreuses [technologies Cloud Native](/cloud-native-tech/) visent à faciliter le déploiement et la gestion des microservices.
