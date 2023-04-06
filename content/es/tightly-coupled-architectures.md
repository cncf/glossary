---
title: Tightly Coupled Architectures
status: Completed
category: Property
tags: ["fundamental", "architecture", "property"]
---

La arquitectura estrechamente acoplada es un estilo arquitectónico en el que varios componentes de la aplicación son interdependientes
(el paradigma opuesto de [arquitecturas débilmente acopladas](/es/loosely-coupled-architecture/)).
Esto significa que un cambio en un componente probablemente afectará a otros componentes.
Por lo general, es más fácil de implementar que los estilos arquitectónicos más vagamente acoplados,
pero puede dejar un sistema más vulnerable a fallas en cascada.
También tienden a requerir lanzamientos coordinados de componentes
lo que puede convertirse en un lastre para la productividad del desarrollador.

Las arquitecturas de aplicaciones estrechamente acopladas son una forma bastante tradicional de crear aplicaciones.
Si bien no es necesariamente consistente con todas las mejores prácticas de desarrollo de [microservicios](/es/microservices-architecture/)
pueden ser útiles en circunstancias específicas.
Tienden a ser más rápidos y sencillos de implementar y
al igual que las [aplicaciones monolíticas](/es/monolithic-apps/), pueden acelerar el ciclo de desarrollo inicial.
