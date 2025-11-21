---
title: GitOps
status: Feedback Appreciated
category: Concepto
tags: ["metodología", "", ""]
---

GitOps es un conjunto de buenas prácticas basadas en unos [principios comunes](https://opengitops.dev/),
aplicados a un flujo de trabajo que depende de agentes de software que
de forma automática reconcilian las configuraciones o el estado de un sistema respecto al estado o las configuraciones declaradas en un repositorio git.
Tanto los agentes de software, como las prácticas, son utilizados para ejecutar flujos de trabajo consistentes que
aprovechan los sistemas de control de versiones como Git, definiéndolos como "única fuente de verdad" y
extiende esta practica a las distintas capas de un sistema, tales como las aplicaciones, la infraestructura y los procedimientos operativos.

## Problema que aborda

Los procesos de gestión de la configuración de la infraestructura se enfrentan a desafíos
como las diferencias en la configuración, los despliegues fallidos, la necesidad de confiar en el estado anterior del sistema como garantía de éxito,
la falta de documentación o una desconocida historia de desarrollo.
Adoptar un flujo de trabajo GitOps puede ayudar a solventar estos problemas, entre muchos otros.

## ¿Cómo ayuda?

GitOps es un paradigma que puede aplicarse a un flujo de trabajo
para ayudar a gestionar tanto una aplicación como la infraestructura de un sistema en la nube.
GitOps proporciona varias ventajas a las organizaciones
que lo implementan, como una mejor coordinación, mayor transparencia, más estabilidad y una mayor fiabilidad de sus sistemas.
Los agentes de software GitOps operan en un *bucle de control (control loop)* que garantiza que el estado actual del sistema coincida
con el estado deseado que está especificado en un repositorio git.
