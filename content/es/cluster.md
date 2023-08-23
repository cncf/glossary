---
title: Clúster
status: Completed
category: Concepto
tags: ["infrastructure", "fundamental", ""]
---

## ¿Qué es?

Un clúster es un grupo de ordenadores o aplicaciones que trabajan juntos hacia un objetivo común.
En el contexto de computación nativa en la nube, el término es aplicado con mayor frecuencia a [Kubernetes](/es/kubernetes/).
Un clúster de Kubernetes es un conjunto de servicios (o cargas de trabajo) que son ejecutadas en sus propios contenedores, normalmente en ordenadores diferentes.
El conjunto de todos estos servicios [contenedorizados](/es/containerization/), conectados a través de una red, representan un clúster.

## Problema que aborda

Un software que es ejecutado en un solo ordenador es un único punto de fallo
— Si este ordenador falla, o alguien por accidente desconecta el cable de alimentación,
algún sistema crítico para el negocio puede quedar fuera de funcionamiento.
Es por esto que el software moderno se construye generalmente como [aplicaciones distribuidas](/es/distributed-apps), agrupadas en clústeres.

## ¿Cómo ayuda?

Las aplicaciones distribuidas en clúster se ejecutan en varias máquinas u ordenadores, eliminando un único punto de fallo.
Pero construir sistemas distribuidos es difícil.
De hecho, es una disciplina informática en sí misma.
La necesidad de sistemas globales y los años de prueba y error llevaron al desarrollo de un nuevo tipo de stack de tecnología:
[tecnologías nativas para la nube](/es/cloud-native-tech/).
Estas nuevas tecnologías son los bloques de construcción que facilitan el funcionamiento y la creación de sistemas distribuidos.
