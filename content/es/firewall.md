---
title: Firewall
status: Deprecated
draft: true
category: Tecnología
tags: ["", "", ""]
---

Un Firewall es un sistema que filtra tráfico de red basándose en reglas específicas.
Los Firewall pueden ser hardware, software o una combinación de ambos.

## Problemas que aborda

Por defecto, una red permite a cualquier entidad ingresar y egresar en tanto y en cuanto se respeten las reglas de enrutamiento.
Por este motivo, es un desafío asegurar una red.
Por ejemplo, en una aplicación bancaria basada en [microservicios](/es/microservices-architecture/), los componentes se comunican entre sí
transmitiendo información financiera sensible a través de la red que comparten.
Un actor malicioso podría infiltrarse en esta red, interceptar la comunicación y hacer daño si no hubiera un Firewall.

## ¿Cómo ayuda?

Un Firewall examina el tráfico de red utilizando reglas predefinidas.
Todo el tráfico es filtrado y cualquier comunicación proveniente de una fuente sospechosa o no confiable es bloqueada;
solo ingresa a la red el tráfico configurado para ser aceptado.
Los Firewall establecen una barrera entre redes internas de confianza, seguras y controladas.