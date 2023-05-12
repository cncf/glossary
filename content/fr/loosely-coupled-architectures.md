---
title: Architecture Faiblement Couplée
status: Completed
category: Property
tags: ["fundamental", "architecture", "property"]
---

L'architecture faiblement couplée est un type d'architecture où les différents composants
d'une application sont construits indépendamment les uns des autres (c'est le paradigme opposé
des [architectures fortement couplées](/tightly-coupled-architectures/)).
Chaque composant, parfois identifié comme un [microservice](/microservices/), est construit pour effectuer une tâche spécifique d'une manière qui lui permet d'être utilisé par d'autres services.
Cette approche est souvent plus longue à mettre en œuvre que l'architecture fortement couplée
mais, elle a plusieurs avantages en particulier lorsque l'application change d'échelle.

Les applications faiblement couplées permettent aux équipes de développer des fonctionnalités, de les déployer et les mettre à l'échelle de manière indépendante, ce qui permet aux organisations d'itérer rapidement au sein des composants unitaires.
Le développement d'applications est plus rapide et les équipes se structurent autour de leurs compétences, en mettant l'accent sur leurs applications spécifiques.
