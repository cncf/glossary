---
Titel: Continuous Delivery (CD)
status: Completed
Kategorie: Konzept
Tags: ["Methodik", "Anwendung", ""]
---

## Was es ist

Continuous Delivery, oft als CD abgekürzt, ist eine Reihe von Praktiken
bei dem Codeänderungen automatisch in einer Akzeptanzumgebung bereitgestellt werden
(oder, im Falle einer kontinuierlichen Bereitstellung, in die Produktion).
Die CD umfasst entscheidend Verfahren, um sicherzustellen, dass die Software angemessen getestet wird
vor der Bereitstellung und bietet die Möglichkeit, Änderungen bei Bedarf rückgängig zu machen.
Kontinuierliche Integration (CI) ist der erste Schritt zur kontinuierlichen Bereitstellung
(d. h. Änderungen müssen sauber zusammengeführt werden, bevor sie getestet und bereitgestellt werden).

## Problem, das es anspricht

Die Bereitstellung von [zuverlässigen] (/reliability/) Updates wird in großem Maßstab zu einem Problem.
Im Idealfall würden wir die Bereitstellung häufiger durchführen, um den Endbenutzern einen besseren Mehrwert zu bieten.
Allerdings führt eine manuelle Durchführung zu hohen Transaktionskosten für jede Änderung.
Um diese Kosten zu vermeiden, haben Unternehmen in der Vergangenheit seltener Veröffentlichungen vorgenommen.
Es werden mehr Änderungen auf einmal bereitgestellt und das Risiko erhöht, dass etwas schief geht.

## Wie es hilft

CD-Strategien schaffen einen vollautomatischen Weg zur Produktion
das die Software mithilfe verschiedener Bereitstellungsstrategien testet und bereitstellt
wie zum Beispiel [canary](/canary-deployment/) oder [blue-green](/blue-green-deployment/).
Dies ermöglicht Entwicklern die häufige Bereitstellung von Code und gibt ihnen die Gewissheit, dass die neue Revision getestet wurde.
Typischerweise wird die Trunk-basierte Entwicklung in CD-Strategien im Gegensatz zu Feature Branching oder Pull Requests verwendet.

## Verwandte Begriffe

* [Kontinuierliche Integration](/kontinuierliche-integration/)
* [Kontinuierliche Bereitstellung](/kontinuierliche Bereitstellung/)
