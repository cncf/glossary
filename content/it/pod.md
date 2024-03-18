---
title: Pod
status: Completed
category: Concetto
tags: ["infrastruttura", "fondamenti", ""]
---

## Cos'è

In un ambiente [Kubernetes](/it/kubernetes/), un pod è la più piccola unità di base di un'applicazione;
rappresenta un blocco di costruzione essenziale per l'installazione e la gestione di applicazioni containerizzate.
Ogni pod contiene una singola istanza applicativa, e può contenere uno o più [container](/it/container/).
Kubernetes gestisce i pod come parte di un deployment e se necessario può eseguire lo scaling [verticale](/it/vertical-scaling/) o [orizzontale](/it/horizontal-scaling/) dei pod.

## Quali problematiche affronta

Sebbene i container agiscano generalmente come unità indipendenti che eseguono e controllano un particolare carico di lavoro, 
ci sono casi in cui i container devono interagire ed essere controllati in modo strettamente accoppiato.

Se ciascuno di questi container strettamente correlati fosse gestito individualmente, si verrebbero a creare attività di gestione ridondanti. 
Ad esempio, l'operatore dovrebbe ripetutamente verificare il posizionamento dei container correlati per assicurarsi che rimangano insieme. 
Sebbene i cicli di vita di questi container correlati debbano essere sincronizzati, possono essere gestiti solo individualmente.

## In che modo aiuta

I pod raggruppano i container strettamente legati in un'unica unità, semplificando notevolmente le operazioni sui container.
Ad esempio, i container ausiliari vengono spesso utilizzati insieme al container principale per aggiungere funzionalità aggiuntive o per impostare configurazioni globali. 
Esempi possono includere container che iniettano e applicano impostazioni di base al container principale,
sidecar (container) che gestiscono il routing del traffico di rete per il container principale (vedi [service mesh](/it/service-mesh/)), 
o container che raccolgono i log di altri determinati container.


L'allocazione di memoria e CPU può essere definita a livello di pod, consentendo ai container all'interno di condividere le risorse in modo flessibile, o per container.
