---
title: Client-Server-Architektur
status: Feedback erwünscht
category: Konzept
---

## Was es ist

Bei einer Client-Server-Architektur ist eine Anwendung in zwei oder mehr Komponenten aufgeteilt. Dabei wird unterschieden zwischen Clients und Servern. 
Ein Client fordert die Erledigung einer Aufgabe bei einem Server an und der Server wiederum nimmt diese Anfrage entgegen und bearbeitet die Aufgabe. 
Ein Beispiel dafür ist Google Mail. Der Client ist in diesem Fall die Webanwendung bzw. die UI, die in dem Browser des Nutzers ausgeführt wird. 
Mit einem Klick auf "Email senden" wird die geschriebene Email and den Server gesendet, der in der Cloud von Google läuft und die Email an den Empfänger weiterleitet.

Dies steht im Gegensatz zu eigenständigen Anwendungen (z. B. Desktop-Anwendungen), die die gesamte Arbeit an einem Ort erledigen. 
So kann beispielsweise ein Textverarbeitungsprogramm wie Microsoft Word vollständig auf dem Computer des Nutzers installiert und ausgeführt werden.

## Welches Problem es löst

Eine Client-Server-Architektur löst eine große Herausforderung, die in sich geschlossene Anwendungen mit sich bringen: Regelmäßige Aktualisierungen. 
Bei einer eigenständigen Anwendung müssten die Benutzer bei jeder Aktualisierung die neueste Version herunterladen und installieren. 
Zum Beispiel müssten sich die Benutzer regelmäßig den kompletten Produktkatalog von Amazon auf ihre Computer herunterladen. 
Außerdem vereinfacht es die gemeinsame Nutzung von Daten. So müssen Daten nicht mehr verschickt oder sogar auf physischen Datenträgern weitergegeben werden.

## Wie es das Problem löst

Durch die Implementierung der Anwendungslogik in einem Server können die Betreiber diese aktualisieren, ohne die Logik auf der Client-Seite ändern zu müssen. 
Das führt dazu, dass Aktualisierungen viel häufiger vorgenommen werden können. 
Die Speicherung von Daten auf dem Server ermöglicht es vielen Clients, dieselben Daten zu sehen und gemeinsam zu nutzen.
