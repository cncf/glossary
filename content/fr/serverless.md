---
Title: Serverless
Status: Completed
Category: Technology
tags: ["architecture", "", ""]
---

Le serverless, que l'on  pourrait traduire littéralement par "sans serveur", est un modèle de développement Cloud Native qui permet aux développeurs de construire et d'exécuter des applications sans avoir à gérer de serveurs.
Bien que les serveurs existent toujours dans le paradigme serverless, ils sont [abstraits](/fr/abstraction/) du processus de développement de l'application.
Un fournisseur de cloud s'occupe du travail routinier de mise à disposition, de maintenance et de [mise à l'échèle](/fr/scalability/) de l'infrastructure.
Les développeurs peuvent facilement empaqueter leur code dans des [conteneurs](/fr/container/) pour le déployer.
Une fois déployées, les applications serverless répondent à la demande et se mettent à l'échelle automatiquement.
Les offres serverless des fournisseurs de cloud public sont généralement jaugés à l'utilisation au travers d'un modèle d'exécution basé sur des événements.
Par conséquent, lorsqu'une fonction serverless est inutilisée, il n'y a pas de coûts associés.

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
