---
title: Chaos Engineering
status: Completed
category: Concetto
tags: ["metodologia", "approccio", ""]
---

## Cos'è

Il _Chaos Engineering_ (Ingegneria del Caos) o CE è un approccio disciplinare secondo cui si sperimenta sotto stress un [sistema distribuito](/it/distributed-systems/) in produzione per consolidare la fiducia nella capacità del sistema di resistere a condizioni turbolente e impreviste (la sua affidabilità).

## Quali problematiche affronta

Le pratiche [SRE](it/site-reliability-engineering/) e [DevOps](it/devops/) si concentrano su tecniche volte ad aumentare la resilienza e l'[affidabilità](it/reliability/) del prodotto.
La capacità di un sistema di tollerare gli errori garantendo al tempo stesso un'adeguata qualità del servizio è tipicamente un requisito di sviluppo del software.

Diverse sono le ragioni che potrebbero portare a interruzioni di un'applicazione, come mancanze infrastrutturali, a livello di piattaforma o di altre parti mobili di un'applicazione basata su ([microservizi](it/microservices/).
La frequente distribuzione di nuove funzionalità nell'ambiente di produzione può comportare un'alta probabilità di tempi di inattività o di incidenti  critici — con notevoli conseguenze per il business.

## In che modo aiuta

La _Chaos Engineering_  è una tecnica per soddisfare i requisiti di resilienza contro i malfunzionamenti dell'infrastruttura, della piattaforma e dell'applicazione.

Gli ingegneri del caos sperimentano con il fine di iniettare in modo proattivo errori, bug e guasti casuali al fine di verificare che un'applicazione, un'infrastruttura o una piattaforma siano in grado di ripararsi in modo autonomo e che l'errore possa impattare marginalmente sul business.
Gli esperimenti sul caos mirano a scoprire punti ciechi (un esempio sono le tecniche di monitoraggio o scalabilità automatica) e a migliorare la comunicazione tra i team durante gli incidenti critici.
Questo approccio aiuta ad aumentare la resilienza e la fiducia del team nei sistemi complessi, in particolare quando si trovano in produzione.
