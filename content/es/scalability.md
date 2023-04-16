---
title: Escalabilidad
status: Completed
category: Propiedad
tags: ["fundamental", "property", ""]
---

La escalabilidad se refiere a que tan bien puede crecer un sistema.
Esto es, aumentando la capacidad para hacer lo que sea que el sistema deba hacer.
Por ejemplo, un [clúster](/es/cluster/) de [Kubernetes](/es/kubernetes/) escala
aumentando o reduciendo el número de aplicaciones [en contenedores](/es/containerization/),
pero esa escalabilidad depende de varios factores.
¿Cuántos [nodos](/es/nodes/) tiene?, ¿cuántos [contenedores](/es/container/) puede manejar cada nodo?,
y ¿cuántos registros y operaciones puede soportar el plano de control?

Un sistema escalable facilita agregar más capacidad.
Diferenciamos entre dos enfoques de escala.
Por un lado, está el [escalado horizontal](/es/horizontal-scaling/) que agrega más nodos para manejar una mayor carga.
Por el contrario, en el [escalado vertical](/vertical-scaling/) los nodos individuales se vuelven más poderosos para realizar más transacciones
(por ejemplo, agregando más memoria o CPU a una máquina individual).
Un sistema escalable es capaz de cambiar fácilmente y satisfacer las necesidades del usuario.
