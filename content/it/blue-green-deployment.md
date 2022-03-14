---
title: Deployment Blue Green
status: Completed
category: Concetto
---

## Cos'è
Il _deployment blue-green_ (l'implementazione blu-verde) è una strategia per aggiornare i sistemi di un computer in esecuzione con tempi di inattività minimi. L'operatore mantiene due ambienti, soprannominati "blu" e "verde". Uno serve il traffico di produzione (la versione attualmente utilizzata da tutti gli utenti), mentre l'altro è aggiornato. Una volta conclusi i test sull'ambiente non attivo (verde), il traffico di produzione viene commutato (spesso tramite l'uso di un _load balancer_). Si noti che la distribuzione blu-verde di solito significa cambiare gli interi ambienti, inclusi molti servizi, tutto in una volta. In modo confuso, a volte il termine viene utilizzato in relazione a singoli servizi all'interno di un sistema. Per evitare questa ambiguità, quando ci si riferisce ai singoli componenti si preferisce il termine "distribuzione senza inattività".

## Quale problema affronta 
Le implementazioni blu-verde consentono tempi di inattività minimi durante l'aggiornamento del software che deve essere modificato a pari passo, a causa della mancanza di compatibilità con le versioni precedenti. Ad esempio, la distribuzione blu-verde sarebbe appropriata per un negozio online composto da un sito web e un database che deve essere aggiornato, ma la nuova versione del database non funziona con la vecchia versione del sito web e viceversa. In questo caso, entrambi devono essere modificati contemporaneamente. Se ciò avvenisse sul sistema di produzione, i clienti noterebbero tempi di inattività.

## In che modo aiuta
L'implementazione blu-verde è una strategia appropriata per il software nativo non cloud che deve essere aggiornato con tempi di inattività minimi. Tuttavia, il suo utilizzo è normalmente un fattore che il software legacy deve essere riprogettato in modo che i componenti possano essere aggiornati individualmente.