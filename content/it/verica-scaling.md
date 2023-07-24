---
title: Scalabilità verticale
status: Completed
category: Concetto
tags: ["infrastruttura", "", ""]
---

## Cos'è

La scalabilità verticale, è una tecnica in cui la capacita del sistema 
viene aumentata aggiungendo CPU e memoria sui singoli [nodes](/it/nodes/) quando il carico di lavoro aumenta. 
Ad esempio, nel caso in cui abbiate un computer con 4GB RAM e vogliate incrementare la sua capacità a 16GB RAM, 
Scalabilità verticale significa portare a 16GB RAM la memoria del sistema. 
(Si prega di fare riferimento a [horizontal scaling](/horizontal-scaling/) per una differente modalità di scalabilità.)

## Quali problematiche affronta

Quando la domanda di risorse per un'applicazione cresce oltre la capacità attuale di quell'istanza dell'applicazione, 
dobbiamo trovare un modo per scalare (aggiungere capacità) al sistema. 
Possiamo aggiungere più risorse di calcolo ai nodi esistenti (scalabilità verticale) 
o più nodi al sistema ([horizontal scaling](/horizontal-scaling/)). 
La scalabilità contribuisce alla competitività, all'efficienza, alla reputazione ed alla qualità.


## In che modo aiuta

La scalabilità verticale ti consente di ridimensionare il tuo server senza modificare il codice dell'applicazione. 
Questo tecnica contrasta con la scalabilità orizzontale, in cui l'applicazione deve essere replicabile per scalare, potenzialmente richiedendo aggiornamenti del codice. 
La scalabilità verticale aumenta la capacità di un'applicazione esistente aggiungendo risorse di calcolo, 
consentendo all'app di elaborare più richieste e fare più lavoro contemporaneamente.


## Termini Collegati

* [Horizontal Scaling](/horizontal-scaling/)
* [Auto Scaling](/auto-scaling/)
