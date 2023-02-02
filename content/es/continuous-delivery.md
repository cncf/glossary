---
title: Entrega Continua (CD)
status: Completed
category: Concepto
tags: ["methodology", "application", ""]
---

## ¿Qué es?

La entrega continua, a menudo abreviada como CD, es un conjunto de prácticas
en las que los cambios de código se despliegan automáticamente en un entorno de aceptación
(o, en el caso de despliegue continuo, en producción).
El CD incluye procedimientos cruciales para garantizar que el software se pruebe adecuadamente
antes del despliegue y proporciona una forma de revertir los cambios si se considera necesario.
La integración continua (CI) es el primer paso hacia la entrega continua
(es decir, los cambios deben fusionarse limpiamente antes de probarse e implementarse).

## Problema que aborda

El despliegue de actualizaciones de [fiabilidad](/es/reliability/) se convierte en un problema a escala.
Idealmente, desplegaríamos con más frecuencia para ofrecer un mejor valor a los usuarios finales.
Sin embargo, hacerlo manualmente se traduce en altos costos por cada cambio.
Históricamente, para evitar estos costos, las organizaciones liberaban con menos frecuencia,
desplegaban más cambios a la vez y aumentaban el riesgo de que algo salga mal.

## ¿Cómo ayuda?

Las estrategias de CD crean una ruta totalmente automatizada hacia producción
que prueba e implementa el software utilizando varias estrategias de despliegue,
como las versiones [canary](/es/canary-deployment/) o [blue-green](/es/blue-green-deployment/).
Esto permite a los desarrolladores implementar código con frecuencia, lo que les da la tranquilidad de saber que se ha probado la nueva revisión.
Por lo general, el desarrollo basado en troncos (trunk-based development) se usa en estrategias de CD en lugar de ramificación de funciones o solicitudes de incorporación de cambios.

## Términos relacionados

* [Integración Continua](/es/continuous-integration/)
* [Despliegue Continuo](/continuous_deployment/)
