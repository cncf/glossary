---
title: Applications sans état (stateless apps)
status: Completed
category: Property
tags: ["fondamental", "application", "propriété"]
---

Une application sans état (stateless app) est une application qui ne conserve pas d'état localement entre les requêtes.
Dans ce contexte, l'état fait référence aux données issues d'interactions antérieures, telles que les informations de session utilisateur, les téléversements de fichiers en cours ou des calculs temporaires.
Au lieu de stocker ces données en mémoire locale ou sur le disque local, chaque requête contient toutes les informations nécessaires à son traitement, ou l'application récupère les données persistantes auprès d'un système externe partagé, tel qu'une base de données, un stockage objet ou un cache distribué.

Comme aucune donnée spécifique au client n'est conservée au sein d'une instance d'application (une copie en cours d'exécution de l'application ou du service), chaque requête entrante peut être traitée indépendamment par n'importe quelle instance disponible.
Cela contraste avec les [applications avec état](/fr/stateful-apps/), qui dépendent des données sauvegardées localement lors des requêtes précédentes pour fonctionner correctement.

## Problème auquel il répond

Lorsque les applications stockent des données de session utilisateur ou l'historique des transactions dans la mémoire ou sur le disque local d'une instance spécifique, toutes les requêtes suivantes de cet utilisateur doivent être redirigées vers cette même instance.
Ce couplage fort engendre des difficultés opérationnelles majeures dans les environnements modernes.

Si cette instance spécifique tombe en panne, redémarre lors d'une opération de maintenance de routine ou subit une défaillance matérielle, l'état conservé en son sein est perdu, ce qui perturbe l'expérience utilisateur.
Le routage du trafic devient également complexe, car un répartiteur de charge doit s'assurer que les requêtes soient systématiquement envoyées au même serveur.
De plus, face aux variations de la demande des utilisateurs, la mise à l'échelle du système ou le remplacement de serveurs défaillants s'avère risqué et lent lorsque la charge de travail ne peut pas être librement répartie entre les différentes instances.

## Quelle en est l'utilité

Les applications sans état découplent le traitement des requêtes du stockage persistant, rendant les instances d'application interchangeables.
Puisque n'importe quelle copie en cours d'exécution peut traiter n'importe quelle requête entrante, les systèmes peuvent aisément distribuer le trafic entre plusieurs instances à l'aide d'un répartiteur de charge.

Cette architecture permet une [mise à l'échelle horizontale](/fr/horizontal-scaling/) transparente, permettant aux équipes ou aux orchestrateurs automatisés d'ajouter ou de supprimer des instances à la demande selon les fluctuations du trafic, sans se soucier des sessions utilisateurs actives.
Lorsqu'une instance rencontre un dysfonctionnement ou tombe en panne, le trafic est immédiatement redirigé vers les copies saines restantes sans perte de données persistantes.
Les instances défaillantes peuvent être redémarrées ou remplacées en toute sécurité sans impacter les utilisateurs finaux.
Enfin, les déploiements d'applications deviennent plus simples et moins risqués : les nouvelles versions peuvent être déployées progressivement en remplaçant les anciennes instances par les nouvelles les unes après les autres, sans nécessiter de migration complexe de l'état des sessions entre les serveurs.
