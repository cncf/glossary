---
title: Applicazioni stateful
status: Completed
category: Proprietà
tags: ["fondamentali", "Proprietà", "applicazione"]
---

Esistono diversi modi per salvare lo stato di un'applicazione _stateful_.
Il più semplice è mantenere lo stato in memoria e non persisterlo.
Ma il problema è che ad ogni riavvio dell'applicazione verrebbe perso.
Per evitare che ciò accada, lo stato viene persistito in locale (su disco) o in database.

Quando parliamo di applicazioni _stateful_ (letteralmente "con stato") e stateless (letteralmente "[senza stato](/it/stateless-apps/)"),
il concetto di stato si riferisce a tutti i dati da salvare affinché l'applicazione funzioni come previsto. Qualsiasi tipo di esperienza di acquisto online che ti ricorda a che punto sta il tuo carrello è, ad esempio, un'applicazione _stateful_.

Oggi, la maggior parte delle applicazioni che usiamo sono almeno in parte stateful. Tuttavia, negli ambienti [cloud native](/it/cloud-native-apps/), le applicazioni stateful rappresentano una sfida, perché le applicazioni cloud native sono molto dinamiche. Le applicazioni sono rese scalabili verso l'alto o verso il basso, possono essere riavviate e spostate, ma devono comunque essere in grado di accedere al loro stato.

Pertanto, le applicazioni stateful necessitano di un qualche tipo di memoria accessibile, come ad esempio un database.