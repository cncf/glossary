---
title: Opérateur Kubernetes (Kubernetes Operator)
status: Completed
category: concept
tags: ["infrastructure"]
---

Un opérateur Kubernetes est un programme auxiliaire qui s'exécute dans un cluster Kubernetes et en étend les capacités sans modifier le code de Kubernetes lui-même.
Il permet d'automatiser l'installation et la gestion d'applications et de ressources complexes.

## Problème auquel il répond

Lorsque l'on veut exécuter une application complexe [avec état](/fr/stateful-apps/), comme un cluster de bases de données, il faut prendre en charge de nombreuses tâches opérationnelles pour qu'elle continue de fonctionner.
C'est particulièrement vrai pour des propriétés comme la haute disponibilité et l'absence de temps d'arrêt.
Comment le cluster se comporte-t-il en cas de mise à jour ou de panne ?
Comment augmenter ou réduire sa capacité en toute sécurité ?
Ces questions sont très spécifiques au type de technologie, car tous les clusters de bases de données, par exemple, ne se comportent pas de la même façon lors d'une mise à l'échelle ou d'une panne.
C'est pourquoi Kubernetes ne peut pas gérer ces scénarios de manière générique.
Par ailleurs, ce savoir-faire est généralement détenu et mis en œuvre par un administrateur humain, aussi appelé opérateur.
Mais dans le monde Cloud Native, fortement automatisé, on ne peut pas toujours se permettre de dépendre des interventions manuelles d'une personne pour réaliser ces opérations critiques.

## Quelle en est l'utilité

L'opérateur Kubernetes est, au fond, une abstraction, un modèle, qui permet de créer des ressources utiles pour traiter les problèmes décrits ci-dessus.
En général, les opérateurs existants fournissent un ensemble de nouvelles ressources, appelées CRD (Custom Resource Definition), ainsi que des composants chargés de faire en sorte que l'état réel du cluster corresponde en permanence à l'état souhaité.
Prenons l'exemple d'un opérateur de cluster de bases de données : ces composants savent exactement comment agrandir ou réduire ce cluster, et que faire en cas de panne, etc.
Ainsi, il n'est pas nécessaire de maîtriser cette technologie pour l'utiliser dans un cluster Kubernetes et profiter de ses fonctionnalités spécifiques, comme la mise à l'échelle.

## Termes liés

* [Applications sans état (stateless apps)](/fr/stateless-apps/)
* [Applications avec état (stateful apps)](/fr/stateful-apps/)
* [Cluster](/fr/cluster/)
