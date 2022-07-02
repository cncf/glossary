---
title: Ingenieria del Caos
status: Completed
category: Concepto
---

## ¿Qué es?
Ingenieria del Caos o CE es la disciplica de experimentación en [Sistemas Distribuidos](/distributed_systems/) para producción para construir confianza en las capacidades de los sistemas en condiciones inesperadas y soportar las turbulencias.

## Problema de aborda
Las prácticas de [SRE](/site_reliability_engineering/) y [DevOps](/devops/) tienen foco en el incremento de la resiliencia del producto y de la [confiabilidad](/reliability/). Un sistema con la habilidad de tolerar los fallos mientras que se asegura de una adecuada entrega del servicio, es un tipico requerimiento de software. Existen muchos aspectos involucrados al momento de la indisponibilidad de una aplicación, como la infraestructura, la plataforma o otras partes del ecosistema de las aplicaciones basadas en ([microservicios](/microservices/)). Alta frecuencia de despliegues de funcionalidades hacia el ambiente productivo aumenta la posibilidad de un incidente critico o estar fuera de linea - generando consecuencias considerables para el negocio.

## ¿Cómo ayuda?
La Ingeniería del Caos es una técnica para conocer los requerimientos de resiliencia. Esta disciplina ayuda a obtener una infraestructura, plataforma y aplicación ante fallos. Los Ingenieros utilizan los experimentos de caos de forma proactiva inyectando fallas aleatorias para verificar que la infraestructura, plataforma y aplicación puedan auto recuperarse y que la falla no sea de notable impacto para los usuarios finales. Los experimentos de caos buscan descubrir puntos ciegos (Por ejemplo monitoreo o tecnicas de autoescalamiento) y mejorar la comunicación entre los equipos durante incidentes críticos. Este acercamiento ayuda a incrementar la resiliencia y la confianza de los equispo en sistemas complejos, particularmente en producción.