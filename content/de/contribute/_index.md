---
title: Wie Man etwas beitragen kann
toc_hide: true
menu:
  main:
    weight: 10
    pre: <i class='fas fa-pen-square'></i>
---

Der Inhalt des Cloud Native Glossars ist [hier](https://github.com/cncf/glossary) gespeichert, wo sich eine Liste von [GitHub Issues](https://github.com/cncf/glossary/issues), [Pull Requests](https://github.com/cncf/glossary/pulls) und [Diskussionen](https://github.com/cncf/glossary/discussions) über das Glossar finden.

Es gibt drei Möglichkeiten sich zu beteiligen:

1) Neue Begriffe vorschlagen
2) Existierende Begriffe aktualisieren 
3) Bei der Übersetzung helfen

## Werde Mitglied der Glossar-Community!
Wer regelmäßig einen Beitrag leisten möchten, sollte an den monatlichen Treffen der Glossar-Arbeitsgruppe teilnehmen. Details zu den Treffen befinden sich im [CNCF Kalender] (https://www.cncf.io/calendar/). Ihr könnt euch auch mit den Betreuern und anderen Mitwirkenden in unserem #glossary Kanal über Slack austauschen - wir freuen uns auf euch! 

## Neue Begriffe vorschlagen
Ihr könnt neue Begriffe vorschlagen, an dem andere arbeiten sollen, oder selbst eine neue Definition erstellen. Der erste Schritt ist jedenfalls das Erstellen eines GitHub Issues für ein neues Anliegen (ein GitHub-Konto wird benötigt).

Es folgt eine Schritt-für-Schritt-Anleitung für diejenigen, die mit GitHub noch nicht vertraut sind. **Wenn Du bereits ein GitHub-Profi** bist, verwende bitte unsere Vorlagen für die Erstellung eines neuen GitHub-Issue, achte darauf die richtigen Namenskonventionen und den [Style Guide] (https://glossary.cncf.io/style-guide/) einzuhalten, mach dich vertraut mit unseren Vorlagen und informiere uns über eingestellte Pull Requests über Slack (damit wir sie nicht übersehen). Vielen Dank! 

### Neues GitHub Issue anlegen
Gehe zu den [Github Issues](https://github.com/cncf/glossary/issues) des Glossar Repositories und klicke auf "New issue".

![issues](/images/how-to/howto-01.png)

Dort sind eine Vielzahl von Vorlagen zu sehen. Um einen neuen Begriff in deutscher Sprache vorzuschlagen, wähle "German Language Glossary Request".

![templates](/images/how-to/howto-02.png)

Füge den gewünschten Begriff ein, und klicke auf "Submit new issue". Falls du den Begriff lediglich vorschlagen wolltest, bist du jetzt bereits fertig! Falls du auch daran arbeiten möchtest, folge den nächsten Schritten. 

![neues issue](/images/how-to/howto-03.png)

Treten dem #glossary Kanal in dem CNCF Slack bei und teile  @Catherine Paganini, @jmo und @Seokho Son mit, dass du einen neuen Vorschlag eingereicht hast und daran arbeiten möchtest. Sie werden dir das GitHub-Issue zuweisen und allen anderen signalisieren, dass der Begriff bereits jemandem zugewiesen ist.

Hier kannst du sehen, dass die ersten drei Begriffe verfügbar sind, während der letzte Begriff bereits jemandem zugewiesen wurde.

![Begriff zuweisen](/images/how-to/howto-04.png)

Beachte bitte, dass du jeweils nur an einen Begriff gleichzeitig arbeiten kannst. Falls du an mehreren Begriffen arbeiten möchtest, schließe bitte zuerst den einen ab, bevor du an dem anderen arbeitest. 

### Begriff einreichen (Erstellen eines Pull Request)

Stelle bitte vor dem Start sicher, den [Style Guide] (https://glossary.cncf.io/style-guide/) zu beachten - das wird weitere Interaktionen minimieren. Wie im Style Guide angegeben, empfehlen wir, mit einem Google- oder Word-Dokument zu beginnen. 

Sobald der Begriff fertig ist, klicke bitte innerhalb der Registerkarte "Code" auf "content"  ...

![Inhalt](/images/how-to/howto-05.png)

... danach auf "de" ... 

![Sprachen-Ordner](/images/how-to/howto-06.png)

... wähle _TEMPLATE.md aus

![Vorlage](/images/how-to/howto-07.png)

kopiere den Inhalt ... 

![Inhalt füllen](/images/how-to/howto-08.png)

... wechsle wieder eine Ebene höher in den "de" Ordner. Jetzt einfach auf "add file" klicken und "create new file" auswählen.

![Neue Datei anlegen](/images/how-to/howto-09.png)

Füge den Namen des Begriffs in die URL ein (keine Großschreibung und kein Leerzeichen) mit dem Appendix ".md" (wenn die Vorschau nicht funktioniert, wurde das Appendix ".md" nicht korrekt hinzuzugefügt). Jetzt kann die ausgefüllte Vorlage eingefügt werden. Bitte beachte, dass GitHub Markdown verwendet um den Text zu formatieren (z. B. Hyperlink, fett, kursiv). Hier ein [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/). Unter "Vorschau" kann man sehen wie der Text aussehen wird.

![Finalisieren](/images/how-to/howto-10.png)

Weiter unten kannst du unter "Commit new file" den Commit benennen und bestätigen sobald du dein Beitrag einreichen möchtest. Dafür wird der Commit zunächst auf einem eigenen Branch erstellt. Bestätige indem du auf "Commit new file" klickst ... 

![Neue Datei commiten](/images/how-to/howto-11.png)

...und erstelle einen Pull Request

![Pull Request erstellen](/images/how-to/howto-12.png)

Ab jetzt kannst du deinen erstellten Pull Requests hier verfolgen: 

![Pull Requests](/images/how-to/howto-13.png)

## Bestehenden Begriff aktualisieren

Um einen bestehenden Begriff zu aktualisieren, kannst du entweder eine Änderung über ein neues GitHub Issue vorschlagen oder den Begriff direkt aktualisieren, indem du einen Pull Request einreichst.

### Problem melden via GitHub Issue

Falls du ein Problem mit einem Begriff melden, es aber nicht selber beheben möchtest oder kannst, klicke einfach auf "Problem melden".

![Problem melden](/images/how-to/howto-14.png)

Dadurch wird direkt ein GitHub Issue angelegt. Bitte beschreibe welche Änderung erforderlich ist und warum. Klicke auf "Submit new issue", und das war's. 

![submit issue](/images/how-to/howto-15.png)

### Änderungen direkt vornehmen

Um einen Begriff direkt zu ändern, klicke auf "Diese Seite anpassen". 

![Seite anpassen](/images/how-to/howto-16.png)

Dadurch wird die GitHub-Seite des Begriffs geöffnet. Du kannst jetzt Anpassungen durchführen und einen Pull Request einreichen. Eine ausführliche Beschreibung findet sich weiter oben unter "Begriff einreichen" (du kannst direkt zu dem Abschnitt springen, in dem es um Markdown geht).

## Hilf bei der Übersetzung des Glossars
Falls du helfen möchtest, das Glossar in deine Muttersprache zu übersetzen, tritt dem Kanal #glossary-localizations auf dem CNCF Slack bei und lass es uns wissen. Du kannst entweder einem bestehenden Team beitreten oder ein neues Team gründen. Bitte nimm dazu auch an unseren monatlichen Treffen der Glossar-Arbeitsgruppe teil. Details zu den Treffen finden sich im [CNCF-Kalender] (https://www.cncf.io/calendar/). Wir freuen uns darauf, euch dort zu treffen!
