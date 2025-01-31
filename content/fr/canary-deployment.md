---
title: Déploiement canari
status: Completed
category: concept
tags: ["méthodologie", "application", ""]
---

Le déploiement canari est une stratégie de déploiement qui commence avec deux environnements :
l'un avec du trafic en direct et l'autre contenant le code mis à jour sans trafic en direct.
Le trafic est progressivement déplacé de la version originale de l'application vers la version mise à jour.
Cela peut commencer par le transfert de 1% du trafic en direct, puis 10%, 25%, et ainsi de suite,
jusqu'à ce que tout le trafic passe par la version mise à jour.
Les organisations peuvent tester la nouvelle version du logiciel en production, obtenir des commentaires,
diagnostiquer les erreurs et revenir rapidement à la version stable si nécessaire.

Le terme "canari" fait référence à la pratique du "canari dans la mine de charbon",
où des canaris étaient amenés dans les mines de charbon pour assurer la sécurité des mineurs.
Si des gaz nocifs inodores étaient présents, l'oiseau mourait et les mineurs savaient qu'ils devaient évacuer rapidement.
De même, si quelque chose ne va pas avec le code mis à jour, le trafic en direct est "évacué" vers la version originale.

## Problème auquel il répond

Peu importe la rigueur de la stratégie de test, il y aura toujours des bugs qui seront découverts en production.
Le fait de basculer 100% du trafic d'une version d'application vers une autre peut intensifier l'impact des défaillances sur les utilisateurs.

## Quelle en est l'utilité

Les déploiements canaris permettent aux organisations de voir comment se comporte le nouveau logiciel dans des scénarios réels
avant de transférer un trafic significatif vers la nouvelle version.
Cette stratégie permet aux organisations de minimiser les temps d'arrêt et de revenir rapidement en arrière en cas de problèmes avec le nouveau déploiement.
Elle permet également des tests de l'application en production plus approfondis sans impact significatif sur l'expérience utilisateur globale.
