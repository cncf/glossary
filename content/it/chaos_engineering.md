---
title: Chaos Engineering
status: Completed
category: Concetto
---

## Cos'è
_Chaos Engineering_ or CE è la disciplina che consiste nello sperimentare su un [sistema distribuito](/it/distributed_systems/) in produzione per creare confidenza nella capacità del sistema di tollerare condizioni turbolente e inaspettate.

## Quali problematiche affronta
Le pratiche [SRE](/it/site_reliability_engineering/) e [DevOps](/it/devops/) si concentrano sulle tecniche per aumentare la resilienza e l'[affidabilità](/it/reliability/) dei prodotti digitali. La capacità di un sistema di tollerare i guasti, garantendo al contempo un'adeguata qualità del servizio, è tipicamente un requisito dello sviluppo del software. Sono diversi gli aspetti che possono portare ad anomalie di un'applicazione, come l'infrastruttura, la piattaforma o altre parti dinamiche di un'applicazione basata su ([microservizi](/it/microservices/)). L'alta frequenza di distribuzione di nuove funzionalità in ambiente di produzione può provocare un'altrettanto alta possibilità di tempi di inattività e di incidenti critici, con conseguenze considerevoli per l'azienda.

## In che modo aiuta
_Chaos Engineering_ è una tecnica per soddisfare i requisiti di resilienza. Viene utilizzata per raggiungere la resilienza contro i disservizi di infrastrutture, piattaforme e applicazioni. I Chaos Engineers utilizzano esperimenti di caos per iniettare in modo proattivo errori casuali per verificare che un'applicazione, un'infrastruttura o una piattaforma siano in grado di auto-ripararsi e che l'errore non possa avere un impatto significativo sui clienti. Gli esperimenti del caos mirano a scoprire i punti nascosti (ad esempio, le tecniche di monitoraggio o di autoscaling) e a migliorare le comunicazioni tra i team durante gli incidenti critici. Questo approccio contribuisce ad aumentare notevolmenete la resilienza e la confidenza del team ai sistemi complessi, in particolare quello di produzione.
