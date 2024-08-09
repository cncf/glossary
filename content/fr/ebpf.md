---
title: eBPF
status: Completed
category: ["architecture", "réseau", "sécurité"]
---

eBPF, ou "extended Berkeley Packet Filter", est une technologie qui permet à de petits programmes ou scripts de s'exécuter au sein d'un environnement contrôlé dans l'espace du noyau (kernel en anglais) d'un système Linux, sans avoir à modifier le code source du noyau ou à charger des modules dans le noyau Linux.

Un système Linux comporte deux espaces : l'espace du noyau et l'espace utilisateur.
Le noyau représente le cœur du système d'exploitation et est la seule partie ayant un accès illimité au matériel.

Les applications résidant dans l'espace utilisateur envoient une requête au noyau lorsqu'elles ont besoin de privilèges plus importants.
Pour les applications qui nécessitent plus de flexibilité, comme un accès direct au matériel, le noyau peut être étendu grâce à ce que l'on appelle des "modules" pour le noyau.
Cette approche permet d'étendre les fonctionnalités par défaut du noyau,
ainsi les applications peuvent accéder plus directement aux composants sous-jacents.
Cependant, cette approche introduit également des risques de sécurité, ce qui fait d'eBPF une alternative intéressante.

## Problème auquel il répond

Généralement, les applications s'exécutent dans l'espace utilisateur, et si l'application a besoin de certains privilèges du noyau (par exemple, pour accéder à du matériel), elle les demande au noyau par l'intermédiaire d'un "appel système".  
Dans la plupart des cas, cette approche fonctionne parfaitement. Cependant, dans certains cas, les développeurs ont besoin d'une plus grande flexibilité pour un accès système de bas niveau.
Les fonctionnalités d'observabilité, de sécurité et de réseau sont de bons exemples.
Pour ce faire, nous pouvons utiliser des modules du noyau Linux, qui étendent les fonctionnalités du noyau sans en modifier le code source.
Si l'utilisation des modules du noyau Linux présente des avantages, elle introduit également des risques de sécurité.
Parce qu'ils opèrent dans l'espace du noyau, les modules du noyau Linux peuvent faire planter le noyau, ce qui fait tomber toute la machine.
En outre, les modules du noyau disposent de privilèges élevés et d'un accès direct aux ressources du système. S'ils ne sont pas correctement sécurisés, des attaquants peuvent les exploiter.

## Quelle en est l'utilité

L'eBPF fournit un environnement plus contrôlé et plus restreint pour l'exécution de programmes définis par l'utilisateur par rapport aux modules du noyau Linux.
Il s'exécute dans un environnement "bac à sable" au sein du noyau, ce qui permet une isolation et une atténuation des risques.
Si une vulnérabilité ou une faille est exploitée dans un programme eBPF, son impact est généralement limité à l'environnement "bac à sable".
En outre, avant qu'un programme eBPF puisse commencer à s'exécuter dans le noyau, il doit subir certaines vérifications.
Le composant vérificateur s'assure que le programme eBPF ne présente pas de violations potentielles de la sécurité,
telles que des accès hors limites à la mémoire, des boucles infinies et des fonctions non autorisées du noyau.
Il s'assure ainsi que le programme n'entrera pas dans une boucle infinie et ne provoquera pas un plantage du noyau.
Ces contrôles de sécurité font d'eBPF une option plus sûre que les modules du noyau Linux pour l'exécution d'applications dans le noyau Linux.
