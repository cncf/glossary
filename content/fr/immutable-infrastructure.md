---
title: Infrastructure immuable
status: Completed
category: property
tags: ["infrastructure", "propriété", ""]
---

L'infrastructure immuable fait référence à l'infrastructure informatique ([machines virtuelles](/fr/virtual-machine/), [conteneurs](/fr/container/), équipements réseau) qui ne peut pas être modifiée une fois déployée.
Cela peut être imposé à l'aide d'un processus automatisé qui écrase les modifications non autorisées, ou à l'aide d'un système qui, dés le départ, n'autorise aucune modification.
Les conteneurs sont un bon exemple d'infrastructure immuable, car des modifications persistantes ne peuvent être apportées aux conteneurs qu'en créant une nouvelle version du conteneur ou en recréant le conteneur existant à partir de son image.

En empêchant ou en identifiant les modifications non autorisées, les infrastructures immuables facilitent l'identification et la réduction des risques de sécurité.
L'exploitation d'un tel système devient beaucoup plus simple, car les administrateurs peuvent faire des hypothèses à son sujet.
Après tout, ils savent que personne n'a commis d'erreurs ou effectué des modifications qu'ils ont oublié de communiquer.
L'infrastructure immuable va de pair avec l'[infrastructure en tant que code](/fr/infrastructure-as-code/), où toute l'automatisation nécessaire à la création de l'infrastructure est stockée dans un système de contrôle des versions (par exemple, Git).
Cette combinaison d'immuabilité et de contrôle des versions signifie qu'il existe un journal d'audit durable de chaque modification autorisée apportée à un système.
