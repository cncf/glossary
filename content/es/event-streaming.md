---
title: Transmisión de eventos
status: Completed
category: Concepto
tags: ["methodology", "networking", ""]
---

## ¿Qué es?

La transmisión de eventos es un enfoque en el que el software envía datos de eventos de una aplicación a otra para comunicar continuamente lo que esta haciendo.
Imagine un servicio transmitiendo todo lo que hace a todos los demás servicios.
Cada actividad realizada por un servicio se denomina evento, por lo tanto, transmisión de eventos.
Por ejemplo, NASDAQ recibe actualizaciones sobre los precios de las acciones y materias primas cada segundo.
Si tuviera una aplicación que monitoreará un conjunto específico de acciones, le gustaría recibir esa información casi en tiempo real.
Yahoo! Finance proporciona una [API](/es/application-programming-interface/) que extrae de NASDAQ y envía (o transmite) la información (o eventos) de su aplicación a cualquier aplicación que se suscriba a ella.
Los datos que se envían, así como los cambios en esos datos (precios de las acciones), son los eventos, mientras que el proceso de enviarlos a una aplicación es la transmisión de eventos.

## Problema que aborda

Tradicionalmente, Yahoo! Finance usaría solicitudes TCP únicas.
Esto sería muy ineficiente ya que requeriría la creación de una conexión para cada evento.
En medida que los datos se vuelven más en tiempo real, escalar una solución de este tipo se vuelve ineficiente.
Abrir una conexión solo una vez y permitir que los eventos fluyan, es ideal para la recopilación en tiempo real.
La cantidad de datos que se generan está creciendo exponencialmente y, con eso, el estado de los datos está en constante cambio. Los desarrolladores y usuarios deben poder ver esos datos casi en tiempo real.

## ¿Cómo ayuda?

La transmisión de eventos permite que los cambios de datos se comuniquen desde la fuente al receptor.
En lugar de esperar a que los servicios soliciten información, el servicio transmite continuamente todos sus eventos (o actividades).
No le preocupa lo que sucede con la información.
Simplemente hace lo que tiene que hacer y lo transmite, permaneciendo así completamente independiente de cualquier otro servicio.
