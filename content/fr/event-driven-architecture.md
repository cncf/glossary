---
title: Architecture orientée événements (Event-Driven Architecture)
status: Completed
category: concept
tags: ["architecture", "", ""]
---

L'architecture orientée événements (Event-Driven Architecture) est une architecture logicielle qui favorise la création, le traitement et la consommation d'événements. 
Un événement est un changement d'état d'une application. 
Par exemple, héler un véhicule au travers d'une application de covoiturage représente un événement.
Cette architecture crée la structure dans laquelle les événements peuvent être correctement acheminés depuis leur source (l'application demandant un trajet) vers les destinataires souhaités (les applications des conducteurs disponibles à proximité).

## Problème auquel il répond

À mesure que davantage de données sont mises à jour en temps réel, il devient de plus en plus complexe de trouver des moyens fiables pour garantir que les événements sont capturés et acheminés vers le [service](/fr/service/) approprié qui doit traiter ces demandes.
Les méthodes traditionnelles de gestion des événements n'offrent souvent aucune garantie que les messages sont correctement acheminés ou qu'ils ont effectivement été envoyés ou reçus. 
Lors de la mise à l'échelle des applications, il devient plus difficile d'orchestrer les événements.

## Quelle en est l'utilité

Les architectures orientées événements établissent un hub central pour tous les événements (par exemple, Kafka). 
Vous définissez ensuite les producteurs d'événements (la source) et les consommateurs (le récepteur), et le hub central des événements garantit le flux des événements. 
Cette architecture garantit que les services restent découplés et que les événements sont correctement acheminés du producteur au consommateur. 
Le producteur prendra l'événement entrant, généralement via le protocole HTTP, puis acheminera les informations de l'événement.
