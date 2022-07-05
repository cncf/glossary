---
title: Applicazioni distribuite
status: Completed
category: concetto
---

## Cos'è

Un'applicazione distribuita è un'applicazione la cui funzionalità è suddivisa in parti più piccole e indipendenti. Le applicazioni distribuite sono generalmente composte da [microservizi](/it/microservices/) che gestiscono diversi aspetti all'interno dell'applicazione più ampia. In un ambiente cloud native i singoli componenti sono tipicamente eseguiti come container all'interno di un [cluster](/it/cluster/).

## Quali problematiche affronta

Un'applicazione in esecuzione su un singolo computer rappresenta un singolo punto di vulnerabilità: se quel computer si blocca, l'applicazione non sarà più disponibile. Le applicazioni distribuite vengono spesso messe in contrapposizione alle applicazioni monolitiche. Un'applicazione monolitica è più difficilmente scalabile perché i singoli componenti non sono scalabili indipendentemente. Man mano che questi ultimi crescono, possono diventare anche un ostacolo alla developer velocity, perché più sviluppatori devono lavorare su una codebase condivisa che non ha necessariamente dei confini ben definiti.

## In che modo aiuta

Dividendo un'applicazione in diverse parti ed eseguendola su più locazioni, il sistema in generale può tollerare più fallimenti. Inoltre ciò permette a un'applicazione di trarre beneficio dalle caratteristiche di scalabilità che non ha un'applicazione in esecuzione su un'unica instanza, ovvero la capacità di essere scalabile orizzontalmente. Questo, però, comporta un aumento di complessità e di sforzo operativo, dal momento che in questo modo vengono eseguite molte componenti dell'applicazione, invece di un'unica applicazione.
