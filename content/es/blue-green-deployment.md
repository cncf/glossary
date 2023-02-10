---
title: Despliegue Blue Green
status: Completed
category: Concepto
tags: ["methodology", "application", ""]
---

## ¿Qué es?

El despliegue Blue green es una estrategia para actualizar los sistemas informáticos en ejecución con un tiempo de inactividad mínimo.
El operador mantiene dos entornos, llamados "blue" y "green".
Uno sirve el tráfico de producción (la versión que todos los usuarios usan actualmente), mientras que el otro está actualizado.
Una vez que las pruebas han concluido en el entorno inactivo (green),
el tráfico de producción se cambia (a menudo mediante el uso de un [balanceador de cargas](/es/load-balancer/).
Ten en cuenta que el despliegue blue-green usualmente significa cambiar los entornos por completo, comprendiendo muchos [servicios](/service/), todos a la vez.
Confusamente, algunas veces el término se utiliza para referirse a servicios dentro de un sistema.
Para evitar esta ambigüedad, se prefiere el término "despliegue con tiempo de inactividad cero" cuando se refiere a componentes individuales.

## Problema que aborda

Los despliegues blue-green permiten un tiempo de inactividad mínimo al actualizar el software que se debe cambiar en "paso a paso" debido a la falta de compatibilidad con versiones anteriores.
Por ejemplo, el despliegue blue-green sería apropiado para una tienda en línea
que consiste de un sitio web y una base de datos que necesita ser actualizada,
pero la nueva versión de la base de datos no funciona con la versión vieja del sitio web, y viceversa.
En esta instancia, ambos necesitan ser cambiados al mismo tiempo.
Si esto se realiza en un sistema en producción, los clientes notarían un tiempo de inactividad.

## ¿Cómo ayuda?

El despliegue blue-green es una estrategia apropiada para el software que no está en la nube que se necesita actualizar con tiempo de inactividad mínimo.
Sin embargo, su uso es una señal de que el software heredado necesita ser rediseñado para que los componentes se puedan actualizar individualmente.
