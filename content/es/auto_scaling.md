---
title: Autoscaling
status: Completed
category: property
---

## ¿Qué es esto?
El auto escalado es la habilidad de un sistema para [escalar](/scalability) automáticamente, en términos de recursos computacionales. Con un sistema de auto escalado, los recursos son agregados automáticamente cuando se necesitan y pueden escalar para cumplir con la demanda fluctuante de los usuarios. El proceso de auto escalado varía y es configurable para escalar basado en diferentes métricas, como son la memoria o el uso de CPU. Los servicios gestionados en la nube son los que están asociados típicamente con esta funcionalidad de escalado automático pero también hay opciones e implementaciones disponibles para la mayoría de los servicios existentes.

## El problema que aborda
Previamente, la infraestructura y las aplicaciones eran diseñadas para considerar los picos de uso del sistema. Esta arquitectura implicaba que había más recursos que eran infrautilizados o con cambios inelásticos frente a la demanda de los usuarios. La inelasticidad en este caso, incrementa el coste y puede suponer una pérdida de negocios debido a problemas de capacidad.

## ¿Cómo Ayuda?
Aprovechando la nube, [virtualizando](/virtualization) y [contenerizando](/containerization/) aplicaciones y sus dependencias, las organizaciones pueden construir aplicaciones que escalan de manera acorde a la demanda de los usuarios. Se pueden monitorear la demanda de las aplicaciones y de manera automática escalar las mismas, proporcionando una experiencia al usuario final óptima. Tomemos el ejemplo del aumento de la audiencia de Netflix todos los viernes por la noche. El esacalaod automático significa agregar más recursos dinámicamente: por ejemplo, incrementando el número de servidores que permitirán una mayor transmisión de los videos y reduciendo los servidores una vez que el consumo se ha normalizado.
