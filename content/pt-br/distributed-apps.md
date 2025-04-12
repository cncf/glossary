---
title: Aplicações Distribuídas
status: Completed
category: conceito
tags: ["arquitetura", "", ""]
---

Uma aplicação distribuída é uma aplicação em que a funcionalidade é dividida em várias partes menores independentes.
As aplicações distribuídas geralmente são compostas de [microsserviços](/pt-br/microservices-architecture/) individuais
que lidam com diferentes preocupações dentro da aplicação mais ampla.
Em um ambiente nativo da nuvem, os componentes individuais normalmente são executados como [contêineres](/pt-br/container/) em um [cluster](/pt-br/cluster/).

## Problema relacionado

A execução de uma aplicação em um único computador representa um único ponto de falha — se esse computador falhar, a aplicação ficará indisponível.
As aplicações distribuídas são frequentemente contrárias as aplicações [monolíticas](/pt-br/monolithic-apps/).
Uma aplicação monolítica pode ser mais difícil de escalar, pois os vários componentes não podem ser redimensionados de forma independente.
Eles também podem reduzir a velocidade do desenvolvimento à medida que crescem, porque mais desenvolvedores precisam trabalhar em uma base de código compartilhada, que não tem necessariamente limites bem definidos.

## Como isso ajuda

Ao dividir uma aplicação em diferentes partes e executá-las em muitos lugares, o sistema geral pode tolerar mais falhas.
Isso também permite que uma aplicação aproveite os recursos de dimensionamento não disponíveis para uma única instância, ou seja, a capacidade de [escalar horizontalmente](/horizontal-scaling/).
Isso, no entanto, tem um custo: maior complexidade e sobrecarga operacional — agora você está executando muitos componentes em vez de uma aplicação.
