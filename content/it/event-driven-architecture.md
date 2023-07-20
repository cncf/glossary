---
title: Architettura ad eventi
status: Completed
category: concetto
---

## Cos'è

Un'architettura basata sugli eventi è un paradigma di progettazione software che promuove la creazione, l'elaborazione e il consumo di eventi.
Un evento è un qualunque cambiamento di stato di un'applicazione.
Per esempio, richiedere una corsa su un'applicazione di ride-sharing rappresenta un evento.
Questo tipo di architettura crea la struttura nella quale gli eventi possono essere correttamente indirizzati dalla loro origine (l'applicazione che richiede una corsa) al destinatario desiderato (l'applicazione degli autisti disponibili nelle vicinanze).

## Quali problematiche affronta

Con l'aumento dei dati in tempo reale, diventa sempre più difficile trovare modi affidabili per assicurarsi che gli eventi siano acquisiti e indirizzati al corretto [servizio](/it/service/) che deve processare la richiesta dell'evento.
I metodi tradizionali di gestione degli eventi spesso non hanno modo di garantire che i messaggi siano correttamente indirizzati o che siano effettivamente inviati o ricevuti.
Nel momento in cui le applicazioni iniziano ad essere scalate, diventa più difficile orchestrare gli eventi.

## In che modo aiuta

Le architetture ad eventi ne costituiscono un fulcro centrale (ad esempio Kafka).
All'interno di questo tipo di architettura, infatti, si possono definire i produttori degli eventi (origine) e i loro consumatori (destinatari), e il fulcro centrale ne garantisce il flusso corretto.
Questo tipo di architettura assicura che i servizi rimangano disaccoppiati e che gli eventi vengano correttamente indirizzati dal produttore al consumatore.
Il produttore prenderà gli eventi in arrivo, solitamente tramite protocollo HTTP, e indirizzerà l'informazione contenuta nell'evento.
