---
title: Infraestructura inmutable
status: Terminada
category: Propiedad
tags: ["infraestructura", "", ""]
---

Infraestructura inmutable se refiere a la infraestructura informática 
([maquinas virtuales](/virtual-machine/), [contenedores](/container/), dispositivos de red) 
que no se puede cambiar una vez implementado. 
Esto se puede hacer cumplir mediante un proceso automatizado que sobrescribe los cambios no autorizados o
a través de un sistema que no permitirá cambios en primer lugar.
Los contenedores son un buen ejemplo de infraestructura inmutable
porque los cambios persistentes en los contenedores solo pueden ser realizados por
creando una nueva versión del contenedor o recreando el contenedor existente a partir de su imagen.

Al prevenir o identificar cambios no autorizados,
las infraestructuras inmutables facilitan la identificación y mitigación de los riesgos de seguridad.
Operar un sistema de este tipo se vuelve mucho más sencillo.
porque los administradores pueden hacer suposiciones al respecto.
Después de todo, saben que nadie cometió errores o cambios que se olvidaron de comunicar.
La infraestructura inmutable va de la mano con [infraestructura como código](/infrastructure-as-code/) 
donde toda la automatización necesaria para crear la infraestructura se almacena en el control de versiones (por ejemplo, Git).
Esta combinación de inmutabilidad y control de versiones significa que
existe un registro de auditoría duradero de cada cambio autorizado en un sistema.
