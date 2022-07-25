---
title: Containers
status: Completed
category: Tecnologia
---

## Cos'è
Un container è un processo in esecuzione con vincoli di risorse e capacità gestiti dal sistema operativo di un computer. I file disponibili per il processo del container vengono compressi in una "immagine" del container. I container vengono eseguiti in spazi di memoria adiacenti sulla stessa macchina, ma in genere il sistema operativo impedisce ai processi container separati di interagire tra loro.

## Quali problematiche affronta
Prima che i container fossero disponibili, erano necessarie macchine separate per eseguire le applicazioni. Ogni macchina richiedeva il proprio sistema operativo, che occupava CPU, memoria e spazio su disco, il tutto per il funzionamento di una singola applicazione. Inoltre, la manutenzione, l'aggiornamento e l'avvio di un sistema operativo sono un'altra significativa fonte di lavoro.

## In che modo aiuta
I container condividono lo stesso sistema operativo e le relative risorse della macchina, diluendo il sovraccarico delle risorse del sistema operativo a più processi e creando un uso efficiente della macchina fisica. Questa funzionalità è possibile solo perché ai container è tipicamente preclusa ogni forma di interazione. Ciò consente di eseguire molte più applicazioni sulla stessa macchina fisica.

Tuttavia, ci sono dei limiti. Poiché i container condividono lo stesso sistema operativo, i processi possono essere considerati meno sicuri delle alternative. I container richiedono anche limitazioni alle risorse condivise. Per garantire la disponibilità di risorse, gli amministratori devono vincolare e limitare l'utilizzo della memoria e della CPU in ciascun container, in modo che le altre applicazioni non siano rallentate.