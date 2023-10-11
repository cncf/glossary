---
title: Aplicações Stateful
status: Completed
category: conceito
tags: ["fundamentos", "", ""]
---

## O que é

Quando falamos das aplicações stateful e stateless, nos referimos a todos os dados que a aplicação precisa armazenar para funcionar como projetada. Qualquer tipo de loja online que lembre do seu carrinho é uma aplicação stateful, por exemplo.

## Problema relacionado

O uso de uma aplicação geralmente requer várias requisições. Por exemplo, ao fazer as transações bancárias on-line, você se autenticará digitando sua senha (requisição #1), então você pode transferir o dinheiro para um amigo (requisição #2) e, finalmente, você vai querer ver os detalhes da transferência (requisição #3). Para funcionar corretamente, cada etapa tem que se lembrar das anteriores, e o banco precisa se lembrar do estado das contas de todos. Hoje, a maioria das aplicações que usamos é parcialmente stateful, pois armazena coisas como preferências e configurações para melhorar a experiência do usuário.

## Como isso ajuda

Existem várias maneiras de armazenar o estado de uma aplicação stateful. O mais simples é manter esse estado na memória e não persistir em nenhum outro lugar. O problema com isso é que, sempre que a aplicação precisa ser reiniciada, todo o estado será perdido. Para evitar isso, o estado deve persistir localmente (no disco) ou em sistemas de banco de dados.
