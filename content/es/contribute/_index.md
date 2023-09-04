---
title: Como contribuir
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

El contenido del Glosario Cloud Native se almacena en [este repositorio de GitHub](https://github.com/cncf/glossary)
donde encontrará una lista de [issues](https://github.com/cncf/glossary/issues), [PRs](https://github.com/cncf/glossary/pulls) y
[discusiones](https://github.com/cncf/glossary/discussions) sobre el glosario.

Existen cuatro formas en las que se puede contribuir:

1) [Trabajar en un issue existente](#work-on-an-existing-issue)
2) [Proponer nuevos términos](#propose-new-terms)
3) [Actualizar un término existente](#update-an-existing-term)
4) [Ayudar a traducir el glosario](#help-translate-the-glossary)

## ¿Quién puede contribuir?

El objetivo de este Glosario es simplificar el espacio Cloud Native - notorio por su complejidad - haciéndolo más fácil de entender.
Para ello, debemos focalizarnos en la simplicidad.

Explicar conceptos complejos en palabras simples es muy difícil.
Y mientras pueda parecer fácil crear un contenido entendible y amigable, llegar a esa simplicidad es fruto del trabajo arduo y colaborativo entre expertos de Cloud Native.
En concreto, para agregar un nuevo término, usted debería tener un conocimiento profundo al respecto.

El esfuerzo de traducción es algo diferente.
Dado que existen definiciones sólidas en Inglés, contribuidores menos experimentados técnicamente pueden también proveer términos traducidos.
Esta parte del proyecto es más amigable para principiantes.

## Unirse a la comunidad del glosario {#join-the-glossary-community}

Si desea contribuir con regularidad, considere unirse a nuestras reuniones mensuales del Grupo de trabajo del glosario.
Puede encontrar los detalles de la reunión en el [calendario de la CNCF](https://www.cncf.io/calendar/).
También puede conectarse con los mantenedores y otros colaboradores en nuestro canal #glossary en el [calendario CNCF](https://cloud-native.slack.com/archives/C02TX20MQBB).
¡Nos encantaría conocerle!

## Trabajar en un issue existente {#work-on-an-existing-issue}

Vaya a los [issues del repositorio de Glosario en GitHub](https://github.com/cncf/glossary/issues).
Allí verá una lista de todos los issues. Puede filtrar por etiqueta (por ejemplo, idioma español, 'help needed', 'good first issue').
Tenga en cuenta que necesitará una cuenta de GitHub para hacer esto.

![Issue y etiquetas](/images/how-to/issue-and-labels.png)

Asegúrese de que el término que le interesa no esté ya asignado a alguien mas.
En este ejemplo puede ver que los primeros tres términos están disponibles mientras que el cuarto ya ha sido asignado.

![asignando un término](/images/how-to/howto-04.png)

Una vez que haya encontrado un término en el que desea trabajar, haga clic en el issue 
y agregue un comentario expresando su interés en trabajarlo.

![Reclamando un issue](/images/how-to/claiming-an-issue.png)

Además, también únase al canal [#glossary](https://cloud-native.slack.com/archives/C02TX20MQBB) en el CNCF Slack e
informe a los mantenedores de su interés en el issue
(etiquete a _@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_ y/o _@iamnoah_ para asegurarse de que reciban la notificación).
Tenga en cuenta que solo puede reclamar un término a la vez.
Si desea trabajar en varios términos, termine uno antes de reclamar el siguiente.

Una vez que le asignen el issue, puede empezar a trabajar en él.
Para conocer los próximos pasos, consulte la sección [Enviar un nuevo término (crear un PR)](#submitting-a-new-term-creating-a-pr).

Antes de concluir la creación del pull request (PR), necesita firmar el [Contributor License Agreement](https://docs.linuxfoundation.org/lfx/easycla/v2-current/contributors) (CLA). Seleccione la opción ICLA si usted es un individuo contribuyendo al proyecto a título personal. A continuación siga los pasos descritos en el link. 

También necesitará [verificar la firma de su commit](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification) y activar el [modo vigilante](https://docs.github.com/en/authentication/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits#about-vigilant-mode) en GitHub para comprobar el origen de su commit y mostrar el estado "verified".  

## Proponer nuevos términos {#propose-new-terms}

Puede proponer un nuevo término para que otros trabajen en él o crear una nueva definición usted mismo.
De cualquier forma, comenzará creando un issue.
Tenga en cuenta que debe cumplir los términos de la [definición nativa para la nube de CNCF](https://github.com/cncf/toc/blob/main/DEFINITION.md).
Las únicas excepciones son los términos básicos necesarios para comprender los conceptos nativos de la nube.

A continuación se muestra una guía paso a paso para aquellos que aún no están familiarizados con GitHub.
**Si usted es un profesional de GitHub**, puede dar sólo un vistazo para asegurarse de lo siguiente:

1. usar nuestras plantillas de issues,
2. encontrar la plantilla del archivo, 
3. conocer las convenciones de nomenclatura, 
4. notificar a los mantenedores en Slack (de lo contrario, podemos perderlo), 
5. resolver fallas en la [revisión de ortografía](#spell-check).

Antes de comenzar, le sugerimos leer la [Guía de estilo](/es/style-guide/) ¡Gracias!

### Crear un issue {#creating-an-issue}

Vaya a los issues [del repositorio del Glosario en GitHub](https://github.com/cncf/glossary/issues) y haga clic en "New issue".

![issues](/images/how-to/howto-01.png)

Verá una variedad de plantillas. Para proponer un nuevo término en Español, seleccione "Request to update existing term (Non-English)".

![plantilla](/images/how-to/english-issue-template.jpg)

Agregue la palabra que está sugiriendo, responda las dos preguntas a continuación, marque las casillas de verificación y presione "Submit new issue".
Si solo está proponiendo un nuevo término, ¡ya está listo! Para trabajar en ello, siga los siguientes pasos.

### Evaluar su issue {#triaging-your-issue}

A continuación, los mantenedores evaluarán el issue.
Eso significa que evaluarán si el término debe formar parte del Glosario
(tenga en cuenta que no todos los términos son admitidos). Los términos deben ser términos nativos de la nube establecidos y ampliamente utilizados).
Para ser admitido, el término propuesto debe ser nativo de la nube, ser ampliamente utilizado y establecido. 

Informe a los mantenedores que ha enviado un término en Slack, ya que de lo contrario podrían perderlo.
Etiquete en su mensaje a _@Catherine Paganini_, _@jmo_, _@Seokho Son_, _@Jihoon Seo_ y/o _@iamnoah_.
Si el término es aprobado y quiere trabajar en él, ellos se lo asignarán.

Tenga en cuenta que solo puede reclamar un término a la vez.
Si desea trabajar en varios términos, termine uno antes de reclamar el siguiente.

### Proponer un nuevo término (crear un PR) {#submitting-a-new-term-creating-a-pr}

Antes de comenzar, lea la [Guía de estilo](/es/style-guide/) — le ayudará a minimizar el ir de un lado a otro.
Como se indica en la guía de estilo, recomendamos encarecidamente el comenzar con un documento de Google o Word.

Una vez que el término esté listo para ser enviado, vaya a la carpeta de content (en la sección de code)…

![contenido](/images/how-to/howto-05.png)

…luego "en" …

![carpeta de idioma](/images/how-to/howto-06.png)

…y seleccione `_TEMPLATE.md`

![plantilla](/images/how-to/howto-07.png)

Copie el contenido…

![copiar contenido](/images/how-to/howto-08.png)

Cambie de branch a "dev-es", regrese a la carpeta /content/ y seleccione "es". 
Presione "Add file" y seleccione "Create new file."

![crear un archivo nuevo](/images/how-to/howto-09.png)

Agregue el nombre del término en la URL (sin mayúsculas, sin espacios ni paréntesis y usando guiones para separar palabras)
y la extensión .md al final (nota: si su vista previa no funciona, probablemente olvidó agregar .md al final).
A continuación pegue el contenido de la plantilla. Copie y pegue su definición en el archivo.
Para facilitar las revisiones, **use [semántica de saltos de línea](https://sembr.org/)** (por ejemplo, una línea por oración).
Tenga en cuenta que GitHub usa Markdown para formatear el texto (p. ej., hipervínculo, negrita, cursiva).
Consulte esta [hoja de referencia para markdown](https://www.markdownguide.org/cheat-sheet/).
Para verificar que usó Markdown según lo pensado, vaya a "Preview".

![completar un término](/images/how-to/howto-10.png)

Desplácese hacia abajo y asigne un nombre al nuevo archivo de confirmación cuando esté listo para enviarlo.
Ahora está a punto de asignar el término a su propio branch.
Para enviar el PR se requiere un paso adicional. Presiona "Commit new file" y...

![commit nuevo archivo](/images/how-to/howto-11.png)

…ahora ya esta creando un PR:

![crear un pr](/images/how-to/howto-12.png)

Al finalizar estos pasos, su PR deberá de aparecer en "Pull requests".

![prs](/images/how-to/howto-13.png)

## Actualizar un término existente {#update-an-existing-term}

Para actualizar un término existente, puede sugerir un cambio a través de un issue o continuar y actualizar el término directamente enviando un pull request.

### Solicitar un cambio a través de un issue

Si desea marcar un problema con un término pero no sabe cómo hacerlo o desea solucionarlo usted mismo, haga clic en "Reportar un issue".

![reportar issue](/images/how-to/howto-14.png)

Esto abrirá directamente un issue. Explique qué cambio es necesario y por qué. Presiona enviar, y eso es todo.

![entregar issue](/images/how-to/howto-15.png)

### Actualizar un término directamente {#update-a-term-directly}

Para cambiar un término directamente, vaya a "Editar esta página".

![edit this page](/images/how-to/howto-16.png)

Esto abrirá la página del término en GitHub. Realice sus cambios y envíe un PR.
Consulte "Envío de un nuevo término" (más arriba en este documento) para obtener una descripción mas detallada (salte a la sección que habla acerca de markdown).

## Ayudar a traducir el glosario {#help-translate-the-glossary}

Para ayudar a traducir el glosario a su idioma, únase al canal [#glossary-localizations](https://cloud-native.slack.com/archives/C02N2RGFXDF) en CNCF Slack y háganoslo saber.
Puede unirse a un equipo existente o crear uno nuevo
(la [Guía de localización](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md) le proporcionará la información necesaria para comenzar).
Únase también a nuestras juntas mensuales del grupo de trabajo. Puede encontrar mas detalles en el [calendario de la CNCF](https://www.cncf.io/calendar/).
¡Esperamos verle allí!

## Revisar la ortografía {#spell-check}

La revisión de ortografía puede fallar por las siguientes razones:

- el PR contiene error(es) ortográfico(s),
- el PR contiene palabras que no están registradas en la lista de palabras en español.

Para poder añadir nuevas palabras a la lista en español, siga los siguientes pasos:

1. Seleccione la carpeta "content" en su PR. 
2. Vaya a la carpeta "es" y localice el archivo ".wordlist.txt".
3. Seleccione la opción "Edit this file" y añada las palabras faltantes. 
4. Al terminar, describa los cambios en el mensaje del commit y dé clic en "Sign off and propose changes". 

Nótese que las palabras están en orden alfabético, le pedimos encarecidamente mantenga este orden. 
La revisión ortográfica ignora el uso de mayúsculas y minúsculas. 

