---
title: Infrastructure as Code (IaC - Infrastruttura come Codice)
status: Feedback Appreciated 
category: Concetto
---

## Che cos'è
Infrastructure as Code è il processo di gestione e provisioning dell’infrastruttura attraverso file di definizione leggibili dalla macchina: tratta la configurazione dell’infrastruttura alla stregua di software di programmazione. Questo sostituisce il modello tradizionale in cui l'infrastruttura come servizio viene creata manualmente, in genere tramite script di shell o altri strumenti di configurazione, ed è elemento fondante del Cloud Computing (quindi essenziale per DevOps).

## Quali problematiche risolve
La creazione di applicazioni native sul cloud richiede che l'infrastruttura sia a perdere (disposable) e riproducibile. Deve essere inoltre possibile scalarla su richiesta in modo automatizzato e ripetibile, potenzialmente senza intervento umano. Il provisioning manuale, infatti, non può soddisfare i requisiti di reattività e scalabilità delle applicazioni cloud native. Le modifiche manuali all'infrastruttura non sono riproducibili, si scontrano presto con i limiti in termini di scalabilità e introducono il rischio di errori di configurazione. 

## In cosa aiuta
Rappresentando le risorse del data center come server, sistemi di bilanciamento del carico e sottoreti come codice, i team operations possono disporre di un'unica fonte di verità per tutte le configurazioni e possono gestire il proprio data center in una pipeline CI/CD, implementando sistemi di controllo versione e strategie di deployment.
