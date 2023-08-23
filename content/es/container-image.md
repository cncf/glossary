---
title: Imagen de contenedor
status: Feedback Appreciated
category: Concepto
tags: ["", "", ""]
---

## ¿Qué es?

Una imagen es un fichero estático e inmutable que contiene las dependencias para la creación de un [contenedor](/es/container/).
Estas dependencias pueden incluir un archivo binario ejecutable, librerías del sistema,
herramientas del sistema, variables de entorno y otras configuraciones de plataforma necesarias.
Las imágenes son el resultado de la [contenerización](/es/containerization) de una aplicación y típicamente están guardadas en los registros de contenedor,
donde pueden ser descargados para ser ejecutados como procesos aislados usando un Container Runtime Interface (CRI).
El framework de una imagen debe de seguir el esquema estándar definido por el Open Container Initiative (OCI).

## Problema que aborda

Tradicionalmente, los servidores de aplicaciones utilizan configuración específica por entorno para que después las aplicaciones puedan ser desplegadas sobre ellos.
Cualquier configuración errónea entre los entornos es problemática, a menudo traduciéndose en cortes del servicio o despliegues fallidos.
Un entorno de aplicación tiene que ser fácil de replicar, además de estar bien definido;
en caso contrario, la posibilidad de bugs y errores relacionados con el entorno aumenta.
Cuando los entornos de aplicación no están configurados de manera adecuada o son inexactos,
el escalado [horizontal](/es/horizontal-scaling/) y [vertical](/vertical-scaling/) de las aplicaciones se complica y reduce su efectividad.

## ¿Cómo ayuda?

Las imágenes empaquetan una aplicación con todas las dependencias necesarias para ejecutarse, como el servidor de aplicación.
Esto otorga consistencia en todos los entornos, incluyendo los dispositivos locales de desarrollo.
Una imagen puede dar lugar a cualquier número de contenedores, según sea necesario, permitiendo una mayor [escalabilidad](/scalability/).
