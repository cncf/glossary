---
title: Macchina Bare Metal
status: Completed
category: tecnologia
tags: ["infrastruttura", "", ""]
---

## Cos'è

Bare metal (puro metallo) si riferisce a un computer fisico, più specificamente un server, che ha uno e un solo sistema operativo.
Nell'informatica moderna questa distinzione è importante perché molti, se non la maggior parte, dei server sono [macchine virtuali](/it/virtual-machine/).
Un server fisico è tipicamente un computer di grandi dimensioni con un hardware potente.
Installare un sistema operativo ed eseguire le applicazioni direttamente su quell'hardware fisico senza [virtualizzazione](/it/virtualization/), si definisce come in esecuzione su “bare metal”.

## Quali problematiche affronta

Accoppiare un sistema operativo con un computer fisico è il modello originale dell'informatica.
Tutte le risorse del computer fisico sono direttamente disponibili per il sistema operativo, e, senza livelli di virtualizzazione, non si introduce ritardo nella traduzione delle istruzione del sistema operativo all'hardware.

## In che modo aiuta

Dedicando tutte le risorse computazionali di un computer a un singolo sistema operativo si fornisce potenzialmente la miglior performance possibile al sistema operativo.
Se è necessario eseguire un carico di lavoro che deve avere un accesso estremamente veloce alle risorse hardware, allora il bare metal può essere la giusta soluzione.

Nel contesto di [applicazioni cloud native](/it/cloud-native-apps/),
generalmente si pensa alle performance in termini di [scalabilità](/it/scalability/) a un numero più alto di eventi concomitanti,
che possono essere gestiti utilizzando la proprietà di [scalabilità orizzontale](/it/horizontal-scaling/) (aggiungendo più macchine al pool di risorse).
Alcuni carichi di lavoro possono richiedere di utilizzare la [scalabilità verticale](/it/vertical-scaling/) (aggiungendo più potenza a una macchina fisica esistente);
e/o una risposta hardware estremamente veloce, e in questi casi il bare metal è più indicato.
Il bare metal permette anche di regolare l'hardware fisico ed eventualmente anche i driver hardware per aiutare a raggiungere l'obiettivo.
