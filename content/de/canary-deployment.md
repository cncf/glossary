---
title: Canary Deploment
status: Completed
category: Konzept
---

Das Canary-Deployment ist eine Deployment-Strategy, die bei einem neuen Release, zwei Umgebungen einbezieht: Die produktive Umgebung und eine Umgebung, welche die neue Version einer Anwendung enthält. 
Der Datenverkehr wird nun schrittweise von der aktuell produktiven Umgebung auf die Umgebung mit der neuen Version der Anwendung gelenkt. 
Zunächst kann damit begonnen werden, 1% des Echtzeit-Datenverkehrs zu verschieben, dann 10%, 25% und so weiter, bis der gesamte Datenverkehr über die aktualisierte Version erfolgt. 
Unternehmen können auf diese Weise die neue Version einer Anwendung in einem Produktivsystem testen, Feedback einholen, Fehler diagnostizieren und bei Bedarf schnell ein Rollback auf die stabile Version durchführen. 

Der Begriff "Canary" (Kanarienvogel) stammt aus der Praxis des "Kanarienvogels im Kohlebergwerk", bei der Kanarienvögel in Kohlebergwerke gebracht wurden, um die Bergleute zu schützen. 
Wenn geruchlose schädliche Gase austraten, würde der Vogel sterben, und die Bergleute wussten, dass sie schnell evakuiert werden mussten. Im Falle eines Fehlers mit dem aktualisierten Code, wird der Echtzeit-Datenverkehr wieder auf die ursprüngliche Version "evakuiert".

## Welches Problem es löst

Unabhängig davon, wie vollständig die Teststrategie ist, werden auf Produktivsystemen immer wieder einige Fehler entdeckt. Die direkte Verlagerung des gesamten Datenverkehrs von einer aktuellen Version auf eine neue, birgt ein hohes Risiko für Fehlerfälle.  

## Wie es das Problem löst

Durch Canary-Deployments können Unternehmen nachvollziehen, wie sich die neue Version einer Anwendung unter realen Bedingungen verhält, bevor ein Großteil des Datenverkehrs auf die neue Version umgestellt wird.
Diese Strategie ermöglicht es Unternehmen, Ausfallzeiten zu reduzieren und im Problemfall ein Rollback des neuen Deployments durchzuführen.
Außerdem ermöglicht es die Durchführung tiefgreifender Tests der Produktionsanwendungen, ohne dass die Benutzerfreundlichkeit wesentlich beeinträchtigt wird.