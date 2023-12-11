---
title: Firewall
status: Deprecated
category: Tecnologia
tags: ["sicurezza", "", ""]
---

## Cos'è

Un firewall è un sistema che filtra il traffico di un network basandosi su regole specifiche.
I firewall possono essere hardware, software, o una combinazione di entrambi.

## Quali problematiche affronta

Di default, un network permetterà a chiunque di entrare e uscire finché rispetta le regole di routing del network.
A causa di questo comportamento di default, mettere in sicurezza un network è complesso.
Per esempio, in un'applicazione bancaria basata su [microservizi](/it/microservices/) i servizi comunicano tra loro trasmettendo all'interno del network dati finanziari altamente sensibili.
Un malintenzionato può infiltrarsi nel network, intercettare le comunicazioni e creare dei danni, se non c'è un firewall attivo.

## In che modo aiuta

Un firewall esamina il traffico del network utilizzando regole predefinite.
Tutto il traffico è filtrato, e qualsiasi traffico proveniente da fonti inaffidabili o sospette viene bloccato: solo il traffico configurato per essere accettato accede al network.
I firewall creano una barriera tra i network interni, rendendoli sicuri e controllati.
