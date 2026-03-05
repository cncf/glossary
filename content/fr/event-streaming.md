---
title: Diffusion d'événements en continu (Event Streaming)
status: Completed
category: concept
tags: ["méthodologie", "réseau", ""]
---

La diffusion d'événements en continu (Event Streaming) est une approche où un logiciel envoie des données d'événements d'une application à une autre pour communiquer en continu ce qu'elles font.
Imaginez un service diffusant tout ce qu'il fait à tous les autres services.
Chaque activité effectuée par un service est appelée un événement, d'où le terme de diffusion d'événements en continu.
Par exemple, le NASDAQ reçoit des mises à jour sur les prix des actions et des matières premières chaque seconde.
Si vous aviez une application surveillant un ensemble spécifique d'actions, vous voudriez recevoir ces informations en quasi-temps réel.
Yahoo! Finance fournit une [API](/fr/application-programming-interface/) qui récupère les données du NASDAQ et envoie (ou diffuse en continu) les informations (ou événements) de leur application à toute application qui s'y abonne.
Les données envoyées ainsi que les changements de ces données (prix des actions) sont les événements, tandis que le processus de les livrer à une application est la diffusion d'événements.

## Problème auquel il répond

Traditionnellement, Yahoo! Finance mettrait en œuvre des requêtes TCP individuelles.
Cela serait très inefficace car cela nécessiterait qu'une connexion soit créée pour chaque événement.
À mesure que les données deviennent de plus en plus temps réel, mettre à l'échelle une telle solution devient inefficace.
Ouvrir une seule connexion et permettre aux événements de circuler est idéal pour la collecte en temps réel.
La quantité de données générées augmente de manière exponentielle et, par conséquent, les changements de données sont extrêmement fréquents. Les développeurs et les utilisateurs doivent être en mesure de voir ces données en quasi-temps réel.

## Quelle en est l'utilité

La diffusion d'événements en continu permet de communiquer les changements de données de la source au destinataire.
Au lieu d'attendre que les services demandent des informations, le service de diffusion propage en continu tous ses événements (ou activités).
Il ne se préoccupe pas de ce qui arrive aux informations.
Il fait simplement ce qu'il doit faire et les diffuse, restant ainsi complètement indépendant de tout autre service.