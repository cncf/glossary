---
title: Pod
status: Completed
category: concept
tags: ["infrastructure", "fondamental", ""]
---

Dans un environnement [Kubernetes](/fr/kubernetes/), le pod est l'unité déployable la plus basique.
Il représente un bloc de construction essentiel pour le déploiement et la gestion d'applications conteneurisées.
Chaque pod contient une seule instance d'application et peut être constitué d'un ou plusieurs [conteneurs](/fr/container/).
Kubernetes gère les pods dans le cadre d'un déploiement plus large et peut mettre à l'échelle les pods [verticalement](/fr/vertical-scaling/) ou [horizontalement](/fr/horizontal-scaling/) selon les besoins.

## Problème auquel il répond

Si les conteneurs agissent généralement comme des unités indépendantes qui exécutent et contrôlent une charge de travail particulière, il existe des cas où des conteneurs doivent interagir et être contrôlés de manière étroitement couplée.

Si chacun de ces conteneurs étroitement liés était géré individuellement, il en résulterait des tâches de gestion superflues.
Par exemple, l'opérateur devrait continuellement déterminer l'emplacement des conteneurs liés pour s'assurer qu'ils restent ensemble.
Et bien que les cycles de vie de ces conteneurs liés doivent être synchronisés, ils ne peuvent être gérés qu'individuellement.

## Quel en est l'utilité

Les pods regroupent des conteneurs étroitement liés en une seule unité, ce qui simplifie considérablement la gestion des conteneurs.
Par exemple, des conteneurs auxiliaires sont souvent utilisés parallèlement au conteneur principal pour ajouter des fonctionnalités supplémentaires ou pour mettre en place des configurations globales.
Il s'agit par exemple de conteneurs qui injectent et appliquent des paramètres de base au conteneur principal,
des conteneurs side-car qui gèrent le routage du trafic réseau pour le conteneur principal (voir [maillage de services](/fr/service-mesh/)),
ou des conteneurs qui collectent des logs en conjonction avec chaque conteneur.

L'allocation de la mémoire et du CPU peut être définie soit au niveau d'un pod, permettant aux conteneurs à l'intérieur de partager les ressources d'une manière flexible, soit par conteneur.
