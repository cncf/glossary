---
title: Cluster
status: Feedback erwünscht
category: Konzept
tags: ["infrastruktur", "grundlegendes", ""]
---

## Was es ist

Ein Cluster ist eine Gruppe von Computern oder Anwendungen, die ein gemeinsames Ziel haben.
Im Kontext von Cloud-native Computing wird der Begriff häufig mit [Kubernetes](/kubernetes/) gleichgesetzt.
Ein Kubernetes Cluster ist ein Satz von Services oder Workloads, die üblicherweise auf verschiedenen Maschinen in ihren eigenen Containern laufen.
All diese [containerisierten](/containerization/) Services, die über ein Netzwerk miteinander verbunden sind, stellen einen Cluster dar.

## Welches Problem es löst

Software, die nur auf einem einzelnen Computer läuft, stellt einen Single Point of Failure dar. Business-kritische Systeme können offline gehen, wenn dieser Computer abstürzt oder jemand aus Versehen den Stecker zieht.
Daher wird moderne Software grundsätzlich als verteilte Anwendung entwickelt, die als Cluster zusammen gebündelt wird.

## Wie es das Problem löst

Geclusterte, verteilte Anwendungen laufen über mehrere Maschinen. So wird ein Single Point of Failure vermieden.
Verteilte Systeme zu bauen ist jedoch schwer.
Tatsächlich ist es eine eigene Disziplin in der Informatik.
Der Bedarf an global verfügbaren Systemen, und viele Jahre mit "trial and error" führten zur Entwicklung einer neuen Art von Technologie-Stack: [Cloud-native Technologien](/cloud-native-tech/).
Diese neuen Technologien sind die Grundbausteine, die die Erstellung und den Betrieb von verteilten Systemen einfacher machen.