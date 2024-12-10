---
title: Autoscaling
status: Completed
category: Proprietà
tags: ["infrastruttura", "", ""]
---

Per *autoscaling* si intende la capacità di un sistema di essere [scalabile](/it/scalability/) automaticamente, tipicamente in termini di risorse di computazione. 
Con un sistema dotato di autoscaling, le risorse sono automaticamente aggiunte al bisogno, così che possano corrispondere alla portata delle richieste degli utenti in quel periodo. 
Il processo di autoscaling è variabile, ed è configurabile per modificare le risorse di un sistema in base a più metriche, come la memoria o il tempo di computazione.
I [managed service](/it/managed-service/) sono classicamente associati a funzionalità di autoscaling, dal momento che offrono più opzioni e implementazioni della maggior parte dei sistemi on-premise.

In passato le infrastrutture e le applicazioni erano pensate perché le loro architetture potessero soddisfare persino i picchi di utilizzo dei sistemi. Questo comportava l'impiego di molte risorse in maniera non elastica, cioè che non variavano accordandosi al numero di richieste degli utenti.
Questa mancanza di elasticità comportava maggiori costi di business e/o perdita di business in caso di disservizi dovuti a un sovraccarico di richieste.

Sfruttando il cloud, la [virtualizzazione](/it/virtualization/), e la [containerizzazione](/it/containerization/) delle applicazioni e delle rispettive dipendenze, 
le organizzazioni possono sviluppare applicazioni scalabili in relazione alla portata delle richieste degli utenti.
Possono inoltre monitorare l'utilizzo delle applicazioni e sfruttare la loro scalabilità, offrendo così un'esperienza ottimale all'utente. Si consideri ad esempio l'aumento dei fruitori che Netflix deve affrontare il venerdì sera. 
Con *Autoscaling out* si intende l'aggiunta dinamica di nuove risorse, come ad esempio: l'aumento del numero di server che permettano più streaming video concorrenti, server che potranno poi essere terminati una volta che il flusso si sarà normalizzato.

## Voci collegate

* [Scalabilità orizzontale](/it/horizontal-scaling/)
* [Scalabilità verticale](/it/vertical-scaling/)
