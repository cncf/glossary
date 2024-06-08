---
title: Pod
status: Feedback Appreciated
category: Concepto
tags: ["infraestructura", "fundamento", ""]
---

Dentro de un entorno de [Kubernetes](/kubernetes/), un pod actúa como la unidad más básica desplegable. Representa un bloque de construcción esencial para desplegar y administrar aplicaciones contenerizadas. Cada pod contiene una única instancia de la aplicación y puede albergar uno o más [contenedores](/container/). Kubernetes administra los pods como parte de un despliegue más grande y puede escalar los pods [vertical](/vertical-scaling/) u [horizontalmente](/horizontal-scaling/) según sea necesario.

Kubernetes gestiona los pods, garantizando su alta disponibilidad y escalabilidad mediante escalamiento [vertical](/vertical-scaling/) o [horizontal](/horizontal-scaling/) según sea necesario.

## Problema que aborda

Mientras los contenedores generalmente actúan como unidades independientes que ejecutan y controlan una carga de trabajo en particular, hay casos en los que los contenedores necesitan interactuar y ser controlados de manera estrechamente acoplada.

Si cada uno de estos contenedores estrechamente relacionados se administrara individualmente, se generarían tareas de gestión redundantes. Por ejemplo, el operador tendría que determinar repetidamente la ubicación de los contenedores relacionados para asegurarse que permanezcan juntos. Y aunque los ciclos de vida de estos contenedores relacionados necesitan estar sincronizados, solo se pueden administrar individualmente.

## ¿Cómo ayuda?

Los pods agrupan contenedores estrechamente vinculados en una única unidad, lo que simplifica significativamente las operaciones de contenedores. Por ejemplo, los contenedores auxiliares a menudo se suelen utilizar junto con el contenedor principal para agregar funcionalidades adicionales o configurar aspectos globales. Ejemplos de esto incluyen contenedores que inyectan y aplican configuraciones básicas al contenedor principal, sidecar (contenedores) que manejan el enrutamiento del tráfico de red para el contenedor principal (ver [malla de servicios](/service-mesh/)) o contenedores que recolectan registros en conjunto con cada contenedor.

La asignación de memoria y CPU se puede definir a nivel de pod, permitiendo a los contenedores internos a compartir recursos de forma flexible, o bien se puede definir por contenedor individualmente.