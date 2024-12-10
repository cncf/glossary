---
title: Continuous integration (CI)
status: Completed 
category: Concetto
tags: ["metodologia", "applicazione", ""]
---

## Cos'è

Continuous integration, spesso abbreviato CI, è la pratica di integrare le modifiche al codice il più regolarmente possibile. 
La CI è il prerequisito per la [continuous delivery](/it/continuous-delivery/) (CD). 
Tradizionalmente, il processo di CI inizia quando le modifiche al codice vengono committate in un sistema di controllo del codice sorgente (Git, Mercurial o Subversion)
e termina con un artefatto testato pronto per essere consumato da un sistema di CD.

## Quali problematiche affronta

I software sono spesso estesi e complessi, con numerosi sviluppatori che li mantengono e aggiornano. 
Lavorando in parallelo su diverse parti del sistema, 
gli sviluppatori potrebbero apportare modifiche in conflitto e danneggiare inavvertitamente il lavoro l'uno dell'altro.
Inoltre, con più sviluppatori che lavorano allo stesso progetto, 
qualsiasi attività quotidiana come il test e la misura della qualità del codice dovrebbe essere ripetuta da ogni sviluppatore, sprecando tempo.

## In che modo aiuta

La CI controlla automaticamente che le modifiche al codice si inseriscano in modo pulito ogni volta che uno sviluppatore finalizza una modifica.
È una pratica molto diffusa utilizzare il server CI per eseguire controlli di qualità del codice, test e persino installazioni.
In questo modo, diventa una concreta implementazione del controllo qualità all'interno dei team.
Il processo di CI consente ai team di software di identificare chiaramente ogni commit di codice come un fallimento o come un valido candidato
 al rilascio in produzione.

## Termini correlati

* [Continuous Delivery](/it/continuous-delivery/)
* [Continuous Deployment](/it/continuous-deployment/)
