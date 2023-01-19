---
title: Event Streaming
status: Completed
category: Concetto
---

## Cos'è

L'event streaming è un approccio nel quale un software invia i dati di un evento da un'applicazione a un'altra per comunicare costantemente cosa stanno facendo.
Si immagini un servizio che trasmetta ogni cosa che faccia a tutti gli altri servizi.
Ogni attività intrapresa da un servizio è chiamata evento, da cui event streaming.
Per esempio, NASDAQ ottiene aggiornamenti sui prezzi di azioni e materie prime ogni secondo.
Se hai un'applicazione che monitora uno specifico insieme di azioni, vuoi ricevere quelle informazioni in tempo quasi reale.
Yahoo! Finance fornisce un'[API](/it/application-programming-interface/) che recupera i dati da NASDAQ e invia (o trasmette) quelle informazioni (o eventi) dalla loro applicazione a qualunque applicazione che si iscrive al servizio.
I dati inviati, insieme ai loro cambiamenti (il prezzo delle azioni) sono gli eventi, mentre il processo di consegnarli ad un'applicazione è l'event streaming.

## Quali problematiche affronta

Tradizionalmente, Yahoo! Finance avrebbe usato singole richieste TCP.
Questo sarebbe stato molto inefficiente, in quanto avrebbe richiesto la creazione di una connessione per ogni evento.
Man mano che i dati diventano più in tempo reale, scalare questo tipo di soluzione diventa inefficiente.
Aprire una connessione una sola volta e permettere agli eventi di fluire è una soluzione ideale per il funzionamento in tempo reale.
La quantità di dati generati sta crescendo esponenzialmente, e con essi lo stato dei dati è in continuo movimento. Sviluppatori e utenti devono essere in grado di poter vedere quei dati in tempo quasi reale.

## In che modo aiuta

L'event streaming permette di comunicare i cambiamenti ai dati dalla sorgente al destinatario.
Invece di attendere che i servizi richiedano l'informazione, un servizio trasmette costantemente tutti i suoi eventi (o attività).
Non si preoccupa di cosa succede con quell'informazione.
Si occupa soltanto di fare quello che deve e trasmetterlo, rimanendo così completamente indipendente da qualunque altro servizio.
