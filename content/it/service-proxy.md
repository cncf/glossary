---
title: Service Proxy
status: Completed
category: tecnologia
tags: ["networking", "", ""]
---

## Cos'è

Un service proxy intercetta il traffico verso o proveniente da un determinato [servizio](/it/service/), 
vi applica delle logiche, e in seguito inoltra quel traffico a un altro servizio.
Essenzialmente si comporta come un intermediario che raccoglie informazioni riguardo il traffico di rete e/o applica delle regole su di esso.

## Quali problematiche affronta

Per tenere traccia delle comunicazioni tra servizi, ovvero di ciò che viene definito traffico di rete, e potenzialmente trasformarlo o reindirizzarlo, è evidentemente necessario raccogliere dati.
Tradizionalmente, il codice che abilitava la raccolta di dati e la gestione del traffico di rete era incorporato all'interno di ogni applicazione.

## In che modo aiuta

Un service proxy permette di "esternalizzare" questa funzionalità.
Quel codice non deve più necessariamente essere all'interno delle applicazioni,
ma diviene parte integrante della piattaforma, cioè dove l'applicazione è in esecuzione.

Fungendo da porta d'accesso ai servizi, i proxy forniscono informazioni riguardo a che tipo di comunicazione sta avvenendo.
Basandosi su queste informazioni, determinano dove inviare una particolare richiesta, o anche rigettarla del tutto.

I proxy raccolgono dati fondamentali, gestiscono il routing (distribuendo uniformemente il traffico tra i servizi o reindirizzandolo se qualche servizio si interrompe),
criptano le connessioni e salvano su cache il contenuto (riducendo il consumo di risorse).
