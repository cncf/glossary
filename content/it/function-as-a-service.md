---
title: Function as a Service (FaaS)
status: Completed
category: Tecnologia
tags: ["infrastruttura", "", ""]
---

## Cos'è

Function as a Service (FaaS) è un tipo di [servizio](/it/service/) di [cloud computing](/it/cloud-computing/) [serverless](/it/serverless/) 
che consente l'esecuzione di codice in risposta agli eventi senza mantenere la complessa infrastruttura
tipicamente associata alla creazione e all'avvio di applicazioni a [microservizi](/it/microservices/).
Con FaaS, gli utenti gestiscono solo funzioni e dati mentre il provider cloud gestisce l'applicazione.
Ciò consente agli sviluppatori di ottenere le funzioni di cui hanno bisogno senza pagare per i servizi quando il codice non è in esecuzione.
 

## Quale problema affronta

In uno scenario tradizionale on-premise, un'azienda gestisce e mantiene il proprio data center.
L'azienda deve investire in server, storage, software e altre tecnologie
e potenzialmente assumere uno staff IT o dei consulenti per l'acquisto, la gestione e l'aggiornamento di tutte le apparecchiature e le licenze.
Il data center deve essere costruito per soddisfare i picchi di domanda, anche quando i carichi di lavoro diminuiscono e quelle risorse restano inattive.
Viceversa, se l'azienda cresce rapidamente, il reparto IT potrebbe avere difficoltà a tenere il passo.
In base a un modello di cloud computing standard [Infrastructure-as-a-Service (IaaS)](/it/infrastructure-as-a-service/),
gli utenti preacquistano unità di capacità, il che significa pagare un provider di cloud pubblico per componenti server sempre attivi su cui eseguire le proprie app.
È responsabilità dell'utente aumentare la capacità del server durante i periodi di forte domanda
e ridimensionare quando tale capacità non è più necessaria.
Insomma, l'infrastruttura cloud necessaria per eseguire un'app rimane attiva anche quando l'app non viene utilizzata.


## In che modo aiuta

FaaS offre agli sviluppatori un'[astrazione](/it/abstraction/) per l'esecuzione di applicazioni Web in risposta a eventi senza gestire i server.
Ad esempio, il caricamento di un file potrebbe attivare un codice personalizzato che transcodifica il file in vari formati.
L'infrastruttura FaaS ridimensionerà automaticamente il codice per un uso intenso,
e lo sviluppatore non dovrà dedicare tempo o risorse alla creazione del codice per garantirne la [scalabilità](/it/scalability/).
La fatturazione si basa solo sul tempo di calcolo, il che significa che le aziende non devono pagare quando le funzioni non sono in uso.
