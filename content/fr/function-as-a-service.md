---
title: Fonction en tant que Service (FaaS)
status: Completed
category: Technology
tags: ["infrastructure", "", ""]
---

Une Fonction en tant que Service, ou Function as a Service (FaaS) en anglais, est un modèle de [cloud computing](/fr/cloud-computing/) qui fournit une plateforme pour l'exécution de fonctions déclenchées par des événements, ce qui permet une mise à l'échelle automatique sans intervention manuelle.
Par essence, le FaaS permet de déployer des fonctions individuelles qui sont activées par des événements spécifiques, fonctionnent à court terme, puis s'arrêtent, ce qui permet de ne pas gaspiller de ressources.
Ce modèle prend en charge la [mise à l'échelle automatique]](/fr/auto-scaling/), permettant à une instance de fonction d'être lancée à la demande et terminée après exécution, ce qui souligne sa nature [sans état]](/fr/stateless-apps/) (stateless).
Par conséquent, les plateformes FaaS peuvent mettre en œuvre une véritable approche de facturation "à la demande", éliminant les coûts lorsque les fonctions sont dormantes, ce qui les distingue d'autres modèles tels que Platform as a Service (PaaS) qui requièrent une disponibilité continue des ressources.

## Problème auquel il répond

Traditionnellement, les entreprises s'appuient sur l'exploitation de [centres de données]](/fr/data-center/) sur site, ce qui nécessite des investissements substantiels en matériel, en logiciels et en personnel.
Cette configuration exige que les ressources soient adaptées à la demande maximale, ce qui entraîne une sous-utilisation des ressources lorsqu'il y a moins d'activité.
En outre, la croissance rapide de l'activité peut surcharger les capacités informatiques, ce qui entraîne des inefficacités opérationnelles.
En revanche, les modèles d'[Infrastructure en tant que Service (IaaS)](/fr/infrastructure-as-a-service/), tout en offrant des solutions basées sur le cloud, font toujours peser sur l'utilisateur la responsabilité de la mise à l'échelle des ressources, en exigeant un paiement pour la disponibilité continue du serveur, indépendamment de l'utilisation réelle.

## Quelle en est l'utilité

Le FaaS offre aux développeurs une [abstraction](/fr/abstraction/) pour exécuter des applications web en réponse à des événements, éliminant ainsi la nécessité de gérer l'infrastructure serveur.
Par exemple, une action telle que le téléchargement d'un fichier pourrait déclencher un code personnalisé qui transcoderait le fichier dans différents formats.
L'infrastructure FaaS ajuste automatiquement les ressources en fonction de la demande, libérant ainsi les développeurs de la complexité du développement pour la [mise à l'échelle] (/fr/scalability/).
Les frais s'appliquent uniquement pendant la durée d'exécution, ce qui garantit qu'aucun coût ne s'accumule lorsque les fonctions sont inactives.

Pour plus d'informations, consultez l'entrée du glossaire [Serverless](/fr/serverless/).
Bien que les termes "serverless" et "FaaS" soient souvent utilisés comme des termes interchangeables, ils incarnent des concepts distincts.
