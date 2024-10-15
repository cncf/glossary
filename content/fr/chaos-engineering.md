---
title: Ingénierie du Chaos (Chaos Engineering)
status: Completed
category: concept
tags: ["méthodologie", "", ""]
---

L'ingénierie du chaos (Chaos Engineering ou CE en anglais) est la discipline qui consiste à éprouver un [système distribué](/fr/distributed-systems/) en production
afin de renforcer la confiance dans la capacité du système à résister à des conditions turbulentes et inattendues.

## Problème auquel il répond

Les pratiques [SRE](/fr/site-reliability-engineering/) et [DevOps](/fr/devops/) se concentrent sur
les techniques visant à accroître la résilience et la [fiabilité](/fr/reliability/) des produits.
La capacité d'un système à tolérer les défaillances tout en assurant une qualité de service adéquate est
généralement une exigence du développement logiciel.
Plusieurs aspects sont susceptibles d'entraîner des pannes d'une application,
comme l'infrastructure, la plateforme ou d'autres parties d'une application ([microservice](/fr/microservices-architecture/)).
Le déploiement très fréquent de nouvelles fonctionnalités dans l'environnement de production
peut entraîner une forte probabilité d'indisponibilité et d'incident critique
— avec des conséquences considérables pour l'entreprise.

## Quelle en est l'utilité

L'ingénierie du chaos est une technique permettant de répondre aux exigences de résilience.
Elle est utilisée pour assurer la résilience contre les défaillances de l'infrastructure, de la plateforme et de l'application.
Les ingénieurs du chaos utilisent des tests de chaos afin d'injecter de manière proactive des défaillances aléatoires
pour vérifier qu'une application, une infrastructure ou une plateforme peut s'auto-réparer et que la défaillance n'a pas d'impact perceptible pour les utilisateurs.
Les expériences de chaos visent à découvrir les angles morts
(par exemple sur les techniques de supervision ou de mise à l'échelle automatique) et d'améliorer la communication entre les équipes lors d'incidents critiques.
Cette approche permet d'accroître la résilience et la confiance de l'équipe dans des systèmes complexes, en particulier de production.
