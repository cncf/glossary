---
title: Application Programming Interface
status: Feedback erwünscht
category: Technologie
---

## Was es ist

APIs regeln die Kommunikation zwischen Softwareanwendungen.
Im weiteren Sinne kann man das mit einem Gespräch zwischen zwei Personen vergleichen.
In diesem Beispiel wäre eine API die konkrete Sprache, die gesprochen wird.
Im Gegensatz zu einem Gespräch zwischen zwei Personen ist die Kommunikation zwischen zwei Softwareanwendungen durch eine API beschränkt.
Sie unterliegt einem festen Protokoll und findet über vordefinierte Endpunkte statt.

## Welches Problem es löst

Softwareanwendungen können mit der Zeit sehr komplex werden und kleine Code Änderungen können fundamentale Auswirkungen auf die Funktionalität der Anwendung haben.
Das gestaltet eine direkte Kommunikation zwischen verschiedenen Anwendungen in der Praxis oft schwierig.
Dieses Problem wird weiter durch den Trend hin zu [Microservice Architekturen](/microservices/) verstärkt.
Das Aufteilen von großen monolithischen Softwareanwendungen in viele kleinere Anwendungen unterstreicht das Kommunikationsproblem.
APIs lösen dieses Problem, in dem sie ein festes Kommunikationsprotokoll etablieren.

## Wie es das Problem löst

APIs bestehen aus Kommunikationsendpunkten, die über feste URL Pfade erreichbar sind.
So eine URL kann mit einer Postanschrift verglichen werden, sie legt fest wie ein Endpunkt im Internet erreicht wird.
Ein Endpunkt definiert ein festes Format für die Eingabe und Ausgabe von Daten, daher den Datenaustausch.
Softwareanwendungen nutzten das Format, um Informationen über einen festen Source Code auszutauschen.
In diesem Kontext spricht man auch davon, dass eine Applikation einen Endpunkt „konsumiert“.