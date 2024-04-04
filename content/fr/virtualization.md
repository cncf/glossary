---
title: Virtualisation
status: completed
category: technology
tags: ["fondamental", "infrastructure", "méthodologie"]
---

La virtualisation, dans un cadre Cloud Native,
est l'exécution de plusieurs systèmes d'exploitation isolés sur un même ordinateur physique, aussi appelé serveur.
Ces systèmes d'exploitation isolés et leurs ressources de calcul dédiées (processeur, mémoire et réseau) sont
appelées machines virtuelles ou VMs.
Lorsque nous parlons d'une [machine virtuelle](/fr/virtual-machine/), nous parlons d'un ordinateur défini par logiciel.
C'est-à-dire quelque chose qui ressemble et se comporte comme un vrai ordinateur, mais partage son matériel avec d'autres machines virtuelles.
Le [cloud computing](/fr/cloud-computing/) fonctionne principalement grâce à la virtualisation.
Par exemple, lorsque vous louez un "ordinateur" auprès d'AWS, cet ordinateur est en fait une machine virtuelle.

## Problème auquel il répond

La virtualisation résout plusieurs problèmes, notamment l'amélioration de l'utilisation du matériel physique
en permettant à plus d'applications de s'exécuter sur un même ordinateur physique
tout en restant isolés les uns des autres pour des raisons de sécurité.

## Quelle en est l'utilité

Les applications exécutées sur des machines virtuelles ne savent pas qu'elles partagent un ordinateur physique.
La virtualisation permet également de démarrer un nouvel "ordinateur" (une machine virtuelle) en quelques minutes
sans se soucier des contraintes physiques liées à l'ajout d'un nouvel ordinateur dans un centre de données.
