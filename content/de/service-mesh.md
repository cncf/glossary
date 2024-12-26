---
title: Service Mesh
status: Completed
category: technology
tags: ["networking", "", ""]
---

Bei einer [Microservice-Architektur](/microservices-architecture/) werden Anwendungen in mehrere kleinere [Services](/service/) aufgeteilt, die über ein Netzwerk kommunizieren.  
Ähnlich wie WLAN-Netzwerke, sind auch Computernetzwerke von Natur aus unzuverlässig, angreifbar und können langsam sein. 
Service Meshes bewältigen diese neuen Herausforderungen, indem sie den Datenverkehr (d. h. die Kommunikation) zwischen den Services verwalten und 
[Zuverlässigkeit](/reliability/), [Beobachtbarkeit](/observability/) und Sicherheitsfunktionen einheitlich für alle Dienste hinzufügen.

## Problem it addresses

Nach der Umstellung auf eine Microservices-Architektur haben es Softwareentwickler mit vielen einzelnen Diensten zu tun, die alle miteinander kommunizieren müssen. 
Das bedeutet, dass eine Menge Datenverkehr über das Netzwerk hin und her fließt. 
Darüber hinaus müssen einzelne Anwendungen möglicherweise die Kommunikation verschlüsseln, um gesetzliche Anforderungen zu erfüllen. 
Außerdem sind womöglich gemeinsame Metriken für Betriebsteams bereitzustellen oder detaillierte Einblicke in den Datenverkehr zu geben, um Probleme zu diagnostizieren. 
Wenn jede dieser Funktionen in den einzelnen Services implementiert wird, führt das zu mangelnder Vereinheitlichung, hohem Abstimmungsbedarf und verlangsamt außerdem die Entwicklung neuer Funktionen.

## How it helps

Service Meshes fügen Zuverlässigkeit, Beobachtbarkeit und Sicherheitsfunktionen 
einheitlich über alle Dienste eines Clusters hinweg, ohne dass Codeänderungen erforderlich sind. 
Dadurch wird die Notwendigkeit eliminiert, diese in den einzelnen Services zu implemtieren, was den Aufwand verringert und Fehlerquellen beseitigt.
