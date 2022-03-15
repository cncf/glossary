---
title: Continuous Delivery (CD)
status: Completed
category: Concetto
---

## Cos'è
La consegna continua, spesso abbreviata in CD, è un insieme di pratiche in cui le modifiche al codice vengono automaticamente implementate in un ambiente di accettazione (oppure, nel caso di distribuzione continua, in produzione). Il CD include in modo fondamentale le procedure per garantire che il software sia adeguatamente testato prima della distribuzione e fornisce un modo per ripristinare le modifiche se ritenuto necessario. L'integrazione continua (CI) è il primo passo verso la distribuzione continua (ovvero, le modifiche devono essere unite in modo pulito prima di essere testate e implementate).

## Quale problema affronta 
La distribuzione di aggiornamenti [affidabili](/it/reliability/) diventa un problema su vasta scala. Idealmente, distribuiremmo più frequentemente per offrire un valore migliore agli utenti finali. Tuttavia, farlo manualmente si traduce in costi di transazione elevati per ogni modifica. Storicamente, per evitare questi costi, le organizzazioni hanno rilasciato meno frequentemente, implementando più modifiche contemporaneamente e aumentando il rischio che qualcosa andasse storto.

## In che modo aiuta
Le strategie CD creano un percorso completamente automatizzato per la produzione che testa e distribuisce il software utilizzando varie strategie di distribuzione come le versioni [canary](/it/deployment_canary/) o [blue-green](/it/deployment_blue_green/). Ciò consente agli sviluppatori di distribuire codice frequentemente, garantendo loro la tranquillità che la nuova revisione sia stata testata. In genere, lo sviluppo basato su _trunk-based_development_ viene utilizzato nelle strategie CD invece di ramificazioni di funzionalità o pull requests.