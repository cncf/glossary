---
title: Guia de Estilo
toc_hide: true
status: Completed
menu:
  main:
    weight: 10
---

Este guia de estilo ajudará você a entender o público alvo do glossário, estrutura das definições, nível de detalhamento necessário e como manter um estilo consistente.

O glossário Cloud Native segue o [guia de estilo padrão da CNCF](https://github.com/cncf/foundation/blob/master/style-guide.md). Além disso, segue as seguintes regras:

1. Use uma linguagem simples e acessível, evitando jargões técnicos e *buzzwords*
2. Evite usar [linguagem coloquial](https://pt.wikipedia.org/wiki/Linguagem_coloquial)
3. Use uma [linguagem literal e concreta](https://guidetogrammar.org/grammar/composition/abstract.htm)
4. Evite usar [contrações](https://en.wikipedia.org/wiki/Contraction_(grammar))
5. Use a [voz passiva](https://www.ef.com/ca/english-resources/english-grammar/passive-voice/) com moderação
6. Busque usar [declarações de forma positiva](https://examples.yourdictionary.com/positive-sentence-examples.html) 
7. Em citações, não use [pontos de exclamação fora das aspas](https://www.grammarly.com/blog/exclamation-mark/)
8. Evita usar exageros
9. Evite usar repetições
10. Seja conciso

## Público alvo

O glossário foi escrito para um público alvo técnico e não técnico. Certifique-se de que as definições estejam explicadas em termos simples que não presumam conhecimento técnico prévio. 

## Modelo para as definições

Cada definição do glossário é escrita em um arquivo markdown, baseada no seguinte modelo:

```md
---
title: 
status: 
category: 
---


Um breve resumo da tecnologia ou conceito.

## Problem it addresses

Algumas linhas sobre o problema que está abordando.

## How it helps

Algumas linhas sobre como como a tecnologia ou o conceito resolve o problema abordado.
```

### Título

A label `title` sempre vai estar no início de uma definição contendo o título, o valor sempre deve começar com letras maiúsculas.

```md
---
title: Modelo de Definição
```

### Status

> Importante: para localização em português o valor dessa *label* não deve ser traduzido.

A label `status` vem logo depois da label de título. Essa label serve para indicar se a definição já está completamente revisada e aprovada, ou se requer mais esforços.

Os valores aceitos são:

- Completed (em português, finalizado)
- Feedback Appreciated  (em português, aceitando feedbacks)
- Not Started (em português, não iniciado)

Você sempre pode abrir um bug (uma *issue* do Github) para uma definição que já está concluída. Enquanto estiver em um fluxo de mudanças, o status vai ser alterado para *Feedback Appreciated*.

```md
---
title: Modelo de Definição
status: Feedback Appreciated
```

### Categoria

A label `categoria` vem logo depois da label de status. O valor deve ser um dos seguintes:

- tecnologia
- propriedade
- conceito

```md
---
title: Modelo de Definição
status: Feedback Appreciated
category: Conceito
---
```

### Definição do glossário

#### Subcabeçalhos

As definições para **tecnologia** e **conceito** contém três subcabeçalhos:

- **O que é**: forneça uma visão curta e clara da definição abordada.
- **Que problema isso resolve**: foque no problema e não na solução (que vem na seção seguinte), e se puder, não mencione o termo que está sendo definido.
- **Como isso resolve o problema**: nessa seção volte ao termo e explique como ele resolve o problema da seção anterior.

As definições de **propriedade** não requerem essas três seções separadas, apenas a definição do termo é suficiente.

#### Busque manter as definições simples

O glossário busca **explicar conceitos complexos em poucas palavras**, o que torna uma tarefa muito difícil e que provavelmente vai exigir muitas revisões. Sempre tenha em mente
o público alvo ao escrever (ou traduzir) sua definição e evite usar termos e jargões técnicos.

Quando apropriado, use **exemplos do mundo real** que ajudam os leitores (especialmente não técnicos) a entender melhor *quando* e *por que* a definição explicada é relevante.

Quando usado na sua definição, sempre aponte para termos existentes do glossário (apenas a primeira menção deve ser um *link*).

**Exemplo**: veja seção "O que é" da definição de [service mesh](/service-mesh/). Ele se refere aos conceitos de microsserviços, serviços, confiabilidade e observabilidade. Além disso, é usado um exemplo do mundo real comparando desafios de rede em um ambiente de microsserviços (algo que pessoas não técnicas pode não ter conhecimento prévio) a problemas de *wifi* (algo que qualquer pessoa usando um computador pode entender). Sempre que possível tente fazer esse tipo de conexão. 

#### Comece com um documento de texto

Recomendamos começar com um documento de texto, revisando por alguns algumas vezes durante alguns dias. Isso vai permitir que você identifique frases ou expressões que poderiam
ser escritas de uma forma mais simples e acessíveis. Além disso, execute uma revisão ortográfica antes de enviar o Pull Request.

Para garantir que outra pessoa não envie um Pull Request enquanto estiver trabalhando em uma definição, tenha certeza de solicitar que uma *issue* (caso exista) seja atribuída a você ou crie uma caso não exista. Mais informações sobre isso consulte a página sobre [como contribuir](/pt-br/contribute/).

Além disso, antes de começar leia algumas das definições já publicadas no glossário para ter uma ideia do nível de detalhes, dificuldades e quando é apropriado usar exemplos.

## O que esperar do processo de revisão

É importante ressaltar que até o momento somos apenas três pessoas mantenedoras fazendo isso no tempo livre. Ocasionalmente os termos podem ser revisados rapidamente ou podem levar algum tempo, por isso agradecemos a paciência. Se tive alguma dúvida, entre em contato no canal `#glossary`do slack, para saber onde e como encontrá-lo, consulte a página 
de [como contribuir](/pt-br/contribute/).

Nosso objetivo é que o glossário seja o melhor recurso possível, por isso é normal que depois que envie um Pull Request solicitarmos uma ou mais revisões. Não se frustre, esse processo de revisão  e a nossa colaboração é o que vai garantir que a sua contribuição se torne uma definição verdadeiramente útil lida e consultada por leitores de todo o mundo. 
