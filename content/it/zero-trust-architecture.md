---
title: Architettura Zero Trust
status: Completed
category: Concetto
tags: ["sicurezza", "", ""]
---

## Cos'è

L'architettura Zero trust prevede di progettare e implementare sistemi IT con un approccio
nel quale la fiducia è completamente rimossa.
Il principio fondamentale è "non fidarsi mai, verificare sempre": prima di comunicare con altri componenti di un sistema,
i dispositivi o i sistemi stessi attuano delle verifiche.
Oggi accade spesso che all'interno di un network aziendale i sistemi e i dispositivi possano comunicare liberamente tra loro
poiché si trovano all'interno del confine considerato affidabile del perimetro del network aziendale.
Un'architettura Zero trust applica l'approccio opposto, nel quale anche all'interno del perimetro del network
i componenti all'interno del sistema devono superare delle verifiche, prima che possa avvenire un qualsiasi tipo di comunicazione.

## Quali problematiche affronta

Con l'approccio tradizionale basato sulla fiducia con il quale si ritengono affidabili i sistemi e i dispositivi all'interno del perimetro del network aziendale,
l'assunto è che siccome c'è fiducia non ci sono problemi.
Un'architettura Zero trust, invece, considera la fiducia una vulnerabilità.
Nel caso in cui un agente malevolo abbia ottenuto l'accesso a un dispositivo considerato affidabile,
a seconda del livello di fiducia e accesso che abbia quel determinato dispositivo,
il sistema è vulnerabile ad un attacco
in quanto l'agente malevolo è all'interno del perimetro del network "affidabile", ed è in grado di spostarsi lateralmente in tutto il sistema.
In un'architettura Zero trust la fiducia è rimossa, riducendo così la superficie di attacco
in quanto un eventuale intruso è costretto ad essere verificato prima di poter procedere ulteriormente all'interno del sistema.

## In che modo aiuta

Il principale beneficio dell'adozione di un'architettura Zero trust consiste in una maggiore sicurezza
grazie alla riduzione della superficie d'attacco.
Rimuovere la fiducia da un sistema aziendale aumenta il numero e l'efficacia dei controlli di sicurezza
che un intruso deve superare per ottenere l'accesso ad altre aree del sistema.
