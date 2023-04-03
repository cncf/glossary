---
title: Chaos Engineering
status: Completed
category: Concetto
---

## Cos'è
Con _Chaos Engineering_ (CE) si intende la disciplina che consiste nel condurre esperimenti su un [sistema distribuito](/it/distributed_systems/) nell'ambiente di produzione, per creare confidenza nella capacità del sistema di tollerare condizioni turbolente e inaspettate.

## Quali problematiche affronta
Le pratiche [SRE](/it/site_reliability_engineering/) e [DevOps](/it/devops/) si concentrano sulle tecniche per aumentare la resilienza e l'[affidabilità](/it/reliability/) dei prodotti digitali. La capacità di un sistema di tollerare i guasti, garantendo al contempo un'adeguata qualità del servizio, è tipicamente un requisito dello sviluppo del software. Sono diversi gli aspetti che possono portare ad anomalie di un'applicazione, come l'infrastruttura, la piattaforma o altre parti dinamiche di un'applicazione basata su ([microservizi](/it/microservices/)). L'elevata frequenza di aggiunta di nuove funzionalità in ambiente di produzione comporta un alto rischio di disservizio e di incidenti critici, con conseguenze considerevoli per l'azienda.

## In che modo aiuta
Il Chaos Engineering è una tecnica per soddisfare i requisiti di resilienza. Viene utilizzata per realizzare la resilienza contro i disservizi di infrastrutture, piattaforme e applicazioni. I Chaos Engineers utilizzano esperimenti di caos per iniettare in modo proattivo errori casuali; quindi verificano che un'applicazione, un'infrastruttura o una piattaforma siano in grado di auto-ripararsi e che l'errore non possa avere un impatto significativo sui clienti. Gli esperimenti di caos mirano a scoprire i punti nascosti (ad esempio, le tecniche di monitoraggio o di [autoscaling]([it/autoscaling/)) e a migliorare le comunicazioni tra i team durante gli incidenti critici. Questo approccio contribuisce ad aumentare notevolmente la resilienza e la confidenza del team ai sistemi complessi, in particolare quello di produzione.
