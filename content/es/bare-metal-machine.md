---
title: Máquina Bare Metal
status: Completed
category: Tecnología
---

## ¿Qué es?

Bare metal se refiere a una computadora física, más específicamente un servidor, que tiene un solo sistema operativo. La distinción es importante en la informática moderna porque muchos, si no es que la mayoría, de los servidores son [máquinas virtuales](/virtual-machine/). Un servidor físico suele ser una computadora bastante grande con un potente hardware incorporado. La instalación de un sistema operativo y la ejecución de aplicaciones directamente en ese hardware físico, sin [virtualización](/virtualization/), se conoce como ejecución "bare metal".

## Problema que aborda

Emparejar un sistema operativo con una computadora física es el patrón original de la informática. Todos los recursos de la computadora física están disponibles directamente para el sistema operativo y sin la presencia de una capa de virtualización, no hay un retraso artificial en la traducción de las instrucciones del sistema operativo al hardware.

## ¿Cómo ayuda?

Al dedicar todos los recursos informáticos de una computadora a un solo sistema operativo, potencialmente se proporciona el mejor rendimiento posible al sistema operativo. Si necesita ejecutar una carga de trabajo que debe tener un acceso extremadamente rápido a los recursos de hardware, bare metal puede ser la solución adecuada.

En el contexto de las [aplicaciones nativas de la nube](/cloud-native-apps/), generalmente pensamos en el rendimiento en términos de [escalabilidad](/scalability/) para una gran cantidad de eventos simultáneos, que pueden mitigarse mediante el [escalado horizontal](/horizontal-scaling/) (agregando más máquinas a su grupo de recursos). Sin embargo, algunas cargas de trabajo pueden requerir [escalado vertical](/vertical-scaling/) (agregar más potencia a una máquina física existente) y/o una respuesta extremadamente rápida de hardware físico, en cuyo caso se adapta mejor el bare metal. Bare metal también le permite ajustar el hardware físico y posiblemente incluso los controladores de hardware para ayudarlo a realizar su tarea.
