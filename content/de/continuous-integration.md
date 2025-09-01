---
title: Contineous Integration
status: Completed
category: Konzept
---


Unter Continuous Integration, oft abgekürzt als CI, versteht man die Praxis, Codeänderungen automatisch zu integrieren. 
CI ist eine Voraussetzung für die Continuous Delivery (CD). 
Traditionell beginnt der CI-Prozess mit der Übergabe von Codeänderungen an ein Versionskontrollsystem (Git, Mercurial oder Subversion) 
und endet mit einem getesteten Artefakt, das von einem CD-System verwendet werden kann.  

## Welches Problem es löst

Softwaresysteme sind oft komplex und werden von zahlreichen Entwicklern gepflegt und aktualisiert. 
Wenn diese Entwickler parallel an verschiedenen Teilen des Systems arbeiten, kann es vorkommen, dass sie im Konflikt miteinander stehende Änderungen vornehmen und versehentlich die Arbeit des jeweils anderen beschädigen. 
Wenn mehrere Entwickler an demselben Projekt arbeiten, müssen außerdem alle alltäglichen Aufgaben wie das Testen, 
das Berechnen der Codequalität so wie das Ermitteln von Sicherheitsrisiken von jedem Entwickler wiederholt werden, was zu zeitaufwändig ist.

## Wie es das Problem löst

CI-Software prüft automatisch, ob Codeänderungen sauber zusammengeführt werden, wenn ein Entwickler eine Änderung überträgt. 
Es ist eine fast allgegenwärtige Praxis, den CI-Server zu verwenden, um Builds, Codequalitätsprüfungen, Sicherheitsscans, Tests und sogar Bereitstellungen durchzuführen. 
So wird er zu einer konkreten Umsetzung der Qualitätskontrolle innerhalb von Teams. 
CI ermöglicht es Software-Teams, jeden Code-Commit entweder in einen konkreten Fehler oder in einen brauchbaren Release-Kandidaten zu verwandeln.
