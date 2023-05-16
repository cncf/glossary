---
title: Container
status: Feedback erwünscht
category: Konzept
---

## Was es ist

Ein Container ist eine virtuelle isolierte Umgebung, die als Prozess mit Ressourcen- und Kapazitätsbeschränkungen auf einem Computer läuft und von dessem Betriebssystem verwaltet wird. 
Dabei werden dem Container virtuelle Ressourcen des Hosts reserviert und zugeordnet.
Benötigte Tools und Dateien werden als Container-Image verpackt und dieses ist somit in sich geschlossen und kann mit einer Container-Engine ohne weitere Abhängigkeiten von Tools oder Dateien ausgeführt werden. 
Es können mehrere Container auf der selben Maschine laufen und es wird von der Container-Engine sichergestellt, dass diese nicht dieselben physischen Ressourcen belegen und auch nicht miteinander interagieren. 

## Welches Problem es löst

Bevor es Container gab, waren separate Rechner erforderlich, um Anwendungen auszuführen. 
Jede Maschine benötigte ihr eigenes Betriebssystem, das CPU, Speicher und Festplattenplatz beanspruchte, damit eine einzelne Anwendung funktionieren konnte. 
Führte man mehrere Anwendungen auf derselben Maschine aus, konnte das zu Konflikten in der Ressourcenbelegung führen, wenn z.B. zwei Anwendungen auf die selbe Speicherstelle zugreifen. 
Darüber hinaus ist die Wartung, das Upgrade und der Start eines Betriebssystems eine weitere mühsame Angelegenheit. 


## Wie es das Problem löst

Container teilen sich dasselbe Betriebssystem und seine Ressourcen sind aber durch die Zuordnung virtueller Ressourcen voneinander isoliert, wodurch der Ressourcen-Overhead des Betriebssystems verteilt wird und eine effiziente Nutzung des physischen Rechners ermöglicht wird. 
Dadurch können viel mehr Anwendungen auf demselben physischen Rechner ausgeführt werden. 
Durch die Nutzung des zugrunde liegenden Betriebssystem, sind sie im Vergleich zu [virtuellen Maschinen](/virtual-machine/) sehr leichtgewichtig und können schneller hoch- und heruntergefahren werden.

Allerdings gibt es auch Einschränkungen. 
Da Container dasselbe Betriebssystem nutzen, können Prozesse als weniger sicher angesehen werden.
Container erfordern auch eine Begrenzung der gemeinsam genutzten Ressourcen. 
Um die Ressourcen zu garantieren, müssen die Administratoren die Speicher- und CPU-Nutzung einschränken und begrenzen, damit andere Anwendungen keine schlechten Leistungen erbringen oder abstürzen.