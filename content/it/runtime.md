---
title: Runtime
status: Completed
category: concetto
tags: ["applicazione", "", ""]
---

## Cos'è

Un runtime, in generale, esegue un software.
È un'[astrazione](/it/abstraction/) del sistema operativo sottostante che traduce i comandi del programma in azioni corrispondenti perché siano utili al sistema operativo stesso.

Nel contesto [cloud native](/it/cloud-native-apps/), il termine runtime si riferisce generalmente al runtime dei container. 
Un container runtime è un implementazione che segue le specifiche [Open Container Initiative](https://opencontainers.org/) per garantire una gestione coerente dei container nelle differenti tecnologie di orchestrazione degli stessi.

## Quali problematiche affronta
Senza l'astrazione di un runtime del container, l'applicazione dovrebbe occuparsi di tutte le meccaniche di ciascun sistema operativo, aumentando la complessità dell'esecuzione dell'applicazione.

## In che modo aiuta
I container runtime sono un componente necessario degli orchestratori di container come [Kubernetes](/it/kubernetes). 
Gestiscono il ciclo di vita del container, che fa principalmente tre cose: 

- definisce come vengono specificate le immagini del container e come il runtime può recuperarle;
- gestisce come queste immagini vengono decompresse, stratificate, montate ed eseguite;
- gestisce le risorse hardware occupandosi di tutte queste azioni a livello di sistema operativo, come allocazione e isolamento delle risorse.

Nel tempo, diverse implementazioni di container runtime hanno continuato ad evolversi, portando alla Specifica OCI, che è diventata lo standard per i runtime dei container.
L'introduzione di questo standard consente agli utenti finali di combinare qualsiasi runtime conforme a OCI con qualsiasi orchestratore di container conforme a OCI (come Kubernetes).

## Termini correlati

- [Cloud Native](/it/cloud-native-apps/)
- [Containerization](/it/containerization/)
- [Container Orchestration](/it/container-orchestration/)
- [Microservices Architecture](/it/microservices-architecture/)