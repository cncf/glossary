---
title: Stateless Apps
status: Completed
category: Tecnologia
tags: ["fundamentals"]

---

## Cos'è

Un'applicazione _stateless_ non salva alcun dato di sessione (è questo che si intende con _stato_) del client sul server in cui risiede l'applicazione.
Ogni sessione viene eseguita come se fosse la prima volta e le risposte non dipendono dai dati di una sessione precedente. Ogni sessione
fornisce funzionalità per utilizzare i servizi di stampa, CDN (Content Delivery Network) o i server Web
al fine di elaborare ogni richiesta a breve termine.
Per fare un esempio, poniamo che si stia cercando qualcosa con un motore di ricerca e venga premuto il pulsante Invio, qualora l'operazione venisse interrotta o chiusa per qualunque motivo, bisognerebbe riavviarla non disponendo di dati salvati dalla richiesta precedente.

## Quali problematiche affronta

Stateless applications tackle the problem of resiliency, 
because different pods across a [cluster](/cluster/) can work independently, 
with multiple requests coming to them at the same time. 
If there’s a problem, you can easily restart the application, 
and it will return to its initial state with little or no downtime. 
As such, the benefits of stateless applications include resiliency, elasticity, and high availability. 
However, most applications we use today are at least partly [stateful](/it/stateful-apps/), 
as they store things like preferences and settings to improve the user experience.

Le applicazioni _stateless_ affrontano la questione della resilienza,
poiché pod diversi in un [cluster](/cluster/) possono funzionare in modo indipendente,
ricevendo più richieste contemporaneamente.
In caso si riscontrasse un problema, l'applicazione potrebbe essere facilmente riavviata, tornando al suo stato iniziale con tempi di inattività minimi o nulli.
Risulta evidente che i vantaggi delle applicazioni _stateless_ includano resilienza, elasticità e disponibilità elevata.
Tuttavia, la maggior parte delle applicazioni che utilizziamo oggi sono almeno in parte [_stateful_](/it/stateful-apps/),
dato che memorizzano informazioni quali preferenze e impostazioni per migliorare l'esperienza utente.

## In che modo aiuta

Boiling everything down, in a Stateless Application the only thing your cluster is responsible for is 
the code, and other static content, being hosted on it. 
That’s it, no changing databases, no writes and no left over files when the pod is deleted. 
Stateless [containers](/container/) are easier to deploy, 
and you don’t need to worry about saving container data on persistent storage volumes. 
You also don't have to worry about backing up the data.

Volendo sintetizzare, in un'applicazione _stateless_ l'unica cosa di cui il nostro cluster è responsabile è
il codice e altro contenuto statico ospitato su di esso.
Non c'è altro: nessuna modifica dei database, nessuna scrittura e nessun file residuo quando il pod viene eliminato.
I [container](/it/container/) "senza stato" sono più facili da distribuire,
e non richiedono di salvare i dati del container su volumi di archiviazione persistenti.
Inoltre, il backup dei dati non è un punto di attenzione.
