---
title: Ingress
status: Completed
category: technologie
tags: ["fondamental"]
---

Un Ingress, que nous pourrions traduire par "point d'entrée", est un ensemble de règles qui participe à gérer le trafic Internet depuis l'extérieur vers un conteneur ou un groupe de conteneurs s'exécutant dans un cluster.
Il se compose de deux éléments : la ressource Ingress et le contrôleur d'Ingress.
La ressource Ingress est un fichier de configuration qui coexiste avec les autres fichiers manifestes et permet aux administrateurs de configurer le routage du trafic externe.
Le contrôleur d'Ingress est le service qui, en utilisant des technologies web, assure le routage du trafic conformément à la configuration définie dans la ressource Ingress.

## Problème auquel il répond

Les applications web Cloud Native sont composées de plusieurs services, et souvent, ces [services](/fr/service/) doivent être accessibles depuis Internet pour que les utilisateurs puissent les joindre depuis leur navigateur.
Pour rendre ces services accessibles aux utilisateurs tout en utilisant [Kubernetes](/fr/kubernetes/) pour exécuter cette application, nous devons exposer chaque service applicatif au monde extérieur.
La manière la plus directe serait d'utiliser un service d'équilibrage de charge Kubernetes (Load Balancer).
La création d'un tel service ajoute un nouveau composant dans l'infrastructure sous-jacente.
Cela introduit non seulement de nouveaux coûts et une surcharge de gestion, mais chaque équilibreur de charge nouvellement créé a sa propre adresse IP externe.
Cela conduit à une mauvaise expérience utilisateur, car en tant qu'utilisateur, nous ne voulons pas naviguer sur différentes URL pour accéder à une application.

## Quelle en est l'utilité

Une ressource Ingress vous permet de configurer la façon dont le trafic est réparti et routé vers les services d'une application.
Le contrôleur d'Ingress expose un seul point d'entrée accessible via une URL (www.example-url.com) et effectue le routage et la répartition en fonction de différents chemins d'URL (www.example-url.com/chemin).
Un contrôleur d'Ingress est un composant qui s'exécute dans le cluster et interprète les règles définies dans la ressource Ingress.
Il appartient aux opérateurs de cluster où s'exécute l'application web de choisir un contrôleur d'Ingress spécifique parmi un ensemble de technologies possibles comme Nginx, Traefik, HAProxy, etc.
Ainsi, si une application est composée de plusieurs services, l'utilisateur peut y accéder à l'aide d'une seule URL.
Cela élimine le besoin de mettre en œuvre de nombreux équilibreurs de charge distincts au niveau de l'infrastructure et facilite la configuration des règles de pare-feu et de répartition de charge pour chaque service.
En centralisant le routage du trafic et les configurations, le contrôleur d'Ingress offre une mise à l'échelle rationalisée, optimise l'utilisation des ressources, réduit les coûts et améliore la gestion globale des applications s'exécutant dans un cluster.