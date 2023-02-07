---
title: Integración Continua (CI)
status: Completed 
category: Concepto
tags: ["application", "methodology", ""]
---

## ¿Qué es?

Integración continua, o por sus siglas en ingles CI, es la práctica de integrar cambios en el código lo más frecuente posible.
CI es un requisito para la [entrega continua](/es/continuous-delivery/) (CD).
Tradicionalmente, el proceso de CI comienza cuando se envían los cambios en el código hacia un sistema de control de versiones (Git, Mercurial, o Subversion)
y termina con un artefacto testeado y listo para ser consumido por un sistema de CD.

## Problema que aborda

Los sistemas de software frecuentemente son grandes y complejos, con numerosos desarrolladores manteniéndolo y actualizándolo.
Al trabajar en paralelo en diferentes partes del sistema,
estos desarrolladores pueden hacer cambios conflictivos y romper inadvertidamente el trabajo de los demás.
Además, con varios desarrolladores trabajando en el mismo proyecto,
cualquier tarea cotidiana, como las pruebas y el cálculo de la calidad del código, tendría que ser repetida por cada desarrollador, lo que supone una pérdida de tiempo.

## ¿Cómo ayuda?

El software de CI comprueba automáticamente que los cambios en el código se fusionaron correctamente cada vez que un desarrollador envía un cambio.
Es una práctica casi siempre presente el usar el servidor de CI para ejecutar las comprobaciones de calidad de código, pruebas, e incluso despliegues.
Como tal, se convierte en una implementación concreta del control de calidad dentro de los equipos.
CI permite que los equipos de software conviertan cada cambio de código en un fallo concreto o en un candidato a la publicación viable.

## Términos relacionados

* [Entrega Continua](/es/continuous-delivery/)
* [Despliegue Continuo](/continuous-deployment/)
