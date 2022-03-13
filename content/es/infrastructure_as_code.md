---
title: Infraestructura como Código (IaC)
status: Completado
category: concepto
---

## Qué es
Infraestructura como Código es una práctica para almacenar la definición de la infraestructura en uno o varios archivos. Esto reemplaza el modelo tradicional dónde la infraestructura es un servicio aprovisionado de forma manual, usualmente usando scripts con la consola o otras herramientas de configuración.

## A qué problema esta dirigido
Construir [aplicaciones nativas cloud](/cloud_native_apps/) requiere infraestructura de forma inmediata y reproducible. Además requiere de [escalabilidad](/scalability/), bajo demanda y reproducible de forma automática y definitivamente sin la intervención humana. El aprovisionamiento manual no puede escalar y responder a los requerimientos que las [aplicaciones nativas cloud](/cloud_native_apps/). Los cambios manuales no son reproducibles rápidamente a los requerimientos de [escalabilidad](/scalability/), y puede introducir errores de configuración.

## Cómo esto ayuda
Representados los recursos del [centro de datos](/data_center/) tales como servidores, balanceadores de carga y sub-redes como código, habilita a los equipos a poseer una única fuente de la verdad de todas las configuraciones y también de sus [centro de datos](/data_center/) en los flujos de [CI](/continuous_integration/)/[CD](/continuous_delivery/) implementados bajo un sistema de control de versiones y estrategias de despliegue.


