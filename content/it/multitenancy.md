---
title: Multitenancy
status: Completed
category: Proprietà
---

## Cos'è

Multitenancy (o multi-tenancy) si riferisce a una singola installazione software che serve più _tenant_. Un tenant può essere un utente, un'applicazione o un gruppo di utenti/applicazioni che utilizzano il software per operare sul proprio set di dati. Questi tenant non condividono dati (a meno che non siano espressamente istruiti in tal modo dal proprietario) e possono non essere a conoscenza l'uno dell'altro.  

Un tenant può essere piccolo come un utente indipendente con un singolo ID di accesso — si pensi ai software di produttività personale — o tanto estesi quanto un'intera azienda con migliaia di ID di accesso, ciascuno con i suoi permessi e comunque correlati in molti modi.
Esempi di software multitenant includono Google Mail, Google Docs, Microsoft Office 365, Salesforce CRM, e Dropbox, tra i tanti che si classificano come software interamente o parzialmente multitenant.

## Quali problematiche affronta

Senza la multitenancy, ciascun tenant avrebbe bisogno di un'installazione dedicata del software. Questo aumenta l'utilizzo di risorse e gli sforzi di manutenzione, e di conseguenza i costi del software.

## In che modo aiuta

Un software multitenant fornisce a ciascun tenant un ambiente separato (dati, impostazioni, liste di credenziali, ecc.), servendo contemporaneamente più tenant. Dal punto di vista di un tenant, ciascuno ha la propria installazione software dedicata, anche se in realtà tutti loro ne stanno condividendo una sola. Questo si ottiene facendo girare il software su un server e permettendo ai tenant di connettersi ad esso attraverso la rete tramite un'interfaccia e/o un'[API](/it/application-programming-interface/) (fare riferimento anche all'[Architettura Client-Server](/it/client-server-architecture/)).
Con un software multitenant, i tenant condividono le risorse di un'installazione senza influenzarsi tra loro o solo in modi predefiniti e controllati. Il conseguente risparmio di risorse da parte del fornitore del software può essere passato ai tenant, riducendo significativamente il costo del software per utente (anche in questo caso si può pensare alle e-mail web-based o agli editor di documenti).

## Termini correlati

Multitenancy non è un sinonimo di [SaaS](/it/software-as-a-service/), nonostante sia molto comune per un SaaS essere multitenant e anche di offrire la multitenancy come uno dei suoi principali vantaggi.
