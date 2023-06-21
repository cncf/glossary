---
title: Cluster
status: Feedback erwünscht
category: Konzept
tags: ["infrastruktur", "grundlegendes", ""]
---

## Was es ist

Ein Cluster ist eine Gruppe von Computern oder Anwendungen, die ein gemeinsames Ziel haben.
Im Kontext von Cloud-native Computing wird der Begriff häufig mit [Kubernetes](/kubernetes/) gleichgesetzt.
Ein Kubernetes Cluster besteht aus einer Gruppe von Nodes (und einem Control Plane), die üblicherweise auf verschiedenen Maschinen laufen.


## Welches Problem es löst

Software, die nur auf einem einzelnen Computer läuft, stellt einen Single Point of Failure dar. 
Business-kritische Systeme können offline gehen, wenn dieser Computer abstürzt oder Jemand aus Versehen den Stecker zieht.

Durch Cluster werden Anwendungen widerstandsfähiger gegen Störungen. 

Fallen einzelne Nodes aus, so kann die Anwendung dennoch weiter laufen.

## Wie es das Problem löst


