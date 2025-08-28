---
title: Macchina virtuale (VM)
status: Completed
category: Tecnologia
tags: ["fondamenti", "infrastruttura", ""]
---


Una macchina virtuale (VM) è un computer e il suo sistema operativo che non è legato a un particolare componente hardware. Le macchine virtuali si basano sulla [virtualizzazione](/it/virtualization/) per suddividere un singolo computer fisico in più computer virtuali. Questa separazione consente alle organizzazioni ed ai fornitori di infrastrutture di creare e distruggere VM senza influire sull'hardware sottostante.

## Quali problematiche affronta

Le macchine macchine [bare metal](/it/bare-metal-machine/) sono vincolate a un singolo sistema operativo (OS), il modo in cui le risorse della macchina possono essere utilizzate è alquanto limitato. Inoltre, quando un sistema operativo è legato a una singola macchina fisica, la sua disponibilità è direttamente legata a quell'hardware. Se la macchina fisica è offline a causa di manutenzione o guasti hardware, lo è anche il sistema operativo.

## In che modo aiuta

Rimuovendo la relazione diretta tra un sistema operativo e una singola macchina fisica, si risolvono diversi problemi delle macchine bare metal: tempo di provisioning (approvvigionamento), utilizzo dell'hardware e resilienza.
Non essendo necessario acquistare, installare o configurare nuovo hardware, i tempi di provisioning per un nuovo computer migliorano drasticamente. Le VM permettono inoltre di sfruttare meglio le risorse hardware esistenti, eseguendo più macchine virtuali su un unico server fisico. Le VM sono anche più resilienti rispetto alle macchine fisiche perchè non sono legate ad un hardaware specifico: quando una macchina fisica deve essere disattivata, le VM che vi girano possono essere spostate su un’altra macchina con tempi di fermo minimi o nulli.
