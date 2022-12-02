---
title: Contenerización
status: Completed
category: Tecnología
tags: ["application", "", ""]
---

## ¿Qué es?

La contenerización es el proceso que consiste en empaquetar una aplicación y sus dependencias en una [imagen de contenedor](/es/container-image/).
La construcción del contenedor requiere del seguimiento del estándar [Open Container Initiative](https://opencontainers.org) (OCI).
Mientras la salida de este proceso sea un contenedor de imagen que se adhiera a dicho estándar, la herramienta de contenerización usada no es relevante.

## Problema que aborda

Antes de que los contenedores fuesen relevantes, las organizaciones dependían de máquinas virtuales para
orquestar múltiples aplicaciones en una única [máquina Bare Metal](/es/bare-metal-machine/).
Las máquinas virtuales son significativamente más pesadas que los contenedores y requieren de un hipervisor para su funcionamiento.
Debido al almacenamiento, copias de seguridad y transferencia de estas plantillas de máquinas virtuales, la creación de las mismas también se trata de un proceso lento.
Adicionalmente, las máquinas virtuales pueden sufrir variaciones en la configuración, lo cuál contradice el principio de [inmutabilidad](/es/immutable-infrastructure/).

## ¿Cómo ayuda?

Al contrario que con las máquinas virtuales tradicionales, las imágenes de contenedor son ligeras y
el proceso de contenerización requiere de una lista exhaustiva de dependencias.
Este archivo puede ser versionado y el proceso de construcción automatizado,
permitiendo a una organización centrarse en otras prioridades
mientras que los procesos automatizados se encargan de la construcción.
Una imagen de contenedor se almacena junto a un identificador único
que está vinculado a un contenido y configuración exacta.
Conforme los contenedores son programados y reprogramados,
siempre van a ser revertidos a su estado inicial, lo cuál elimina variaciones en la configuración.
