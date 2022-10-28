---
title: Architettura Tightly Coupled
status: Completed
category: Proprietà
tags: ["fondamenti", "", ""]
---

Le architetture tightly coupled (strettamente accoppiate) sono uno stile architetturale nel quale una serie di componenti di un'applicazione sono interdipendenti (si tratta del paradigma opposto a quello delle [architetture loosely coupled](/it/loosely-coupled-architecture/)).
Questo significa che un cambiamento in un componente avrà probabilmente un impatto su altri componenti.
Generalmente sono più semplici da implementare rispetto a uno stile architetturale più loosely coupled, ma il sistema può risultare più vulnerabile a fallimenti a cascata.
Inoltre, tendono a richiedere rollout coordinati dei componenti, cosa che può diventare un freno alla produttività degli sviluppatori.

Le architetture tightly coupled sono un modo abbastanza tradizionale di costruire applicazioni.
Pur non essendo necessariamente coerenti con tutte le best practice di sviluppo di [microservizi](/it/microservices/), possono essere utili in circostanze specifiche.
Tendono ad essere più veloci e più semplici da implementare e, come le [applicazioni monolitiche](/it/monolithic-apps/), possono velocizzare il ciclo iniziale di sviluppo.
