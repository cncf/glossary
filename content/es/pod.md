---
title: Pod
status: Feedback Appreciated
category: Concepto
tags: ["infraestructura", "fundamento"]
---

En [Kubernetes](/kubernetes/), un pod es la unidad más básica dentro de un clúster. Un pod puede contener uno o más [contenedores](/container/), que comparten el mismo espacio de red y de almacenamiento.

Kubernetes gestiona los pods, garantizando su alta disponibilidad y escalabilidad mediante escalamiento [vertical](/vertical-scaling/) o [horizontal](/horizontal-scaling/) según sea necesario.

## Problema que aborda

Por lo general, los contenedores funcionan de forma independiente, ejecutando tareas específicas por separado. Sin embargo, en ocasiones, es necesario que interactúen y sean gestionados en conjunto ya que si se hiciera de forma individual conllevaría a la redundancia en tareas de gestión.

## ¿Cómo ayuda?

Los pods simplifican las operaciones de contenedores al agruparlos en una única unidad. Facilitan el intercambio de datos mediante el uso compartido de volúmenes y la comunicación entre contenedores. Además, permiten la asignación flexible de recursos de computo, como memoria y CPU, facilitando así el uso eficiente de los recursos disponibles.