---
title: Orquestación de Contenedores
status: Completed
category: Concepto
---

## ¿Qué es?

La Orquestación de [Contenedores](/es/container/) refiere al manejo y automatización del ciclo de vida de una aplicación contenedorizadas en ambientes dinámicos.
Es ejecutada a través de un orquestador de containers (por lo general, [Kubernetes](/es/kubernetes)),
el cual ofrece despliegues, autoescalado, auto reparación y monitoreo.
La Orquestación es una metáfora:
Al igual que un director de orquesta, la herramienta de Orquestación dirige a los contenedores asegurándose que cada contenedor (como un músico) haga lo que debe.

## Problema que aborda

El manejo de [microservicios](/es/microservices), la seguridad, y la comunicación de red a escala - y los [sistemas distribuidos](/es/distributed-systems) en general - es difícil, sino imposible, de hacer manualmente.
La Orquestación de Contenedores permite a los usuarios automatizar todas estas tareas operacionales.

## ¿Cómo ayuda?

Las herramientas de Orquestación de Contenedores facilitan al usuario a definir el estado deseado de un sistema.
En principio, el usuario declara cómo debería ser (por ejemplo la cantidad de contenedores, asignación de recursos, etc).
Luego, la herramienta de Orquestación automáticamente monitoreará la infraestructura y aplicará las correcciones necesarias si el estado actual del sistema se desviase del estado definido (por ejemplo lanzar un nuevo container si uno fallara).
Esta automatización simplifica muchas de las tareas operativas de los equipos de ingeniería, que de otra manera serían por lo general complejas y ejecutadas manualmente,
incluyendo el aprovisionamiento, despliegue, escalado (expansión y contracción), red, balanceo de carga y otras actividades.