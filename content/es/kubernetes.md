---
title: Kubernetes
status: Completed
category: technology
---

## Qué es?
Kubernetes, comúnmente abreviado como K8s, es una herramienta de código abierto para la automatización de infraestructura moderna. Puedes compararlo con un sistema operativo en un Centro de Datos que administra las aplicaciones ejecutándose en [sistemas distribuidos](/sistemas_distribuidos/) (ó como el sistema operativo en tu laptop que administra tus aplicaciones.)

Kubernetes administra [contenedores](/contenedores/) a través de [nodos](/nodos/) en un [cluster](/cluster/). Agrupa muchos componentes de infraestructura, en ocasiones referidos como "primitivos", como una instancia de una aplicación, balanceadores de carga, almacenamiento persistente y otros, de forma que al unirse son piezas que juntas forman parte de una aplicación.

Kubernetes habilita la automatización y extensibilidad, permitiendo a los usuarios desplegar sus aplicaciones de una manera declarativa y reproducible. Los productos de Software en el Ecosistema de Kubernetes toman ventaja de la automatización para extender la [API](/api/) de Kubernetes. Lo que les permite mejorar la automatización en Kubernetes y hacer sus aplicaciones más accesibles a usuarios experimentados de Kubernetes.

## Problema que aborda
La automatización de infrastructura y administración de configuración declarativa han sido conceptos muy importantes por un largo tiempo, y han sumado más importancia desde que el [cloud computing](/cloud_computing/) ha ganado popularidad. La demanda de recursos de cómputo incrementa día con día y las organizaciones sienten la presión de proveer más capacidad operativa, con menos ingenieros. Para cumplir con esta demanda nuevas tecnologías y metodologías de trabajo deben ser creadas.

A su vez también otros conceptos como lo son los [contenedores](/contenedores/) también han ganado mucha atención. Compañías que estaban ocupadas automatizando infraestructura tradicional ahora necesitan mecanismos para automatizar la configuración y el despliegue de sus contenedores.

## Cómo ayuda
Kubernetes ayuda con la automatización de una manera similar a las herramientas tradicionales de Infraestructure como Código, pero tiene la ventaja de trabajar con contenedores que son más resistentes a fallas por diferencias en entornos a comparación con las máquinas virtuales o computadores físicos.

Kubernetes funciona declarativamente, lo que significa que en lugar que los operadores provean instrucciones de como realizar una acción, los usuarios pueden proveer una descripción de la acción a realizar, usualmente un archivo de formato YAML describiendo las acciones que se quieren realizar. Kubernetes se encarga de generar el resultado por sí mismo. Es por esto que Kubernetes es extremadamente compatible con la Infraestructura como Código.

Kubernetes también tiene otras características como la auto-curación, es decir. El [cluster](/cluster/) siempre se asegurará de mantener el estado deseado por el operador. Si Kubernetes detecta una desviación del estado deseado, un controlador de Kubernetes será invocado para solucionarlo automáticamente. Así que aunque la infraestructura cambie continuamente, Kubernetes siempre se adaptará y tratará de cumplir el estado deseado por el operador.
