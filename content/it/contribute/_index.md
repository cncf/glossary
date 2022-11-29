---
title: Come Contribuire
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

I contenuti del Glossario Cloud Native sono disponibili in [questo repository di GitHub](https://github.com/cncf/glossary), dove troverai una lista di [_issue_](https://github.com/cncf/glossary/issues), [_PR_](https://github.com/cncf/glossary/pulls), e [_discussion_](https://github.com/cncf/glossary/discussions) riguardanti il glossario. 

Ci sono tre modi in cui puoi contribuire:

1) Proporre nuove voci
2) Migliorare quelle esistenti
3) Aiutare nella traduzione del glossario

## Entra nella Glossary community 

Valuta di entrare anche tu nei nostri meeting mensili del _Glossary Working Group_, se hai intenzione di contribuire regolarmente. Puoi trovare i dettagli del meeting nel [calendario della CNCF](https://www.cncf.io/calendar/). Puoi anche connetterti con i gestori e i contributors nel nostro canale #glossary-localizations della [CNCF Slack](https://cloud-native.slack.com/) — ti aspettiamo! 

## Proporre nuove voci

Puoi sia proporre nuove voci su cui altri possono lavorare, o crearne tu stesso anche la definizione. In entrambi i casi dovrai iniziare aprendo una _issue_ (avrai bisogno di un account di Github per farlo).

Di seguito trovi una guida che ti spiegherà passo dopo passo come fare, se non hai ancora dimestichezza con Github. Se invece **sei un GitHub Pro**, assicurati di scorrere la lista degli issue prima e usare il template corretto, una naming convention appropriata e segnalare la tua PR su Slack (altrimenti potremmo non notarla). Infine, assicurati di leggere la [Guida di Stile](/it/style-guide/) prima di iniziare — grazie! 

### Creare una issue

Apri le issues nel [repo del Glossario su GitHub](https://github.com/cncf/glossary/issues) and clicca su "new issue".

![issues](/images/how-to/howto-01.png)

Qui sono presenti diversi template. Per proporre un nuovo termine in inglese, seleziona "English Language Glossary Request". 

![templates](/images/how-to/howto-02.png)

Aggiungi la parola che vuoi suggerire e clicca su "submit new issue". Se stai solo proponendo un nuovo termine, hai già finito! Se invece intendi lavorare sulla sua definizione, prosegui con i prossimi step.

![nuova issue](/images/how-to/howto-03.png)

Entra nel canale #glossary dello Slack CNCF e contatta @Catherine Paganini, @jmo e @Seokho Son, informandoli che hai creato una issue e che vuoi lavorarla. Ti assegneranno la issue, segnalando agli altri che il termine è già stato preso in carico.

Di seguito puoi notare che le prime tre voci sono da assegnare, mentre la successiva è stata assegnata a qualcuno.

![assegnare un termine](/images/how-to/howto-04.png)

nota che puoi lavorare su un termine alla volta. Se vuoi lavorare su più termini, ti chiediamo di finirne uno prima di richiedere di essere assegnato al successivo.

### Proporre un nuovo termine (creare una PR)

Prima di iniziare, per favore leggi la [Guida di Stile](/it/style-guide/) — aiuterà a minimizzare gli errori più comuni in fase di revisione. Ti consigliamo caldamente di iniziare da un Word o da un Google doc. 

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

Aggiungi il nome del termine nell'URL (senza caratteri maiuscoli né spazi) e `.md` alla fine (se la preview di Github non funziona, è probabile tu abbia dimenticato di aggiungere `.md`). Ora aggiungi il contenuto del template. Copia e incolla la definizione del termine nel file. 
Nota che GitHub usa il _markdown_ per formattare il testo (ad esempio per identificare un link o un testo in grassetto o in corsivo). Fai riferimento a questo schema per saperne di più:[markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/). Per visualizzare la pagina in anteprima, vai alla "preview".

![finalizza il termine](/images/how-to/howto-10.png)

Scorri la pagina in basso e dai un titolo al _commit_ quando sei pronto per la pubblicazione. In questo momento stai effettuando il _commit_ del termine nel tuo _branch_. Per creare una PR manca ancora un passaggio. Clicca su "commit new file" e…

![commit new file](/images/how-to/howto-11.png)

…ora puoi creare una PR:

![crea una pr](/images/how-to/howto-12.png)

Ora dovesti vedere la tua PR tra le "Pull requests".

![prs](/images/how-to/howto-13.png)

## Modifica un termine esistente

Per modificare un termine esistente, puoi decidere di proporre una modifica tramite una _issue_ o modificare direttamente il termine e creare una pull request (PR).

### Richiedere una modifica tramite una _issue_

Se vuoi riportare un problema con un termine ma non puoi/vuoi risolverlo da solo, clicca su "report issue"

![report issue](/images/how-to/howto-14.png)

Aprirai così una _issue_. Riporta nella descrizione che tipo di modifica bisogna apportare, e la motivazione. Una volta cliccato su _submit_, hai finito . 

![submit issue](/images/how-to/howto-15.png)

### Aggiornare un termine direttamente

Per aggiornare direttamente il termine, vai su "edit this page." 

![edit this page](/images/how-to/howto-16.png)

ti si aprirà la pagina di Github relativa al termine. Fai le tue modifiche e apri una PR. Fai riferimento al paragrafo [Proporre un nuovo termine](#proporre-un-nuovo-termine-creare-una-pr) per una descrizione dettagliata di come modificare un file markdown.

## Aiutaci a tradurre il Glossario

Per aiutare a tradurre il Glossario nella tua lingua madre, entra nel canale #glossary-localizations della [CNCF Slack](https://cloud-native.slack.com/) e faccelo sapere. Puoi entrare a far parte di un team già esistente o crearne uno nuovo. Puoi anche partecipare al nostro meeting del Glossary Working Group. Trovi tutte le informazioni per il meeting nel [calendario della CNCF](https://www.cncf.io/calendar/). Ti aspettiamo!
