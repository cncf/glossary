---
title: Política como código (PaC)
status: Feedback Appreciated
category: Concepto
tags: ["metodología", "", ""]
draft: true
---

Política como código es la práctica de almacenar la definición de políticas en uno o más archivos de manera que se pueda procesar y sea legible por máquina.
Esto reemplaza el modelo tradicional en el que las políticas se documentan en forma legible por humanos, en documentos separados.

## Problema que aborda

La creación de aplicaciones e infraestructuras a menudo está limitada por muchas políticas definidas por una organización,
p.ej. políticas de seguridad que prohíben almacenar secretos en el código fuente,
para ejecutar un contenedor con permisos de superusuario o para almacenar algunos datos fuera de una región geográfica específica.
Se requiere de mucha mano de obra y es propenso a errores para los desarrolladores y revisores
verificar manualmente las aplicaciones e infraestructura contra las políticas documentadas.
La verificación manual de las políticas no puede cumplir con los requisitos de capacidad de respuesta y escala de las aplicaciones nativas para la nube.

## ¿Cómo ayuda?

Al usar Política como código, es posible automatizar la verificación de las propiedades y acciones del sistema.
Las mejores prácticas de desarrollo de software se pueden aplicar a la creación de políticas como código,
p.ej. mediante el uso de Git y los flujos de trabajo asociados.
