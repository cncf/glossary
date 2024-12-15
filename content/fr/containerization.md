---
title: Conteneurisation
status: Completed
category: Technology
tags: ["application", "", ""]
---

La conteneurisation est l'action de regrouper une application et ses dépendances dans une image de conteneur.
Le processus de construction du conteneur nécessite de respecter le standard de l'[Open Container Initiative](https://opencontainers.org) (OCI).
Du moment que le résultat est une image qui respecte ce standard, l'outil de conteneurisation qui sera utilisé n'a pas d'importance.

## Problème auquel il répond

Avant que les conteneurs ne se répandent, les organisations s'appuyaient sur les machines virtuelles (VMs) pour orchestrer différentes applications au sein d'une unique [machine physique](/fr/bare-metal-machine/).
Les VMs sont sensiblement plus grosses que les conteneurs et nécessitent un hyperviseur pour fonctionner.
À cause du stockage, des sauvegardes et du transfert de ces gros modèles de VM, la création des modèles de VM est également longue.
De plus, les VMs peuvent souffrir d'une dérive de configuration ce qui enfreint le principe de l'[immuabilité](/fr/immutable-infrastructure/).

## Quelle en est l'utilité

Les images de conteneurs sont légères (par opposition aux VM traditionnelles) et
le processus de conteneurisation nécessite un fichier qui liste les dépendances.
Ce fichier peut être versionné et la construction automatisée, permettant
à une organisation de se concentrer sur d'autres priorités pendant que 
le processus automatisé va se charger de la construction.
Une image de conteneur est stockée sous un identifiant unique qui est lié à 
son contenu et sa configuration exacte.
Étant donné que les conteneurs sont instanciés et ré-instanciés, ils sont toujours
réinitialisés à leur état initial ce qui élimine toute dérive de configuration.
