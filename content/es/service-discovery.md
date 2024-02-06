---
title: Descubrimiento de Servicio
status: Completed
category: Concepto
tags: ["redes", "", ""]
---

El descubrimiento de servicio es el proceso de identificar instancias individuales que pertenecen a un mismo servicio.
Una herramienta de descubrimiento de servicio mantiene una lista de varios nodos o aplicaciones que componen un servicio.

## Problema que aborda

Las arquitecturas cloud native son dinámicas y fluidas, es decir que están en constante cambio.
Una aplicación [contenedorizada](/es/containerization/) se ejecutará y detendrá varias veces en su tiempo de vida.
Cada vez que eso sucede, obtendrá una nueva dirección y
cualquier otra aplicación que quiera encontrarla necesita una herramienta que provea su nueva dirección.

## ¿Cómo ayuda?

El descubrimiento de servicio mantiene una lista de aplicaciones en una red para que puedan encontrarse unas a otras cuando sea necesario.
Provee un espacio común donde encontrar y potencialmente identificar servicios individuales.
Los motores de descubrimiento de servicio son herramientas similares a las bases de datos que almacenan información referente a qué servicios existen y cómo localizarlos.