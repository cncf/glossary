---
title: Guida di Stile
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

Questa guida ti aiuterà a comprendere chi sono i destinatari del Glossario, la struttura delle definizioni, il livello di dettaglio richiesto e come mantenere uno stile coerente.

Il Glossario Cloud Native rispetta la [Guida di Stile](https://github.com/cncf/foundation/blob/master/style-guide.md) del repository CNCF, ma si è posto regole aggiuntive e specifiche:

1. Usa un linguaggio semplice, accessibile e che eviti tecnicismi spinti e buzzwords
2. [Evita un linguaggio eccessivamente colloquiale](https://en.wikipedia.org/wiki/Colloquialism)
3. [Usa un linguaggio concreto ed espressioni letterali](https://guidetogrammar.org/grammar/composition/abstract.htm)
4. Fai attenzione agli accenti, alla correlazione dei tempi verbali e alla punteggiatura
5. [Prediligi la forma attiva](https://www.ef.com/ca/english-resources/english-grammar/passive-voice/)
6. [Utilizza preferibilmente la forma affermativa](https://examples.yourdictionary.com/positive-sentence-examples.html)
7. Non eccedere con le parentesi
8. Non esagerare
9. Evita le ripetizioni
10. Sii concisə
11. Usa pure termini e diciture in inglese se sono largamente utilizzati in ambito tecnico, ma aggiungi comunque una traduzione italiana per chiarire.

Consigliamo di dare un'occhiata a questi [set di regole grammaticali](https://grammatica-italiana.dossier.net/grammatica-italiana-17.htm) e alle [40 regole di scrittura di Umberto Eco per scrivere bene in italiano](https://bologna.unicusano.it/universita/scrivere-correttamente-in-italiano/). Possono essere di aiuto.

## Destinatari

Il Glossario è scritto sia per un pubblico di destinazione tecnico sia per un pubblico di destinazione NON-tecnico. Per questa ragione assicurati che le definizioni siano espresse in termini semplici e che non diano per scontata una conoscenza tecnica pregressa. Lo spieghiamo meglio nel paragrafo [*Definizioni*](#template-definizioni).

## Template Definizioni

Ogni termine del glossario è contenuto in un file di markdown e segue questo schema: 

```md
---
title: 
status: 
category: 
---

## Cos'è

Una breve spiegazione della tecnologia o del concetto. 

## Quali problematiche affronta

Qualche riga per inquadrare il problema che viene affrontato. 

## In che modo aiuta

Un breve paragrafo per spiegare come la tecnologia o il concetto in questione risolvano il problema delineato.
```

### Title

All'inizio di una definizione si troverà l'etichetta **title** il cui valore deve essere espresso in *title case* (ogni elemento costituente il titolo deve iniziare con la maiuscola).

```md
---
title: Template Definizioni
```

### Status

L'etichetta **status** seguirà immediatamente il title. Questa label indica il livello di verifica del contenuto.

I valori previsti sono: 

- Completed (Completato)
- Feedback Appreciated (Del feedback è apprezzato)
- Not Started (Non validato)

Una issue di aggiustamento può essere comunque aperta a valle di una definizione considerata completata. Mentre una definizione si trova nel processo di validazione, il suo stato verrà modificato in *Feedback Appreciated*.

```md
---
title: Template Definizioni
status: Feedback Appreciated
```

### Category

L'etichetta **category** segue la label status. I valori validi sono:

- Technology
- Property
- Concept

```md
---
title: Template Definizioni
status: Feedback Appreciated
category: Concept
---
```

### Definizioni

#### Tre paragrafi

Le definizioni categorizzate come **technology** e **concept** prevedono tre paragrafi distinti:

- **Cos'è**: chiara e breve introduzione di quanto stiamo parlando. 
- **Quali problematiche affronta**: il focus è sul problema e non sulla soluzione (proposta nel paragrafo successivo). Di fatto si cerca di evitare l'uso del termine che si sta spiegando e ci si concentra su *cosa* spinga ad avere bisogno della tecnologia o della pratica in questione. 
- **In che modo aiuta**: in questa parte della definizione, si torna al termine che si sta spiegando e si chiarisce in che modo possa aiutare a risolvere il problema identificato. 

La label **properties** non richiede un paragrafo a sé. La definizione è più che sufficiente. 

#### Semplice è meglio

Il Glossario ha come ultimo obiettivo **spiegare concetti complessi in parole semplici** — qualcosa di sorprendentemente difficile che richiederà quasi per certo svariate revisioni. Il consiglio è di tenere sempre ben presente il pubblico di destinazione, mentre si descrive un termine. Bisognerebbe evitare l'uso di espressioni eccessivamente tecniche e buzzword di varia natura. Lo evidenziamo perché ti troverai quasi per certo a farlo anche tu involontariamente e dovrai rivedere i tuoi contenuti.

Quando opportuno, fa' riferimenti ad **esempi reali** che aiutino i lettori (soprattutto quelli senza background tecnico) a capire meglio *quando* e *perché* il termine che stai descrivendo è rilevante.

Se vengono menzionati lemmi che sono già disponibili, ricordati di **inserire un link alla definizione presente nel Glossario** (è sufficiente farlo solo la prima volta che viene usato nel testo).

**Esempio**: dà un'occhiata al paragrafo "Cos'è" del [lemma service mesh](/service-mesh/). Se noti, contiene link ai termini microservices, service, reliability e observability. Inoltre, il confronto tra le criticità del network in un ambiente a microservizi (qualcosa di tecnico con cui è difficile relazionarsi da non tecnici) con le problematiche di una rete wi-fi (un esempio che chiunque usi un portatile può capire) permette una migliore comprensione generale. Quando possibile, cerca di individuare una connessione simile tra i due mondi.

#### Inizia con un Word o un Google doc

Ti suggeriamo di iniziare a lavorare su un Word o un Google doc, in modo da lasciare sedimentare lo scritto e riprenderlo dopo qualche giorno per rivederlo. Questo processo ti permetterà di rielaborare uteriormente frasi e pensieri, e di riformularli in modo ancora più semplice ed accessibile. E non scordarti di verificare l'ortografia prima di creare una PR!

Per avere la certezza di non aprire una PR sovrapponendoti a qualcun altro o viceversa, fa' in modo di richiedere l'assegnazione di una issue (o di aprirne una). Per saperne di più leggi [Come contribuire](/it/contribute/).

Ultimo suggerimento di carattere redazionale, prima di buttarti nella scrittura: prova a leggere qualche termine già pubblicato nel Glossario in modo da intuire il livello di dettaglio richiesto e le relative difficoltà, nonché l'utilizzo di esempi, come già citato sopra.

## Il processo di revisione: cosa aspettarsi 

Innanzitutto vorremmo far presente che i maintainers di questo progetto sono solo tre e che se ne occupano nel loro tempo libero, per cui a volte saranno più rapidi, altre volte avranno bisogno di più tempo per rispondere e revisionare: abbi pazienza. Per qualunque domanda, però, mettiti in contatto con loro o con i gruppi di lavoro sul canale #glossary dello Slack CNCF (per approfondimenti ti rimandiamo alla sezione [Come contribuire](/it/contribute/)).

Il nostro obiettivo è rendere il Glossario, la migliore risorsa possibile. Quando aprirai una PR, potremmo richiedere una o più revisioni. Non abbatterti: si tratta di richieste comuni alla maggior parte delle PR aperte. L'andirivieni, insieme alla collaborazione di più teste, assicurerà un contributo davvero utile per tutti i lettori sparsi nel mondo. 
