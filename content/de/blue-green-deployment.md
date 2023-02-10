---
title: Blue Green Deployment
status: Completed
category: Konzept
tags: ["methodology", "application", ""]
---

## Was es ist

Blue-Green-Deployment ist eine Strategie zur Aktualisierung von produktiven Anwendungen. 
Der Fokus liegt darauf, Ausfallszeiten zu minimieren oder gänzlich zu vermeiden.
In der Regel bezieht sich der Begriff Blue-Green-Deployment auf die Aktualisierung einer gesamten Anwendung
und weniger auf die Aktualisierung einzelner Komponenten (wie etwa [Microservices](/microservices/)) 
aus denen eine Anwendung möglicherweise besteht. 
Um hier Verwirrungen zu vermeiden, wird für letzeres eher der Begriff "Zero-Downtime-Deployment" bevorzugt.


## Welches Problem es löst

Die Aktualisierung von Anwendungen ist üblicherweise mit Ausfallzeiten verbunden. 
Je nach Anwendung können Ausfallszeiten allerdings gravierende Folgen haben. 
Das Aktualisieren einzelner Komponenten einer Anwendung funktioniert leider nicht immer reibungslos. 
Das liegt daran, dass eine Aktualisierung, 
die Inkompatibilität einzelner Komponenten zur Folge haben kann. 
Für solche Fälle müssen alle Komponenten der Anwendung gleichzeitig aktualisiert werden. 


## Wie es das Problem löst

Im Rahmen eines Blue-Green-Deployment werden für einen bestimmten Zeitraum zwei Umgebungen der produktiven Anwendung betrieben, 
die jeweils als "blue" und "green" bezeichnet werden.
Die eine Umgebung (blue) stellt die produktive Anwendung dar (die Version, die von Benutzern aktuell verwendet wird),
während eine zweite Umgebung (green) bereitgestellt wird.
Diese zweite Umgebung enthält eine neue Version der Anwendung.  
Sobald die Tests in der neuen Umgebung abgeschlossen sind, 
wird der Datenverkehr auf diese Umgebung umgelenkt (oft mit Hilfe eines [Load Balancer](/load-balancer/)).
Im Anschluss kann die ältere Umgebung (blue) aus dem Betrieb genommen werden.
