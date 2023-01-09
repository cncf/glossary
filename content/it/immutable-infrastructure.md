---
title: Infrastruttura immutabile
status: Completed
category: Proprietà
tags: ["infrastruttura", "", ""]
---

Un'Infrastruttura immutabile si riferisce a un'infrastruttura informatica 
([macchine virtuali](/it/virtual-machine/), [container](/it/container/), apparecchiature di rete) 
che non può essere cambiata dopo essere stata deployata. 
Questo può essere imposto da un processo automatico che sovrascrive le modifiche non autorizzate o 
tramite un sistema che non consente di apportare modifiche. 
I container sono un buon esempio di infrastruttura immutabile, 
perché cambiamenti persistenti ai container possono essere apportati solamente 
creando una nuova versione del container o ricreando il container esistente dalla sua immagine.

Prevenendo o identificando cambiamenti non autorizzati, 
le infrastrutture immutabili rendono più facile l'individuazione e la mitigazione di rischi di sicurezza. 
Il funzionamento di un sistema di questo tipo diventa molto più semplice 
perché gli amministratori possono fare delle ipotesi su di esso. 
Dopotutto, sanno che nessuno può aver commesso errori o apportato cambiamenti che si è dimenticato di comunicare. 
L'infrastruttura immutabile va di pari passo con l'[infrastructure as code](/it/infrastructure-as-code/), 
nella quale tutte le automazioni necessarie per la creazione dell'infrastruttura sono conservate in un [controllo di versione](/it/version-control/) (ad esempio, Git). 
Questa combinazione di immutabilità e controllo di versione significa che 
c'è un persistente registro dei log di ogni modifica autorizzata al sistema.
