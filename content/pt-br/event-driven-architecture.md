---
title: Arquitectura Orientada a Eventos
status: Completed
category: conceito
---

## O que é

A arquitetura orientada a eventos é uma arquitetura de software que promove a criação, o processamento e o consumo de eventos. Um evento é qualquer alteração no estado de um aplicativo. Por exemplo, pedir uma carona em um aplicativo de compartilhamento de viagens representa um evento. Essa arquitetura cria a estrutura na qual os eventos podem ser roteados corretamente de sua origem (o aplicativo que solicita uma corrida) para os receptores desejados (os aplicativos de motoristas disponíveis nas proximidades).

## Problema relacionado

À medida que mais dados se produzem e se consomem em tempo real, encontrar maneiras confiáveis de garantir que os eventos sejam capturados e roteados para o [serviço](/pt-br/service/) apropriado que deve processar solicitações de eventos torna-se cada vez mais desafiador. Os métodos tradicionais de manipulação de eventos geralmente não têm como garantir que as mensagens sejam roteadas adequadamente ou tenham sido realmente enviadas ou recebidas. À medida que os aplicativos escalam, mais desafiador se torna a orquestração de eventos.

## Como isso ajuda

As arquiteturas orientadas a eventos estabelecem um hub central para todos os eventos (por exemplo, Kafka). Em seguida, você define os produtores de eventos (origem) e os consumidores (receptor), e o hub central de eventos garante o fluxo de eventos. Essa arquitetura garante que os serviços permaneçam desacoplados e que os eventos sejam encaminhados adequadamente do produtor para o consumidor. O produtor pegará o evento de entrada, geralmente pelo protocolo HTTP, e roteará as informações do evento.
