---
title: Tenencia Múltiple (multitenancy)
status: Feedback Appreciated
category: propiedad
tags: ["arquitectura", "propiedad", ""]
---

## ¿Qué es?

Multitenancy se refiere a una única instalación de software que sirve a varios inquilinos. Un inquilino es un usuario, una aplicación o un grupo de usuarios/aplicaciones que utilizan el software para operar con su propio conjunto de datos. Estos inquilinos no comparten datos (a menos que el propietario se lo indique explícitamente) y pueden incluso no ser conscientes unos de otros.  

Un inquilino puede ser tan pequeño como un usuario independiente con un único identificador de inicio de sesión - piensa en un software de productividad personal - o tan grande como toda una corporación con miles de identificadores de inicio de sesión, cada uno con sus propios privilegios, pero interrelacionados de múltiples maneras. Algunos ejemplos de software multiusuario son Google Mail, Google Docs, Microsoft Office 365, Salesforce CRM y Dropbox, entre muchos otros que se clasifican como programas totalmente o parcialmente para multiples usuarios.

## Problema que aborda 

Sin multitenancy, cada inquilino necesitaría una instalación de software dedicada. Esto aumenta la utilización de recursos y los esfuerzos de mantenimiento y los costos de la aplicación.

## ¿Cómo ayuda?

Aplicaciones con multitenancy proveen a cada inquilino un entorno segregado (datos de trabajo, configuraciones, lista de credenciales, etc.), sirviendo simultáneamente a otros inquilinos. Desde la perspectiva del inquilino, cada uno tiene su propia instalación de software, aunque, en realidad, todos comparten una. Esto se consigue ejecutando el software en un servidor y permitiendo que los inquilinos se conecten a él a través de la red mediante una interfaz y/o una [API](/application-programming-interface/) (consulte también [Client-Server Architecture](/client-server-architecture/)). Con multitenancy en la aplicación, los inquilinos comparten los recursos de una instalación sin afectarse mutuamente o sólo de forma predefinida y controlada. El ahorro de recursos resultante por parte del proveedor de software pueden pasar a los inquilinos, lo que reduce significativamente el costo para los usuarios (de nuevo, piense en el correo electrónico o los editores de documentos en línea).

## Términos relacionados

La multitenancy no es sinónimo de [SaaS](/software-as-a-service/), aunque es muy común que el SaaS tenga multitenancy e incluso que la multitenancy sea una de sus principales ventajas.

