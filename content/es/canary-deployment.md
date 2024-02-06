---
title: Canary Deployment
status: Completed
category: Concepto
tags: ["metodología", "aplicación", ""]
---

Canary deployment es una estrategia de despliegue que comienza con dos entornos:
uno con tráfico y otro que contiene el código actualizado sin tráfico.
El tráfico se traslada gradualmente de la versión original de la aplicación a la versión actualizada.
Puede comenzar moviendo el 1 % del tráfico, luego el 10 %, el 25 %, y así sucesivamente,
hasta que todo el tráfico se ejecute en la versión actualizada.
Las organizaciones pueden probar la nueva versión del software en producción, obtener comentarios,
diagnosticar errores y volver rápidamente a la versión estable si es necesario.

El término "canario" (canary en inglés) se refiere a la práctica de "canario en una mina de carbón"
en la que se llevaban pájaros canarios a las minas de carbón para mantener mineros seguros.
Si hubiera gases nocivos inodoros, el ave moriría y los mineros sabían que tenían que evacuar con rapidez.
De manera similar, si algo sale mal con el código actualizado, el tráfico se "evacua" de regreso a la versión original.

## Problema que aborda

No importa cuán minucioso sea el control de calidad de una nueva versión, siempre se descubren algunos errores en producción.
Cambiar el 100 % del tráfico de una versión de una aplicación a otra puede generar fallas más impactantes.

## ¿Cómo ayuda?

Canary deployments permiten a las organizaciones ver cómo se comporta el nuevo software en escenarios del mundo real
antes de mover una cantidad significativa de tráfico a la nueva versión.
Esta estrategia permite a las organizaciones minimizar el tiempo de inactividad y revertir rápidamente en caso de problemas con la nueva implementación.
También permite pruebas de aplicaciones de producción más profundas sin un impacto significativo en la experiencia general del usuario.
