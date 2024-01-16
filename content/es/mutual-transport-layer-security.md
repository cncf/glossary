---
title: Seguridad mutua de capa de transporte (mTLS)
status: Completed
category: Concepto
tags: ["security", "networking", ""]
---

## ¿Qué es?

La seguridad mutua de capa de transporte (mTLS en Inglés) es una técnica utilizada para autenticar y codificar mensajes enviados entre dos [servicios](/es/service).
mTLS es el protocolo de [Seguridad de capa de transporte](/es/transport-layer-security/) (TLS) estándar pero,
en vez de validar la identidad de solo una conexión, se validan ambos lados.

## Problema que aborda

Los [microservicios](/es/microservices-architecture/) se comunican a través de una red y,
como las redes de wifi, la comunicación en tránsito en la red puede ser atacada.
mTLS asegura que ningún agente no autorizado pueda escuchar o personificar peticiones legítimas.

## ¿Cómo ayuda?

mTLS asegura que el tráfico es seguro y confiable en ambas direcciones entre un cliente y un servidor,
proveyendo una capa adicional de seguridad para los usuarios que utilizan una red o aplicación.
También verifica las conexiones con dispositivos que no tienen un proceso de autenticación, como un dispositivo de Internet de las Cosas.
Los ataques tales como personificación, robo de credenciales, fuerza bruta, etc., pueden ser prevenidos por mTLS.