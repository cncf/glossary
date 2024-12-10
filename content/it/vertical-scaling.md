---
title: Scalabilità verticale
status: Completed
category: Concetto
tags: ["infrastruttura", "", ""]
---

## Cos'è

La scalabilità verticale, è una tecnica in cui la capacita del sistema 
viene aumentata aggiungendo CPU e memoria sui singoli [nodes](/it/nodes/) quando il carico di lavoro aumenta. 
Ad esempio, nel caso in cui ci sia un computer con 4GB RAM e si voglia incrementare la sua capacità a 16GB RAM, 
Scalabilità verticale significa portare a 16GB RAM la memoria del sistema. 
(Si prega di fare riferimento a [horizontal scaling](/it/horizontal-scaling/) per una differente modalità di scalabilità.)

## Quali problematiche affronta

Quando la domanda di risorse per un'applicazione cresce oltre la capacità attuale di quell'istanza dell'applicazione, 
bisogna trovare un modo per rendere scalabile il sistema, cioè aggiungere capacità. 
Si possono aggiungere più risorse di calcolo ai nodi esistenti (scalabilità verticale) 
o più nodi al sistema ([horizontal scaling](/it/horizontal-scaling/)). 
La scalabilità contribuisce alla competitività, all'efficienza, alla reputazione ed alla qualità.


## In che modo aiuta

La scalabilità verticale consente di ridimensionare il server senza modificare il codice dell'applicazione. 
Questa tecnica contrasta con la scalabilità orizzontale, in cui l'applicazione deve essere replicabile per scalare, potenzialmente richiedendo aggiornamenti del codice. 
La scalabilità verticale aumenta la capacità di un'applicazione esistente aggiungendo risorse di calcolo, 
consentendo all'app di elaborare più richieste ed eseguire più attività contemporaneamente.


## Termini Collegati

* [Horizontal Scaling](/it/horizontal-scaling/)
* [Auto Scaling](/it/auto-scaling/)
