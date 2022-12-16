---
title: Style Guide
toc_hide: true
menu:
  main:
    weight: 10
    pre: <i class='fas fa-ruler-horizontal'></i>
---

Dieser Style Guide hilft dir, die Zielgruppe, den Aufbau von Begriffsdefinitionen, den erforderlichen Detailgrad und das Einhalten eines einheitlichen Stils zu verstehen. 

Das Cloud Native Glossar richtet sich nach dem [Standard Style Guide](https://github.com/cncf/foundation/blob/master/style-guide.md) des CNCF Repository. Zusätzlich gelten folgende Richtlinien:

1. Verwende eine einfache, verständliche Sprache und vermeide bitte Fachjargon und Buzzwords
2. [Vermeide Umgangssprache](https://de.wikipedia.org/wiki/Umgangssprache)
3. [Benutze konkrete Aussagen](https://sprache.studiumineuropa.eu/s/4045/76932-Klar-und-deutlich-schreiben/4063659-7-Schreiben-Sie-konkret-nicht-abstrakt.htm)
4. [Vermeide Kontraktionen](https://de.wikipedia.org/wiki/Kontraktion_(Linguistik))
5. [Verwende passive Sätze nur sparsam](https://mein-deutschbuch.de/passiv-formen.html)
6. [Achte darauf, Aussagen positiv zu formulieren ](https://examples.yourdictionary.com/positive-sentence-examples.html) 
7. [Keine Ausrufezeichen außerhalb von Anführungszeichen](https://de.wikipedia.org/wiki/Ausrufezeichen)
8. Nicht übertreiben
9. Wiederholungen vermeiden
10. Drücke dich klar aus

## Audienz

Das Glossar ist für ein technisches UND ein nichttechnisches Publikum geschrieben. Bitte stelle sicher, dass die Begriffe mit einfachen Worten erklärt werden, die keine technischen Kenntnisse voraussetzen. Mehr dazu weiter unten unter Definition.

## Vorlage einer Definition

Jeder Begriff wird in einer separaten Markdown-Datei abgelegt und folgt dieser Vorlage:

```md
---
title: 
status: 
category: 
---

## Was es ist
Eine kurze Zusammenfassung. 

## Welches Problem es löst
Kurze Erklärung darüber, welches Problem es löst. 

## Wie es das Problem löst
Erläuterung darüber, wie es das Problem löst. 
```

### Titel

Das Label **title:** kommt an erster Stelle einer jeden Definitions-Seite. 

```md
---
title: Vorlage für Definition
```

### Status

Das Label **status** ist das zweite einer jeden Definitions-Seite, direkt nach dem **title**-Label. Der Status zeigt an, ob eine Begriffsdefinition überprüft und als vollständig markiert wurde, oder noch überarbeitet werden muss. 

Gültige Werte sind die folgenden:

- Completed (Abgeschlossen)
- Feedback Appreciated (Feedback erwünscht)
- Not Started (Nicht begonnen)

Du kannst jederzeit ein GitHub-Issue für eine bereits bestehende Begriffsdefinition öffnen. Falls Feedback gewünscht wird, wird der Status auf *Feedback erwünscht* geändert.

```md
---
title: Vorlage für Definition
status: Feedback erwünscht
```

### Kategorie

An letzer Stelle kommt das **category**-label. Gültige Werte sind die folgenden:

- Technologie
- Eigenschaft
- Konzept

```md
---
title: Vorlage für Definition
status: Feedback erwünscht
category: Konzept
---
```

### Definition

#### Drei Unterpunkte

Definitionen der Kategorie **Technologie** und **Konzept** beinhalten folgende drei Unterpunkte:

- **Was es ist**: Ein kurzer Überblick über den Begriff um den es geht. 
- **Welches Problem es löst**: Fokus hierbei liegt auf dem Problem nicht auf der Lösung (die im nächsten Abschnitt behandelt wird). Bestenfalls wird der Begriff, der hier definiert überhaupt nicht erwähnt. Dieser Abschnitt konzentriert sich darauf, *warum* wir diese Sache brauchen. 
- **Wie es das Problem löst**: Hier kommen wir auf den Begriff zu sprechen. Wie genau löst die Sache das im vorherigen Abschnitt beschriebene Problem?

Anmerkung: Begriffsdefinitionen der Kategorie **Eigenschaft** benötigen keine Einteilung in die drei genannten Unterpunkte. Eine allgemeine Definition ist ausreichend. 

#### Einfachheit

Ziel des Glossars ist es, **komplexe Begriffe in einfachen Worten zu erklären** - das ist eine erstaunlich schwierige Aufgabe, die wahrscheinlich eine mehrfache Überarbeitung eines Begriffs benötigen. Die Zielgruppe sollte beim Verfassen einer Begriffsdefinition und deren Erstellung immer im Fokus sein. Vermeide bitte die Verwendung von Fachbegriffen und Buzzwords - Du wirst dich wahrscheinlich dabei ertappen, dass du auf diese zurückgreifen wirst.  

Verwende gegebenenfalls **Beispiele aus der Praxis**, die den Lesern (vor allem Nicht-Technikern) helfen, besser zu verstehen, *wann* und *warum* der von dir erläuterte Begriff relevant ist. 

Falls auf andere **bestehende Definition des Glossars** verwiesen wird, sollten diese (lediglich) bei ihrer ersten Erwähnung entsprechend verlinkt werden.  

**Example**: take a look at the “What it is” section of the [service mesh definition](https://glossary.cncf.io/service_mesh/). It links back to the microservices, service, reliability, and observability definitions. Additionally, it uses a real-world example comparing network challenges in a microservices environment (something non-technical people can't relate to) to wifi problems (something anyone using a laptop can understand). Where possible, try to make that connection. //TODO as we don't have any article yet

#### Beginne mit einem Google oder Word Dokument

Wir empfehlen, mit einem Google- oder Word-Dokument zu beginnen, es ein paar Tage ruhen zu lassen und es dann erneut zu lesen. So wirst du sicher Sätze oder Ausdrücke finden, die einfacher und verständlicher formuliert werden könnten. Führe bitte außerdem eine Rechtschreibprüfung durch, bevor du einen PR einreichst.

Um sicherzustellen, dass niemand anderes einen Pull Requests einreicht, während du an einem Begriff arbeitest, beanspruche den Begriff für dich (oder erstelle ein neues GitHub Issue) und lasse ihn dir zuweisen. Mehr dazu in der unter [wie man etwas beitragen kann](https://glossary.cncf.io/contribute/).

Bevor du anfängst, lies bitte einige der veröffentlichten Glossarbegriffe, um ein Gefühl für den Detaillierungsgrad und den Schwierigkeitsgrad zu bekommen und um zu sehen, wann Beispiele angemessen sind.

## Review Prozess: Was ist zu erwarten

Bitte beachte, dass wir derzeit nur wenige Betreuer sind, die dies in ihrer Freizeit tun. Manchmal sind wir in der Lage, Begriffe schnell zu überprüfen, es kann aber auch einige Zeit dauern - wir danken euch für eure Geduld. Wenn du Fragen hast, wende dich bitte an uns im #glossary, #glossary-localizations oder #glossary-localization-german Slack-Kanal (weitere Infos findest du unter [wie man etwas beitragen kann](https://glossary.cncf.io/contribute/)).

Unser Ziel ist es, dass das Glossar die bestmögliche Ressource ist. Wenn Du einen PR einreichst, werden wir dich möglicherweise um eine oder mehrere Überarbeitungen bitten. Sei bitte nicht frustriert - das ist bei vielen Pull Requests der Fall. Dieses Feedback-Schleifen unserer Zusammenarbeit werden sicherstellen, dass dein Beitrag zu einer wirklich nützlichen Definition wird, die von Lesern auf der ganzen Welt gelesen und herangezogen wird.
