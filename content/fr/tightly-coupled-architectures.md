---
title: Architectures Fortement Couplées
status: Completed
category: Property
tags: ["fondamental", "architecture", "propriété"]
---

L'architecture fortement couplée est un type d'architecture où un nombre de composants d'application sont interdépendants
(le paradigme opposé est les [architectures faiblement couplées](/fr/loosely-coupled-architecture/)).
Celà signifie qu'un changement dans un composant aura sûrement un impact sur les autres composants.
Souvent plus simples à mettre en oeuvre que les architectures faiblement couplées,
elles peuvent mettre un système à risque par rapport aux erreurs en cascade.
Elles ont également tendance à nécessiter des déploiements synchronisés des composants
ce qui peut devenir un frein à la productivité des développeurs.

Les architectures fortement couplées sont une manière assez traditionnelle de construction des applications.
Bien qu'elles ne soient pas nécessairement conformes avec les meilleures pratiques de développement de [microservices](/fr/microservices-architecture/)
elles peuvent être utiles dans des circonstances spécifiques.
Elles ont tendances à être plus rapides et plus simples à mettre en oeuvre et
à la manière des [applications monolithiques](/fr/monolithic-apps/) elles peuvent accélérer le cycle de développement initial.
