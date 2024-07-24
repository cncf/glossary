---
title: Servicio de Proxy
status: Completed
category: Tecnología
tags: ["redes", "", ""]
---

Un servicio de Proxy intercepta tráfico desde o hacia un [servicio](/es/service/) determinado,
aplicando algún tipo de lógica predefinida y luego envía ese tráfico hacia otro servicio.
En esencia actúa como un agente intermedio que recolecta información referente al tráfico de red y/o aplica reglas al mismo.

## Problema que aborda

Para mantener un seguimiento de la comunicación entre servicios (también llamado tráfico de red) y
potencialmente transformar o redirigir ese tráfico, se necesita recolectar información.
Tradicionalmente, el código que permite la recolección de datos y el manejo del tráfico de red estaba incluido dentro de cada aplicación.

## ¿Cómo ayuda?

Un servicio de Proxy nos permite separar esta funcionalidad.
Las aplicaciones ya no tienen que incluir este código.
En cambio, ahora será parte de la capa de plataforma (donde la aplicación se ejecuta)

Actuando como protectores de entrada entre servicios, los intermediarios proveen un panorama del tipo de comunicación que sucede.
Basados en dicho panorama, ellos determinan dónde enviar una petición particular o delegarla por completo.

Los servicios de Proxy recolectan información crítica, manejan el enrutamiento (distribuyendo el tráfico equitativamente entre servicios o redirigiendo el mismo si algún servicio se rompiera),
se encargan del cifrado de conexiones y acumulan contenido (reduciendo el consumo de recursos).