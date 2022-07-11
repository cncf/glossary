---
title: Cloud Native Security
status: Completed
category: Konzept
---

## Was es ist

Cloud Native Security beschreibt den Ansatz, Konzepte aus dem Bereich Cyber Security in [Cloud Native Anwendungen](/cloud-native-apps/) zu integrieren. 
Dabei ist vorgesehen, dass Sicherheitsbetrachtungen Teil des gesamten Softwareentwicklungs- und Lebenszyklus sind, von der Entwicklung bis zur Inbetriebnahme und Wartung.  
Cloud Native Security versucht, die gleichen Standards wie herkömmliche Sicherheitsmodelle zu gewährleisten,
ist dabei allerdings angepasst an die Besonderheiten von Cloud Native Umgebungen. 
Eine hohe Frequenz von Änderungen des Codes und eine sehr volatile Infrastruktur sind Beispiele für die Eigenschaften von Cloud Native Umgebungen. 
Cloud Native Security ist eng mit der Methodologie des [DevSecOps](/devsecops/) verbunden.

## Welches Problem es löst

Traditionelle Sicherheitsmodelle basieren auf einer Reihe von Annahmen, die nicht mehr länger gültig sind. 
Cloud Native Anwendungen ändern sich häufig und verwenden eine große Anzahl von Open-Source-Tools und -Bibliotheken. 
Sie werden oft in einer vom Cloud Provider kontrollierten Infrastruktur betrieben und unterliegen deshalb schnellen Infrastrukturänderungen, die sich der Kontrolle von Entwicklern entziehen.  
Manuelle Code-Reviews, lange Qualitätssicherungszyklen, Host-basierte Schwachstellen-Scans und Sicherheitsüberprüfungen in letzter Minute skalieren somit schlecht für Cloud Native Anwendungen.

## Wie es das Problem löst

Cloud Native Security führt eine neue Arbeitsweise ein, die Anwendungen schützt, 
indem sie von traditionellen Sicherheitsmodellen zu einem Modell übergeht, 
bei dem die Sicherheit in jeden Schritt des Release-Zyklus einbezogen wird. 
Manuelle Audits und Prüfungen werden weitgehend durch automatische Scans ersetzt. 
Schnelle Code-Release-Pipelines werden mit Tools integriert, die den Code vor der Kompilierung auf Schwachstellen überprüfen. 
Open-Source-Bibliotheken werden aus vertrauenswürdigen Quellen bezogen und auf Schwachstellen überprüft. 
Anstatt den Wandel zu verlangsamen, unterstützt ein Cloud Native Sicherheitsmodell, 
indem es anfällige Komponenten häufig aktualisiert oder sicherstellt, dass die Infrastruktur regelmäßig aktualisiert wird.