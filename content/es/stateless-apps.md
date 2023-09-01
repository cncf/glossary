---
title: Aplicaciones sin estado
status: Feedback Appreciated
category: Tecnología
tags: ["fundamental", "application", ""]
---

## ¿Qué es?

Una aplicación sin estado o independiente al estado, es la que no guarda ningún dato de sesión del cliente (estado) en el servidor donde la aplicación vive.
Cada sesión del usuario se maneja como si fuese la primera vez y las respuestas no son dependientes de datos de la sesión anterior y
brinda funcionalidad para usar servicios de impresión, Red de Distribución de Contenido (CDN, Content Delivery Network) o servidores web
para procesar cada solicitud a corto plazo.
Por ejemplo, alguien utiliza un motor de búsqueda para resolver una duda,
en caso de que la operación sea interrumpida o abortada luego de que se envía la solicitud de búsqueda,
esta persona deberá reintentar la operación dado que no se almacenó información acerca de su solicitud previa.

## Problema que aborda

Las aplicaciones sin estado se utilizan para abordar la problemática de la resiliencia,
considerando que dentro de un [clúster](/es/cluster/) diferentes aplicaciones pueden trabajar independientemente,
sirviendo múltiples solicitudes al mismo tiempo.
En caso de que se presente un problema, tú podrás reiniciar la aplicación,
y esta retornará a ser operacional con poco o ningún tiempo de baja.
Los beneficios de las aplicaciones sin estado incluyen resiliencia, elasticidad y alta disponibilidad.
Aun así, la mayoría de las aplicaciones que se utilizan hoy en día son al menos parcialmente [aplicativos con estado](/es/stateful-apps/),
dado que almacenan información como preferencias y configuraciones para mejorar la experiencia de usuario.

## ¿Cómo ayuda?

Con el uso de aplicaciones sin estado, lo único que el clúster es responsable es de
correr la aplicación y el contenido estático alojado dentro de si.
En otras palabras, no se necesita hacer cambios a bases de datos, no inicializa o necesita limpiar archivos cuando la aplicación es eliminada.
Los [contenedores](/es/container/) sin estado son más sencillos de desplegar,
dado que no necesitarás preocuparte de guardar los datos en volúmenes de almacenamiento persistente ó
realizar copias de respaldo del mismo.
