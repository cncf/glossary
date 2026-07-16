---
title: WebAssembly
status: Completed
category: Concept
tags: ["Application", "", ""]
---

WebAssembly (souvent abrégé en Wasm) est un format d'instructions binaires conçu comme une cible de compilation portable pour des langages de haut niveau tels que C, C++, Rust et d'autres. Il permet le déploiement d'applications clientes et serveur sur le web.
Il s'agit d'un format de code à octets (bytecode en anglais) de bas niveau qui peut être exécuté dans une machine virtuelle, généralement intégrée aux navigateurs web. Bien qu'initialement développé pour le web, WebAssembly est un moteur d'exécution universel et est utilisé dans des environnements autres que le web, tels que l'Internet des Objets (IoT en anglais) et l'informatique en périphérie (Edge Computing en anglais).

## Problème auquel il répond

Pendant de nombreuses années, la pile LAMP (Linux Apache MySQL PHP) a été la norme pour les applications web. Par la suite, Javascript a dominé le développement d'applications frontales et les applications basées sur node.js sont devenues la norme. Au fur et à mesure que les technologies autour du web évoluaient, elles favorisaient fortement les langages interprétés, qui sont généralement moins performants que les langages compilés, malgré les avancées technologiques.
Bien que JavaScript se soit amélioré au fil des années, il reste confronté à des limites de performance lors de l'exécution de tâches à forte intensité de calcul.
Les langages interprétés qui sont compilés au moment de l'exécution connaissent souvent des problèmes de performance et de fonctionnalité lorsque le code est exécuté dans différents environnements. À l'inverse, les binaires compilés s'exécutent généralement de la même manière tant qu'ils ont été compilés correctement. Cependant, historiquement, un binaire compilé est moins adapté à l'environnement web.

## Quelle en est l'utilité

WebAssembly fournit un format binaire de bas niveau qui peut être exécuté à des vitesses proches du niveau natif, ce qui permet aux applications web d'effectuer des calculs complexes de manière efficace.
Il permet aux développeurs de créer des applications web en s'appuyant sur leurs compétences existantes dans des langages tels que C, C++, Rust et d'autres.
Cela ouvre de nouvelles possibilités et permet aux développeurs de réutiliser des bases de code et des bibliothèques existantes.
En outre, les modules WebAssembly peuvent fonctionner de manière cohérente sur différents navigateurs, systèmes d'exploitation et appareils, ce qui réduit la nécessité d'un code spécifique à la plateforme.
Dans l'ensemble, WebAssembly répond aux limitations de performance, aux restrictions de langage, à la portabilité du code, aux problèmes de sécurité, à la taille du code et aux problèmes de temps de chargement, offrant ainsi un environnement plus robuste et plus flexible pour le développement d'applications web.
