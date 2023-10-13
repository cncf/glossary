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
Gestire manualmente i [microservizi](/it/microservices), la sicurezza e la comunicazione di rete su larga scala - e [sistemi distribuiti](/it/distributed-systems) in generale - è difficile, se non impossibile.
L'orchestrazione dei container consente agli utenti di automatizzare tutte queste attività di gestione.

## In che modo aiuta
Gli strumenti di orchestrazione dei container consentono agli utenti di stabilire lo stato di un sistema.
Innanzitutto, dichiarano come dovrebbe apparire (ad esempio, x container, y pod, ecc.).
Lo strumento di orchestrazione monitorerà quindi automaticamente l'infrastruttura e la correggerà se lo stato devia da quello dichiarato (ad esempio, avvierà un nuovo container se uno dovesse arrestarsi in modo anomalo).
Questa automazione semplifica molte delle attività operative - altrimenti altamente manuali e complesse - dei team di engineering, tra cui il provisioning, il deployment, lo scaling (verso l'alto o verso il basso), il networking, il load balancing e altre attività.
