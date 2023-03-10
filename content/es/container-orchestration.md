---
title: Orquestación de Contenedores
status: Completed
category: Concepto
---

## ¿Qué es?

La orquestación de [contenedores](/es/container/) se refiere al manejo y automatización del ciclo de vida de una aplicación contenedorizada en ambientes dinámicos.
Es ejecutada a través de un orquestador de contenedores (por lo general, [Kubernetes](/es/kubernetes)), el cual ofrece despliegues, autoescalado, auto reparación y monitoreo.
La orquestación es metafórica:
Al igual que un director de orquesta, la herramienta de orquestación dirige a los contenedores asegurándose que cada contenedor (como un músico) haga lo que debe hacer.

## Problema que aborda

El manejo de [microservicios](/es/microservices), la seguridad, y la comunicación de red a escala - y los [sistemas distribuidos](/es/distributed-systems) en general - es muy difícil, casi imposible de hacerse manualmente.
La orquestación de contenedores permite a los usuarios automatizar todas estas tareas operacionales.

## ¿Cómo ayuda?

Las herramientas de orquestación de contenedores facilitan al usuario a definir el estado deseado de un sistema.
En principio, el usuario declara cómo debería ser (por ejemplo la cantidad de contenedores, asignación de recursos, etc).
Luego, la herramienta de orquestación automáticamente monitoreará la infraestructura y aplicará las correcciones necesarias si el estado actual del sistema se desviase del estado definido (por ejemplo lanzar un nuevo contenedor si uno fallara).
Esta automatización simplifica muchas de las tareas operativas de los equipos de ingeniería, que de otra manera serían por lo general complejas y ejecutadas manualmente, incluyendo el aprovisionamiento, despliegue, escalado (expansión y contracción), red, balanceo de carga y otras actividades.