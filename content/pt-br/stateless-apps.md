---
title: Aplicações Stateless
status: Feedback Appreciated
category: tecnologia
tags: ["fundamento", "aplicação", ""]
---

## O que é

Um aplicação stateless não salva nenhum dado de sessão do cliente no servidor onde a aplicação está. Cada sessão é realizada como se fosse a primeira vez e as respostas não dependem de dados de uma sessão anterior e fornecem funcionalidade para usar os serviços de impressão, rede de entrega de conteúdo ou os servidores web para processar todas as requisições de curto prazo. Por exemplo, alguém está pesquisando uma pergunta no mecanismo de pesquisa e pressionou o Enter. Caso a operação de pesquisa seja interrompida ou fechada por algum motivo, você terá que iniciar uma nova, pois não há dados salvos para sua requisição anterior.

## Problema relacionado

Aplicações stateless resolvem o problema da resiliência, porque diferente dos pods em um [cluster](/pt-br/cluster/) podem funcionar de forma independente, com várias requisições chegando a elas ao mesmo tempo. Se houver um problema, você pode reiniciar facilmente a aplicação e ela retornará ao seu estado inicial com pouco ou nenhum tempo de inatividade. Como tal, os benefícios das aplicações stateless incluem a resiliência, a elasticidade e a alta disponibilidade. No entanto, a maioria das aplicações que usamos hoje é pelo menos parcialmente [stateful](/pt-br/stateful_apps/), pois armazenam coisas como preferências e configurações para melhorar a experiência do usuário.

## Como isso ajuda

Em resumo, em uma aplicação stateless, a única coisa pela qual seu cluster é responsável é o código e outros conteúdos estáticos que estão hospedados nele. É isso, sem alterações de bancos de dados, sem gravações e sem sobras de arquivos quando o pod é excluído. [Contêineres](/pt-br/container/) stateless são mais fáceis de implantar, e você não precisa se preocupar em salvar os dados do contêiner em volumes de armazenamento persistentes. Você também não precisa se preocupar em fazer uma cópia de segurança dos dados.
