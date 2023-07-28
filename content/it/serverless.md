---
Title: Serverless
Status: Completed
Category: Tecnologia
tags: ["architettura", "", ""]
---

## Cos'è

Il serverless è un modello di sviluppo cloud native che permette
di costruire ed eseguire applicazioni senza la necessità di gestire i server.
I server sono comunque presenti nel serverless, ma sono [astratti](/it/abstraction/) dallo sviluppo dell'applicazione.
Un cloud provider gestisce regolarmente il provisioning, la manutenzione e la [scalabilità](/it/scalability/) dell'infrastruttura server.
I team di sviluppo possono semplicemente impacchettare codice in[container](/it/container/) per la distribuzione.
Una volta distribuite, le applicazioni serverless rispondono alla domanda e [scalano automaticamente](/it/vertical-scaling/) in base alle necessità.
Le offerte serverless proposte dai fornitori di cloud pubblico sono generalmente misurate on-demand attraverso un modello di esecuzione basato sugli eventi.
Di conseguenza, quando una funzione serverless non è in esecuzione, non ha costi.

## Quali problematiche affronta

In un modello standard di [cloud computing](/it/cloud-computing/) di tipo [Infrastructure-as-a-Service (IaaS)](/it/infrastructure-as-a-service/),
gli utenti acquistano in anticipo unità di capacità, ovvero pagano un fornitore di cloud pubblico per avere componenti server sempre attivi che mantengano in esecuzione le applicazioni.
È compito dell'utente scalare verso l'alto la capacity del server nei momenti di traffico elevato
e di scalarla verso il basso quando non è più necessaria.
L'infrastruttura cloud necessaria per eseguire l'applicazione rimane attiva anche quando l'applicazione non viene utilizzata.

## In che modo aiuta

Con un'architettura serverless, invece, le applicazioni vegnono avviate soltanto quando serve.
Quando un evento attiva l'esecuzione del codice dell'applicazione, il fornitore di cloud pubblico alloca delle risorse per quel codice in modo dinamico.
L'utente smette di pagare nel momento in cui il codice finisce di essere eseguito.
Oltre ai benefici legati al costo e all'efficienza,
il serverless libera gli sviluppatori dalle attività ripetitive e secondarie legate alla scalabilità dell'applicazione e al provisioning del server.
Grazie al serverless, attività ripetitive come la gestione del sistema operativo e dei file di sistema, le patch di sicurezza,
il bilanciamento, la gestione della capacità, la scalabilità, il logging e il monitoraggio vengono tutte demandate al fornitore di servizi cloud.
