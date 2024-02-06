---
title: Malla de Servicios (Service Mesh)
status: Completed
category: Tecnología
tags: ["redes", "", ""]
---

En un mundo de [arquitectura de microservicios](/es/microservices-architecture/), las aplicaciones se dividen en múltiples [servicios](/es/service/) que se comunican a través de una red.
Al igual que las redes de wifi, las redes de computadoras son poco confiables, proclives a ser atacadas y en muchos casos lentas.
Las mallas de servicios (Service meshes) afrontan estos nuevos desafíos mediante el manejo de tráfico (por ejemplo la comunicación) entre servicios y
agregando [fiabilidad](/es/reliability/), [observabilidad](/es/observability/) e implementaciones de seguridad a todos los servicios.

## Problema que aborda

Cuando se ha migrado a una arquitectura de microservicios, los ingenieros ahora deben lidiar con cientos,
incluso miles de servicios individuales que necesitan comunicarse.
Lo que significa que existe mucho tráfico hacia y desde estos servicios a través de la red.
Sumado a lo anterior, las aplicaciones individuales podrían necesitar codificar la comunicación para cumplir con requerimientos legales,
proveer métricas a los equipos de operaciones o proporcionar información detallada sobre el tráfico para ayudar a diagnosticar problemas.
Si todas estas funcionalidades se agregaran a cada aplicación,
cada una causaría una duplicación innecesaria y podría hacer más lento el desarrollo de nuevas funcionalidades.

## ¿Cómo ayuda?

Las mallas de servicios agregan fiabilidad, observabilidad y funcionalidades de seguridad
uniformemente a todos los servicios en un clúster sin requerir cambios en el código.
Antes de las mallas de servicios, esta funcionalidad tenía que ser agregada al código en cada servicio,
potencialmente convirtiéndose en una fuente de errores y deuda técnica.
