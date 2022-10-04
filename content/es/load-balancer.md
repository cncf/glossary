---
title: Balanceador de Carga
status: Feedback Appreciated
category: Concepto
---

## ¿Qué es?

Un balanceador de carga es un mecanismo para distribuir el tráfico de red entrante entre un grupo de servidores en el backend. La solución puede estar basada en software o hardware.

## Problema que aborda

El balanceador ayuda a resolver el problema referente con la alta disponibilidad y los sistemas distribuidos. Cuando se trabaja en una aplicación o servicio que necesita escalar a cientos de miles de usuarios, a menudo será necesario distribuir esa aplicación en varios servidores. El balanceador de carga es el "policía de tráfico" encargado de distribuir las peticiones entrantes entre los diferentes servidores que ejecutan la aplicación.

## ¿Cómo ayuda?

Un balanceador de carga actuará como frontend para el tráfico de red y los clientes. A menudo tiene varios métodos para verificar que servidores están disponibles e, idealmente, balancear las peticiones para los servidores que tengan la carga más baja.
