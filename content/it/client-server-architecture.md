---
title: Architettura Client-Server
status: Completed
category: concetto
tags: ["architettura", "", ""]
---

## Cos'è

In un'architettura client-server la logica (o il codice) che forma un'applicazione è diviso in due o più componenti: un client che richiede di eseguire del lavoro (ad esempio, l'applicazione web di Gmail in esecuzione sul web browser), e uno o più server che soddisfano quella richiesta (ad esempio, il servizio "invia email" in esecuzione sui computer di Google in cloud).
In questo esempio, le email in uscita sono inviate dal client (l'applicazione web in esecuzione sul web browser) a un server (i computer di Gmail, che inoltrano le email in uscita ai rispettivi destinatari).

Questo tipo di architettura è in opposizione alle applicazioni self-contained (ossia autonome, come le applicazioni desktop per esempio) che eseguono tutto il lavoro da un unico posto.
Per esempio, un programma di elaborazione di testi come Microsoft Word può essere installato ed eseguito interamente sul computer di ogni singolo utente.

## Quali problematiche affronta

Un'architettura client-server risolve una grande sfida posta dalle applicazioni self-contained: gli aggiornamenti regolari. Nel caso di un'applicazione self-contained, per ogni aggiornamento gli utenti dovrebbero scaricare e installare l'ultima versione. Immagina di dover scaricare sul tuo computer l'intero catalogo dei prodotti di Amazon per poterlo navigare!

## In che modo aiuta

Implementando le logiche dell'applicazione in un server o un servizio remoto, gli operatori possono aggiornarle senza la necessità di modificare le logiche lato client. Questo significa che gli aggiornamenti possono essere fatti molto più frequentemente.
Conservare i dati su un server permette a più client di vedere e condividere gli stessi dati. Consideriamo la differenza di utilizzo di un programma di elaborazione di testi al confronto con un tradizionale programma di elaborazione di testi offline. Nel primo i file esistono solo lato server e possono essere condivisi con altri utenti che possono semplicemente scaricarli dal server. Nel mondo legacy, i file dovevano essere copiati su dispositivi rimovibili (come i floppy disk) e condivisi con i singoli utenti.
