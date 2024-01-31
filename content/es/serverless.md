---
Title: Sin servidor (Serverless)
Status: Completed
Category: Tecnología
tags: ["arquitectura", "", ""]
---

Sin servidor (Serverless) es un modelo de desarrollo nativo en la nube que ayuda a los desarrolladores a
crear y ejecutar aplicaciones sin tener que mantener servidores.
Hay servidores en el modelo sin servidor, pero han sido [abstraídos](/es/abstraction/) del proceso de desarrollo.
Un proveedor de nube se encarga del aprovisionamiento, mantenimiento y [escalamiento](/es/scalability/) de la infraestructura de servidores.
Luego los desarrolladores pueden empacar su código en [contenedores](/es/containers/) para el despliegue.
Una vez desplegado el código, las aplicaciones sin servidor satisfacen la demanda y escalan automáticamente según sea necesario.
La modalidad sin servidor en proveedores de nube públicas usualmente es una medida bajo demanda a través de un modelo de ejecución basado en eventos.
Como resultado, cuando una función sin servidor está inutilizada, no representa costo alguno.

## Problema que aborda

En un modelo de [Infraestructura como Servicio](/es/infrastructure-as-a-service/),
los usuarios compran unidades de cómputo o capacidad de forma anticipada, es decir, se paga a un proveedor de nube pública por componentes de servidores de ejecución continua para las aplicaciones.
Es responsabilidad del usuario luego aumentar la capacidad de cómputo durante periodos de alta demanda y
reducirla cuando ya no sea necesaria.
La infraestructura en la nube necesaria para ejecutar una aplicación está activa incluso cuando la aplicación no está en uso.

## ¿Cómo ayuda?

En contraste, con la arquitectura sin servidor las aplicaciones son ejecutadas solo cuando es necesario.
Cuando un evento llama a una aplicación a ejecutarse, el proveedor de nube pública garantiza dinámicamente una serie de recursos para que se ejecute dicho código.
Además del beneficio de costo y eficiencia,
el modelo sin servidor libera a los desarrolladores de las tareas rutinarias asociadas al escalado y aprovisionamiento de servidores.
Con el modelo sin servidor, las tareas rutinarias como mantenimiento de los sistemas operativos y sistemas de archivos, parches de seguridad,
balanceo de carga, manejo de capacidad, escalado, auditoría y monitoreo pasan a estar en manos del proveedor de servicios de nube.