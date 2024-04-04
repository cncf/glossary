---
title: Policy as Code (PaC)
status: Completed
category: Concetto
tags: ["metodologia", "", ""]
draft: 
---

## Cos'è

Policy as code è la pratica che consente di memorizzare la definizione delle policy in uno o più file in formato leggibile e processabile da macchine. 
Questa metodologia sostituisce il modello tradizionale in cui le policy sono documentate in formato leggibile da umani in documenti esterni al sistema.

## Quali problematiche affronta

La costruzione di applicazioni e infrastrutture è spesso vincolata a molte policy che un'organizzazione definisce, 
ad esempio policy di sicurezza che vietano di memorizzare segreti nel codice sorgente, di eseguire un container con autorizzazioni di superutente 
o di memorizzare alcuni dati al di fuori di una specifica regione geografica. 
Per gli sviluppatori e i revisori è molto laborioso e soggetto a errori verificare manualmente le applicazioni e le infrastrutture rispetto alle policy documentate.
I processi manuali non possono soddisfare i requisiti di reattività e scalabilità delle applicazioni native del cloud.

## In che modo aiuta

Utilizzare Policy as Code consente la ripetibilità e riduce gli errori, a differenza di quanto avviene manualmente.
Un altro vantaggio è che il codice può essere gestito da un sistema di controllo di versione come Git. 
Git crea una cronologia dei log delle modifiche, che è particolarmente utile quando qualcosa non funziona come previsto. 
Consente all'utente di determinare chi ha apportato la modifica e di ripristinare una versione precedente.

