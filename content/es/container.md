---
title: Contenedores
status: Completed
category: Tecnología
tags: ["application", "fundamental", ""]
---

## ¿Qué es?

Un contenedor es un proceso en ejecución con restricciones de recursos y capacidades administrado por el sistema operativo de una computadora.
Los archivos disponibles del contenedor se empaquetan como una imagen de contenedor. 
Los contenedores se ejecutan uno al lado del otro en la misma máquina,
pero, por lo general, el sistema operativo evita que los procesos de contenedores independientes interactúen entre sí.

## Problema que aborda

Antes de que los contenedores estuvieran disponibles, se necesitaban máquinas separadas para ejecutar aplicaciones.
Cada máquina requeriría su propio sistema operativo, que requiere CPU, memoria y espacio en disco,
todo para que una aplicación individual funcione.
Además, el mantenimiento, la actualización y el inicio de un sistema operativo es considerablemente otra fuente de esfuerzo.

## ¿Cómo ayuda?

Los contenedores comparten el mismo sistema operativo y sus recursos de máquina,
distribuyen la sobrecarga de recursos del sistema operativo y crean un uso eficiente de la máquina física.
Esta capacidad solo es posible porque los contenedores normalmente no pueden interactuar entre sí.
Esto permite ejecutar muchas más aplicaciones en la misma máquina física.

Sin embargo, existen limitaciones.
Dado que los contenedores comparten el mismo sistema operativo, los procesos pueden considerarse menos seguros que las alternativas.
Los contenedores también requieren límites en los recursos compartidos.
Para garantizar los recursos, los administradores deben restringir y limitar el uso de la memoria y la CPU para que otras aplicaciones no tengan un rendimiento deficiente.
