---
title: eBPF
status: Completed
category: Tecnología
tags: ["arquitectura", "redes", "seguridad"]
---

eBPF, o "extended Berkeley Packet Filter", es una tecnología que permite a pequeños programas o scripts aislados ejecutarse en el espacio del kernel de un sistema Linux sin necesidad de cambiar el código fuente ni cargar módulos al kernel Linux.

Un sistema Linux tiene dos espacios: el de kernel y el de usuario. 
El kernel representa el sistema operativo y es la única parte
con acceso ilimitado al hardware. 

Las aplicaciones quedan en el espacio de usuario y, cuando necesitan permisos más elevados,
envían una solicitud al kernel.
Para aplicaciones que requieren más flexibilidad, como el acceso directo al hardware,
el kernel puede ser extendido mediante lo que se conoce como el enfoque de "módulos
del kernel Linux". Este enfoque amplía la funcionalidad predeterminada del kernel,
permitiendo a las aplicaciones un acceso más profundo a los componentes básicos. 
Sin embargo, este enfoque también introduce riesgos de seguridad, lo que hace que eBPF sea una alternativa atractiva.

## Problema que soluciona
Típicamente, las aplicaciones se ejecutan en el espacio de usuario y, si la aplicación requiere algunos privilegios del kernel (por ejemplo, para acceder a algún hardware),
lo solicita al kernel a través de una llamada al sistema conocida como "system call".  
En la mayoría de los casos, este enfoque funciona bien. Sin embargo, hay casos en los que los desarrolladores requieren más flexibilidad para acceder al sistema a nivel bajo.
La observabilidad, la seguridad y las redes son buenos ejemplos.
Para lograrlo, podemos utilizar módulos del kernel Linux, ampliando la base del kernel sin modificar el código principal del kernel. 
Si bien hay beneficios en el uso de módulos del kernel Linux, también introduce riesgos de seguridad. 
Como operan dentro del espacio del kernel, los módulos del kernel Linux pueden hacer que el kernel falle y, cuando el kernel falla, también lo hace toda la máquina.
Además, los módulos del kernel tienen privilegios elevados y acceso directo a los recursos del sistema. Y si no están adecuadamente aseguradas, los atacantes pueden explotarlas.

## ¿Cómo ayuda?
eBPF proporciona un entorno más controlado y contenido para ejecutar programas definidos por el usuario que los módulos del kernel Linux.
Se ejecuta en un entorno aislado dentro del kernel, proporcionando aislamiento y mitigando riesgos. 
Si se explota una vulnerabilidad o defecto en un programa eBPF, su impacto generalmente se limita al entorno aislado.
Además, antes de que un programa eBPF pueda comenzar a ejecutarse en el kernel, debe pasar por algunas verificaciones. 
El componente verificador verifica el programa eBPF en busca de posibles violaciones de seguridad,
como el acceso a memoria fuera de límites, ciclos infinitos y funciones del kernel no autorizadas.
De esta manera, asegura que el programa no entre en un ciclos infinitos y provoque un fallo del kernel.
Estos controles de seguridad hacen que eBPF sea una opción más segura para ejecutar aplicaciones en el kernel Linux que los módulos del kernel Linux.