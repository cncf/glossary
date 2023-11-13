---
Titel: Verteiltes System
status: Completed
Kategorie: Konzept
Tags: ["Architektur", "", ""]
---

## Was es ist

Ein verteiltes System ist eine Sammlung autonomer Rechenelemente
über ein Netzwerk verbunden, das den Benutzern als ein einziges zusammenhängendes System erscheint.
Diese Komponenten werden im Allgemeinen als [Knoten] (/Knoten/) bezeichnet und können Hardwaregeräte (z. B. Computer, Mobiltelefone) oder Softwareprozesse sein.
Knoten sind so programmiert, dass sie ein gemeinsames Ziel erreichen, und um zusammenzuarbeiten, tauschen sie Nachrichten über das Netzwerk aus.

## Problem, das es anspricht

Zahlreiche moderne Anwendungen sind heute so groß, dass für den Betrieb Supercomputer erforderlich wären.
Denken Sie an Gmail oder Netflix. Kein einzelner Computer ist leistungsstark genug, um die gesamte Anwendung zu hosten.
Durch die Verbindung mehrerer Computer wird die Rechenleistung nahezu unbegrenzt.
Ohne verteiltes Computing wären viele Anwendungen, auf die wir heute angewiesen sind, nicht möglich.

Traditionell würden Systeme vertikal [skalieren](/Skalierbarkeit/).
Dabei fügen Sie einer einzelnen Maschine mehr CPU oder Speicher hinzu.
Die vertikale Skalierung ist zeitaufwändig, erfordert Ausfallzeiten und stößt schnell an ihre Grenzen.

## Wie es hilft

Verteilte Systeme ermöglichen eine [horizontale Skalierung](/horizontal-scaling/) (z. B. das Hinzufügen weiterer Knoten zum System bei Bedarf).
Dies kann automatisiert werden, sodass ein System einen plötzlichen Anstieg der Arbeitslast oder des Ressourcenverbrauchs bewältigen kann.

Ein nicht verteiltes System ist dem Risiko eines Ausfalls ausgesetzt, denn wenn eine Maschine ausfällt, fällt das gesamte System aus.
Ein verteiltes System kann so gestaltet werden, dass
Selbst wenn einige Maschinen ausfallen, kann das Gesamtsystem weiterarbeiten und das gleiche Ergebnis erzielen.
