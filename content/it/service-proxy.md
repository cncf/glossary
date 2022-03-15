---
title: Servizio Proxy
status: Completed
category: Tecnologia
---

## Cos'è
Un proxy di servizio intercetta il traffico da o verso un determinato [servizio](/it/servizio/), applica una logica ad esso, quindi inoltra quel traffico a un altro servizio. Agisce essenzialmente come un "intermediario" che raccoglie informazioni sul traffico di rete e/o applica regole ad esso.

## Quale problema affronta 
Per tenere traccia della comunicazione da servizio a servizio (nota anche come traffico di rete) e potenzialmente trasformarla o reindirizzarla, dobbiamo raccogliere dati. Tradizionalmente, il codice che consente la raccolta dei dati e la gestione del traffico di rete veniva incorporato in ciascuna applicazione.

## In che modo aiuta
Un proxy di servizio ci consente di "esternalizzare" questa funzionalità. Non è più necessario che sia all'interno delle app. Invece, ora è incorporato nel livello della piattaforma (dove vengono eseguite le tue app).

Agendo come custodi tra i servizi, i proxy forniscono informazioni sul tipo di comunicazione in corso. Sulla base della loro intuizione, determinano dove inviare una richiesta particolare o addirittura negarla del tutto.

I proxy raccolgono dati critici, gestiscono il routing (distribuendo uniformemente il traffico tra i servizi o reindirizzando se alcuni servizi si interrompono), crittografano le connessioni e memorizzano nella cache il contenuto (riducendo il consumo di risorse).