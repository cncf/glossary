---
title: Arquitetura Orientada por Eventos
status: Completed
category: conceito
tags: ["arquitetura", "", ""]
---

A arquitetura orientada por Eventos é uma arquitetura de software que promove a criação, o processamento, e o consumo de eventos.
Um evento é qualquer alteração no estado de uma aplicação ou sistema.
Por exemplo, solicitar uma corrida em um aplicativo de transporte representa um evento.
Essa arquitetura cria a estrutura na qual os eventos podem ser adequadamente roteados da sua fonte (o aplicativo requisitante da corrida) para os seus receptores desejados (os aplicativos dos motoristas disponíveis nas proximidades).

## Problema relacionado

À medida que mais dados são gerados em tempo real, encontrar maneiras confiáveis de garantir que os eventos sejam capturados e roteados para o [serviço](/pt-br/service/) apropriado, que deve processar as solicitações de eventos, se torna cada vez mais desafiador.
Os métodos tradicionais de manipulação de eventos geralmente não têm como garantir que as mensagens sejam roteadas adequadamente, ou mesmo que sejam realmente enviadas ou recebidas.
À medida que os aplicativos começam a escalar, se torna mais desafiador orquestrar eventos.

## Como isso ajuda

As arquiteturas orientadas por eventos estabelecem um hub central, um concentrador, para todos os eventos (por exemplo, [Apache Kafka](http://kafka.apache.org/)).
Em seguida, você define os produtores de eventos (origem) e os consumidores (receptor) e o hub de eventos central garante o fluxo de eventos.
Essa arquitetura garante que os serviços permaneçam desacoplados e os eventos sejam roteados adequadamente do produtor ao consumidor.
O produtor receberá o evento de entrada, geralmente pelo protocolo HTTP, e roteará as informações do evento.
