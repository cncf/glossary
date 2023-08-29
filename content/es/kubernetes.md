---
title: Kubernetes
status: Completed
category: Tecnología
tags: ["infrastructure", "fundamental", ""]
---

## ¿Qué es?

Kubernetes, comúnmente abreviado como K8s, es un orquestador de contenedores de código abierto.
Automatiza el ciclo de vida de las aplicaciones contenedorizadas en infraestructuras modernas, funcionando como un "sistema operativo en un Centro de Datos" que administra las aplicaciones ejecutándose en [sistemas distribuidos](/es/distributed-systems/).

Kubernetes gestiona [contenedores](/es/container/) en los [nodos](/es/nodes/) de un [clúster](/es/cluster/), agrupa muchos componentes de infraestructura, en ocasiones referidos como "primitivos", como una instancia de una aplicación, balanceadores de carga, almacenamiento persistente y otros, de manera que puedan integrarse en aplicaciones.

Kubernetes permite la automatización y extensibilidad, permitiendo a los usuarios desplegar sus aplicaciones de una manera declarativa y reproducible.
Kubernetes puede ser extendido a través de su [API](/es/application-programming-interface/), permitiendo aprovechar la automatización de Kubernetes y hacer que sus herramientas sean más accesibles para profesionistas experimentados de Kubernetes.

## Problema que aborda

La automatización de infraestructura y administración de configuración declarativa han sido conceptos muy importantes por un largo tiempo, y han sumado más importancia desde que la [Computación en la Nube](/es/cloud-computing/) ha ganado popularidad.
La demanda de recursos de cómputo incrementa día con día y las organizaciones sienten presión por proveer más capacidad operativa, con pocos ingenieros, nuevas tecnologías y metodologías de trabajo deben ser creadas para satisfacer esta demanda.

## ¿Cómo ayuda?

De manera parecida a las herramientas tradicionales de [infraestructura como código](/es/infrastructure-as-code/), Kubernetes ayuda con la automatización pero tiene la ventaja de trabajar con contenedores.
Los contenedores son más resistentes a fallas por diferencias en entornos a comparación con las [máquinas virtuales](/es/virtual-machine/) o físicas.

Aún más, Kubernetes funciona declarativamente, lo que significa que, en lugar de que los operadores proporcionen las instrucciones sobre cómo realizar una acción, ellos describen, por lo general en archivos de manifiesto (por ejemplo, YAML), lo que quieren que se logre;
Kubernetes se encargará del "cómo" por sí mismo.
Esto da como resultado que Kubernetes sea extremadamente compatible con la Infraestructura como Código.

Kubernetes también se [recupera automáticamente](/es/self-healing/).
Esto significa que garantiza que el estado real del clúster siempre coincida con el estado deseado por el operador.
Si Kubernetes detecta una desviación del estado deseado, un controlador de Kubernetes será invocado para corregirlo.
Así que, aunque la infraestructura cambie continuamente, Kubernetes en sí mismo se adaptará continuamente y automáticamente a los cambios y asegurará de que coincida con el estado deseado.
