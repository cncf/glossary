---
title: Kubernetes
status: Completed
category: technology
tags: ["infrastructure", "fundamental", ""]
---

## Ce que c'est

Kubernetes, souvent abrégé en k8s, est un orchestrateur de conteneur open source.
Il automatise le cycle de vie des applications conteneurisées sur des infrastructures modernes, fonctionnant comme un "Système d'exploitation de centre de données" qui gères des applications à travers un [système distribué](/distributed-systems/).

Kubernetes planifie la création de [conteneurs](/container/) sur les [noeuds](/nodes/) d'un  [cluster](/cluster/), regroupant plusieurs ressources d'infrastructure tel qu'un répartiteur de charge (load balancer), du stockage persistent, etc. Pour exécuter des applications containerisées.

Kubernetes permets l'automatisation et l'extensibilitié, permettant aux utilisateurs de déployer des applications de manière déclarative (voir ci-dessosu) et reproductible.
Kubernetes est extensible via ses [API](/application-programming-interface/), permettant aux utilisateurs expérimentés de Kubernetes de rajouter des possibilités d'automatisation en accord avec leurs besoins.

## Problème auquel il répond

L'automatisation de l'infrastructure et la gestion de configuration déclarative sont des concepts importants depuis longtemps, mais ils sont devenus omniprésent depuis que le [cloud computing](/cloud-computing/) a gagné en popularité.
A mesure que la demande de ressources de calcul augmente et que les organisations ont besoin de plus de capacités avec moins d'ingénieurs, les nouvelles technologies et les méthodes de travaille doivent répondre à cette demande.

## Quel en est l'utilité

Comme pour les outils traditionnels d'[infrastructure en tant que code](/infrastructure-as-code/), Kubernetes aide à l'automatisation mais à l'avantage de fonctionnait avec des conteneurs.
Les conteneurs sont plus résistants aux écarts de configuration que les machines [virtuelles](/virtual-machine/) ou physique.

De plus, Kubernetes fonctionne de manière déclarative, cela veut dire qu'au lieu qu'un operator demande à la machine de faire quelque chose, ils décrivent - souvent via un manifeste (e.g., YAML) - à quoi l'infrastructure devrait ressembler.
Kubernetes s'occupe ensuite du "Comment".
Il en résulte que Kubernetes est extrêmement compatible avec l'infrastructure en tant que code.

Kubernetes s'[auto-guérit](/self-healing/) également.
L'état actuel du cluster correspond toujours à l'état désiré par l'opérateur.
Si kubernetes détecte une déviation par rapport à ce qui est décrit dans les fichiers manifests, un contrôleur Kubernetes va s'en occuper et le corriger.
Bien que l'infrastructure utilisée par Kubernetes puisse être en constante évolution, Kubernetes s'adapte constamment et automatiquement aux changements et s'assure qu'elle correspond à l'état souhaité.

