---
title: Kubernetes
status: Completed
category: technology
tags: ["infrastructure", "fondamental", ""]
---

Kubernetes, souvent abrégé en k8s, est un orchestrateur de conteneurs open source.
Il automatise le cycle de vie des applications conteneurisées sur des infrastructures modernes, fonctionnant comme un "Système d'exploitation de centre de données" qui gère des applications à travers un [système distribué](/fr/distributed-systems/).

Kubernetes planifie la création de [conteneurs](/fr/container/) sur les [nœuds](/fr/nodes/) d'un [cluster](/fr/cluster/), regroupant plusieurs ressources d'infrastructure tel qu'un répartiteur de charge (load balancer), du stockage persistent, etc. pour exécuter des applications conteneurisées.

Kubernetes permet l'automatisation et l'extensibilité, permettant aux utilisateurs de déployer des applications de manière déclarative (voir ci-dessous) et reproductible.
Kubernetes est extensible via ses [API](/fr/application-programming-interface/), permettant aux utilisateurs expérimentés de Kubernetes de rajouter des possibilités d'automatisation en accord avec leurs besoins.

## Problème auquel il répond

L'automatisation de l'infrastructure et la gestion de configuration déclarative sont des concepts importants depuis longtemps, mais ils sont devenus omniprésents depuis que le [cloud computing](/fr/cloud-computing/) a gagné en popularité.
À mesure que la demande de ressources de calcul augmente et que les organisations ont besoin de plus de capacités avec moins d'ingénieurs, les nouvelles technologies et les méthodes de travail doivent répondre à cette demande.

## Quelle en est l'utilité

Comme pour les outils traditionnels d'[infrastructure en tant que code](/fr/infrastructure-as-code/), Kubernetes aide à l'automatisation, mais a l'avantage de fonctionner avec des conteneurs.
Les conteneurs sont plus résistants aux écarts de configuration que les [machines virtuelles](/fr/virtual-machine/) ou physiques.

De plus, Kubernetes fonctionne de manière déclarative, cela veut dire qu'au lieu que des opérateurs demandent à la machine de faire quelque chose, ils décrivent — souvent via un manifeste (p. ex., YAML) — à quoi l'infrastructure devrait ressembler.
Kubernetes s'occupe ensuite du "comment".
Il en résulte que Kubernetes est extrêmement compatible avec l'infrastructure en tant que code.

Kubernetes s'[auto-répare](/fr/self-healing/) également.
L'état actuel du cluster correspond toujours à l'état désiré par l'opérateur.
Si Kubernetes détecte une déviation par rapport à ce qui est décrit dans les fichiers manifestes, un contrôleur Kubernetes va s'en occuper et le corriger.
Bien que l'infrastructure utilisée par Kubernetes puisse être en constante évolution, Kubernetes s'adapte constamment et automatiquement aux changements et s'assure qu'elle correspond à l'état souhaité.

