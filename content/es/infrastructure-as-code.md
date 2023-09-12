---
title: Infraestructura como Código (IaC)
status: Completed
category: Concepto
tags: ["infrastructure", "methodology", ""]
---

## ¿Qué es?

Infraestructura como código es una práctica para almacenar la definición de la infraestructura en uno o varios archivos.
Esto reemplaza el modelo tradicional dónde la infraestructura como servicio es aprovisionado de forma manual,
por lo general usando scripts con la consola u otras herramientas de configuración.

## Problema que aborda

Construir aplicaciones de forma nativa para la nube requiere que la infraestructura sea desechable y reproducible.
Además requiere [escalar](/es/scalability/) bajo demanda de forma automática y repetible, potencialmente sin la intervención humana.
El aprovisionamiento manual no puede cumplir los requerimientos de respuesta y escalado de las [aplicaciones nativas para la nube](/es/cloud-native-apps/).
Los cambios manuales no son reproducibles, rápidamente se enfrentan a limites de escalabilidad, e introducen errores de configuración.

## ¿Cómo ayuda?

Representados los recursos del [centro de datos](/es/data-center/) tales como servidores, balanceadores de carga y sub-redes como código,
les permite a los equipos de infraestructura poseer una fuente única de verdad para todas las configuraciones y
también les permite administrar sus [centro de datos](/es/data-center/) en flujos de [CI](/es/continuous-integration/)/[CD](/es/continuous-delivery/)
implementando un sistema de control de versiones y estrategias de despliegue.
