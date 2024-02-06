---
title: Balanceador de Carga
status: Feedback Appreciated
category: Concepto
tags: ["infraestructura", "redes", ""]
---

Un balanceador de carga es una herramienta que distribuye eficientemente las solicitudes entrantes entre varias instancias de una aplicación.
Tome una arquitectura de [microservicio](/es/microservices/) como ejemplo, donde cada servicio se puede [escalar horizontalmente](/es/horizontal-scaling/).
Un balanceador de carga se encuentra frente a un microservicio escalado y garantiza que ninguna instancia reciba la mayor parte de las solicitudes.
Los balanceadores de carga pueden estar basados en software o hardware.

## Problema que aborda

Las aplicaciones y sitios web modernos generalmente atienden cientos de miles de solicitudes simultáneas de usuarios finales.
Para manejar todas esas solicitudes, las aplicaciones a menudo escalan horizontalmente.
Pero la escala horizontal presenta un nuevo desafío. ¿Cómo se distribuye el tráfico entrante a todos los servicios por igual?
Aquí es donde entran los balanceadores de carga.

## ¿Cómo ayuda?

Los balanceadores de carga distribuyen dinámicamente todas las solicitudes entrantes entre múltiples servicios, asegurando que ningún servicio obtenga la mayor parte mientras que otros solo reciben unas pocas o ninguna.
En resumen, distribuye la carga entre múltiples servicios, siguiendo un esquema definido (es decir, uniformemente o basado en porcentajes).
Los balanceadores de carga son esenciales para el rendimiento general de una aplicación y, en última instancia, para la experiencia del usuario.
