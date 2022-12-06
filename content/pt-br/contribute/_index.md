---
title: Como Contribuir
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

O projeto do glossário Cloud Native é mantido [nesse repositório do Github](https://github.com/cncf/glossary), onde você consegue encontrar todas as [*issues*](https://github.com/cncf/glossary/issues), [pull requests](https://github.com/cncf/glossary/pulls) e [discussões](https://github.com/cncf/glossary/discussions) em aberto.

Você pode contribuir de três formas:

1) Sugerindo novos termos
2) Atualizando termos existentes
3) Traduzindo o glossário para seu idioma nativo

## Faça parte da comunidade do glossário

Considere participar das nossas reuniões mensais do grupo de trabalho do glossário se quiser contribuir regularmente. Você
pode encontrar detalhes da reunião no calendário da CNCF. Você também pode falar com as pessoas mantenedoras e colaboradoras 
em nosso canal `#glossary` no slack da CNCF. 

## Sugira novos termos

Você pode sugerir um novo termo para outra pessoas trabalharem na definição ou criar você mesmo. De qualquer forma, você deve 
começar abrindo uma *issue* (importante notar que você precisa de uma conta do Github para isso).

Abaixo, temos um passo a passo para caso você ainda não esteja familiarizado com o Github. Caso você já seja familiar com o Github, garanta apenas que você está usando nossos templates de *issues*, com a convenção de nomes correta e seguindo o
[guia de estilo](/pt-br/style-guide/).

### Abrindo uma issue 

Vá para as *issues* do [repositório no Github](https://github.com/cncf/glossary/issues) e clique em "nova issue".

![issues](/images/how-to/howto-01.png)

Você vai ver alguns modelos, para sugerir um novo termo em Inglês, por exemplo, selecione "English Language Glossary Request".

![templates](/images/how-to/howto-02.png)

Adicione o termo que está sugerindo e clique em "submit new issue". Se você está apenas sugerindo um novo termo, está feito,
para trabalhar nele siga os próximos passos.

![new issue](/images/how-to/howto-03.png)

Entre no canal `#glossary` no slack da CNCF e fale com @CatherinePaganini, @jmo e @SeokhoSon informando que você abriu uma
*issue* para um novo termo e gostaria de trabalhar nisso. Assim, eles irão atribuir a *issue* a você, sinalizando que você
já está trabalhando naquele termo.

Aqui você pode ver que os três primeiros termos estão disponíveis enquanto que o último foi atribuído a alguém. 

![assigning a term](/images/how-to/howto-04.png)

Observe que você só pode solicitar a atribuição de um termo por vez. Se você quiser trabalhar em vários termos, termine um antes de solicitar o próximo.

### Propondo um novo termo (criando um pull request)

Antes de começar, leia o [guia de estilo](/pt-br/style-guide/), isso vai ajudar nos processos de revisão. Como citado no guia de estilo, recomendamos
que você comece escrevendo um documento de texto.

Uma vez que o termo esteja pronto para submeter o pull request, vá para o diretório `content/`:

![content](/images/how-to/howto-05.png)

Então `en/` (ou o diretório da linguagem que está propondo o termo):

![language folder](/images/how-to/howto-06.png)

e selecione o arquivo `_TEMPLATE.md`:

![template](/images/how-to/howto-07.png)

Copie o conteúdo:

![copy content](/images/how-to/howto-08.png)

E de volta ao diretório `en/`, clique em "add file" e selecione "Create new file":

![create new file](/images/how-to/howto-09.png)

Adicione o nome do termo na URL (sem letras maiúsculas ou espaços) e com a extensão`.md` no final do arquivo. Agora cole o conteúdo do modelo abaixo. Copie e cole sua definição
no arquivo. Observe que o Github usa markdown para formatar o texto (por exemplo, links, negrito, itálico). Para mais informações sobre markdown, consulte essa 
[folha de dicas de markdown](https://www.markdownguide.org/cheat-sheet/). Para ver como ficou, vá para "preview'.

![finalize term](/images/how-to/howto-10.png)

Role para baixo e nomeie o arquivo que vai ser submetido quando estiver pronto. Agora você está prestes a enviar o termo para a sua própria *branch* do Github. Para submeter o pull request você tem que realizar mais um passo. Clique em "commit new file":

![commit new file](/images/how-to/howto-11.png)

Agora, criando o pull request:

![create a pr](/images/how-to/howto-12.png)

Agora você já deve ver seu pull request em "Pull Requests":

![prs](/images/how-to/howto-13.png)

## Atualizando um termo existente

Para atualizar um termo existente, você pode sugerir uma mudança abrindo uma *issue* ou diretamente criando um pull request.

### Solicitando uma mudança por meio de uma issue

Se você quer informar um problema com um termo mas não sabe ou não quer corrigir você mesmo, clique em "report issue":
 
![report issue](/images/how-to/howto-14.png)

Isso vai imediatamente vai abrir uma *issue*. Escreva quais mudanças são necessárias e o motivo. Clique em "submit" para enviar:

![submit issue](/images/how-to/howto-15.png)

### Atualizando diretamente um termo

Para alterar um termo diretamente, vá para "edit this page":

![edit this page](/images/how-to/howto-16.png)

Isso vai abrir a definição do termo no Github. Faça suas alterações e envie um pull request. Consulte a seção "Propondo um novo termo (criando um pull request)" acima para 
informações detalhadas sobre como fazer isso.

## Ajude a traduzir o glossário

Para ajudar a traduzir o glossário para o seu idioma nativo, participe do canal `#glossary-localizations` no slack da CNCF. Você pode fazer parte de um time existente ou
criar uma novo. Participe também das reuniões mensais do grupo de trabalho do glossário. Você pode encontrar detalhes da reunião no [calendário da CNCF](https://www.cncf.io/calendar/).
