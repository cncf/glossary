---
Title: Serverless
Status: Completed
Category: Technology
tags: ["architecture", "", ""]
---

L'informatique serverless, que l'on pourrait traduire littéralement "sans serveur", [abstrait](/fr/abstraction/) les serveurs pour l'utilisateur.
La gestion opérationnelle incombe au fournisseur de services, y compris la gestion des machines physiques et le provisionnement des machines virtuelles.
Les fournisseurs de services peuvent être des fournisseurs de cloud public ou des équipes informatiques internes au service de leurs équipes de développement.
Ces fournisseurs proposent des interfaces utilisateur telles que des SDK (Software Development Kit — Kit de Développement Logiciel), des CLI (Command Line Interface — interface en ligne de commande) ou des runtimes conformes à l'OCI, en se concentrant les tâches de développement et de déploiement.
La facturation est basée sur un modèle de paiement à l'utilisation.
[La mise à l'échelle](/fr/scalability/) et les ressources allouées pour le calcul, le stockage ou le réseau sont automatiquement ajustées en fonction des besoins de l'application, sans intervention de l'utilisateur.
Un fournisseur de plateforme serverless consolide les ressources pour servir plusieurs utilisateurs sur une seule machine physique, en garantissant l'isolation par la virtualisation, en particulier grâce à des [VM](/fr/virtual-machine).

Le terme « serverless » est un terme général qui englobe les services dotés de ces attributs et qui s'étend de Platform-as-a-Service (PaaS) à Software-as-a-Service (SaaS)

## Problème auquel il répond

Dans le cadre d'un modèle standard d'[infrastructure en tant que service (IaaS)](/fr/infrastructure-as-a-service/) [cloud computing](/fr/cloud-computing/), les utilisateurs achètent à l'avance des unités de capacité,
ce qui signifie que vous payez un fournisseur de cloud public pour des serveurs toujours actifs afin d'exécuter vos applications.
Il incombe à l'utilisateur d'augmenter la capacité des serveurs en cas de forte demande et de la réduire lorsque cette capacité n'est plus nécessaire.
L'infrastructure cloud nécessaire au fonctionnement d'une application reste active même lorsque l'application n'est pas utilisée.

## Quelle en est l'utilité

Contrairement aux approches traditionnelles, l'architecture serverless ne lance les applications que lorsqu'elles sont nécessaires.
Lorsqu'un événement déclenche l'exécution du code de l'application, le fournisseur de cloud public alloue dynamiquement des ressources à ce code.
L'utilisateur cesse de payer lorsque le code a fini de s'exécuter.
Outre les avantages en termes de coûts et d'efficacité,
le serverless libère les développeurs des tâches routinières et pénibles associées à la mise à l'échelle des applications et à la mise à disposition des serveurs.
Avec le serverless, les tâches de routine telles que la gestion du système d'exploitation et du système de fichiers, les correctifs de sécurité,
l'équilibrage de charge, la gestion de la capacité, la mise à l'échelle, la journalisation et la supervision sont toutes transférées à un fournisseur de services cloud.
