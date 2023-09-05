---
title: Sistema Distribuido
status: Completed
category: Concepto
tags: ["architecture", "", ""]
---

## ¿Qué es?

Un sistema distribuido es una colección de elementos computacionales autónomos
conectados entre sí a través de una red que se muestra a los usuarios como un sistema único coherente. 
Conocidos generalmente como [nodos](/es/nodes/), estos elementos pueden ser dispositivos de hardware (por ejemplo, computadoras o teléfonos móviles) o procesos de software.
Los nodos están programados para lograr un objetivo común e intercambian mensajes a través de la red para poder colaborar. 

## Problema que aborda

Una gran cantidad de aplicaciones modernas son tan grandes que necesitan de supercomputadoras para poder operar. 
Ninguna computadora es lo suficientemente poderosa para alojar toda una aplicación. 
Sin embargo, cuando se conectan varias computadoras el poder de computación se vuelve casi ilimitado. 
Sin computación distribuida, no sería posible construir muchas de las aplicaciones que utilizamos hoy en día. 

Tradicionalmente, los sistemas implementarían un [escalamiento](/es/scalability/) vertical. 
Esto es, cuando se añade más CPU o memoria a una máquina individual. 
El escalamiento vertical consume mucho tiempo, requiere de un periodo de inactividad y alcanza su límite rápidamente. 

## ¿Cómo ayuda?

Los sistemas distribuidos permiten el [escalamiento horizontal](/es/horizontal-scaling/) (por ejemplo, añadir más nodos al sistema siempre que éste lo requiera).
Este proceso se puede automatizar, lo que permite al sistema manejar un incremento repentino de la carga de trabajo o del consumo de recursos.

Un sistema no distribuido está expuesto a los riesgos de falla porque cuando una máquina deja de funcionar, todo el sistema falla. 
En cambio, un sistema distribuido puede ser construido de tal manera
que si una máquina deja de funcionar, el sistema completo puede seguir funcionando para producir los mismos resultados. 
