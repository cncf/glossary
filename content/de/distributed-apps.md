---
Titel: Verteilte Apps
status: Completed
Kategorie: Konzept
Tags: ["Architektur", "", ""]
---

## Was es ist

Eine verteilte Anwendung ist eine Anwendung, bei der die Funktionalität in mehrere kleinere unabhängige Teile unterteilt ist.
Verteilte Anwendungen bestehen in der Regel aus einzelnen [Microservices](/microservices/)
die unterschiedliche Anliegen innerhalb der breiteren Anwendung behandeln.
In einer Cloud-nativen Umgebung werden die einzelnen Komponenten typischerweise als [Container](/container/) auf einem [Cluster](/cluster/) ausgeführt.

## Problem, das es anspricht

Eine Anwendung, die auf einem einzelnen Computer ausgeführt wird, stellt einen Single Point of Failure dar. Wenn dieser Computer ausfällt, ist die Anwendung nicht mehr verfügbar.
Verteilte Anwendungen werden oft mit [monolithischen Anwendungen](/monolithic-apps/) verglichen.
Eine monolithische App kann schwieriger zu skalieren sein, da die verschiedenen Komponenten nicht unabhängig voneinander skaliert werden können.
Mit zunehmendem Wachstum können sie auch zu einer Belastung für die Entwicklergeschwindigkeit werden
weil mehr Entwickler an einer gemeinsamen Codebasis arbeiten müssen, die nicht unbedingt klar definierte Grenzen hat.

## Wie es hilft

Wenn eine Anwendung in verschiedene Teile aufgeteilt und an vielen Stellen ausgeführt wird, kann das Gesamtsystem mehr Ausfälle tolerieren.
Außerdem kann eine Anwendung Skalierungsfunktionen nutzen, die einer einzelnen Anwendungsinstanz nicht zur Verfügung stehen.
nämlich die Fähigkeit zur [horizontalen Skalierung](/horizontal-scaling/).
Dies ist jedoch mit Kosten verbunden: erhöhter Komplexität und höherem Betriebsaufwand
– Sie führen jetzt viele Anwendungskomponenten anstelle einer App aus.
