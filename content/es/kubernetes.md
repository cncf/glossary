---
title: Kubernetes
status: Completed
category: Tecnología
---

## ¿Qué es?

Kubernetes, comúnmente abreviado como K8s, es una herramienta de código abierto para la automatización de infraestructura moderna. Puedes compararlo con un sistema operativo en un Centro de Datos que administra las aplicaciones ejecutándose en [sistemas distribuidos](/distributed-systems/) (ó como el sistema operativo en tu laptop que administra tus aplicaciones).

Kubernetes gestiona [contenedores](/container/) en los [nodos](/nodes/) de un [clúster](/cluster/). Agrupa muchos componentes de infraestructura, en ocasiones referidos como "primitivos", como una instancia de una aplicación, balanceadores de carga, almacenamiento persistente y otros, de manera que puedan integrarse en aplicaciones.

Kubernetes permite la automatización y extensibilidad, permitiendo a los usuarios desplegar sus aplicaciones de una manera declarativa y reproducible. Los productos de Software en el Ecosistema de Kubernetes toman ventaja de la automatización para extender la [API](/application-programming-interface/) de Kubernetes. Lo que permite aprovechar la automatización de Kubernetes y hacer que sus herramientas sean más accesibles para profesionistas experimentados de Kubernetes.

## Problema que aborda

La automatización de infraestructura y administración de configuración declarativa han sido conceptos muy importantes por un largo tiempo, y han sumado más importancia desde que la [Computación en la Nube](/es/cloud-computing/) ha ganado popularidad. La demanda de recursos de cómputo incrementa día con día y las organizaciones sienten presión por proveer más capacidad operativa, con menos ingenieros. Para cumplir con esta demanda nuevas tecnologías y metodologías de trabajo deben ser creadas.

Además, el auge de la computación en la nube se combinó con la [contenerización](/containerization/) y las organizaciones que estaban ocupadas automatizando una infraestructura tradicional necesitaban un mecanismo para automatizar la configuración y el despliegue de sus contenedores.

## ¿Cómo ayuda?

Kubernetes ayuda con la automatización de una manera similar a las herramientas tradicionales de Infraestructura como Código, pero tiene la ventaja de trabajar con contenedores que son más resistentes a fallas por diferencias en entornos a comparación con las máquinas virtuales o físicas.

Kubernetes funciona declarativamente, lo que significa que, en lugar de que los operadores proporcionen las instrucciones sobre cómo realizar una acción, ellos describen, por lo general en archivos de manifiesto (por ejemplo, YAML), lo que quieren que se logre; Kubernetes se encargará del "cómo" por sí mismo. Esto da como resultado que Kubernetes sea extremadamente compatible con la Infraestructura como Código.

Kubernetes también se autocura. Esto significa que garantiza que el estado real del [clúster](/cluster/) siempre coincida con el estado deseado por el operador. Si Kubernetes detecta una desviación del estado deseado, un controlador de Kubernetes será invocado para corregirlo. Así que, aunque la infraestructura cambie continuamente, Kubernetes en sí mismo se adaptará continuamente y automáticamente a los cambios y asegurará de que coincida con el estado deseado.
