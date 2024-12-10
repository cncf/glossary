---
Title: Sin servidor (Serverless)
Status: Completed
Category: Tecnología
tags: ["arquitectura", "", ""]
---


La computación sin servidor [abstrae](/es/abstraction/) los servidores del usuario.
La gestión operativa recae en el proveedor de servicios, incluido el manejo de máquinas físicas y el aprovisionamiento de Máquinas Virtuales.
Los proveedores de servicios pueden ser entidades de nube pública o departamentos de TI internos que prestan servicios a sus equipos de desarrollo.
Estos proveedores ofrecen interfaces de usuario como SDK, CLIs o tiempos de ejecución compatibles con OCI, centrándose en el código y las tareas de implementación.
Los cargos se basan en un modelo de pago por uso.
El [escalado](/es/scalability/) y el aprovisionamiento de recursos para cómputo, almacenamiento o redes, se ajustan automáticamente en función de la demanda de la aplicación sin intervención del usuario.
Un proveedor de plataforma sin servidor consolida recursos para atender a múltiples usuarios en una única máquina física, garantizando el aislamiento mediante la virtualización, especialmente con [Máquinas Virtuales](/es/virtual-machine/).

Sin servidor (Serverless) es un término integral que abarca servicios con estos atributos y se extiende desde [Plataforma como Servicio (PaaS)](/es/platform-as-a-service/) hasta [Software como Servicio (SaaS)]( /es/software-as-a-service/).

## Problema que aborda

En los modelos tradicionales de [Infraestructura como Servicio (IaaS)](/es/infrastructure-as-a-service/), [computación en la nube](/es/cloud-computing/), los usuarios se comprometen a una capacidad predefinida, lo que genera cargos por disponibilidad del servidor independientemente del uso real.
La responsabilidad de ajustar la capacidad del servidor para satisfacer las demandas fluctuantes recae en el usuario, manteniendo la infraestructura activa incluso durante los períodos de inactividad.

## ¿Cómo ayuda?

La arquitectura sin servidor introduce un enfoque más eficiente, activando servicios únicamente según demanda.
Este modelo garantiza la asignación dinámica de recursos por parte de un proveedor de nube, eliminando costos por servicios no utilizados.
Más allá de la eficiencia financiera y operativa, la tecnología sin servidor alivia a los desarrolladores de la carga de escalar aplicaciones y administrar la infraestructura de servidores.
Tareas como el mantenimiento del sistema operativo, las actualizaciones de seguridad, el equilibrio de carga, la capacidad de planificación y el monitoreo se delegan al proveedor de la nube, lo que agiliza el proceso de desarrollo.

Consulta la entrada del glosario [Función como Servicio (FaaS)](/es/function-as-a-service/) para obtener más información.
Aunque "sin servidor" y "FaaS" se utilizan a menudo como términos intercambiables, incorporan conceptos distintos.
