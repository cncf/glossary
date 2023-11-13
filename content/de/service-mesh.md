---
Titel: Service Mesh
status: Completed
Kategorie: Technologie
Tags: ["Netzwerk", "", ""]
---

## Was es ist

In einer [Microservices](/microservices/)-Welt werden Apps in mehrere kleinere [Services](/service/) unterteilt, die über ein Netzwerk kommunizieren.
Genau wie Ihr WLAN-Netzwerk sind Computernetzwerke grundsätzlich unzuverlässig, hackbar und oft langsam.
Service Meshes bewältigen diese neuen Herausforderungen, indem sie den Verkehr (d. h. die Kommunikation) zwischen Diensten und verwalten
Hinzufügen von [Zuverlässigkeit] (/reliability/), [Beobachtbarkeit] (/observability/) und Sicherheitsfunktionen einheitlich für alle Dienste.

## Problem, das es anspricht

Nach dem Umstieg auf eine Microservices-Architektur müssen Ingenieure nun Hunderte,
möglicherweise sogar Tausende einzelner Dienste, die alle kommunizieren müssen.
Das bedeutet, dass viel Datenverkehr über das Netzwerk hin und her geht.
Darüber hinaus müssen einzelne Anwendungen möglicherweise die Kommunikation verschlüsseln, um regulatorische Anforderungen zu erfüllen.
Stellen Sie den Betriebsteams allgemeine Kennzahlen zur Verfügung oder liefern Sie detaillierte Einblicke in den Datenverkehr, um bei der Diagnose von Problemen zu helfen.
Wenn in die einzelnen Anwendungen integriert,
Jede dieser Funktionen wird zu Spannungen zwischen den Teams führen und die Entwicklung neuer Funktionen verlangsamen.

## Wie es hilft

Service Meshes sorgen für Zuverlässigkeit, Beobachtbarkeit und Sicherheitsfunktionen
einheitlich für alle Dienste in einem Cluster, ohne dass Codeänderungen erforderlich sind.
Vor Service Meshes musste diese Funktionalität in jeden einzelnen Dienst codiert werden.
Dies wird zu einer potenziellen Quelle von Fehlern und technischen Schulden.
