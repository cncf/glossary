---
title: Función como Servicio (FaaS)
status: Completed
category: Tecnología
tags: ["infraestructura", "", ""]
---

La Función como Servicio (FaaS según sus siglas en Inglés) es un tipo de [servicio](/es/service/) [sin servidor](/es/serverless/) en la [computación en la nube](/es/cloud-computing/)
que permite ejecutar código como respuesta a ciertos eventos
sin necesidad de mantener infraestructura compleja
típicamente asociada con la creación y lanzamiento de aplicaciones en [arquitectura de microservicios](/es/microservices-architecture/).
Con FaaS, los usuarios manejan solo las funciones y la información mientras que el proveedor de nube maneja la aplicación.
Esto permite a los desarrolladores ejecutar las funciones que necesitan sin tener que pagar por los servicios cuando el código no está ejecutándose.

## Problema que aborda

En un escenario tradicional de servidores locales, una organización maneja y mantiene su propio centro de datos.
Esta organización debe invertir en servidores, almacenamiento, software y otras tecnologías
y potencialmente contratar un equipo de TI o contratistas para comprar, manejar y actualizar todo el equipamiento y sus licencias.
El centro de datos tiene que ser construido para soportar grandes demandas, incluso cuando la carga de trabajo se vea disminuida y los equipos se utilizan muy por debajo de su capacidad.
En caso contrario si la organización crece, el equipo contratado podría no cubrir la demanda.
Bajo un modelo estándar de computación en la nube basado en [Infraestructura como Servicio (IaaS)](/es/infrastructure-as-a-service/),
los usuarios pueden contratar de antemano unidades de capacidad, es decir, pagando a un proveedor de nube pública por componentes de un servidor que siempre está encendido para ejecutar tus aplicaciones.
Es responsabilidad del usuario aumentar la capacidad del servidor durante tiempos de gran demanda
y reducirla cuando no es necesaria.
La infraestructura de la nube necesaria para ejecutar una aplicación está encendida incluso cuando la aplicación no está siendo utilizada.

## ¿Cómo ayuda?

FaaS ofrece a los desarrolladores un nivel de [abstracción](/es/abstraction/) para ejecutar aplicaciones en respuesta a eventos sin la necesidad de mantener servidores.
Como ejemplo, enviar un archivo a la nube podría generar una ejecución de código específico que transforme el archivo a varios formatos.
La infraestructura FaaS aumentará automáticamente la capacidad de procesamiento del código para soportar gran demanda,
y el desarrollador no deberá dedicar tiempo alguno a crear código que soporte [escalabilidad](/es/scalability/).
El cálculo de costos está basado solo en tiempo de procesamiento, por lo cual las organizaciones no deben pagar cuando las funciones no están en uso.
