---
title: Stateful Apps
status: Completed
category: Concetto
tags: ["fondamentali", "basi"]
---

## Cos'è

Quando parliamo di applicazioni _stateful_ (letteralmente "a pieno stato") e [stateless](/it/stateless-apps/) (letteralmente "senza stato"),
il concetto di stato si riferisce a tutti i dati da salvare affinché l'applicazione funzioni come previsto.
Qualsiasi tipo di esperienza di acquisto online che ti ricorda a che punto sta il tuo carrello è, ad esempio, un'applicazione _stateful_.

## Quali problematiche affronta

L'utilizzo di un'applicazione generalmente prevede più richieste. Durante le attività di online banking, per esempio, ti autentichi tramite l'inserimento della la tua password (richiesta n. 1), quindi puoi trasferire denaro a un amico (richiesta n. 2), e infine, visualizzerai i dettagli del trasferimento (richiesta n. 3).
Per funzionare correttamente, ogni passaggio deve ricordare i precedenti, e la banca deve ricordare lo stato dei conti di ogni cliente.
Oggi, la maggior parte delle applicazioni che utilizziamo sono almeno in parte _stateful_, poiché memorizzano informazioni quali preferenze e impostazioni volte a migliorare l'esperienza utente.

## In che modo aiuta

Esistono diversi modi per salvare lo stato di un'applicazione _stateful_.
Il più semplice è mantenere lo stato in memoria e non persisterlo.
Ma il problema è che ad ogni riavvio dell'applicazione verrebbe perso.
Per evitare che ciò accada, lo stato viene persistito in locale (su disco) o in database.
