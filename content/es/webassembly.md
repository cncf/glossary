---
title: WebAssembly
status: Completed
category: Concepto
tags: ["Aplicación", "", ""]
---

WebAssembly (a menudo abreviado Wasm) es un formato de instrucciones binarias diseñado como un destino portable para la compilación de lenguajes de alto nivel como C, C++, Rust y otros. Esto permite el despliegue en la web de aplicaciones del lado del cliente y servidor.
Es un formato bytecode de bajo nivel que puede ser ejecutado en una máquina virtual, típicamente integrado en navegadores web. Aunque fue desarrollado inicialmente para la web, WebAssembly es un sistema de ejecución universal (Universal Runtime) y entiende las aplicaciones en entornos no web, como dispositivos IoT y sistemas de computación en el borde (Edge Computing). 

## Problema que resuelve

Por muchos años, el stack LAMP (Linux, Apache, MySQL y PHP) fue la plantilla para las aplicaciones basadas en la web. Luego, JavaScript se convirtió en el rey del desarrollo de aplicaciones front-end y las aplicaciones basadas en Node.js se convirtieron en la norma. A medida que la tecnología relacionada con la web evolucionó, favoreció fuertemente a lenguajes interpretados que son típicamente menos eficientes en rendimiento que los lenguajes compilados, inclusive con los avances tecnológicos.
Aunque JavaScript ha mejorado a través de los años, todavía tiene limitaciones de rendimiento cuando ejecuta tareas computacionalmente intensivas.
Los lenguajes interpretados que son compilados en tiempo de ejecución a menudo tienen problemas de rendimiento y funcionalidad cuando el código es ejecutado en diferentes entornos. Por el contrario, binarios compilados típicamente corren de la misma manera si fueron compilados correctamente. Sin embargo, históricamente, un binario compilado suele ser menos adecuado para un entorno web.

## ¿Cómo ayuda?

WebAssembly provee un formato binario de bajo nivel que puede ser ejecutado a velocidades casi nativas, permitiendo a las aplicaciones web ejecuciones computacionales complejas de forma eficiente.
Esto permite a los desarrolladores construir aplicaciones web sin abandonar sus habilidades existentes en lenguajes como C, C++, Rust y otros.
Abre nuevas posibilidades y permite a los desarrolladores reusar las bases de código existente y librerías.
También, los módulos de WebAssembly pueden correr consistentemente a lo largo de navegadores, sistemas operativos y dispositivos diferentes, reduciendo la necesidad de código específico de una plataforma.
Por encima de todo, WebAssembly se dirige a las limitaciones de rendimiento, restricciones del lenguaje, portabilidad de código, aspectos de seguridad, tamaño de código e incidentes de tiempo de carga proveyendo un entorno más robusto y flexible para el desarrollo de aplicaciones web.
