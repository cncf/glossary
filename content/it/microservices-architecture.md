---
title: Architettura microservizi
status: Completed
tags: ["infrastruttura", "fondamenti", ""]
---

## Cos'è

Un'architettura a microservizi è un approccio architetturale che suddivide le applicazioni in singoli servizi indipendenti (micro), con ciascun servizio focalizzato su una funzionalità specifica. 
Questi servizi lavorano insieme in modo stretto, apparendo all'utente finale come un'unica entità.
Prendiamo Netflix come esempio. La sua interfaccia ti consente di accedere, cercare e visualizzare in anteprima i video. 
Queste funzionalità sono probabilmente composte da servizi più piccoli che gestiscono ciascuno una funzionalità, ad esempio l'autenticazione, la ricerca e l'esecuzione di anteprime nel browser.
Questo approccio architetturale consente agli sviluppatori di rilasciare nuove funzionalità o aggiornare le funzionalità in modo molto più rapido rispetto a quanto accadrebbe se fossero tutte strettamente accoppiate, come in un'[applicazione monolitica](/it/monolithic-apps/).

## Quali problematiche affronta

Le applicazioni sono composte da diverse parti, ognuna delle quali è responsabile di una specifica funzionalità. 
L'utilizzo di una particolare funzionalità non necessariamente aumenterà o diminuirà con l'utilizzo di altre parti dell'applicazione. 
Tornando all'esempio di Netflix, supponiamo che dopo una grande campagna di marketing, Netflix registri un forte aumento delle iscrizioni, ma lo streaming sia rimasto più o meno stabile nelle prime ore del mattino. L'aumento delle iscrizioni richiede un amento nella capacità applicativa di che gestisce le iscrizioni. 
Tradizionalmente (approccio monolitico), l'intera applicazione dovrebbe essere [scalata](/it/scalability/) per soddisfare questa richiesta, causando un uso delle risorse molto inefficiente.
Le architetture monolitiche rendono inoltre facile per gli sviluppatori cadere in trappole di progettazione. 
Poiché tutto il codice si trova in un unico posto, è più facile rendere quel codice [strettamente accoppiato](/it/tightly-coupled-architectures/) e più difficile applicare il principio della separazione delle preoccupazioni (soc). 
I monoliti spesso richiedono anche agli sviluppatori di comprendere l'intero codice prima di implementare qualsiasi modifica. L'architettura a microservizi è una risposta a queste sfide.

## In che modo aiuta

Separare le funzionalità in diversi microservizi le rende più facili da distribuire, aggiornare e scalare in modo indipendente. Permette inoltre a diversi team di lavorare contemporaneamente su una piccola parte di un'applicazione più grande senza impattare negativamente sul resto dell'applicazione. Sebbene un'architettura a microservizi risolva molti problemi, crea anche overhead operativo: le cose che è necessario distribuire e monitorare aumentano di un ordine di grandezza. Molte [tecnologie cloud-native](/it/cloud-native-tech/) mirano a rendere i microservizi più facili da distribuire e gestire.
