---
title: Balanceador de Carga
status: Feedback Appreciated
category: concept
---

## ¿Qué es?
Un balanceador de carga es un método para distribuir el tráfico de red entrante a través de un grupo de servidores en el backend. La solución puede estar basada en software o hardware.

## Problema que aborda
El balanceador ayuda a resolver el problema referente con la alta disponibilidad y los sistemas distribuidos. Cuando se trabaja en una aplicación o servicio que necesita escalar a cientos de miles de usuarios, a menudo será necesario distribuir esa aplicación en varios servidores. El balanceador de carga es el "policía de tráfico" que enruta el tráfico.

## ¿Cómo ayuda?
Un balanceador de carga actuará como frontend para el tráfico de red y los clientes. A menudo tiene varios métodos para verificar qué servidor(es) está activo y tiene la carga más baja para procesar la solicitud.