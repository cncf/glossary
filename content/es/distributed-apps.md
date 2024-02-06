---
title: Aplicaciones Distribuidas
status: Completed
category: Concepto
tags: ["arquitectura", "", ""]
---

Una aplicación distribuida es una aplicación en la que la funcionalidad se divide en múltiples partes independientes más pequeñas. 
Las aplicaciones distribuidas suelen estar formadas por componentes individuales llamados [microservicios](/es/microservices/)
que se ocupan de diferentes responsabilidades dentro de una aplicación más extensa. 
En un entorno nativo para la nube, los componentes individuales suelen ejecutarse como [contenedores](/es/container/) en un [clúster](/es/cluster/).


## Problema que aborda

Una aplicación que se ejecuta en un único ordenador representa un punto único de fallo: si ese ordenador falla, la aplicación deja de estar disponible. 
Las aplicaciones distribuidas a menudo se contraponen a las [aplicaciones monolíticas](/es/monolithic-apps/). 
Una aplicación monolítica puede ser más difícil de escalar, ya que los distintos componentes no pueden escalarse de forma independiente. 
También pueden convertirse en un lastre en la velocidad de desarrollo a medida que crecen 
porque más desarrolladores tienen que trabajar en una base de código compartida que no necesariamente tiene límites bien definidos.


## ¿Cómo ayuda?

Al dividir una aplicación en diferentes partes y ejecutarlas en muchos lugares, el sistema global puede tolerar más fallos. 
También permite a una aplicación aprovechar características de escalado no disponibles para aplicaciones de una única instancia, 
es decir, permite aprovechar la capacidad de [escalar horizontalmente](/es/horizontal-scaling/).
Sin embargo, esto tiene un precio: una mayor complejidad y sobrecarga operativa. 
— ahora estás ejecutando muchos componentes en lugar de una aplicación única.
