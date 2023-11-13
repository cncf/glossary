---
Titel: eBPF
status: Completed
Kategorie: Architektur
---

## Was es ist

eBPF oder Extended Berkeley Packet Filter ist eine Technologie, die es ermöglicht, kleine Sandbox-Programme oder Skripts im Kernel-Bereich eines Linux-Systems auszuführen, ohne den Quellcode des Kernels ändern oder Linux-Kernel-Module laden zu müssen.

Ein Linux-System verfügt über zwei Bereiche: den Kernel und den Benutzerbereich.
Der Kernel stellt den Kern des Betriebssystems dar und ist dessen einziger Teil
mit uneingeschränktem Zugriff auf die Hardware.

Anwendungen befinden sich im Benutzerbereich und wenn sie höhere Berechtigungen benötigen,
Sie senden eine Anfrage an den Kernel.
Für Anwendungen, die mehr Flexibilität erfordern, z. B. direkte Hardware
Zugriff kann der Kernel über die sogenannte „Linux
Kernel-Module-Ansatz. Dieser Ansatz erweitert die Standardfunktionalität des Kernels.
 Dies ermöglicht Anwendungen einen tieferen Zugriff auf die zugrunde liegenden Komponenten.
 Allerdings birgt dieser Ansatz auch Sicherheitsrisiken, was eBPF zu einer attraktiven Alternative macht.

## Problem, das es anspricht
Normalerweise werden Anwendungen im Benutzerbereich ausgeführt. Wenn die Anwendung bestimmte Berechtigungen vom Kernel erfordert (z. B. um auf Hardware zuzugreifen),
es fordert es vom Kernel über einen sogenannten „Systemaufruf“ an.
In den meisten Fällen funktioniert dieser Ansatz einwandfrei. Es gibt jedoch Fälle, in denen Entwickler mehr Flexibilität für den Systemzugriff auf niedriger Ebene benötigen.
Beobachtbarkeits-, Sicherheits- und Netzwerkfunktionen sind gute Beispiele.
Um dies zu erreichen, können wir Linux-Kernelmodule verwenden und so die Kernelbasis erweitern, ohne den Kernel-Quellcode zu ändern.
Die Verwendung von Linux-Kernelmodulen bietet zwar Vorteile, birgt jedoch auch Sicherheitsrisiken.
Da sie im Kernel-Bereich arbeiten, können Linux-Kernelmodule den Kernel zum Absturz bringen, und wenn der Kernel abstürzt, stürzt auch die gesamte Maschine ab.
Darüber hinaus verfügen Kernelmodule über erhöhte Berechtigungen und direkten Zugriff auf Systemressourcen. Und wenn sie nicht ordnungsgemäß gesichert sind, können Angreifer diese ausnutzen.

## Wie es hilft
eBPF bietet eine kontrolliertere und geschlossenere Umgebung für die Ausführung benutzerdefinierter Programme als Linux-Kernel-Module.
Es läuft in einer Sandbox-Umgebung innerhalb des Kernels und sorgt so für Isolation und Risikominimierung.
Wenn eine Schwachstelle oder ein Fehler in einem eBPF-Programm ausgenutzt wird, sind die Auswirkungen im Allgemeinen auf die Sandbox-Umgebung beschränkt.
Darüber hinaus muss ein eBPF-Programm einige Überprüfungen bestehen, bevor es im Kernel ausgeführt werden kann.
Die Prüfkomponente überprüft das eBPF-Programm auf mögliche Sicherheitsverstöße.
B. Speicherzugriff außerhalb der Grenzen, Endlosschleifen und nicht autorisierte Kernelfunktionen.
Auf diese Weise wird sichergestellt, dass das Programm nicht in eine Endlosschleife gerät und einen Kernel-Absturz verursacht.
Diese Sicherheitskontrollen machen eBPF zu einer sichereren Option zum Ausführen von Anwendungen im Linux-Kernel als die Linux-Kernel-Module.
