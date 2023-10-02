---
title: eBPF
status: Completed
category: architettura
---

## Cos'è

eBPF, per esteso "Berkeley Packet Filter", è una tecnologia che consente di eseguire piccoli programmi o script in sandbox nello spazio kernel di un sistema Linux, 
senza dover modificare il codice sorgente del kernel o caricare moduli del kernel Linux specifici.
Un sistema Linux ha due spazi di esecuzione dei processi: il kernel e lo spazio utente. 
Il kernel rappresenta il nucleo del sistema operativo ed è l'unica parte con accesso illimitato all'hardware.
Le applicazioni risiedono nello spazio utente e, quando necessitano di autorizzazioni più elevate, inviano una richiesta al kernel.
Per le applicazioni che richiedono piu previlegi, come l'accesso diretto all'hardware, 
il kernel può essere esteso tramite l'approccio noto come "moduli kernel Linux". 
Questo approccio estende la funzionalità predefinita del kernel, consentendo alle applicazioni un accesso più profondo ai componenti sottostanti. 
Tuttavia, questo approccio introduce anche rischi di sicurezza, rendendo eBPF un'alternativa interessante.

## Quali problematiche affronta
In genere, le applicazioni vengono eseguite nello spazio utente e, se l'applicazione richiede alcuni privilegi dal kernel (ad esempio per accedere a una parte hardware),
lo richiede al kernel tramite una "chiamata di sistema".
Nella maggior parte dei casi, questo approccio funziona bene. Ci sono però dei casi, come ad esempio nell'utilizzo di funzionalità di osservabilità, sicurezza e networking, 
in cui gli sviluppatori richiedono una maggiore flessibilità per l'accesso al sistema a basso livello. 
A questo scopo, possiamo utilizzare i moduli del kernel Linux, che estendono la base del kernel senza richiederne la modifica del codice sorgente.
Sebbene ci siano vantaggi nell'utilizzo dei moduli del kernel Linux, questo approccio introduce anche rischi per la sicurezza: 
operando nello spazio kernel, in caso di problemi i moduli del kernel Linux possono causare il crash del kernel stesso e, quando il kernel si blocca, si blocca anche l'intera macchina.
Inoltre, i moduli del kernel hanno privilegi elevati e accesso diretto alle risorse di sistema. Se non sono adeguatamente protetti, gli aggressori possono sfruttarli.

## In che modo aiuta
eBPF offre un ambiente controllato e delimitato per l'esecuzione di programmi definiti dall'utente rispetto ai moduli del kernel Linux.
Viene eseguito in un ambiente sandbox all'interno del kernel, fornendo isolamento e mitigazione dei rischi.
Se una vulnerabilità o un difetto vengono sfruttate in un programma eBPF, l'impatto è generalmente limitato all'ambiente sandbox.
Inoltre, prima che un programma eBPF possa iniziare a essere eseguito nel kernel, deve superare alcune verifiche.
All'interno del kernel, un componente chiamato "eBPF verifier", controlla il programma eBPF per potenziali violazioni di sicurezza,
come l'accesso alla memoria fuori dai limiti, i loop infiniti e le funzioni del kernel non autorizzate.
In questo modo, si assicura che il programma non entri in un loop infinito e causi un crash del kernel.
Questi controlli di sicurezza rendono eBPF un'opzione più sicura per eseguire applicazioni nel kernel Linux rispetto ai moduli del kernel Linux.