---
Title: Serverless
Status: Completed
Category: Technology
tags: ["architecture", "", ""]
---

L'informatique serverless, que l'on pourrait traduire littéralement "sans serveur", [abstrait](/fr/abstraction/) les serveurs du point de vue de l'utilisateur.
La gestion opérationnelle incombe au fournisseur de services, y compris la gestion des machines physiques et le provisionnement des machines virtuelles.
Les fournisseurs de services peuvent être des fournisseurs de cloud public ou des équipes informatiques internes au service de leurs équipes de développement.
Ces fournisseurs proposent des interfaces utilisateur telles que des SDK (Software Development Kit — Kit de Développement Logiciel), des CLI (Command Line Interface — interface en ligne de commande) ou des [runtimes](/fr/runtime/) conformes à l'OCI, en se concentrant les tâches de développement et de déploiement.
La facturation est basée sur un modèle de paiement à l'utilisation.
[La mise à l'échelle](/fr/scalability/) et les ressources allouées pour le calcul, le stockage ou le réseau sont automatiquement ajustées en fonction des besoins de l'application, sans intervention de l'utilisateur.
Un fournisseur de plateforme serverless consolide les ressources pour servir plusieurs utilisateurs sur une seule machine physique, en garantissant l'isolation par la virtualisation, en particulier grâce à des [VM](/fr/virtual-machine/).

Le terme "serverless" est un terme général qui englobe les services dotés de ces attributs et qui s'étend de Platform-as-a-Service (PaaS) à Software-as-a-Service (SaaS)

## Problème auquel il répond

Dans le cadre d'un modèle standard de [cloud computing](/fr/cloud-computing/) en [infrastructure en tant que service (IaaS)](/fr/infrastructure-as-a-service/), les utilisateurs s'engagent sur une capacité prédéfinie,
ce qui entraîne des frais pour la disponibilité continue du serveur, indépendamment de son utilisation réelle.
La responsabilité d'ajuster la capacité de traitement du serveur pour répondre à la demande fluctuantes incombe à l'utilisateur, ce qui maintient l'infrastructure active même pendant les périodes d'inactivité.

## Quelle en est l'utilité

L'architecture serverless permet une approche plus efficace, en activant les services uniquement à la demande.
Ce modèle garantit une allocation dynamique des ressources par un fournisseur de cloud, éliminant ainsi les coûts liés aux services inutilisés.
Outre des gains d'efficacité financière et opérationnelle,
la technologie serverless soulage les développeurs des charges liées à la mise à l'échelle des applications et à la gestion de l'infrastructure des serveurs.
Des tâches telles que la maintenance du système d'exploitation, les mises à jour de sécurité, l'équilibrage de la charge, la planification de la capacité et la supervision sont déléguées au fournisseur de cloud, ce qui rationalise le processus de développement.

Pour plus d'informations, voir l'entrée du glossaire [Fonction en tant que Service (FaaS)](/fr/function-as-a-service/).
Bien que les termes "serverless" et "FaaS" soient souvent utilisés comme des termes interchangeables, ils correspondent à des concepts distincts.
