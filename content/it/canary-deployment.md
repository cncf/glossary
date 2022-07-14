---
title: Canary Deployment
status: Completed
category: Concetto
---

## Cos'è
Per _Canary deployment_ si intende una strategia di distribuzione che inizia con due ambienti: uno con traffico in tempo reale e l'altro contenente il codice aggiornato senza traffico in tempo reale. Il traffico viene gradualmente spostato dalla versione originale dell'applicazione alla versione aggiornata. Si può iniziare spostando l'1% del traffico in tempo reale, quindi il 10%, il 25% e così via, fino a quando tutto il traffico viene veicolato attraverso la versione aggiornata. Le organizzazioni possono testare la nuova versione del software in produzione, ottenere feedback, diagnosticare errori e ripristinare rapidamente la versione stabile, se necessario.

Il termine _Canary_ ("canarino") si riferisce alla pratica del "canarino in una miniera di carbone" in cui i canarini venivano portati nelle miniere di carbone per proteggere i minatori. Se fossero stati presenti gas nocivi inodore, l'uccello sarebbe morto e i minatori avrebbero compreso di dover evacuare rapidamente. Allo stesso modo, se qualcosa va storto con il codice aggiornato, il traffico in tempo reale viene "evacuato" alla versione originale.

## Quali problematiche affronta
Non importa quanto sia approfondita la strategia di test, ci sono sempre alcuni bug scoperti in produzione. Spostare il 100% del traffico da una versione di un'app a un'altra può portare a errori di maggiore impatto.

## In che modo aiuta
Il Canary deployment consente alle organizzazioni di vedere come si comporta il nuovo software in scenari reali prima di trasferire traffico significativo alla nuova versione. Questa strategia consente alle organizzazioni di ridurre al minimo i tempi di inattività e di eseguire rapidamente il ripristino in caso di problemi con la nuova distribuzione. Consente inoltre test più approfonditi delle applicazioni di produzione senza un impatto significativo sull'esperienza complessiva dell'utente.