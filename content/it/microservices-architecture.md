---
title: Microservizi
status: Completed
tags: ["architettura", "fondamenti", ""]
---


Un'architettura a microservizi è un approccio architetturale che suddivide le applicazioni in singoli [servizi](it/service) indipendenti (microservizi), ognuno dei quali si concentra su una funzionalità specifica. Questi servizi lavorano assieme, apparendo all'utente finale come un'unica entità. Prendiamo Netflix come esempio: la sua interfaccia consente di accedere, cercare e visualizzare un anteprima dei video. Queste funzionalità sono probabilmente gestite da piccoli servizi separati, ognuno dedicato a una funzionalità specifica, come l'autenticazione, la ricerca o l'esecuzione delle anteprime nel browser.
Questo approccio architetturale consente agli sviluppatori di introdurre nuove funzionalità o aggiornare quelle esistenti molto più rapidamente rispetto a un'[applicazione monolitica](it/monolithic-apps), dove tutti i componenti sono strettamente integrati (vedi sotto per ulteriori dettagli).

## Quali problematiche affronta

Le applicazioni sono composte da diverse parti, ciascuna responsabile di una specifica funzionalità. Tornando all'esempio di Netflix: supponiamo che, dopo una grande campagna di marketing, Netflix registri un forte aumento delle iscrizioni, mentre lo streaming rimane più o meno stabile nelle prime ore del giorno. L'aumento delle iscrizioni richiede una maggiore capacità per la gestione degli account. Con un approccio tradizionale (monolitico), l'intera applicazione dovrebbe essere [scalata](it/scalability) per gestire l'aumento della domanda causando un utilizzo delle risorse molto inefficiente.  
Le architetture monolitiche possono anche portare gli sviluppatori a cadere in trappole progettuali. Poiché tutto il codice si trova in un unico luogo, è più facile creare un codice [strettamente accoppiato](it/tightly-coupled-architectures/) e più difficile applicare il principio della separazione delle responsabilità. Inoltre, i monoliti spesso richiedono agli sviluppatori di comprendere l'intero codice prima di poter implementare qualsiasi modifica. L'architettura a microservizi nasce come risposta a queste sfide.  

## In che modo aiuta

La separazione delle funzionalità in diversi microservizi li rende più facili da distribuire, aggiornare e scalare in modo indipendente. Consente inoltre a team diversi di lavorare contemporaneamente su una piccola parte di un'applicazione più grande senza influenzare negativamente il resto dell'applicazione. Sebbene l'architettura a microservizi risolva molti problemi, introduce anche un sovraccarico operativo: il numero di elementi da distribuire e monitorare aumenta notevolmente. Molte [tecnologie cloud-native](it/cloud-native-tech/) sono progettate proprio per semplificare la distribuzione e la gestione dei microservizi.  