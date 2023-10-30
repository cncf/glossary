---
title: Service Discovery
status: Completed
category: concetto
tags: ["networking", "", ""]
---

## Che cos'è

Il service discovery è il processo di individuazione delle singole istanze che compongono un servizio.
Uno strumento di service discovery tiene traccia dei vari nodi o endpoint che compongono un servizio.

## Quali problematiche affronta

Le architetture cloud native sono dinamiche e fluide, ossia sono in costante cambiamento.
Un'applicazione [containerizzata](/it/containerization/) probabilmente partirà e si fermerà più volte durante il suo ciclo di vita.
Ogni volta che ciò accadrà, l'applicazione avrà un nuovo indirizzo: qualunque altra applicazione che vorrà individuarla avrà bisogno di un servizio che possa fornire le informazioni circa il suo nuovo indirizzo.

## In che modo aiuta

Il service discovery tiene traccia delle applicazioni all'interno del network in modo che ciascuna possa individuare le altre quando ne ha necessità.
Fornisce un unico punto comune nel quale trovare e potenzialmente identificare i singoli servizi.
I motori di service discovery sono strumenti simili a database, che archiviano informazioni su quali servizi esistono e su come individuarli.
