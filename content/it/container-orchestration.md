---
title: Container Orchestration
status: Completed
category: Concetto
---

## Cos'è
Per orchestrazione dei [container](/it/container/) si intende la gestione e l'automazione del ciclo di vita delle applicazioni containerizzate in ambienti dinamici.
L'orchestrazione dei container viene effettuata tramite l'utilizzo di un orchestratore di container (nella maggior parte dei casi [Kubernetes](/it/kubernetes)), che consente di eseguire i processi di deployment (distribuzione), (auto)scaling (scalabilità), auto-healing (riparazione) e monitoraggio.
Il concetto di orchestrazione è preso in prestito dal mondo musicale ed utilizzato come una metafora:
lo strumento di orchestrazione dirige i container come un direttore d'orchestra musicale, assicurandosi che ogni container (o musicista) faccia ciò che dovrebbe fare.



## Quali problematiche affronta
Gestire manualmente i [microservizi](/it/microservices), la sicurezza e la comunicazione di rete su larga scala - e i [sistemi distribuiti](/it/distributed-systems) in generale - è difficile, se non impossibile.
L'orchestrazione dei container consente agli utenti di automatizzare tutte queste attività di gestione.

## In che modo aiuta
Gli strumenti di orchestrazione dei container consentono agli utenti di stabilire lo stato di un sistema.
Innanzitutto, dichiarano come dovrebbe apparire (ad esempio, x container, y pod, ecc.).
Lo strumento di orchestrazione monitorerà quindi automaticamente l'infrastruttura e la correggerà se lo stato devia da quello dichiarato (ad esempio, avvierà un nuovo container se uno dovesse arrestarsi in modo anomalo).
Questa automazione semplifica molte delle attività operative dei team di engineering, che risulterebbero altrimenti profondamente manuali e complesse. Tra queste figurano: l'assegnazione di risorse, la distribuzione, lo scaling (sia in termini di aggiunta che di rimozione di nodi), la connettività, il bilanciamento del traffico e altre attività.
