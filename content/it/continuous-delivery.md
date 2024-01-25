---
title: Continuous Delivery (CD)
status: Completed
category: Concetto
---

## Cos'è
La _Continuous Delivery_ (rilascio continuo), spesso abbreviata in CD, è un insieme di pratiche in cui le modifiche al codice vengono automaticamente implementate in un ambiente di accettazione (oppure, nel caso di distribuzione continua, in produzione). Parte integrante della CD sono le procedure per garantire che il software sia adeguatamente testato prima della distribuzione, nonché le modalità di ripristino in caso di necessità. L'integrazione continua (CI - da _Continuous Integration_) è il primo passo verso la distribuzione continua (vale a dire, le modifiche devono essere raggruppate in modo pulito prima di essere testate e implementate).

## Quali problematiche affronta
La distribuzione di aggiornamenti [affidabili](/it/reliability/) diventa un problema su vasta scala. Idealmente, bisognerebbe distribuire più frequentemente per offrire un maggiore valore agli utenti finali. Tuttavia, farlo manualmente si traduce in costi di transazione elevati per ogni modifica. Storicamente, per evitare questi costi, le organizzazioni hanno rilasciato meno frequentemente, implementando più modifiche contemporaneamente e aumentando il rischio che qualcosa andasse storto.

## In che modo aiuta
Le strategie CD creano un processo completamente automatizzato fino in produzione, che testa e distribuisce il software utilizzando varie strategie di distribuzione come le versioni [canary](/it/canary-deployment/) o [blue-green](/it/blue-green-deployment/). Ciò consente agli sviluppatori di distribuire codice frequentemente, garantendo loro la tranquillità che la nuova revisione sia stata testata. In genere, nelle strategie CD si preferisce lo sviluppo basato su _trunk_ al posto di quello su _feature branching_ o _pull requests_.