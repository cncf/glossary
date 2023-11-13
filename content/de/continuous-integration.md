---
Titel: Kontinuierliche Integration (CI)
status: Completed 
Kategorie: Konzept
Tags: ["Anwendung", "Methodik", ""]
---

## Was es ist

Kontinuierliche Integration, oft als CI abgekürzt, ist die Praxis, Codeänderungen so regelmäßig wie möglich zu integrieren.
CI ist eine Voraussetzung für [kontinuierliche Lieferung](/continuous-delivery/) (CD).
Traditionell beginnt der CI-Prozess, wenn Codeänderungen in ein Quellcodeverwaltungssystem (Git, Mercurial oder Subversion) übernommen werden.
und endet mit einem getesteten Artefakt, das für die Nutzung durch ein CD-System bereit ist.

## Problem, das es anspricht

Softwaresysteme sind oft groß und komplex und werden von zahlreichen Entwicklern gewartet und aktualisiert.
Paralleles Arbeiten an verschiedenen Teilen des Systems,
Diese Entwickler nehmen möglicherweise widersprüchliche Änderungen vor und unterbrechen unbeabsichtigt die Arbeit des anderen.
Wenn außerdem mehrere Entwickler an demselben Projekt arbeiten,
Alltägliche Aufgaben wie das Testen und Berechnen der Codequalität müssten von jedem Entwickler wiederholt werden, was Zeit verschwendet.

## Wie es hilft

CI-Software prüft automatisch, ob Codeänderungen sauber zusammengeführt werden, wenn ein Entwickler eine Änderung vornimmt.
Es ist eine nahezu allgegenwärtige Praxis, den CI-Server zum Ausführen von Codequalitätsprüfungen, Tests und sogar Bereitstellungen zu verwenden.
Somit wird es zu einer konkreten Umsetzung der Qualitätskontrolle innerhalb von Teams.
CI ermöglicht es Softwareteams, jedes Code-Commit entweder in einen konkreten Fehler oder einen brauchbaren Release-Kandidaten umzuwandeln.

## Verwandte Begriffe

* [Kontinuierliche Lieferung](/continuous-delivery/)
* [Kontinuierliche Bereitstellung](/kontinuierliche Bereitstellung/)
