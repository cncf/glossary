---
title: Arquitectura Basada en Eventos
status: Completed
category: Concepto
tags: ["arquitectura", "", ""]
---

La arquitectura basada en eventos es una arquitectura de software que promueve la creación, procesamiento y consumo de eventos.
Un evento es cualquier cambio en el estado de una aplicación.
Por ejemplo, solicitar un viaje en una aplicación de viajes compartidos es un evento.
Esta arquitectura crea la estructura en la cual los eventos pueden ser enviados desde su origen (la aplicación solicitando el viaje) a los receptores deseados (las aplicaciones de conductores cercanos).

## Problema que aborda

Mientras más datos son convertidos en tiempo real, encontrar maneras fiables de asegurar que los eventos son capturados y dirigidos al [servicio](/es/service/) apropiado para procesar solicitudes de eventos se hace más difícil.
Los métodos tradicionales para manejar eventos comúnmente no tienen una manera de garantizar que los eventos son dirigidos apropiadamente o que realmente fueron enviados o recibidos.
Mientras las aplicaciones comienzan a escalar, se hace más desafiante orquestar eventos.

## ¿Cómo ayuda?

Las arquitecturas basadas en eventos establecen un centro para todos los eventos (por ejemplo, Kafka).
Luego se definen productores de eventos (origen) y consumidores (receptores), y luego el centro de eventos garantiza el flujo de dichos eventos.
Esta arquitectura se asegura de que los servicios permanezcan desacoplados y que los eventos son debidamente enviados desde el productor al consumidor.
El productor toma un evento entrante, normalmente mediante un protocolo HTTP, para luego enviar la información del evento.
