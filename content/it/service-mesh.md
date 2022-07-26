---
title: Applicazioni distribuite
status: Completed
category: tecnologia
tags: ["networking", "", ""]
---

## Cos'è

In un mondo costituito da [microservizi](/it/microservices), le applicazioni sono spacchettate in diversi [servizi](/it/services) che comunicano tra loro attraverso una rete. Proprio come una qualunque rete Wi-Fi, le reti di computer sono intrinsecamente inaffidabili, hackerabili e spesso lente. Le service mesh rispondono a questo nuovo set di sfide gestendo il traffico (cioè la comunicazione) tra i servizi e conferendo in modo uniforme [affidabilità](/it/reliability), [osservabilità](/it/observability) e sicurezza a tutti i servizi.

## Quali problematiche affronta

Con il passaggio a un'architettura a microservizi, gli ingegneri hanno ora a che fare con centinaia, forse addirittura migliaia di servizi individuali, che devono tutti comunicare tra loro. Questo significa che un traffico ingente si sposta all'interno della rete. Inoltre, le singole applicazioni possono avere bisogno di criptare le comunicazioni per rispondere a requisiti normativi, fornire metriche comuni ai team operativi o fornire informazioni dettagliate sul traffico per aiutare a diagnosticare i problemi. Se integrata all'interno delle singole applicazioni, ognuna di queste caratteristiche causerà attriti tra i team e rallenterà lo sviluppo di nuove funzionalità.

## In che modo aiuta

Le service mesh conferiscono in modo uniforme affidabilità, osservabilità e sicurezza a tutti i servizi all'interno di un cluster senza richiedere modifiche al codice. Prima dell'avvento delle service mesh, queste funzionalità dovevano essere aggiunte al codice di ogni singolo servizio, diventando una potenziale fonte di bug e debiti tecnici.
