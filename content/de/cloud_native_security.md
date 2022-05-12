---
title: Cloud Native Security
status: Completed
category: Konzept
---

## Was es ist

Die Cloud-native Sicherheit ist ein Ansatz, bei dem die Sicherheit in die [Cloud-nativen Anwendungen](/cloud_native_apps/) integriert wird. Er gewährleistet, dass die Sicherheit Teil des gesamten Anwendungslebenszyklus ist, von der Entwicklung bis zur Produktion. Cloud-native Sicherheit versucht, die gleichen Standards wie herkömmliche Sicherheitsmodelle zu gewährleisten und sich gleichzeitig an die Besonderheiten von Cloud-native Umgebungen anzupassen, d. h. an schnelle Code-Änderungen und eine sehr flüchtige Infrastruktur. Cloud-native Sicherheit ist eng mit dem Methodologie des [DevSecOps](/devsecops/) verbunden.

## Welches Problem es löst

Traditionelle Sicherheitsmodelle basierten auf einer Reihe von Annahmen, die nicht mehr länger gültig sind. Cloud-native Anwendungen ändern sich häufig, verwenden eine große Anzahl von Open-Source-Tools und -Bibliotheken, werden oft in einer vom Anbieter kontrollierten Infrastruktur ausgeführt und unterliegen schnellen Infrastrukturänderungen. Code-Reviews, lange Qualitätssicherungszyklen, Host-basierte Schwachstellen-Scans und Sicherheitsüberprüfungen in letzter Minute lassen sich nicht mit nativen Cloud-Anwendungen kombinieren.

## Wie es das Problem löst

Cloud Native Security führt eine neue Arbeitsweise ein, die Anwendungen schützt, indem sie von traditionellen Sicherheitsmodellen zu einem Modell übergeht, bei dem die Sicherheit in jeden Schritt des Release-Zyklus einbezogen wird. Manuelle Audits und Prüfungen werden weitgehend durch automatische Scans ersetzt. Schnelle Code-Release-Pipelines werden mit Tools integriert, die den Code vor der Kompilierung auf Schwachstellen überprüfen. Open-Source-Bibliotheken werden aus vertrauenswürdigen Quellen bezogen und auf Schwachstellen überprüft. Anstatt den Wandel zu verlangsamen, unterstützt ein Cloud-natives Sicherheitsmodell, indem es anfällige Komponenten häufig aktualisiert oder sicherstellt, dass die Infrastruktur regelmäßig aktualisiert wird.