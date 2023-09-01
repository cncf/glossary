---
title: Arquitectura de Microservicios
status: Completed
tags: ["architecture", "fundamental", ""]
---

## ¿Qué es?

Una arquitectura de microservicios es un enfoque arquitectónico que divide las aplicaciones en (micro)[servicios](/es/service/) individuales e independientes, donde cada servicio se centra en una funcionalidad específica.
Estos servicios trabajan juntos estrechamente, apareciendo ante el usuario final como una sola entidad.
Tomemos Netflix como ejemplo.
Su interfaz permite acceder, buscar y preestrenar vídeos.
Es probable que estas funciones estén gestionadas por servicios pequeños, cada uno de los cuales se encarga de una funcionalidad, por ejemplo, la autenticación, la búsqueda y la ejecución de preestrenar vídeos en el navegador.

Este enfoque arquitectónico permite a los desarrolladores introducir nuevas características o actualizar la funcionalidad mucho más rápido que si estuvieran todo junto, como en una [aplicación monolítica](/es/monolithic-apps/) (más sobre esto más adelante).

## Problema que aborda

Las aplicaciones se componen de diferentes partes, cada una responsable de una capacidad específica.
La demanda de una funcionalidad concreta no aumentará ni disminuirá necesariamente con la demanda de otras partes de la aplicación.
Volviendo a nuestro ejemplo de Netflix.
Digamos que después de una gran campaña de marketing, Netflix observa un gran volumen de inscripciones, pero la descarga de videos se ha mantenido más o menos estable en las primeras horas del día.
El aumento de suscripciones exige más capacidad de suscripción.
Tradicionalmente (enfoque monolítico), toda la aplicación tendría que ser [escalada](/es/scalability/) para acomodar el aumento - un uso muy ineficiente de los recursos.

Las arquitecturas monolíticas también hacen que los desarrolladores tengan la posibilidad de caer en errores del diseño.
Como todo el código está en el mismo sitio, es más fácil hacer que ese código esté [estrechamente acoplado](/tightly-coupled-architectures/) y más difícil aplicar el principio de separación de preocupaciones.
Los monolitos también suelen requerir que los desarrolladores entiendan todo el código base antes de desplegar cualquier funcionalidad.
La arquitectura de microservicios es una respuesta a estos retos.


## ¿Cómo ayuda?

Separar la funcionalidad en diferentes microservicios hace que sean más fáciles de desplegar, actualizar y escalar de forma independiente.
También permite que diferentes equipos trabajen simultáneamente en una pequeña parte de una aplicación más grande sin afectar negativamente al resto de la aplicación.
Aunque una arquitectura de microservicios resuelve muchos problemas, también crea una sobrecarga operativa: las cosas que hay que desplegar y controlar aumentan el orden de magnitud.
Muchas [tecnologías nativas para la nube](/es/cloud-native-tech/) facilitan el despliegue y gestión de microservicios.
