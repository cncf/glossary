---
title: Entrega Contínua (CD)
status: Completed
category: conceito
tags: [metodologia", "aplicação", ""]
---

A entrega contínua, muitas vezes conhecida como CD, é um conjunto de práticas nas quais as alterações de código são implantadas automaticamente em um ambiente de aceitação (ou, no caso de implantação contínua, na produção). A entrega contínua inclui procedimentos cruciais para garantir que o software seja testado adequadamente antes da implantação e fornecer uma maneira de reverter as alterações, se necessário. A integração contínua (CI) é o primeiro passo para a entrega contínua (ou seja, as alterações precisam se fundir de forma limpa antes de serem testadas e implantadas).

## Problema relacionado

Implantar atualizações [confiáveis](/reliability/) se torna um problema em escala. Idealmente, implantaríamos com mais frequência para oferecer melhor valor aos usuários finais. No entanto, fazê-lo manualmente se traduz em altos custos de transação para cada alteração. Historicamente, para evitar esses custos, as organizações lançam com menos frequência, implantando mais mudanças de uma só vez e aumentando o risco que algo dê errado.

## Como isso ajuda

As estratégias de entrega contínua criam um caminho totalmente automatizado para a produção que testa e implanta o software usando várias estratégias de implantação, como versões [canary](/pt-br/canary-deployment/) ou [blue-green](/pt-br/blue-green-deployment/). Isso permite que os desenvolvedores implantem o código com frequência, dando a tranquilidade de que a nova revisão foi testada. Normalmente, o desenvolvimento *trunk-based* é usado em estratégias de entrega contínua, em oposição aos recursos de *branch* ou *pull requests*.
