---
title: Arquitectura de Confianza Cero
status: Completed
category: Concepto
tags: ["security", "", ""]
---

## ¿Qué es?

La arquitectura de confianza cero se refiere a un enfoque del diseño y la implementación de sistemas informáticos donde la confianza se elimina por completo.
El principio fundamental de "nunca confiar, siempre verificar" implica que los dispositivos o sistemas, al comunicarse con otros componentes, siempre deben verificarse a sí mismos antes de hacerlo.
Hoy en día, en muchas redes corporativas, los sistemas y dispositivos internos pueden comunicarse libremente entre sí, ya que se encuentran dentro del límite de confianza del perímetro de dichas redes.
La arquitectura de confianza cero toma un enfoque opuesto en el que, a pesar de estar dentro del perímetro de la red, los componentes dentro del sistema tienen que pasar primero por una verificación antes de que se establezca cualquier comunicación.

## Problema que aborda

En el enfoque tradicional basado en la confianza, donde los sistemas y dispositivos se encuentran dentro de un perímetro de red corporativa, la suposición es que, ya que existe confianza, no hay problemas.
Sin embargo, la arquitectura de confianza cero reconoce que la confianza es una vulnerabilidad.
En el supuesto de que un atacante consiga acceso a un dispositivo confiable, el sistema se vuelve vulnerable a un ataque. Esto depende del nivel de confianza y del acceso que se le haya otorgado a dicho dispositivo, pues el atacante, al estar dentro del perímetro "de confianza" de la red, es capaz de moverse lateralmente a lo largo del sistema.
Dentro de una arquitectura de confianza cero, la confianza se elimina, reduciendo de esta manera la superficie de ataque, ya que el atacante se ve obligado a realizar una verificación antes de proceder a través del sistema.

## ¿Cómo ayuda?

La adopción de una arquitectura de confianza cero trae como beneficio principal el aumento de la seguridad, al mismo tiempo que reduce la superficie de ataque.
La eliminación de la confianza en el sistema corporativo resulta en un aumento en la cantidad y en la resistencia de los controles de seguridad, complicando la tarea para cualquier atacante que intente acceder a otras secciones del sistema.
