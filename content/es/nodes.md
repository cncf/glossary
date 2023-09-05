---
title: Nodos
status: Completed
category: Tecnología
tags: ["infrastructure", "fundamental", ""]
---

## ¿Qué es?

Un nodo es un servidor que trabaja en conjunto a otros servidores, o nodos, para realizar una tarea común.
Toma tu laptop, el módem y la impresora como ejemplo.
Están conectados a través de tu red wifi comunicándose y colaborando, cada uno representa un nodo.
En [computación en la nube](/es/cloud-computing/), un nodo puede ser un servidor físico,
un servidor virtual, denominado [VM](/es/virtual-machine/), o incluso un [contenedor](/es/container/).

## Problema que aborda

Una aplicación podría (y muchas lo hacen) ejecutarse en una sola máquina, esto conlleva algunos riesgos.
Concretamente, el fallo del sistema subyacente interrumpirá la aplicación.
Para solucionar esto, los desarrolladores comenzaron a crear [aplicaciones distribuidas](/es/distributed-apps/) donde cada proceso se ejecuta en su propio nodo.
Así, los nodos ejecutan aplicaciones o procesos como parte de un grupo que forma un [clúster](/es/cluster/), o grupo, de nodos que trabajan juntos para lograr un objetivo común.

## ¿Cómo ayuda?

Un nodo es una unidad de cálculo distinta (memoria, CPU, red) que se puede asignar a un clúster.
En una plataforma o aplicación [nativa para la nube](/es/cloud-native-tech/) un nodo representa una única unidad que puede realizar trabajo.
Idealmente, los nodos individuales son indiferenciados en el sentido de que
cualquier nodo de un tipo particular es indistinguible de cualquier otro nodo del mismo tipo.
