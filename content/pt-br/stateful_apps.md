---
title: Aplicações Stateful
status: Completed
category: conceito
---

## O que é

Quando falamos do estado (do inglês "stateful") (e [sem estado](/pt-br/stateless_apps/)) (do inglês "stateless") das aplicações, nos referimos a todos os dados que a aplicação precisa armazenar para funcionar como projetado. Qualquer tipo de loja online que lembre do seu carrinho é um estado da aplicação, por exemplo.

## Problema relacionado

O uso de uma aplicação geralmente requer várias requisições. Por exemplo, ao fazer as transações bancárias on-line, você se autenticará digitando sua senha (requisição #1), então você pode transferir o dinheiro para um amigo (requisição #2) e, finalmente, você vai querer ver os detalhes da transferência (requisição #3). Para funcionar corretamente, cada etapa tem que se lembrar das anteriores, e o banco precisa se lembrar do estado das contas de todos. Hoje, a maioria das aplicações que usamos é parcialmente com estado, pois armazena coisas como preferências e configurações para melhorar a experiência do usuário.

## Como isso ajuda

Existem várias maneiras de armazenar o estado de um aplicativo com estado. O mais simples é manter esse estado na memória e não persistir em nenhum outro lugar. O problema com isso é que, sempre que o aplicativo precisa ser reiniciado, todo o estado será perdido. Para evitar isso, o estado deve persistir localmente (no disco) ou em sistemas de banco de dados.
