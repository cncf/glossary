---
title: Hipervisor
status: Feedback Appreciated
category: Tecnología
tags: ["application", "", ""]
---

## ¿Qué es?

Un hipervisor utiliza el concepto de [virtualización](/es/virtualization/)
aprovechando los recursos de la llamada [máquina bare metal](/es/bare-metal-machine/)
(CPU, memoria, recursos de red, y almacenamiento), dividiéndolos en partes más pequeñas,
y ubicando recursos suficientes para crear [máquinas virtuales](/es/virtual-machine/)
hasta que el servidor base alcanza su límite de funcionamiento.

## Problema que aborda

Tradicionalmente un servidor podía ejecutar aplicaciones de un sólo sistema operativo.
El proceso de adquisición de software requiere tiempo, como así también infraestructura con un ambiente específico
y un equipo de Ingenieros para el mantenimiento y monitoreo del mismo.
Por lo tanto, los servidores se veían utilizados por debajo de su capacidad - considerando su poder computacional, un servidor puede ejecutar sistemas operativos múltiples y más aplicaciones.
Por ello, ejecutar aplicaciones directamente en una [máquina bare metal](/es/bare-metal-machine/) no era suficiente para satisfacer las necesidades de tráfico fluctuante.

## ¿Cómo ayuda?

En el mundo de la [computación en la nube](/es/cloud-computing/), un hipervisor se convierte en una herramienta efectiva.
En contraste con los métodos tradicionales de crear máquinas virtuales, un hipervisor hace al proceso mucho más simple y rápido.
Los recursos de hardware son distribuidos de manera lógica y asignados a cada máquina virtual, manteniéndolos aislados unos de otros en unidades separadas,
asegurando que funcionen de manera independiente, y así un eventual problema en uno no afecta a los demás.
De esta manera cada máquina virtual puede instalar su sistema operativo propio.
Un hipervisor es una abstracción lógica del hardware físico, haciéndose cargo del manejo y mantenimiento de las máquinas virtuales,
quitándoles dependencia del hardware base, y ayudando a una organización a migrar sus aplicaciones a los servidores de la nube
y auto escalar sus servicios.
Mediante el uso de este software de [Tenencia Múltiple (multitenancy)](/es/multitenancy/) se ha logrado reducir los costos computacionales.