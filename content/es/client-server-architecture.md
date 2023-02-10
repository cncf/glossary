---
title: Arquitectura Cliente-Servidor
status: Completed
category: Concepto
tags: ["architecture", "fundamental", ""]
---

## ¿Qué es?

En una arquitectura cliente-servidor, la lógica (o código) que constituye una aplicación se divide en dos o más componentes:
un cliente que solicita trabajo por hacer
(por ejemplo, la aplicación web Gmail que se ejecuta en su navegador web),
y otro o más servidores que satisfagan esa solicitud
(por ejemplo, el servicio de "enviar correo electrónico" que se ejecuta en las computadoras de Google en la nube).
En este ejemplo, los correos electrónicos salientes que escribe son enviados por el cliente (aplicación web que se ejecuta en su navegador web)
a un servidor (las computadoras de Gmail, que reenvían sus correos electrónicos salientes a sus destinatarios).

Esto contrasta con las aplicaciones autónomas (como las aplicaciones de escritorio) que hacen todo el trabajo en un solo lugar.
Por ejemplo, un programa de procesamiento de textos como Microsoft Word puede instalarse y ejecutarse completamente en su computadora.

## Problema que aborda

Una arquitectura cliente-servidor resuelve un gran desafío que plantean las aplicaciones autónomas: actualizaciones periódicas.
En una aplicación autónoma, para cada actualización, los usuarios tendrían que descargar e instalar la última versión.
¡Imagínese tener que descargar todo el catálogo de productos de Amazon en su propia computadora antes de poder navegar por él!

## ¿Cómo ayuda?

Al implementar la lógica de la aplicación en un servidor o servicio remoto,
los operadores pueden actualizarlo sin necesidad de cambiar la lógica del lado del cliente.
Esto significa que las actualizaciones se pueden realizar con mucha más frecuencia.
El almacenamiento de datos en el servidor permite que muchos clientes vean y compartan los mismos datos.
Considere la diferencia entre usar un procesador de textos en línea, en comparación con un procesador de textos tradicional fuera de línea.
En el primero, sus archivos existen en el lado del servidor y
se pueden compartir con otros usuarios que simplemente los descargan del servidor.
En el mundo antiguo, los archivos debían copiarse en medios extraíbles (¡disquetes!) y compartirse con las personas.
