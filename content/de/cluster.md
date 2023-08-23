---
title: Cluster
status: Completed
category: Konzept
tags: ["infrastruktur", "grundlegendes", ""]
---

## Was es ist

Ein Cluster ist eine Gruppe von Computern, die ein gemeinsames Ziel haben und als eine Einheit auftreten.
Im Kontext von [Cloud Native Technologien](/cloud-native-tech/) wird der Begriff häufig mit [Kubernetes](/kubernetes/) gleichgesetzt.
Jedenfalls kommunizieren einzelnen Computer über ein Netzwerk miteinander. 


## Welches Problem es löst

Anwendungen, die nur auf einem einzelnen Computer betrieben werden, stellen einen Single Point of Failure dar. 

Business-kritische Systeme können offline gehen, wenn dieser Computer oder die Anwendung darin abstürzt. 
Ein weiteres Szenario könnte sein, dass dieser Computer oder die Anwendung darin zwar funktionsfähig sind, 
aber über das Netzwerk nicht erreichbar sind. 


## Wie es das Problem löst

Ein Cluster löst dieses Problem indem mehr als nur ein Computer verwendet wird. 
Man spricht hier auch von verteilten Systemen. 
Wenn einer dieser Computer oder die Anwendung darin abstürzt oder aus anderen Gründen ausfällt, können die anderen Computer übernehmen. 
Hierfür wird üblicherweise eine Komponente verwendet, die als Load Balancer bekannt ist und Anfragen an ein Cluster lediglich an erreichbare Computer weiterleitet.