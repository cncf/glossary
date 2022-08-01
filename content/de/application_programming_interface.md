---
title: Application Programming Interface
status: Feedback erwünscht
category: Technologie
---

## Was es ist

APIs regeln die Kommunikation zwischen Softwareanwendungen.
Im weiteren Sinne kann man das mit einem Gespräch zwischen zwei Personen vergleichen.
In diesem Beispiel wäre eine API die konkrete Sprache, die gesprochen wird.
Im Gegensatz zu einem Gespräch zwischen zwei Personen ist die Kommunikation zwischen Softwareanwendungen allerdings eingeschränkt.
Sie unterliegt einem gewissen Standard, bei dem die Sprache und die Kanäle der Kommunikation festgelegt sind.

## Welches Problem es löst

Softwareanwendungen können mit der Zeit sehr komplex werden und kleine Änderungen an einer Stelle der Anwendung können fundamentale Auswirkungen auf andere Bereiche der Anwendung haben.
Das gestaltet eine direkte Kommunikation zwischen verschiedenen Anwendungen in der Praxis oft schwierig.
Dieses Problem wird weiter durch den Trend hin zu [Microservice Architekturen](/microservices/) verstärkt.
Das Aufteilen von großen monolithischen Softwareanwendungen in viele kleinere Anwendungen unterstreicht das Kommunikationsproblem.

## Wie es das Problem löst

Eine API beschreibt, wie zwei oder mehrere Anwendungen miteinander kommunizieren können. Dabei werden die Kanäle beschrieben sowie die Sprache der Kommunikation (Ein und Ausgabe von Daten). 
APIs sind die Bausteine moderner Applikationen. Sie fördern die Wiederverwendbarkeit und Wartbarkeit einer Anwendung. [Microservices](/microservices/) beispielsweise kommunizieren oftmals über APIs miteinander. 
Ein Endpunkt definiert ein festes Format für die Eingabe und Ausgabe von Daten, daher den Datenaustausch.
Softwareanwendungen nutzten das Format, um Informationen über einen festen Source Code auszutauschen.
In diesem Kontext spricht man auch davon, dass eine Applikation einen Endpunkt „konsumiert“.