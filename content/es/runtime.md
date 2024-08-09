---
title: Runtime
status: Completed
category: concept
tags: ["application", "", ""]
---

Un *runtime*, en general, ejecuta un fragmento de software. Es una [abstracción](/es/abstraction/) del sistema operativo subyacente que traduce los comandos del programa en acciones correspondientes para el sistema operativo.

En el contexto de [cloud native](/es/cloud-native-apps/), *runtime* generalmente se refiere al *container runtime*. Un *container runtime* implementa específicamente la especificación de la [Open Container Initiative](https://opencontainers.org/) para asegurar un manejo consistente a través de diferentes tecnologías de orquestación de contenedores.

## Problema que aborda

Sin la abstracción de un *container runtime*, la aplicación tendría que lidiar con toda la mecánica de cada sistema operativo, aumentando la complejidad de ejecutar la aplicación.

## ¿Cómo ayuda?

Los *container runtimes* son un componente necesario de los orquestadores de contenedores como Kubernetes. Manejan el ciclo de vida del contenedor, lo cual hace principalmente tres cosas. Primero, define cómo se especifican las imágenes de los contenedores y cómo el *runtime* puede recuperarlas. En segundo lugar, gestionan cómo estas imágenes se descomprimen, 
se apilan, se montan y se ejecutan. Además, los *runtimes* gestionan los recursos de hardware, encargándose de todas estas acciones a nivel del sistema operativo. Esto incluye la asignación y la aislamiento de recursos.
Con el tiempo, diferentes productos de *container runtime* evolucionaron, llevando a la Especificación OCI, que se convirtió en el estándar para los *container runtimes*.

Introducir este estándar permite a los usuarios finales combinar cualquier *runtime* compatible con OCI con cualquier orquestador de contenedores compatible con OCI (como Kubernetes).

## Términos relacionados

- [Cloud Native](https://glossary.cncf.io/es/cloud-native-apps/)
- [Contenerización](https://glossary.cncf.io/es/containerization/)
- [Orquestación de Contenedores](https://glossary.cncf.io/es/container-orchestration/)
- [Arquitectura de Microservicios](https://glossary.cncf.io/es/microservices-architecture/)
