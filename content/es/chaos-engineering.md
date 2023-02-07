---
title: Ingeniería del Caos 
status: Completed
category: Concepto
tags: ["methodology", "", ""]
---

## ¿Qué es?

Ingeniería del Caos o CE (Chaos Engineering) es la disciplina de experimentación sobre un [Sistema Distribuido](/distributed_systems/) en producción
para construir confianza en la capacidad del sistema para soportar condiciones inesperadas y turbulentas.

## Problema que aborda

Las prácticas de [SRE](/site_reliability_engineering/) y [DevOps](/es/devops/) se centran en
técnicas para el incremento de la resiliencia del producto y de la [confiabilidad](/es/reliability/).
La capacidad del sistema para tolerar fallos al mismo tiempo que aseguran una calidad de servicio adecuado
suele ser un típico requerimiento de desarrollo de software.
Existen muchos aspectos involucrados al momento de la indisponibilidad de una aplicación,
como la infraestructura, la plataforma o otras partes del ecosistema de las aplicaciones basadas en ([microservicios](/microservices/)).
La alta frecuencia de despliegues de funcionalidades hacia el ambiente productivo puede
aumentar la posibilidad de un incidente crítico o estar fuera de línea,
generando consecuencias considerables para el negocio.

## ¿Cómo ayuda?

La Ingeniería del Caos es una técnica para cumplir los requerimientos de resiliencia.
Esta disciplina ayuda a obtener una infraestructura, plataforma y aplicación resistente ante fallos.
Los ingenieros utilizan los experimentos de caos de forma proactiva inyectando fallas aleatorias
para verificar que la infraestructura, plataforma y aplicación puedan auto recuperarse y que la falla no sea de notable impacto para los usuarios finales.
Los experimentos de caos buscan descubrir puntos ciegos
(por ejemplo, monitoreo o técnicas de autoescalado) y mejorar la comunicación entre los equipos durante incidentes críticos.
Este acercamiento ayuda a incrementar la resiliencia y la confianza de los equipos en sistemas complejos, particularmente en producción.
