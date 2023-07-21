---
Title: Serverless
Status: Completed
Category: Tecnologia
tags: ["architettura", "", ""]
---

## Cos'è

Il serverless è un modello di sviluppo cloud native che permette
di costruire ed eseguire applicazioni senza la necessità di gestire i server.
I server sono comunque presenti nel serverless, ma sono [astratti](/it/abstraction/) dallo sviluppo dell'app.
Un cloud provider gestisce regolarmente il provisioning, la manutenzione e la [scalabilità](/it/scalability/) dell'infrastruttura dei server.
I team di sviluppo possono semplicemente accorpare il loro codice all'interno di [container](/it/container/) per il deploy.
Una volta eseguito il deploy, le applicazioni serverless rispondono al traffico e possono essere automaticamente [scalate verticalmente](/it/vertical-scaling/) a seconda della necessità.
Le offerte serverless proposte dai fornitori di cloud pubblico sono generalmente misurate on-demand attraverso un modello di esecuzione ad eventi.
Di conseguenza, quando una funzione serverless non è in esecuzione, non ha costi.

## Quali problematiche affronta

In un modello standard di [cloud computing](/it/cloud-computing/) di tipo [Infrastructure-as-a-Service (IaaS)](/it/infrastructure-as-a-service/),
gli utenti acquistano in anticipo unità di capacity, nel senso che pagano un fornitore di cloud pubblico per componenti server sempre attivi che mantengano in esecuzione le applicazioni.
È compito dell'utente scalare verso l'alto la capacity del server nei momenti di traffico elevato
e di scalare verso il basso quella stessa capacity quando non è più necessaria.
L'infrastruttura cloud necessaria per eseguire l'applicazione rimane attiva anche quando l'applicazione non viene utilizzata.

## In che modo aiuta

Con un'architettura serverless, invece, le applicazioni vegnono avviate soltanto quando serve.
Quando un evento attiva l'esecuzione del codice dell'applicazione, il fornitore di cloud pubblico alloca delle risorse per quel codice in modo dinamico.
L'utente smette di pagare nel momento in cui il codice finisce di essere eseguito.
Oltre ai benefici legati al costo e all'efficienza,
il serverless libera gli sviluppatori dalle attività ripetitive e secondarie legate alla scalabilità dell'applicazione e al provisioning del server.
Grazie al serverless, attività ripetitive come la gestione del sistema operativo e dei file di sistema, le patch di sicurezza,
il load balancing, la gestione della capacity, la scalabilità, il logging e il monitoraggio vengono tutte demandate al fornitore di servizi cloud.
