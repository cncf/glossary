---
title: Como contribuir
toc_hide: true
menu:
  main:
    weight: 10
    pre: <i class='fas fa-pen-square'></i>
---

El contenido del Glosario Cloud Native se almacena en [este repositorio de GitHub](https://github.com/cncf/glossary) donde encontrará una lista de [issues](https://github.com/cncf/glossary/issues), [PRs](https://github.com/cncf/glossary/pulls) y [discusiones](https://github.com/cncf/glossary/discussions) sobre el glosario.

Existen tres formas en las que puedes contribuir:

1) Proponer nuevos términos
2) Actualizar los existentes
3) Ayudar a traducir el glosario

## ¡Únete a la comunidad del glosario!
Considere unirse a nuestras reuniones mensuales del Grupo de trabajo del glosario si es que desea contribuir con regularidad. Puede encontrar los detalles de la reunión en el calendario de la CNCF. También puede conectarse con los mantenedores y otros colaboradores en nuestro canal #glossary en el [calendario CNCF](https://www.cncf.io/calendar/). ¡Nos encantaría conocerlo!

## Proponer nuevos términos
Puede proponer un nuevo término para que otros trabajen en él o crear una nueva definición usted mismo. De cualquier forma, comenzará creando un issue (tenga en cuenta que necesitará una cuenta de GitHub para hacerlo).

A continuación se muestra una guía paso a paso para aquellos que aún no están familiarizados con GitHub. **Si eres un profesional de GitHub**, *da* un vistazo rápido para asegurarte de que usas nuestras plantillas de issues, las convenciones de nomenclatura, solicita un PR en Slack (de lo contrario, podemos perderlo) y dónde encontrar la plantilla del archivo. Y asegúrese de leer la [Guía de estilo](https://glossary.cncf.io/style-guide/) antes de comenzar. ¡Gracias!

### Creando un issue
Vaya a los issues [del repositorio del Glosario en GitHub](https://github.com/cncf/glossary/issues) y haga clic en "New issue".

![issues](/images/how-to/howto-01.png)

Verá una variedad de plantillas. Para proponer un nuevo término en Español, seleccione "Spanish Language Glossary Request".

![templates](/images/how-to/howto-02.png)

Agregue la palabra que está sugiriendo y presione "submit new issue". Si solo está proponiendo un nuevo término, ¡ya está listo! Para trabajar en ello, siga los siguientes pasos.

![new issue](/images/how-to/howto-03.png)

Únase al canal de #glossary en el CNCF Slack y notifique a @Catherine Paganini, @jmo y @Seokho Son que ha enviado un issue y que le gustaría trabajar en él. Ellos le asignarán el problema a usted, indicando a todos los demás que el término ya ha sido tomado.

Aquí puede ver que los primeros tres términos están disponibles mientras que el siguiente término ha sido asignado a alguien.

![assigning a term](/images/how-to/howto-04.png)

Tenga en cuenta que solo puede reclamar un término a la vez. Si desea trabajar en varios términos, termine uno antes de reclamar el siguiente.

### Envío de un nuevo término (creando un PR)

Antes de comenzar, lea la [Guía de estilo](https://glossary.cncf.io/style-guide/) — le ayudará a minimizar el ir de un lado a otro. Como se indica en la guía de estilo, recomendamos encarecidamente el comenzar con un documento de Google o Word.

Una vez que el término esté listo para ser enviado, vaya a la carpeta de content (en la seccion de Code)…

![content](/images/how-to/howto-05.png)

…luego "es" …

![language folder](/images/how-to/howto-06.png)

…y seleccione _TEMPLATE.md

![template](/images/how-to/howto-07.png)

Copie el contenido…

![copy content](/images/how-to/howto-08.png)

…y vaya atras de la carpeta "es". Presione "add file" y seleccione "create new file."

![create new file](/images/how-to/howto-09.png)

Agregue el nombre del término en la URL (sin mayúsculas ni espacios) y .md al final (nota: si su vista previa no funciona, probablemente olvidó agregar .md al final). A continuación pegue el contenido de la plantilla. Copie y pegue su definición en el archivo. Tenga en cuenta que GitHub usa Markdown para formatear el texto (p. ej., hipervínculo, negrita, cursiva). Consulte esta [hoja de referencia para markdown](https://www.markdownguide.org/cheat-sheet/). Para verificar que usó Markdown según lo pensado, vaya a "vista previa". 

![finalize term](/images/how-to/howto-10.png)

Desplácese hacia abajo y asigne un nombre al nuevo archivo de confirmación cuando esté listo para enviarlo. Ahora está a punto de asignar el término a su propio branch. Para enviar el PR se requiere un paso adicional. Presiona "commit new file" y... 

![commit new file](/images/how-to/howto-11.png)

…ahora you estas creando un PR:

![create a pr](/images/how-to/howto-12.png)

Ahora debería ver su PR en "Pull requests."

![prs](/images/how-to/howto-13.png)

## Actualizando un término existente
Para actualizar un término existente, puede sugerir un cambio a través de un issue o continuar y actualizar el término directamente enviando un pull request (PR). 

### Solicitar un cambio a través de un issue
Si desea marcar un problema con un término pero no sabe cómo hacerlo o desea solucionarlo usted mismo, haga clic en "Reportar un issue".

![report issue](/images/how-to/howto-14.png)

Esto abrirá directamente un issue. Explique qué cambio es necesario y por qué. Presiona enviar, y eso es todo.

![submit issue](/images/how-to/howto-15.png)

### Actualizar un término directamente
Para cambiar un término directamente, vaya a "Editar esta página".

![edit this page](/images/how-to/howto-16.png)

Esto abrirá la página de término en GitHub. Realice sus cambios y envíe un PR. Consulte "Envío de un nuevo término" más arriba para obtener una descripción mas detallada (salte a la sección que habla acerca de markdown).

## Ayuda a traducir el glosario
Para ayudar a traducir el glosario a su idioma, únase al canal #glossary-localizations en CNCF Slack y háganoslo saber. Puede unirse a un equipo existente o crear uno nuevo (para ver lo que se necesita, consulte la [Guía de localización](https://github.com/cncf/glossary/blob/main/LOCALIZATION.md)). Únase también a nuestras juntas mensuales del grupo de trabajo. Puede encontrar mas detalles en el [calendario de la CNCF]((https://www.cncf.io/calendar/). ¡Esperamos verte allí!




