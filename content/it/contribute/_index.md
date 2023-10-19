---
title: Come Contribuire
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

I contenuti del Glossario Cloud Native sono disponibili in [questo repository di GitHub](https://github.com/cncf/glossary), 
dove troverai una lista di [_issue_](https://github.com/cncf/glossary/issues), [_PR_](https://github.com/cncf/glossary/pulls), e 
[_discussion_](https://github.com/cncf/glossary/discussions) riguardanti il glossario. 

Ci sono quattro modi in cui puoi contribuire:

1) [Risolvere una _issue_ aperta](#work-on-an-existing-issue)
2) [Proporre nuove voci](#propose-new-terms)
3) [Migliorare quelle esistenti](#update-an-existing-term)
4) [Aiutare nella traduzione del glossario](#help-translate-the-glossary)

## Chi può contribuire?

L'obiettivo di questo Glossario è di rendere il contesto _cloud native_ - noto a tutti per la sua complessità - più fruibile e facile da comprendere. 
Pertanto il nostro impegno è verso la semplicità.

Spiegare concetti complessi in parole semplici è di per sé *veramente* difficile.
E sebbene un prodotto finale alla portata di tutti possa sembrare facile da ottenere, raggiungere il livello di semplicità prefissato è il risultato di duro lavoro e collaborazione tra esperti del mondo nativo cloud.
In sintesi, per contribuire alla scrittura di nuovi termini, c'è bisogno di una profonda conoscenza dell'argomento.

Per la traduzione dei contenuti il discorso è diverso.
Data una solida definizione in inglese, si possono creare termini ben tradotti anche se si ha meno esperienza sul tema. 
Questo aspetto del progetto è più a misura di principiante.

## Entra nella Glossary community {#join-the-glossary-community}

Valuta di entrare anche tu nei nostri meeting mensili del _Glossary Working Group_, se hai intenzione di contribuire regolarmente. 
Puoi trovare i dettagli del meeting nel [calendario della CNCF](https://www.cncf.io/calendar/).
Puoi anche connetterti con i gestori e i contributors nel nostro canale #glossary-localizations della [CNCF Slack](https://cloud-native.slack.com/) 
— ti aspettiamo! 

## Risolvere una _issue_ aperta {#work-on-an-existing-issue}

Vai nella sezione _issues_ nel [repo del Glossario su GitHub](https://github.com/cncf/glossary/issues). 
Lì troverai una lista di _issues_. Puoi filtrarle per _label_ (come ad esempio "English language", "help needed", "good first issue"). 
NB: Hai bisogno di un account Github! 

![_Issue_ e _label_](/images/how-to/issue-and-labels.png)

Assicurati che il termine di tuo interesse non sia già stato assegnato ad altri.
Di seguito puoi notare che le prime tre voci sono da assegnare, mentre la successiva è stata assegnata a qualcuno.

![assegnare un termine](/images/how-to/howto-04.png)

Una volta trovato il termine a cui vuoi lavorare, scrivilo nella issue. Ti basta cliccare e aggiungere un commento.

![Assegnarsi una issue](/images/how-to/claiming-an-issue.png)

Quindi considera anche di unirti al canale [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) nello Slack del CNCF e 
di informare i _maintainers_ che ti sei assegnato un nuovo termine 
(idealmente dovresti menzionare _@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_, and/or _@iamnoah_ per essere sicuro che ricevano il messaggio). 
Ricorda: puoi solo assegnarti un termine per volta. 
Se vuoi lavorare su più termini, finiscine uno prima di assegnartene un altro.

Una volta assegnato a te, puoi iniziare a lavorarci. 
Per gli step successivi, fai riferimento alla sezione [Proporre un nuovo termine (creare una PR)](#submitting-a-new-term).

## Proporre nuove voci {#propose-new-terms}

Puoi sia proporre nuove voci su cui altri possono lavorare, o crearne tu stesso anche la definizione. 
In entrambi i casi dovrai iniziare aprendo una _issue_.
Considera sempre che i termini devono aderire alla [definizione di _cloud native_ secondo il CNCF](https://github.com/cncf/toc/blob/main/DEFINITION.md). 
le sole eccezioni sono i termini fondamentali a supporto della comprensione dei concetti _cloud native_.

Di seguito trovi una guida che ti spiegherà passo dopo passo come fare, se non hai ancora dimestichezza con Github. 
Se invece **sei un GitHub Pro**, assicurati di scorrere la lista degli issue prima, di usare il template corretto
e una naming convention appropriata, e di segnalare la tua PR su Slack (altrimenti potremmo non notarla) assieme alla posizione del template del file. 
Infine, assicurati di leggere la [Guida di Stile](/it/style-guide/) prima di iniziare — grazie! 

### Creare una issue {#creating-an-issue}

Apri le issues nel [repo del Glossario su GitHub](https://github.com/cncf/glossary/issues) and clicca su "new issue".

![issues](/images/how-to/howto-01.png)

Qui sono presenti diversi template. Per proporre un nuovo termine in inglese, seleziona "English Language Glossary Request". 

![templates](/images/how-to/english-issue-template.jpg)

Aggiungi la parola che vuoi suggerire, rispondi alle due domande di seguito, contrassegna le _checkbox_ e clicca su "Submit new issue".
Se stai solo proponendo un nuovo termine, hai già finito! Se invece intendi lavorare sulla sua definizione, prosegui con i prossimi step.

### Triaging your issue {#triaging-your-issue}

A questo punto i maintainers valuteranno la issue, 
e stabiliranno se il termine potrà far parte del Glossario 
(non tutti i termini saranno ammessi, ma soltanto quelli riconosciuti e largamente diffusi nell'ambito _cloud native_).

Per favore informa i _maintainers_ su Slack che hai inserito la richiesta di un nuovo termine, altrimenti potrebbero non notarla.
Idealmente dovresti menzionare _@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_, and/or _@iamnoah_.
Se il termine è approvato e hai espresso la volontà di lavorarci su, lo assegneranno a te.

Nota che puoi lavorare su un termine alla volta. 
Se vuoi lavorare su più termini, ti chiediamo di finirne uno prima di richiedere di essere assegnato al successivo.

### Proporre un nuovo termine (creare una PR) {#submitting-a-new-term}

Prima di iniziare, per favore leggi la [Guida di Stile](/it/style-guide/) — aiuterà a minimizzare gli errori più comuni in fase di revisione. 
Ti consigliamo caldamente di iniziare da un Word o da un Google doc. 

Una volta che il termine è pronto per essere pubblicato, vai alla cartella `content` del codice…

![content](/images/how-to/howto-05.png)

…quindi nel folder "en" (o della cartella che riporta la sigla della lingua per cui stai proponendo il termine)…

![cartella della lingua](/images/how-to/howto-06.png)

…quindi seleziona il file `_TEMPLATE.md`

![template](/images/how-to/howto-07.png)

Copiane il contenuto…

![copia il contenuto](/images/how-to/howto-08.png)

…e ritorna nella cartella "en". Clicca su "add file" e seleziona "create new file".

![crea un nuovo file](/images/how-to/howto-09.png)

Aggiungi il nome del termine nell'URL (senza caratteri maiuscoli, né spazi, né parentesi, e con l'uso del trattino per separare le parole) 
e `.md` alla fine (se la preview di Github non funziona, è probabile tu abbia dimenticato di aggiungere `.md`). 
Ora aggiungi il contenuto del template. Copia e incolla la definizione del termine nel file. 
Per agevolare la review, per favore **usa [interruzioni di riga semantiche](https://sembr.org/)** (vale a dire: una riga per ogni frase).
Nota che GitHub usa il _markdown_ per formattare il testo (ad esempio per identificare un link o un testo in grassetto o in corsivo). 
Fai riferimento a questo schema per saperne di più:[markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/). 
Per visualizzare la pagina in anteprima, vai alla "preview".

![finalizza il termine](/images/how-to/howto-10.png)

Scorri la pagina in basso e dai un titolo al _commit_ quando sei pronto per la pubblicazione. 
In questo momento stai effettuando il _commit_ del termine nel tuo _branch_. 
Per creare una PR manca ancora un passaggio. Clicca su "commit new file" e…

![commit new file](/images/how-to/howto-11.png)

…ora puoi creare una PR:

![crea una pr](/images/how-to/howto-12.png)

Ora dovresti vedere la tua PR tra le "Pull requests".

![prs](/images/how-to/howto-13.png)

## Modifica un termine esistente {#update-an-existing-term}

Per modificare un termine esistente, puoi decidere di proporre una modifica tramite una _issue_ o modificare direttamente il termine e creare una pull request (PR).

### Richiedere una modifica tramite una _issue_ {#request-a-change-via-an-issue}

Se vuoi riportare un problema con un termine ma non puoi/vuoi risolverlo da solo, clicca su "report issue"

![report issue](/images/how-to/howto-14.png)

Aprirai così una _issue_. Riporta nella descrizione che tipo di modifica bisogna apportare, e la motivazione. Una volta cliccato su _submit_, hai finito . 

![submit issue](/images/how-to/howto-15.png)

### Aggiornare un termine direttamente {#update-a-term-directly}

Per aggiornare direttamente il termine, vai su "edit this page." 

![edit this page](/images/how-to/howto-16.png)

ti si aprirà la pagina di Github relativa al termine. Fai le tue modifiche e apri una PR. 
Fai riferimento al paragrafo [Proporre un nuovo termine](#proporre-un-nuovo-termine-creare-una-pr) per una descrizione dettagliata di come modificare un file markdown.

## Aiutaci a tradurre il Glossario {#help-translate-the-glossary}

Per aiutare a tradurre il Glossario nella tua lingua madre, entra nel canale [#glossary-localizations](https://cloud-native.slack.com/archives/C02N2RGFXDF) della CNCF Slack e faccelo sapere.
Puoi entrare a far parte di un team già esistente o crearne uno nuovo.
(per vedere cosa comporta, leggi la nostra [Guida alla Localizzazione](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md)). 
Puoi anche partecipare al nostro meeting del Glossary Working Group. Trovi tutte le informazioni per il meeting nel [calendario della CNCF](https://www.cncf.io/calendar/). 
Ti aspettiamo!
