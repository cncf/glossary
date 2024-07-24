---
title: Autoescalado
status: Completed
category: Propiedad
tags: ["infraestructura", "", ""]
---

El autoescalado es la habilidad de un sistema para [escalar](/es/scalability) automáticamente, en términos de recursos computacionales.
Con un sistema de autoescalado, los recursos son agregados automáticamente cuando se necesitan y pueden escalar para cumplir con la demanda fluctuante de los usuarios.
El proceso de autoescalado varía y es configurable para escalar basado en diferentes métricas, como son la memoria o el uso de CPU.
Los servicios gestionados en la nube son los que están asociados típicamente con esta funcionalidad de autoescalado
pero también hay opciones e implementaciones disponibles para la mayoría de los servicios existentes.

Anteriormente, la infraestructura y las aplicaciones eran diseñadas para considerar los picos de uso del sistema.
Esta arquitectura implicaba que había más recursos que eran desaprovechados o con cambios rígidos frente a la demanda de los usuarios.
La rigidez en este caso, incrementa el coste y puede suponer una pérdida de negocios debido a problemas de capacidad.

Aprovechando la nube, la [virtualización](/es/virtualization) y la [contenerización](/es/containerization/) de aplicaciones y sus dependencias,
las organizaciones pueden construir aplicaciones que escalan de manera acorde a la demanda de los usuarios.
Se pueden monitorear la demanda de las aplicaciones y de manera automática escalar las mismas, proporcionando una experiencia al usuario final óptima.
Tomemos el ejemplo del aumento de la audiencia de Netflix todos los viernes por la noche.
El autoescalado significa agregar más recursos dinámicamente: por ejemplo,
incrementando el número de servidores que permitirán una mayor transmisión de los videos y reduciendo los servidores una vez que el consumo se ha normalizado.

## Términos relacionados

* [Escalado Horizontal](/es/horizontal-scaling/)
* [Escalado Vertical](/es/vertical-scaling/)
