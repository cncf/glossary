---
title: Containerizzazione
status: Feedback Appreciated
category: tecnologia
tags: ["applicazione", "", ""]
---

## Cos'è

La containerizzazione è il processo di accorpamento di un'applicazione e le sue dipendenze in un'[immagine container](/it/container-image/). Il processo di costruzione di un container richiede l'aderenza agli standard dell'[Open Container Initiative](https://opencontainers.org). Purché il risultato finale sia un'immagine container che aderisce a questi standard, lo strumento utilizzato per la containerizzazione non ha importanza.

## Quali problematiche affronta

Prima che i container si diffondessero, le organizzazioni si affidavano alle [macchine virtuali](/it/virtual-machine/) per orchestrare più applicazioni su una singola macchina [bare metal](/it/bare-metal-machine/). Le macchine virtuali sono molto più grandi dei container e richiedono un hypervisor per funzionare. A causa dell'archiviazione, del backup e del trasferimento di questi modelli di macchine virtuali più grandi, anche la creazione dei modelli di macchine virtuali è lenta. Inoltre, le macchine virtuali possono soffrire di una deriva della configurazione che viola il principio di [immutabilità](/it/immutability/).

## In che modo aiuta

Le immagini container sono leggere (a differenza delle macchine virtuali tradizionali) e il processo di containerizzazione richiede un file con un elenco di dipendenze. Questo file può prevedere un [controllo di versione](/it/version-control/) e il processo di creazione può essere automatizzato, permettendo all'organizzazione di concentrarsi su altre priorità, mentre i processi automatizzati si occupano della creazione. L'immagine container è memorizzata con un identificatore univoco legato al suo esatto contenuto e alla sua configurazione. Poiché i container vengono pianificati e riprogrammati, vengono sempre ripristinati allo stato iniziale, eliminando così la deriva della configurazione.
