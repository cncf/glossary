---
title: Tenencia Múltiple (multitenancy)
status: Feedback Appreciated
category: Propiedad
tags: ["architecture", "property", ""]
---

## ¿Qué es?

Tenencia Múltiple (o multitenancy) se refiere a una única instalación de software que sirve a varios inquilinos.
Un inquilino es un usuario, una aplicación o un grupo de usuarios/aplicaciones que utilizan el software para operar con su propio conjunto de datos.
Estos inquilinos no comparten datos (a menos que el propietario explícitamente se lo indique) e incluso pueden no ser conscientes unos de otros.  

Un inquilino puede ser tan pequeño como un usuario independiente con un simple identificador de inicio de sesión - piensa en un software de productividad
personal - o tan grande como toda una corporación con miles de identificadores de inicio de sesión, cada uno con sus propios privilegios,
pero interrelacionados de múltiples maneras. Algunos ejemplos de software multitenant son Google Mail, Google Docs,
Microsoft Office 365, Salesforce CRM y Dropbox, entre muchos otros que se clasifican como programas totalmente
o parcialmente para múltiples usuarios.

## Problema que aborda 

Sin multitenancy, cada inquilino necesitaría una instalación de software dedicada.
Esto aumenta la utilización de recursos y los esfuerzos de mantenimiento y, en última instancia, los costos de la aplicación.

## ¿Cómo ayuda?

Software con multitenancy provee a cada inquilino un entorno segregado (datos de trabajo, configuraciones, lista de credenciales, etc.),
sirviendo simultáneamente a varios inquilinos. Desde la perspectiva del inquilino, cada uno tiene su propia instalación de software,
aunque, en realidad, todos comparten una. Esto se consigue ejecutando el software en un servidor y permitiendo
que los inquilinos se conecten a través de la red mediante una interfaz y/o una [API](/es/application-programming-interface/)
(consulte también [Arquitectura Cliente-Servidor](/es/client-server-architecture/)).
Con multitenancy en el software, los inquilinos comparten recursos de una instalación sin afectarse mutuamente o sólo
de forma predefinida y controlada. El ahorro de recursos resultante por parte del proveedor de software pueden pasar
a los inquilinos, lo que reduce significativamente el costo para los usuarios (de nuevo, piense en el correo electrónico o los editores de documentos en línea).

## Términos relacionados

La multitenancy no es sinónimo de SaaS,
aunque es muy común que el SaaS tenga multitenancy e incluso que la funcionalidad de multitenancy sea una de sus principales ventajas.

