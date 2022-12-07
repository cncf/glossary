---
title: Arquitectura Orientada a Eventos
status: Completed
category: conceito
---

## O que é

A arquitetura orientada a eventos é um estilo de arquitetura distribuída que consiste na produção, consumo e gestão de eventos. Um evento neste contexto é uma variação no estado de um aplicativo, ou se visto de forma mais granualar, uma alteração do status de uma entidade de um determinado domínio funcional. Por exemplo, encomendar uma pizza em um aplicativo de distribuição de comida e take-away representa um evento. O roteamento correcto do evento é garantido por este estilo de arquitectura para os subscritores do evento (por exemplo, aplicativos dos usuàrios responsáveis para a entrega da pizza disponíveis nas proximidades).

## Problema relacionado

A utilização deste tipo de arquitectura está associada a conceitos como consistência eventual e a dificuldade em garantir que as mensagens referentes a eventos são roteados para o [serviço](/pt-br/service/) apropriado para ser eventualmente encaminhado ao subscritor ou consumidor do evento. O desafio cresce à medida que mais dados se produzem e se consomem em tempo real e se torna necessário encontrar maneiras confiáveis de garantir que os eventos sejam capturados e roteados correctamente.

## Como isso ajuda

As arquiteturas orientadas a eventos dependem de um hub central ou sistema de gestão de mensagens para todos os eventos baseados em queues ou topics (por exemplo, Kafka ou RabbitMQ) que recebem mensagens de aplicativos produtores de eventos (origem) e os encaminham para aplicativos consumidores de eventos(receptores ou subscritores). Este tipo de arquitetura garante um baixo acoplamento e maior autonomia entre  serviços. Apesar de varios protocos serem suportados, tipicamente é o protocolo HTTP o mais utilizado.
