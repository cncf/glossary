---
title: Aplicaciones con estado
status: Completed
category: Concepto
tags: ["fundamental", "application", ""]
---

## ¿Qué es?

Cuando hablamos de aplicaciones con estado (y [sin estado](/stateless-apps/)),
éste estado se refiere a cualquier dato que la aplicación necesita almacenar para funcionar.
Por ejemplo, cualquier tipo de tienda en línea que recuerda tu carro de compras es una aplicación con estado.

## Problema que aborda

Utilizar una aplicación generalmente requiere de peticiones múltiples.
Por ejemplo, en una aplicación bancaria en línea, te identificas
ingresando una contraseña (petición #1),
luego podrías transferir dinero a un amigo (petición #2),
y finalmente, podrás ver los detalles de tu transferencia (petición #3).
Para funcionar correctamente, cada paso debe recordar los anteriores,
y el banco necesita recordar el estado de las cuentas de todos sus clientes.
Hoy, la mayoría de las aplicaciones que utilizamos son al menos parcialmente con estado,
ya que almacenan datos como preferencias y configuraciones para mejorar la experiencia del usuario.

## ¿Cómo ayuda?

Existen varias maneras de almacenar el estado de una aplicación con estado.
La más simple es almacenarlo en memoria y no persistir ese estado en otro lado.
El problema con ello es que cuando la aplicación sea reiniciada, todo el estado se pierde.
Para evitarlo, el estado es persistido localmente (en disco) o en un sistema de base de datos.