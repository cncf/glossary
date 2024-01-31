---
title: Arquitecturas fuertemente acopladas
status: Completed
category: Propiedad
tags: ["fundamental", "arquitectura", "propiedad"]
---

La arquitectura fuertemente acoplada es un tipo de arquitectura donde los componentes individuales de la aplicación son interdependientes 
(es el paradigma opuesto a [arquitectura débilmente acoplada](/es/loosely-coupled-architecture/)). 
Esto quiere decir que un cambio en uno de los componentes probablemente impactará a los demás.
En general este tipo de arquitectura es más sencilla de implementar que las arquitecturas débilmente acopladas, 
pero puede llevar a un sistema a ser más vulnerable a fallos en cascada. 
También tiende a requerir coordinación entre despliegues de componentes
lo cual puede afectar negativamente la productividad del desarrollador.

Las arquitecturas fuertemente acopladas son una manera tradicional de construir aplicaciones. 
Mientras que no necesariamente siguen todas buenas prácticas de desarrollo de [microservicios](/es/microservices-architecture/)
pueden ser útiles en circunstancias específicas.
Tienden a ser más rápidas y sencillas de implementar,
al igual que las [aplicaciones monolíticas](/es/monolithic-apps/) pueden acelerar el ciclo de desarrollo inicial.