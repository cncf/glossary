---
title: Guía de estilos
toc_hide: true
status: Completed
menu:
 main:
   weight: 10
---

Esta guía de estilos te ayudará a entender la audiencia del Glosario, la estructura de las definiciones, el nivel de detalle requerido, y como mantener un estilo consistente.

El Glosario Cloud Native sigue las [guías de estilo por defecto](https://github.com/cncf/foundation/blob/master/style-guide.md) del repositorio de CNCF.
Adicionalmente, sigue las siguientes reglas:

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

El Glosario está escrito para una audiencia técnica y no técnica.
Asegúrese de que las definiciones sean explicadas en términos simples y no asuma conocimientos técnicos. Más acerca de eso a continuación en Definición.

## Contenido mínimo viable

Nuestro objetivo es facilitar la comprensión de términos nativos de nube a cualquiera.
Por lo tanto, nos focalizamos en la simplicidad.
Lo que significa utilizar lenguaje simple y conciso con ejemplos que cualquiera que usa tecnología pueda identificarse, pero también proveyendo un *contenido mínimo viable*, al menos desde un punto de vista técnico.
No queremos ahorrar en contexto o ejemplos - que ayudan al lector a entender el concepto - pero si el detalle técnico no es necesario para entender lo explicado, no serán incluidos.
El objetivo es no complicar las cosas. Una vez que el lector entienda el concepto básico, otros recursos ayudarán a ahondar.
Esa parte está fuera del control de este Glosario.

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

### Etiquetas

La **etiqueta** vendrá a continuación de la sección status.
Para que las etiquetas sean de ayuda para el usuario, deberemos usarlas de manera estricta.
Agregar demasiadas etiquetas terminará por diluir su significado.
Exceptuando "fundamental", que simplemente indica que el término referido es vital para entender otros conceptos de Cloud Native, la mayoría de los términos utilizara solo una etiqueta.

**Nota**: Por favor no cree nuevas etiquetas a menos que sean aprobadas por los mantenedores. Cuando agregue etiquetas, asegúrese de que estén correctamente deletreadas como se lista a continuación (en singular, sin errores).

Las etiquetas existentes son:

- application
- architecture
- fundamental
- infrastructure
- methodology
- networking
- property
- security

```md
---
title: Plantilla de Definición
status: Feedback Appreciated
tags: ["etiqueta 1"], ["etiqueta 2"]
---
```

### Definición

#### Tres subrúbricas

Las definiciones de las categorías **technology** y **concept** contienen tres subrúbricas:

- **Qué es**: proporciona una descripción breve y clara de lo que estamos hablando.
- **Problema que aborda**: enfócate en el problema, no en la solución (que viene en la siguiente sección).
 De hecho, evite mencionar el término que se esta definiendo. El problema se centra en *qué* nos llevó a necesitar esto.
- **Cómo ayuda**: ahora, vuelve al término. ¿Cómo aborda el problema descrito anteriormente?

Tenga en cuenta que la etiqueta **properties** no requiere secciones separadas.Una definición será suficiente.

Para facilitar la revisión, por favor utilice **[semántica de saltos de línea](https://sembr.org/)** (una oración por línea).

#### La calidad es esencial

Si ha sido agregada, su contribución sera la definición oficial de la CNCF para ese término (hasta que alguien más la mejore).
Crear un término que cumpla con los altos estándares de la CNCF no puede ser un proceso apurado - la calidad toma su tiempo y esfuerzo.

**Haga su investigación**: Incluso si usted se siente confiado de que conoce el término, verifique que realmente es como lo piensa.
Habitualmente utilizamos términos en una organización de una cierta manera que no refleja el panorama completo.
Cuando haga su investigación, especialmente cuando el término no sea del todo familiar, utilice múltiples fuentes.
Muchas definiciones son algo subjetivas, especialmente si provienen de un proveedor.
El Glosario debe contener definiciones aceptadas globalmente y sin perspectivas particulares.

**No cometa plagio**. Como cualquier publicación seria, las mismas reglas aplican al Glosario
No copie y pegue definiciones de otras personas a menos que les de crédito y sea una referencia.
Si a usted le gusta una cierta sección de una definición, intente parafrasearla en sus propias palabras.

**Agregue referencias a recursos de autor**. Cuando sea posible, agregue referencias a recursos de autor, como documentación oficial de un proyecto.
Nótese que no podemos agregar referencias a documentación de un proveedor externo.

#### Manteniéndolo simple

El Glosario tiene como objetivo **explicar conceptos complejos en palabras sencillas**; esta es una tarea sorprendentemente difícil que probablemente requerirá múltiples revisiones.
Siempre tenga en cuenta a la audiencia cuando redacte su definición.
Evite usar términos de la industria y palabras de moda; probablemente se encontrará volviendo a ellos y es posible que deba corregirlos automáticamente.

Cuando corresponda, use **ejemplos del mundo real** que ayuden a los lectores (especialmente a los no técnicos) a comprender mejor *cuándo* y *por qué* el concepto que está explicando es relevante.

Cuando se use en su definición, siempre **enlace a los términos existentes del glosario** (solo la primera mención debe tener un hipervínculo).

**Ejemplo**: eche un vistazo a la sección "Qué es" de la [definición de service mesh](/service-mesh/).
Se vincula con las definiciones de microservicios, servicio, fiabilidad y observabilidad.
Además, utiliza un ejemplo del mundo real que compara los desafíos de la red en un entorno de microservicios
(algo con lo que las personas no técnicas no pueden relacionarse) con los problemas de wifi (algo que cualquiera que use una computadora portátil puede entender).
Siempre que sea posible, trate de hacer esa conexión.

#### Comience con un documento de Google o Word

Recomendamos comenzar con un documento de Google o Word, déjalo pasar durante unos días y volver a visitarlo.
Esto te permitirá captar frases o expresiones que podrían redactarse de una forma más sencilla y accesible.
Además, asegúrese de ejecutar un corrector ortográfico antes de enviar un PR.

Para asegurarse de que nadie más envíe un PR mientras trabaja en un término, asegúrese de reclamar un issue (o crear uno) y que se le asigne.
Más sobre eso en el documento [Cómo contribuir](/es/contribute/).

Antes de comenzar, lea algunos de los términos publicados del Glosario
para tener una idea del nivel de detalle y dificultad y cuándo los ejemplos son apropiados.

## El proceso de revisión: qué esperar

Tenga en cuenta que actualmente solo hay tres mantenedores haciendo esto en su tiempo libre.
Ocasionalmente, podremos revisar los términos rápidamente; en otras ocasiones, puede llevar algo de tiempo - agradecemos su paciencia.
Si tiene alguna pregunta, comuníquese con nosotros en el canal #glossary de Slack
(para saber dónde y cómo encontrarlo, consulte nuestro documento de [Cómo contribuir](/es/contribute/)).

Nuestro objetivo es que el Glosario sea el mejor recurso posible.
Una vez que envíe un PR, podemos solicitar una o más revisiones.
No se sienta frustrado, ese es el caso de muchos relaciones públicas.
Esas idas y venidas y nuestra colaboración asegurarán que su contribución se convierta en una definición verdaderamente útil leída y referida por lectores de todo el mundo.