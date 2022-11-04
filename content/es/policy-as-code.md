---
title: Política como código (PaC)
status: Feedback Appreciated
category: concepto
tags: ["", "", ""]
---

## Lo que es

Política como código es la práctica de almacenar la definición de políticas como uno o más archivos en forma procesable y legible por máquina.
Esto reemplaza el modelo tradicional en el que las políticas se documentan en forma legible por humanos, en documentos separados.

## Problema que aborda

La creación de aplicaciones e infraestructuras a menudo está limitada por muchas políticas definidas por una organización,
p.ej. políticas de seguridad que prohíben almacenar secretos en el código fuente,
para ejecutar un contenedor con permisos de superusuario o para almacenar algunos datos fuera de una región geográfica específica.
Requiere mucha mano de obra y es propenso a errores para los desarrolladores y revisores
verifique manualmente las aplicaciones y la infraestructura contra las políticas documentadas.
La verificación manual de las políticas no puede cumplir con los requisitos de capacidad de respuesta y escala de las aplicaciones nativas de la nube.

## como ayuda

Al usar Política como código, es posible automatizar la verificación de las propiedades y acciones del sistema.
Las mejores prácticas de desarrollo de software se pueden aplicar a la creación de políticas como código,
p.ej. mediante el uso de Git y los flujos de trabajo asociados.
