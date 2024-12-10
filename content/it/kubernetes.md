---
title: Kubernetes
status: Completed
category: tecnologia
tags: ["infrastruttura", "fondamenti", ""]
---

## Che cos'è

Kubernetes, spesso abbreviato in K8s, è un orchestratore di container open source.
Automatizza il ciclo di vita delle applicazioni containerizzate su infrastrutture moderne, fungendo da "sistema operativo per datacenter" che gestisce applicazioni su un [sistema distribuito](/it/distributed-systems/).

Kubernetes esegue i [container](/it/container/) sui [nodi](/it/nodes/) all'interno di un [cluster](/it/cluster/), raggruppando diverse risorse di infrastruttura come i load balancer, archiviazione persistente, ecc. per eseguire applicazioni containerizzate.

Kubernetes abilita automazione ed estensibilità, permettendo agli utenti di rilasciare applicazioni in modo dichiarativo (vedi sotto) in maniera riproducibile.
Le capacità di Kubernetes possono essere estese attraverso le sue [API](/it/application-programming-interface/), permettendo agli utilizzatori esperti di Kubernetes di sfruttare le sue capacità di automazione secondo le loro necessità.

## Quali problematiche affronta

L'automazione dell'infrastruttura e la gestione delle configurazioni in modo dichiarativo sono concetti importanti da diverso tempo, ma sono diventati sempre più importanti da quando il [cloud computing](/it/cloud-computing/) ha cominciato a diffondersi.
Man mano che la richiesta di risorse computazionali aumenta e le organizzazioni hanno bisogno di fornire più capacità operative con meno ingegneri, servono nuove tecnologie e nuovi metodi di lavoro.

## In che modo aiuta

Analogamente agli strumenti tradizionali di [infrastructure as code](/it/infrastructure-as-code/), Kubernetes aiuta con l'automazione e ha il vantaggio di lavorare con i container.
I container sono meno inclini ai disallineamenti di configurazione rispetto a macchine [virtuali](/it/virtual-machine/) o fisiche.

Inoltre, Kubernetes lavora in maniera dichiarativa: ciò significa che invece di avere operatori che istruiscono la macchina su come fare qualcosa, descrivono — di solito tramite file manifest (per esempio YAML) — come l'infrastruttura dovrebbe essere.
Kubernetes poi si occupa del "come" renderla tale.
Questo permette a Kubernetes di essere altamente compatibilie con l'infrastructure as code.

Kubernetes ha anche capacità di [self-healing](/it/self-healing/).
Lo stato reale del cluster corrisponderà sempre con lo stato desiderato dell'operatore.
Se Kubernetes individua una disparità rispetto a quanto scritto nel file manifest, un controller Kubernetes si attiva e lo sistema.
Mentre l'infrastruttura utilizzata da Kubernetes può essere in continua evoluzione, Kubernetes si adatta costantemente e automaticamente ai cambiamenti e garantisce la corrispondenza con lo stato desiderato.
