---
title: Escalado horizontal
status: Completed
category: Concepto
tags: ["infrastructure", "", ""]
---

## ¿Qué es?

Escalado horizontal es una técnica donde la capacidad del sistema es incrementada agregando más [nodos](/es/nodes)
en vez de agregar más recursos computacionales a nodos individuales (conocido como [escalado vertical](/vertical-scaling/)).
Como ejemplo, digamos que tenemos un sistema con 4 GB de memoria y queremos incrementar su capacidad a 16 GB,
escalar horizontalmente significa agregar 4 x 4 GB en vez de cambiar a un sistema de 16 GB.

Este método mejora el funcionamiento de una aplicación agregando nuevas instancias o [nodos](/es/nodes),
para distribuir de mejor manera la carga de trabajo.
En concreto, apunta a disminuir la carga del servidor
en vez de expandir la capacidad de cada uno individualmente.

## Problema que aborda

Cuando la demanda a una aplicación crece más allá de la capacidad de la misma y de su instancia,
necesitamos encontrar una manera de [escalar](/scale) (agregar capacidad) al sistema.
Podemos hacerlo agregando más nodos al sistema (escalado horizontal)
o más recursos computacionales a los nodos existentes (escalado vertical).

## ¿Cómo ayuda?

El escalado horizontal permite a las aplicaciones escalar a cualquier límite que el clúster subyacente permita.
Al agregar más instancias al sistema, la aplicación puede procesar una mayor cantidad de peticiones.
Si una aplicación puede manejar 1000 peticiones por segundo,
cada nodo adicional debería incrementar el total de peticiones alrededor de 1000 por segundo.
Esto permite hacer más trabajo concurrentemente
sin la necesidad de incrementar la capacidad de un nodo en particular.

## Términos relacionados

* [Escalado Vertical](/es/vertical-scaling/)
* [Autoescalado](/es/auto-scaling/)