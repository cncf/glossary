---
title: Fonction en tant que Service (FaaS)
status: Completed
category: Technology
tags: ["infrastructure", "", ""]
---

Une Fonction en tant que Service, ou Function as a Service (FaaS) en anglais, est un type de [service](/fr/service/) de [cloud computing](/fr/cloud-computing/) [serverless](/fr/serverless/)
qui permet d'exécuter du code en réponse à des événements sans maintenir l'infrastructure complexe
généralement associée à la création et au lancement d'applications en [microservices](/fr/microservices-architecture/).
Avec le FaaS, les utilisateurs ne gèrent que les fonctions et les données, tandis que le fournisseur de services cloud gère l'application.
Cela permet aux développeurs d'obtenir les fonctions dont ils ont besoin sans avoir à payer pour des services lorsque le code n'est pas en cours d'exécution.  

## Problème auquel il répond

Dans un scénario traditionnel sur site, une entreprise gère et entretient son propre centre de données.
Elle doit investir dans des serveurs, des systèmes de stockage, des logiciels et d'autres technologies,
et éventuellement engager du personnel ou des sous-traitants pour acheter, gérer et mettre à jour l'ensemble du matériel et des licences.
Le centre de données doit être construit pour répondre aux pointes de consommation, même lorsque la charge de travail diminue par la suite et que les ressources deviennent inutilisées.
Inversement, si l'entreprise se développe rapidement, le service informatique peut avoir du mal à suivre.
Dans le cadre d'un modèle standard de [cloud computing](/fr/cloud-computing/) en [infrastructure en tant que service (IaaS)](/fr/infrastructure-as-a-service/), les utilisateurs achètent à l'avance des unités de capacité,
ce qui signifie que vous payez un fournisseur de cloud public pour des serveurs toujours actifs afin d'exécuter vos applications.
Il incombe à l'utilisateur d'augmenter la capacité des serveurs en cas de forte demande et de la réduire lorsque cette capacité n'est plus nécessaire.
L'infrastructure cloud nécessaire au fonctionnement d'une application reste active même lorsque l'application n'est pas utilisée.

## Quelle en est l'utilité

Le FaaS offre aux développeurs une [abstraction](/fr/abstraction/) permettant d'exécuter des applications web en réponse à des événements sans avoir à gérer de serveurs.
Par exemple, le téléchargement d'un fichier peut déclencher un code personnalisé qui transcode le fichier dans différents formats.
L'infrastructure FaaS dimensionnera automatiquement le code en cas d'utilisation intensive,
et le développeur n'a pas besoin de consacrer du temps ou des ressources à l'élaboration du code pour la [capacité de mise à l'échelle](/fr/scalability/).
La facturation est basée uniquement sur le temps de calcul, ce qui signifie que les organisations n'ont pas à payer lorsque les fonctions ne sont pas utilisées.
