---
title: Escalonamento Horizontal
status: Completed
category: Conceito
tags: ["infrastructure", "", ""]
---

Escalabilidade horizontal é uma técnica em que a capacidade de um sistema é aumentada adicionando mais [nós](/pt-br/nodes/)
em vez de adicionar mais recursos de computação a nós individuais (sendo este último conhecido como [escalonamento vertical](/pt-br/vertical-scaling/)).
Vamos supor que temos um sistema com 4GB de RAM e queremos aumentar sua capacidade para 16GB de RAM.
Escalá-lo horizontalmente significa fazer isso adicionando 4 x 4GB de RAM em vez de trocar para um sistema de 16GB de RAM.

Essa abordagem melhora o desempenho de uma aplicação adicionando novas instâncias, ou nós, para distribuir melhor a carga de trabalho.
Em outras palavras, ela visa diminuir a carga do servidor em vez de expandir a capacidade do servidor.

## Problema relacionado

À medida que a demanda por uma aplicação cresce além da capacidade atual dessa instância de aplicação, precisamos encontrar uma maneira de [escalar](/pt-br/scalability/) (adicionar capacidade ao) sistema. Podemos adicionar mais nós ao sistema (escalabilidade horizontal) ou mais recursos de computação aos nós existentes (escalabilidade vertical).

## Como isso ajuda

A escalabilidade horizontal permite que as aplicações escalem até os limites fornecidos pelo cluster subjacente.
Ao adicionar mais instâncias ao sistema, o aplicativo pode processar um maior número de solicitações.
Se um único nó pode lidar com 1.000 solicitações por segundo,
cada nó adicional deve aumentar o número total de solicitações em cerca de 1.000 solicitações por segundo. 
Isso permite que a aplicação faça mais trabalho simultaneamente
sem precisar aumentar a capacidade de qualquer nó em particular.

## Termos relacionados

* [Escalonamento Vertical](/pt-br/vertical-scaling/)
* [Auto Scaling](/pt-br/auto-scaling/)
