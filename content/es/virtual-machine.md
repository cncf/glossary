---
title: Máquina Virtual
status: Completed
category: Tecnología
tags: ["fundamento", "infraestructura", ""]
---

Una máquina virtual (VM según sus siglas en Inglés) es una computadora y su sistema operativo
no relacionados a un hardware específico.
Las máquinas virtuales utilizan el método de [virtualización](/es/virtualization/) que crea múltiples computadoras virtuales dentro una sola computadora física.
Esta separación facilita a organizaciones y proveedores de infraestructura
a crear y eliminar máquinas virtuales sin impactar el hardware de base.

## Problema que aborda

Las máquinas virtuales se basan en la virtualización.
Cuando una [máquina bare metal](/es/bare-metal-machine/) utiliza un solo sistema operativo,
la posibilidad de utilización de sus recursos es limitada.
Además, cuando un sistema operativo está directamente ligado a una sola máquina física,
su disponibilidad está directamente vinculada a ese hardware.
Si la máquina física se encontrase fuera de línea debido a tareas de mantenimiento o fallas de hardware, su sistema operativo también lo estará.

## ¿Cómo ayuda?

Eliminando la relación directa entre un sistema operativo y una sola máquina física,
se resuelven varios problemas de las máquinas bare metal:
el tiempo de aprovisionamiento, la utilización de hardware y la resiliencia.

Sin la necesidad de tener que comprar nuevo hardware, instalarlo o configurarlo,
el tiempo de aprovisionamiento de una nueva computadora mejora considerablemente.
Las máquinas virtuales permiten utilizar los recursos de un hardware existente de mejor manera
colocando múltiples máquinas virtuales en una misma máquina física.
Sin estar limitadas a una máquina física específica, las máquinas virtuales aumentan su resiliencia frente a las físicas.
Cuando una máquina física necesita dejar de funcionar,
las máquinas virtuales que se estén ejecutando allí pueden ser migradas a otra máquina física con un impacto mínimo en su operatividad.