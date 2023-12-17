---
title: eBPF
status: Completed
category: architecture
---

eBPF, ou "extended Berkeley Packet Filter", est une technologie qui permet à de petits programmes ou scripts de s'exécuter au sein d'un environement controllé dans l'espace du noyau d'un système Linux, sans avoir à modifier le code source du noyau ou à charger des modules dans le noyau Linux.

Un système Linux comporte deux espaces : l'espace du noyau et l'espace utilisateur. 
Le noyau représente le cœur du système d'exploitation et est la seule partie ayant un accès illimité au matériel. 

Les applications résident dans l'espace utilisateur, et envoient une demande au noyau lorsqu'elles ont besoin d'autorisations plus importantes.
Pour les applications qui nécessitent plus de flexibilité, comme l'accès direct au matériel, le noyau peut être étendu grâce à ce que l'on appelle des "modules" pour le noyau. 
Cette approche permet d'étendre les fonctionnalités par défaut du noyau,
 permettant aux applications d'accéder plus facilement aux composants sous-jacents. 
 Cependant, cette approche introduit également des risques de sécurité, ce qui fait de l'eBPF une alternative intéressante.

## Problème auquel il répond

Généralement, les applications s'exécutent dans l'espace utilisateur, et si l'application a besoin de certains privilèges du noyau (par exemple, pour accéder à du matériel), elle les demande au noyau par par l'intermédiaire d'un "appel système".  
Dans la plupart des cas, cette approche fonctionne parfaitement. Cependant, dans certains cas, les développeurs ont besoin d'une plus grande flexibilité pour l'accès au système de bas niveau.
L'observabilité, la sécurité et les fonctionnalités réseau sont de bons exemples.
Pour ce faire, nous pouvons utiliser les modules du noyau Linux, qui étendent la base du noyau sans en modifier le code source. 
Si l'utilisation des modules du noyau Linux présente des avantages, elle introduit également des risques de sécurité. 
Parce qu'ils opèrent dans l'espace du noyau, les modules du noyau Linux peuvent faire planter le noyau, et lorsque le noyau plante, c'est toute la machine qui tombe.
En outre, les modules du noyau disposent de privilèges élevés et d'un accès direct aux ressources du système. S'ils ne sont pas correctement sécurisés, les attaquants peuvent les exploiter.

## Quel en est l'utilité

L'eBPF fournit un environnement plus contrôlé et plus restreint pour l'exécution de programmes définis par l'utilisateur que les modules du noyau Linux.
Il s'exécute dans un environnement "bac à sable" au sein du noyau, ce qui permet de l'isoler et d'atténuer les risques. 
Si une vulnérabilité ou une faille est exploitée dans un programme eBPF, son impact est généralement limité à l'environnement de type "bac à sable".
En outre, avant qu'un programme eBPF puisse commencer à s'exécuter dans le noyau, il doit subir certaines vérifications. 
Le vérificateur vérifie que le programme eBPF ne présente pas de violations potentielles de la sécurité, 
telles que les accès hors limites à la mémoire, les boucles infinies et les fonctions non autorisées du noyau.
Il s'assure ainsi que le programme n'entrera pas dans une boucle infinie et ne provoquera pas un crash du noyau.
Ces contrôles de sécurité font de l'eBPF une option plus sûre que les modules du noyau Linux pour l'exécution d'applications dans le noyau Linux.