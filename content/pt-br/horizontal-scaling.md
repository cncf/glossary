---
title: Escalonamento Horizontal
status: Completed
category: conceito
tags: ["infraestrutura", "", ""]
---

## O que é

O escalonamento horizontal é uma técnica em que aumenta a capacidade de um sistema adicionando mais nós em vez de adicionar mais recursos de computação aos [nós](/nodes/) individuais (este último é conhecido como [escalonamento vertical](/pt-br/vertical-scaling/)). 
Imagine um sistema com 4GB de RAM, e queremos aumentar sua capacidade para 16GB de RAM. 
Escalonar horizontalmente significa adicionar 4 x 4GB de RAM em vez de alterar para um sistema de 16GB de RAM.

Essa abordagem melhora o desempenho de uma aplicação adicionando novas instâncias, ou [nós](/nodes/), para distribuir melhor a carga de trabalho. 
Em outras palavras, visa diminuir a carga do servidor em vez de expandir a capacidade do servidor individualmente.

## Problema relacionado

À medida que a demanda por uma aplicação cresce além da capacidade atual da instância dessa aplicação, precisamos encontrar uma maneira de [escalar](/pt-br/scalability/) o sistema (ou seja, aumentar a sua capacidade). 
Podemos adicionar mais nós ao sistema (escalonamento horizontal) ou mais recursos computacional aos nós existentes (escalonamento vertical).

## Como isso ajuda

O escalonamento horizontal permite que as aplicações sejam dimensionadas para quaisquer limites fornecidos pelo cluster. 
Ao adicionar mais instâncias ao sistema, a aplicação pode processar um número maior de solicitações. 
Se um único nó puder lidar com 1.000 solicitações por segundo, cada nó adicional deve aumentar o número total de solicitações em cerca de 1.000 solicitações por segundo. 
Isso permite o aumento do trabalho simultâneo da aplicação sem a necessidade de aumentar a capacidade de algum nó em particular.

## Termos relacionados

* [Escalonamento vertical](/pt-br/vertical-scaling/)
* [Auto Scaling](/pt-br/auto-scaling/)
