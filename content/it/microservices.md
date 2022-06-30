---
title: Microservizi
status: Completed
category: Concetto
---

## Che cos’è

I microservizi sono un approccio moderno allo sviluppo di applicazioni che sfrutta le tecnologie native del cloud. Sebbene le applicazioni moderne, come Netflix, sembrino essere un'unica app, in realtà sono una raccolta di servizi più piccoli, tutti in stretta collaborazione. Ad esempio, una singola pagina che ti consente di accedere, cercare e visualizzare in anteprima i video è probabilmente alimentata da servizi più piccoli che ne gestiscono ciascuno un aspetto (ad esempio ricerca, autenticazione ed esecuzione di anteprime nel browser). In breve, i microservizi si riferiscono a un modello di architettura dell'applicazione solitamente in contrasto con le [applicazioni monolitiche](/monolithic-apps/).

## Quale problema affronta

I microservizi sono una risposta alle sfide poste dalle applicazioni monolitiche. In genere, le diverse parti di un'applicazione dovranno essere [scalabili](/scalability/) separatamente. Per esempio, un negozio online avrà più visualizzazioni di prodotti che pagamenti. Ciò significa che avrai bisogno di più copie della funzionalità di visualizzazione del prodotto in esecuzione rispetto al pagamento. In un'applicazione monolitica, quei bit di logica non possono essere creati separatamente. Se non riesci a ridimensionare la funzionalità del prodotto individualmente, dovrai duplicare l'intera app con tutti gli altri componenti che non ti servono - un uso inefficiente delle risorse. Le applicazioni monolitiche causano agli sviluppatori di soccombere facilmente alle insidie della progettazione. Poiché tutto il codice è in un unico posto, è più facile rendere quel codice [strettamente accoppiato](/tightly-coupled-architectures/) ed è più difficile applicare il principio della separazione dei contesti. I monoliti spesso richiedono agli sviluppatori di comprendere l'intera base di codice prima di poter essere produttivi.

## In che modo aiuta

La separazione delle funzionalità in diversi microservizi ne semplifica la distribuzione, l'aggiornamento e la scalabilità in modo indipendente. Consentendo a diversi team di concentrarsi sulla propria piccola parte di un'applicazione più grande, rende loro più facile per loro lavorare sulle proprie app senza avere un impatto negativo sul resto dell'organizzazione. Sebbene i microservizi risolvano molti problemi, creano anche un sovraccarico operativo, le cose che ti servono per distribuire e tenere traccia del suo aumento per ordine di grandezza, ed altro. Molte [tecnologie cloud native](/it/cloud-native-tech/) mirano a semplificare la distribuzione e la gestione dei microservizi.
