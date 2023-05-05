---
title: Guía de estilos
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

Esta guía de estilos te ayudará a entender la audiencia del Glosario, la estructura de las definiciones, el nivel de detalle requerido, y como mantener un estilo consistente.

El Glosario Cloud Native sigue las [guías de estilo por defecto](https://github.com/cncf/foundation/blob/master/style-guide.md) del repositorio de CNCF. Adicionalmente, sigue las siguientes reglas:

1. Utilice un lenguaje sencillo y accesible, evitando la jerga técnica y palabras de moda.
2. [Evite el lenguaje coloquial](https://en.wikipedia.org/wiki/Colloquialism)
3. [Use un lenguaje literal y concreto](https://guidetogrammar.org/grammar/composition/abstract.htm)
4. [Omite contracciones](https://en.wikipedia.org/wiki/Contraction_(grammar))
5. [Use la voz pasiva con moderación](https://www.ef.com/ca/english-resources/english-grammar/passive-voice/)
6. [Trate de formular declaraciones en forma positiva](https://examples.yourdictionary.com/positive-sentence-examples.html)
7. [Sin signos de exclamación fuera de las comillas](https://www.grammarly.com/blog/exclamation-mark/)
8. No exageres
9. Evite repetir
10. Sea conciso

## Audiencia

El Glosario está escrito para una audiencia técnica Y no técnica. Asegúrese de que las definiciones sean explicadas en términos simples y no asuma conocimientos técnicos. Más acerca de eso a continuación en Definición.

## Plantilla de definición

Cada término del glosario es almacenado en un archivo de markdown y utiliza esta plantilla:

```md
---
title:
status:
category:
---

## ¿Qué es?

Un breve resumen de la tecnología o concepto.

## Problema que aborda

Unas líneas sobre el problema que está abordando.

## ¿Cómo ayuda?

Unas pocas líneas sobre cómo la cosa resuelve el problema.
```

### Title

La etiqueta **title** siempre estará en la parte superior de una definición y su valor debe estar en mayúsculas y minúsculas.

```md
---
title: Plantilla de Definición
```

### Status

La etiqueta **status** vendrá después de la etiqueta del título. La etiqueta de estado indica si las definiciones están minuciosamente examinadas o requieren más esfuerzo.

Los valores válidos son:

- Completed (Completado)
- Feedback Appreciated (Retroalimentación solicitada)
- Not Started (Sin iniciar)

Siempre puede abrir un issue a una definición completa. Mientras una definición está cambiando, su estado cambiará a *Feedback Appreciated*.

```md
---
title: Plantilla de Definición
status: Feedback Appreciated
```

### Category

La etiqueta de **category** vendrá después de la etiqueta de estado. Su valor debe ser uno de los siguientes valores:

- Tecnología
- Propiedad
- Concepto

```md
---
title: Plantilla de Definición
status: Feedback Appreciated
category: Concepto
---
```

### Definición

#### Tres subrúbricas

Las definiciones de las categorías **technology** y **concept** contienen tres subrúbricas:

- **Qué es**: proporciona una descripción breve y clara de lo que estamos hablando.
- **Problema que aborda**: enfócate en el problema, no en la solución (que viene en la siguiente sección). De hecho, evite mencionar el término que se esta definiendo. El problema se centra en *qué* nos llevó a necesitar esto.
- **Cómo ayuda**: ahora, vuelve al término. ¿Cómo aborda el problema descrito anteriormente?

Tenga en cuenta que la etiqueta **properties** no requiere secciones separadas. Una definición será suficiente.

#### Manteniéndolo simple

El Glosario tiene como objetivo **explicar conceptos complejos en palabras sencillas**; esta es una tarea sorprendentemente difícil que probablemente requerirá múltiples revisiones. Siempre tenga en cuenta a la audiencia cuando redacte su definición. Evite usar términos de la industria y palabras de moda; probablemente se encontrará volviendo a ellos y es posible que deba corregirlos automáticamente.

Cuando corresponda, use **ejemplos del mundo real** que ayuden a los lectores (especialmente a los no técnicos) a comprender mejor *cuándo* y *por qué* el concepto que está explicando es relevante.

Cuando se use en su definición, siempre **enlace a los términos existentes del glosario** (solo la primera mención debe tener un hipervínculo).

**Ejemplo**: eche un vistazo a la sección "Qué es" de la [definición de service mesh](/service-mesh/). Se vincula con las definiciones de microservicios, servicio, fiabilidad y observabilidad. Además, utiliza un ejemplo del mundo real que compara los desafíos de la red en un entorno de microservicios (algo con lo que las personas no técnicas no pueden relacionarse) con los problemas de wifi (algo que cualquiera que use una computadora portátil puede entender). Siempre que sea posible, trate de hacer esa conexión.

#### Comience con un documento de Google o Word

Recomendamos comenzar con un documento de Google o Word, déjalo pasar durante unos días y volver a visitarlo. Esto te permitirá captar frases o expresiones que podrían redactarse de una forma más sencilla y accesible. Además, asegúrese de ejecutar un corrector ortográfico antes de enviar un PR.

Para asegurarse de que nadie más envíe un PR mientras trabaja en un término, asegúrese de reclamar un issue (o crear uno) y que se le asigne. Más sobre eso en el documento [Cómo contribuir](/es/contribute/).

Antes de comenzar, lea algunos de los términos publicados del Glosario para tener una idea del nivel de detalle y dificultad y cuándo los ejemplos son apropiados.

## El proceso de revisión: qué esperar

Tenga en cuenta que actualmente solo hay tres mantenedores haciendo esto en su tiempo libre. Ocasionalmente, podremos revisar los términos rápidamente; en otras ocasiones, puede llevar algo de tiempo. Agradecemos su paciencia. Si tiene alguna pregunta, comuníquese con nosotros en el canal #glossary de Slack (para saber dónde y cómo encontrarlo, consulte nuestro documento de [Cómo contribuir](/es/contribute/)).

Nuestro objetivo es que el Glosario sea el mejor recurso posible. Una vez que envíe un PR, podemos solicitar una o más revisiones. No se sienta frustrado, ese es el caso de muchos relaciones públicas. Esas idas y venidas y nuestra colaboración asegurarán que su contribución se convierta en una definición verdaderamente útil leída y referida por lectores de todo el mundo.
