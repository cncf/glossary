---
title: Aplicaciones monolíticas
status: Completed
category: Concepto
tags: ["architecture", "fundamental", ""]
---

## ¿Qué es?

Una aplicación monolítica contiene toda la funcionalidad en un único programa desplegable.
Suele ser el punto de partida más sencillo y fácil a la hora de crear una aplicación.
Sin embargo, una vez que la aplicación crece en complejidad, los monolitos pueden ser difíciles de mantener.
Mientras más desarrolladores trabajen en la misma base de código, 
la probabilidad de conflictos y la necesidad de comunicación interpersonal entre desarrolladores aumenta. 

## Problema que aborda

La división de una aplicación en [microservicios](/es/microservices/) aumenta su sobrecarga operativa
ya que hay más cosas que probar, desplegar y mantener en funcionamiento.
Al principio del ciclo de vida de un producto, puede ser ventajoso reducir la complejidad y construir una aplicación monolítica
hasta que se determine que el producto tiene éxito.

## ¿Cómo ayuda?

Un monolito bien diseñado puede defender los principios "lean" al ser la forma más sencilla de poner en marcha una aplicación.
Cuando la aplicación monolítica demuestra su valor de negocio y éxito, se puede descomponer en microservicios.
Crear una aplicación basada en microservicios antes de que haya demostrado su valor puede suponer un gasto prematuro de esfuerzos de ingeniería.
Si la aplicación no aporta valor, ese esfuerzo se desperdicia.
