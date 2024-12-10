---
title: Blue Green Deployment
status: Completed
category: concetto
tags: ["metodologia", "applicazione", ""]
---

## Cos'è  
Il blue-green deployment è una strategia per l’aggiornamento di sistemi in esecuzione con un disservizio minimo. L’operatore ha in esecuzione due ambienti, denominati “blue” e “green”. Di questi, il primo è effettivamente in produzione (ed è la versione che tutti gli utenti stanno utilizzando), mentre il secondo è in aggiornamento. Una volta che i test sono conclusi sull’ambiente non attivo (il “green”), il traffico verso produzione viene dirottato su quest’ultimo (spesso con l’utilizzo di un [load balancer](/it/load-balancer/)). Si noti che con blue-green deployment si intende spesso lo scambio di interi ambienti, compresi molti [servizi](/it/service/), in blocco. Il termine è a volte usato impropriamente in relazione a singoli servizi in un sistema. Per evitare queste ambiguità, si preferisce usare il termine “zero-downtime deployment” (a impatto nullo) quando ci si riferisce alle singole componenti.


## Quali problematiche affronta  
I blue-green deployment consentono di ridurre al minimo il disservizio nel caso in cui si debba rilasciare una nuova versione di un software che manca di retrocompatibilità. Per esempio, un deployment di tipo blue-green è indicato nel caso di un negozio online che consista in un sito web e un database. Se il database ha bisogno di un aggiornamento, ma questa nuova versione non funziona con la versione corrente del sito web (e viceversa), in questo caso bisogna cambiare entrambe nello stesso momento. E se questo viene fatto in ambiente di produzione, l’utente noterà un disservizio.


## In che modo aiuta  
Il blue-green deployment è la strategia appropriata per software non [cloud-native](/it/cloud-native-apps/) che necessitano di un aggiornamento con un disservizio minimo. In ogni caso il suo utilizzo è solitamente un segnale che il software ha bisogno di essere reingegnerizzato, così da poter aggiornare le sue componenti singolarmente.

