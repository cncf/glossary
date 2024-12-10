---
title: Virtualizzazione
status: completed
category: tecnologia
tags: ["fondamentali", "infrastruttura", "metodologia"]
---

## Cos'è

La virtualizzazione, nell'ambito del cloud native computing (calcolo nativo su cloud), 
si riferisce alla pratica per la quale a un computer fisico, talvolta denominato server,
viene consentito di eseguire più sistemi operativi isolati.
Tali sistemi operativi isolati e le risorse di calcolo ad essi dedicate (CPU, memoria e rete) vengono
chiamati macchine virtuali o VM.
Quando si parla di [macchine virtuali](/it/virtual-machine/), si fa riferimento a un computer definito da un software.
Qualcosa che sembra e agisce come un vero computer ma che condivide l'hardware con altre macchine virtuali.
Il [cloud computing](/it/cloud-computing/) è alimentato principalmente dalle tecnologie di virtualizzazione.
Per esempio, è possibile noleggiare un "computer" da un provider, ma quel computer è in realtà una VM.

## Quali problematiche affronta

La virtualizzazione affronta molte problematiche, tra cui il miglioramento dell'utilizzo dell'hardware fisico,
in quanto permette a più applicazioni di essere eseguite sulla stessa macchina fisica
mantenendole isolate l'una dall'altra per sicurezza.

## In che modo aiuta

Le applicazioni eseguite su macchine virtuali operano senza alcuna consapevolezza del fatto che condividono una stessa risorsa fisica.
La virtualizzazione permette anche agli utenti del [datacenter](/it/datacenter/) di avviare un nuovo "computer" (cioè una VM) in pochi minuti,
senza preoccuparsi dei vincoli fisici di dover aggiungere del nuovo hardware al datacenter.
Le VM consentono inoltre agli utenti di ridurre il tempo necessario per mettere a disposizione un nuovo computer.
