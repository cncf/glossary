---
title: Proxy de service
status: Completed
category: technology
tags: ["réseau", "", ""]
---

Un proxy de service intercepte le trafic vers ou depuis un [service](/fr/service/) donné,
lui applique une certaine logique, puis transmet ce trafic à un autre service.
Il agit essentiellement comme un "intermédiaire" qui collecte des informations sur le trafic réseau et/ou lui applique des règles.

## Problème auquel il répond

Pour suivre la communication de service à service (c'est-à-dire le trafic réseau) et
potentiellement la transformer ou la rediriger, nous devons collecter des données.
Traditionnellement, le code permettant la collecte de données et la gestion du trafic réseau étaient intégrés à chaque application.

## Quelle en est l'utilité

Un proxy de service nous permet "d’externaliser" cette fonctionnalité.
Il n'est plus nécessaire qu'elle réside à l'intérieur des applications.
Au lieu de cela, elle est désormais intégrée à la couche plateforme (où vos applications s’exécutent).

Agissant comme des gardiens entre les services, les proxys donnent un aperçu du type de communication en cours.
En fonction de leur observations, ils déterminent où envoyer une demande particulière ou même la refusent complètement.

Les proxys collectent des données critiques, gèrent le routage (en répartissant le trafic uniformément entre les services ou en le déroutant en cas de panne de certains services),
chiffrent les connexions et mettent en cache le contenu (réduisant la consommation de ressources).
