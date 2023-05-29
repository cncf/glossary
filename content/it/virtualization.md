---
title: Virtualizzazione
status: completed
category: tecnologia
tags: ["fondamentali", "infrastruttura", "metodologia"]
---

## Cos'è

Nel contesto del cloud native computing, la virtualizzazione
si riferisce al processo di prendere un computer fisico, a volte chiamato server,
e permettergli di eseguire diversi sistemi operativi isolati tra loro.
Questi sistemi operativi e le loro risorse computazionali dedicate (CPU, memoria e rete) sono
chiamati macchine virtuali (VM).
Quando si parla di [macchine virtuali](/it/virtual-machine/), si fa riferimento a un computer definito da un software.
Qualcosa che sembra e agisce come un vero computer ma che condivide l'hardware con altre macchine virtuali.
Il [cloud computing](/it/cloud-computing/) è alimentato principalmente dalle tecnologie di virtualizzazione.
Per esempio, è possibile noleggiare un "computer" da AWS, ma quel computer è in realtà una VM.

## Quali problematiche affronta

La virtualizzazione affronta molte problematiche, tra cui il miglioramento dell'utilizzo dell'hardware fisico,
in quanto permette a più applicazioni di essere eseguite sulla stessa macchina fisica
mantenendole isolate l'una dall'altra per sicurezza.

## In che modo aiuta

Le applicazioni eseguite su macchine virtuali non sono consapevoli di star condividendo un computer fisico.
La virtualizzazione permette anche agli utenti del [datacenter](/it/datacenter/) di avviare un nuovo "computer" (cioè una VM) in pochi minuti,
senza preoccuparsi dei vincoli fisici di dover aggiungere un nuovo computer fisico al datacenter.
Le VM, inoltre, permettono agli utenti di ridurre il tempo necessario per avere a disposizione un nuovo computer virtuale.
