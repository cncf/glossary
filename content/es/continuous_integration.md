---
title: Integracion Continua (CI)
status: Completed 
category: concept
---

## ¿Qué es esto?

Integración continua, o por sus siglas en ingles CI, es la práctica de integrar cambios en el código lo más frecuente posible. CI es un requisito para la [entrega continua](/continuous_delivery/) (CD). Tradicionalmente, el proceso de CI comienza cuando se confirman los cambios en el código hacia un sistema de control de versiones (Git, Mercurial, o Subversion) y termina con un artefacto testeado y listo para ser consumido por un sistema de CD.

## El problema que aborda

Los sistemas de software frecuentemente son grandes y complejos, con numerosos desarrolladores manteniéndolo y actualizándolo. Al trabajar en paralelo en diferentes partes del sistema, estos desarrolladores pueden hacer cambios conflictivos y romper inadvertidamente el trabajo de los demás. Además, con varios desarrolladores trabajando en el mismo proyecto, cualquier tarea cotidiana, como las pruebas y el cálculo de la calidad del código, tendría que ser repetida por cada desarrollador, lo que supone una pérdida de tiempo.

## ¿Cómo Ayuda?
El software de CI comprueba automáticamente que los cambios en el código se fusionaron correctamente cada vez que un desarrollador confirma un cambio. Es una práctica casi siempre presente el usar el servidor de CI para ejecutar las comprobaciones de calidad de código, pruebas, e incluso despliegues. Como tal, se convierte en una implementación concreta del control de calidad dentro de los equipos. CI permite que los equipos de software conviertan cada confirmación de código en un fallo concreto o en un candidato a la publicación viable.

## Consulte también
* [Continuous Delivery](/continuous_delivery/)
* [Continuous Deployment](/continuous_deployment/)
