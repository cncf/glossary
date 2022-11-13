---
title: Vorlage für Definition
status: Feedback erwünscht
category: Konzept
---

## Was es ist

Die Containerisierung ist der Prozess der Bündelung einer Anwendung und ihrer Abhängigkeiten in einem Container-Image.
Der Erstellungsprozess des Container-Images erfordert die Einhaltung des Standards der Open Container Initiative (OCI).
Solange das resultierende Container-Image diesem Standard entspricht, spielt es keine Rolle, welches Containerisierungswerkzeug verwendet wird.


## Welches Problem es löst

Bevor sich Container durchsetzten, verließen sich Unternehmen auf virtuelle Maschinen (VMs), um mehrere Anwendungen auf einem einzigen Bare-Metal-Rechner zu orchestrieren.
VMs sind wesentlich größer als Container und erfordern einen Hypervisor. Aufgrund der Speicherung, Sicherung und Übertragung dieser größeren VMs ist auch die Erstellung der VMs langsam.
Außerdem können VMs unter Konfigurationsabweichungen leiden, was gegen den Grundsatz der Unveränderlichkeit verstößt.


## Wie es das Problem löst

Container-Images sind leichtgewichtig (im Gegensatz zu herkömmlichen VMs) und der Containerisierungsprozess erfordert nur eine Datei mit einer Liste von Abhängigkeiten und Anweisungen.
Diese Datei kann versionskontrolliert und der Erstellungsprozess automatisiert werden, sodass sich ein Unternehmen auf andere Prioritäten konzentrieren kann, während sich die automatisierten Prozesse um die Erstellung kümmern.
Ein Container-Image wird unter einer eindeutigen Kennung gespeichert, die mit seinem genauen Inhalt und seiner Konfiguration verknüpft ist. Bei jedem Start eines Containers werden diese wieder auf den initialen Stand zurückgesetzt, dadurch werden Konfigurationsabweichungen vermieden.
