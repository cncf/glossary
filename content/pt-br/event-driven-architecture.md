---
title: Arquitectura Orientada a Eventos
status: Completed
category: conceito
---

## O que é

A arquitetura orientada a eventos é um estilo de arquitetura distribuída que consiste na produção, consumo e gestão de eventos. Um evento neste contexto, é uma variação no estado de um aplicativo, ou se visto de forma mais granualar, uma alteração do status de uma entidade de um determinado domínio funcional. Por exemplo, encomendar uma pizza em um aplicativo de distribuicao de comida e take-away representa um evento. O roteamento correcto do evento é garantido por este estilo de arquitectura para os subscritores do evento (por exemplo, aplicativos dos usuàrios responsáveis para a entrega da pizza disponíveis nas proximidades).

## Problema relacionado

À medida que mais dados se produzem e se consomem em tempo real, encontrar maneiras confiáveis de garantir que os eventos sejam capturados e roteados para o [serviço](/pt-br/service/) apropriado que deve processar solicitações de eventos torna-se cada vez mais desafiador. Os métodos tradicionais de manipulação de eventos geralmente não têm como garantir que as mensagens sejam roteadas adequadamente ou tenham sido realmente enviadas ou recebidas. À medida que os aplicativos escalam, mais desafiador se torna a orquestração de eventos.

## Como isso ajuda

As arquiteturas orientadas a eventos dependem de um hub central ou sistema de gestão de mensagens para todos os eventos baseados em queues ou topics (por exemplo, Kafka ou RabbitMQ). Em seguida, você define os produtores de eventos (origem) e os consumidores (receptores ou subscritores), e o hub central de eventos garante o fluxo de eventos. Essa arquitetura garante que os serviços permaneçam desacoplados e que os eventos sejam encaminhados adequadamente do produtor para o consumidor. O produtor pegará o evento de entrada, geralmente pelo protocolo HTTP, e roteará as informações do evento.
