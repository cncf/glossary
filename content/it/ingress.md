---
title: Ingress
status: Completed
category: tecnologia
tags: ["fondamenti"]
---

Un Ingress è un insieme di regole che aiuta a gestire il traffico Internet proveniente dall'esterno verso un container o un gruppo di container in esecuzione in un cluster.
È composto da due elementi: la risorsa ingress e dall'ingress controller.
La risorsa ingress è un file di configurazione e consente agli amministratori di configurare il routing del traffico esterno,
l'ingress controller è un server web che esegue effettivamente il routing del traffico in base alla configurazione presente nella risorsa Ingress.

## Quali problematiche affronta

Le applicazioni web in ambienti cloud native, sono composte da diversi servizi e spesso è necessario che questi [servizi](/it/service/) siano accessibili via Internet per consentire agli utenti di visitarli tramite il loro browser.
Per rendere accessibili questi servizi dell'applicazione agli utenti in ambiente [Kubernetes](/it/kubernetes/), è necessario esporre ciascun servizio dell'applicazione al mondo esterno.
Il modo più diretto sarebbe utilizzare un servizio di bilanciamento del carico in Kubernetes.
La creazione di un tale servizio comporta la generazione di un nuovo componente nell'infrastruttura sottostante;
questo introduce nuovi costi e oneri gestionali, ma ogni nuovo bilanciatore di carico creato ha il proprio indirizzo IP esterno.
Questo porta a un'esperienza utente negativa, poiché, come utenti, non vogliamo navigare su URL differenti per accedere a un'applicazione

## In che modo aiuta

Una risorsa Ingress consente di configurare come il traffico viene bilanciato e instradato verso i servizi di un'applicazione.
L'ingress controller è un server web, eseguito all'interno del cluster, che interpretando le regole definite nella risorsa ingress  
consente un singolo punto di ingresso attraverso un URL (www.example-url.com) e gestisce l'instradamento effettivo e il bilanciamento in base a diversi percorsi URL (www.example-url.com/path).
Spetta agli operatori del cluster decidere quale ingress controller utilizzare per l'esecuzione dell'applicazione web, scegliendo tra una serie di tecnologie possibili come Nginx, Traefik, HAProxy, ecc.
Grazie a queste caratteristiche, anche quando un'applicazione è composta da più servizi, l'utente può accedervi utilizzando un singolo URL.
Questo elimina la necessità di numerosi bilanciatori di carico separati a livello di infrastruttura e semplifica la configurazione delle regole del firewall e del bilanciatori di carico per ciascun servizio.
Centralizzando l'instradamento del traffico e la gestione delle configurazioni, Ingress fornisce una scalabilità ottimizzata, utilizzo efficiente delle risorse, 
riduzione dei costi e migliora la gestibilità complessiva delle applicazioni in esecuzione in un cluster.