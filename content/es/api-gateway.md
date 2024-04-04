---
title: API Gateway
status: Completed
category: Tecnología
tags: ["redes", "", ""]
---

Un [API](/es/application-programming-interface/) gateway es una herramienta que
concentra aplicaciones APIs únicas, centralizando a todas en un solo lugar.
Esto permite a las organizaciones mover funciones clave,
como puede ser la autenticación y la autorización o limitando el número de peticiones entre aplicaciones
a una ubicación de administración centralizada.
Un API Gateway funciona como una interface común para los que la consumen (usualmente aplicaciones externas).

## Problema que aborda

Si está haciendo APIs con disponibilidad para consumidores externos,
es deseable tener un único punto de entrada para administrar y controlar todo el acceso.
Adicionalmente, si necesita aplicar funcionalidad en estas interacciones,
un API Gateway le permitirá aplicarla de manera uniforme a todo el tráfico, sin requerir cambios en el código de la aplicación.

## ¿Cómo ayuda?

Proporcionando un único punto de acceso para varias APIs en una aplicación,
los API Gateway simplifican la organización para aplicar decisiones de negocio transversales o lógicas de seguridad en una ubicación central.
Adicionalmente, permiten a los consumidores de aplicaciones ir en una única dirección para todas sus necesidades.
Un API Gateway puede simplificar preocupaciones operativas, como son la seguridad y la [observabilidad](/es/observability/)
proporcionando un único punto de acceso para las peticiones a todos los servicios web en el sistema.
Como todas las peticiones fluyen por el gateway, esto presenta un lugar único para
agregar funcionalidades como la recolección de métricas, límites de tráfico y la autorización.
