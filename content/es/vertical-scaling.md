---
title: Escalado Vertical
status: Completed
category: Concepto
tags: ["infraestructura", "", ""]
---

El escalado vertical, también conocido como "agregar y reducir", es una técnica donde
la capacidad de un sistema es incrementada agregando CPU y memoria a [nodos](/es/nodes/) individuales a medida que la carga de trabajo aumenta.
Digamos que tenemos una computadora con 4GB de RAM y quisiéramos aumentar su capacidad a 16 GB de RAM,
escalar verticalmente significa cambiar a un sistema de 16 GB de RAM,
(Referirse a [escalado horizontal](/es/horizontal-scaling/) para un método distinto de escalado.)

## Problema que aborda

Cuando la demanda hacia una aplicación crece más allá de la capacidad actual de esa aplicación,
necesitamos encontrar una manera de escalar (agregar capacidad) el sistema.
Podríamos agregar más recursos computacionales a los nodos existentes (escalado vertical)
o más nodos al sistema ([escalado horizontal](/es/horizontal-scaling/)).
La [escalabilidad](/es/scalability/) contribuye a la competitividad, eficiencia, reputación y calidad.

## ¿Cómo ayuda?

El escalado vertical permite modificar su servidor sin tener que cambiar el código de la aplicación.
Esto contrasta con el escalado horizontal, donde la aplicación debe soportar replicación para escalar, potencialmente requiriendo actualizaciones de código.
El escalado vertical incrementa la capacidad de una aplicación existente
agregando recursos computacionales, permitiendo a la aplicación procesar más peticiones y hacer más trabajo de forma concurrente.

## Términos relacionados

* [Escalado Horizontal](/es/horizontal-scaling/)
* [Autoescalado](/es/auto-scaling/)